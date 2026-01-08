import { useEffect, useRef, useState, useCallback } from 'react';
import type { SectionAnimationState } from '../types/sectionSnap';

export type { SectionAnimationState };

interface UseSectionSnapOptions {
  sectionIds: string[];
  animationDuration?: number;
  debounceDelay?: number;
}

interface SectionState {
  id: string;
  animationState: SectionAnimationState;
  direction?: 'up' | 'down';
}

export const useSectionSnap = ({
  sectionIds,
  animationDuration = 800,
  debounceDelay = 200,
}: UseSectionSnapOptions) => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [sectionStates, setSectionStates] = useState<SectionState[]>(
    sectionIds.map((id, index) => ({
      id,
      animationState: index === 0 ? 'active' : 'hidden',
    }))
  );

  const sectionRefs = useRef<Map<string, HTMLElement>>(new Map());
  const scrollLockRef = useRef(false);
  const lastScrollTimeRef = useRef(0);
  const touchStartYRef = useRef(0);
  const touchEndYRef = useRef(0);

  // Register section ref
  const registerSection = useCallback((id: string, element: HTMLElement | null) => {
    if (element) {
      sectionRefs.current.set(id, element);
    } else {
      sectionRefs.current.delete(id);
    }
  }, []);

  // Update section animation states
  const updateSectionStates = useCallback(
    (newIndex: number, direction: 'up' | 'down') => {
      setSectionStates((prev) =>
        prev.map((state, index) => {
          if (index === newIndex) {
            return { ...state, animationState: 'entering', direction };
          } else if (index === currentSectionIndex) {
            return { ...state, animationState: 'exiting', direction };
          } else if (Math.abs(index - newIndex) <= 1) {
            return { ...state, animationState: 'active', direction: undefined };
          } else {
            return { ...state, animationState: 'hidden', direction: undefined };
          }
        })
      );

      // After animation completes, update states
      setTimeout(() => {
        setSectionStates((prev) =>
          prev.map((state, index) => {
            if (index === newIndex) {
              return { ...state, animationState: 'active', direction: undefined };
            } else {
              return { ...state, animationState: 'hidden', direction: undefined };
            }
          })
        );
        setIsTransitioning(false);
        scrollLockRef.current = false;
      }, animationDuration);
    },
    [currentSectionIndex, animationDuration]
  );

  // Scroll to section
  const scrollToSection = useCallback(
    (index: number, direction: 'up' | 'down') => {
      if (scrollLockRef.current || isTransitioning) return;
      if (index < 0 || index >= sectionIds.length) return;

      const sectionId = sectionIds[index];
      const sectionElement = sectionRefs.current.get(sectionId);

      if (!sectionElement) return;

      scrollLockRef.current = true;
      setIsTransitioning(true);

      // Update animation states
      updateSectionStates(index, direction);

      // Scroll to section
      sectionElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });

      setCurrentSectionIndex(index);
    },
    [sectionIds, isTransitioning, updateSectionStates]
  );

  // Check if section can scroll internally (returns true if we should allow normal scrolling)
  const canScrollInSection = useCallback((sectionId: string, direction: 'up' | 'down'): boolean => {
    const sectionElement = sectionRefs.current.get(sectionId);
    if (!sectionElement) return false;

    // Special handling for 'about' section - allow internal scrolling
    if (sectionId === 'about') {
      const rect = sectionElement.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY;
      const sectionBottom = sectionTop + rect.height;
      const currentScrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const viewportBottom = currentScrollY + viewportHeight;
      const threshold = 150; // Threshold in pixels to trigger section change

      if (direction === 'down') {
        // Check if we're near the bottom of the section
        // If the bottom of the section is within threshold of viewport bottom, trigger snap
        const distanceFromBottom = sectionBottom - viewportBottom;
        // Allow normal scroll if there's still content below
        return distanceFromBottom > threshold;
      } else {
        // Check if we're near the top of the section
        // If the top of the section is within threshold of viewport top, trigger snap
        const distanceFromTop = currentScrollY - sectionTop;
        // Allow normal scroll if there's still content above
        return distanceFromTop > threshold;
      }
    }

    return false;
  }, []);

  // Handle wheel scroll
  const handleWheel = useCallback(
    (e: WheelEvent) => {
      if (scrollLockRef.current || isTransitioning) {
        e.preventDefault();
        return;
      }

      const now = Date.now();
      if (now - lastScrollTimeRef.current < debounceDelay) {
        e.preventDefault();
        return;
      }

      lastScrollTimeRef.current = now;

      const deltaY = e.deltaY;
      const direction = deltaY > 0 ? 'down' : 'up';
      const currentSectionId = sectionIds[currentSectionIndex];

      // Check if we can scroll within the current section (for About section)
      if (canScrollInSection(currentSectionId, direction)) {
        // Allow normal scrolling within the section
        return;
      }

      // Otherwise, trigger section snap
      if (direction === 'down' && currentSectionIndex < sectionIds.length - 1) {
        e.preventDefault();
        scrollToSection(currentSectionIndex + 1, 'down');
      } else if (direction === 'up' && currentSectionIndex > 0) {
        e.preventDefault();
        scrollToSection(currentSectionIndex - 1, 'up');
      }
    },
    [currentSectionIndex, sectionIds, isTransitioning, debounceDelay, scrollToSection, canScrollInSection]
  );

  // Handle touch start
  const handleTouchStart = useCallback((e: TouchEvent) => {
    touchStartYRef.current = e.touches[0].clientY;
  }, []);

  // Handle touch end (swipe detection)
  const handleTouchEnd = useCallback(
    (e: TouchEvent) => {
      if (scrollLockRef.current || isTransitioning) return;

      touchEndYRef.current = e.changedTouches[0].clientY;
      const diff = touchStartYRef.current - touchEndYRef.current;
      const minSwipeDistance = 50; // Minimum distance for a swipe

      if (Math.abs(diff) > minSwipeDistance) {
        const direction = diff > 0 ? 'down' : 'up';
        const currentSectionId = sectionIds[currentSectionIndex];

        // Check if we can scroll within the current section (for About section)
        if (canScrollInSection(currentSectionId, direction)) {
          // Allow normal scrolling within the section
          return;
        }

        // Otherwise, trigger section snap
        if (diff > 0 && currentSectionIndex < sectionIds.length - 1) {
          // Swipe up - go to next section
          scrollToSection(currentSectionIndex + 1, 'down');
        } else if (diff < 0 && currentSectionIndex > 0) {
          // Swipe down - go to previous section
          scrollToSection(currentSectionIndex - 1, 'up');
        }
      }
    },
    [currentSectionIndex, sectionIds, isTransitioning, scrollToSection, canScrollInSection]
  );

  // Handle keyboard navigation
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (scrollLockRef.current || isTransitioning) return;

      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        if (currentSectionIndex < sectionIds.length - 1) {
          e.preventDefault();
          scrollToSection(currentSectionIndex + 1, 'down');
        }
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        if (currentSectionIndex > 0) {
          e.preventDefault();
          scrollToSection(currentSectionIndex - 1, 'up');
        }
      }
    },
    [currentSectionIndex, sectionIds.length, isTransitioning, scrollToSection]
  );

  // Set up event listeners
  useEffect(() => {
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleWheel, handleTouchStart, handleTouchEnd, handleKeyDown]);

  // Get animation state for a section
  const getSectionAnimationState = useCallback(
    (sectionId: string): SectionAnimationState => {
      const state = sectionStates.find((s) => s.id === sectionId);
      return state?.animationState || 'hidden';
    },
    [sectionStates]
  );

  // Get animation direction for a section
  const getSectionDirection = useCallback(
    (sectionId: string): 'up' | 'down' | undefined => {
      const state = sectionStates.find((s) => s.id === sectionId);
      return state?.direction;
    },
    [sectionStates]
  );

  return {
    currentSectionIndex,
    isTransitioning,
    registerSection,
    scrollToSection,
    getSectionAnimationState,
    getSectionDirection,
  };
};

