import type { SectionAnimationState } from '../types/sectionSnap';

export const getAnimationClass = (
  animationState: SectionAnimationState,
  direction?: 'up' | 'down'
): string => {
  switch (animationState) {
    case 'entering':
      return direction === 'down' ? 'animate-slide-in-up' : 'animate-slide-in-down';
    case 'exiting':
      return direction === 'down' ? 'animate-slide-out-up' : 'animate-slide-out-down';
    case 'active':
      return '';
    case 'hidden':
      return 'opacity-0';
    default:
      return '';
  }
};
