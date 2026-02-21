// Profile Information
export const profileInfo = {
    name: 'J Nagavardhan Reddy',
    designation: 'Software Engineer',
    profileImage: 'https://media.licdn.com/dms/image/v2/D5603AQEiFb3iMTFV_g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1720691856534?e=1772064000&v=beta&t=LnAPPU8bexx8tl4F9XvkFJ-y_RYLz67mXPsiNnTi9S4',
    socialLinks: [
        {
            name: 'Twitter',
            url: 'https://x.com/jnv_reddy',
            icon: 'twitter',
            label: 'X (Twitter)'
        },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/jnvreddy',
            icon: 'linkedin',
            label: 'LinkedIn'
        },
        {
            name: 'GitHub',
            url: 'https://github.com/jnvreddy',
            icon: 'github',
            label: 'GitHub'
        }
    ]
};

// Brand colors for icons
const brandColors: Record<string, string> = {
    'Android': '#3DDC84',
    'Kotlin': '#7F52FF',
    'Jetpack Compose': '#4285F4',
    'Node': '#339933',
    'React': '#61DAFB',
    'Postgres': '#336791',
    'SQLite': '#0b7fcc',
    'Java': '#ED8B00',
    'Docker': '#2496ED',
    'Gradle': '#02303A',
    'Tailwind CSS': '#38bdf8',
    'Git': '#DE4C36',
    'Firebase': '#FFCA28',
    'Spring Boot': '#6DB33F',
    'Redis': '#DC382D',
    'Figma': '#F24E1E',
    'Angular': '#DD0031',
    'Python': '#3776AB',
    'TypeScript': '#3178C6',
    'JavaScript': '#F7DF1E'
};

// Primary technical skills (core expertise)
export const primarySkills = [
    { name: 'Android', icon: '/T-icons/android-original.svg', color: brandColors['Android'] },
    { name: 'Jetpack Compose', icon: '/T-icons/jetpackcompose-original.svg', color: brandColors['Jetpack Compose'] },
    { name: 'Kotlin', icon: '/T-icons/kotlin-original.svg', color: brandColors['Kotlin'] },
    { name: 'Java', icon: '/T-icons/java-original.svg', color: brandColors['Java'] },
    { name: 'SQLite', icon: '/T-icons/sqlite-original.svg', color: brandColors['SQLite'] },
    { name: 'Gradle', icon: '/T-icons/gradle-original.svg', color: brandColors['Gradle'] },
    { name: 'Git', icon: '/T-icons/git-icon.svg', color: brandColors['Git'] },
    { name: 'Firebase', icon: '/T-icons/firebase-2.svg', color: brandColors['Firebase'] }
];

// Secondary technical skills
export const secondarySkills = [
    { name: 'React', icon: '/T-icons/react-original.svg', color: brandColors['React'] },
    { name: 'Node', icon: '/T-icons/nodejs-icon.svg', color: brandColors['Node'] },
    { name: 'Postgres', icon: '/T-icons/postgresql-original.svg', color: brandColors['Postgres'] },
    { name: 'Docker', icon: '/T-icons/docker-original.svg', color: brandColors['Docker'] },
    { name: 'Tailwind CSS', icon: '/T-icons/tailwindcss-original.svg', color: brandColors['Tailwind CSS'] },
    { name: 'Spring Boot', icon: '/T-icons/spring-boot-1.svg', color: brandColors['Spring Boot'] },
    { name: 'Redis', icon: '/T-icons/redis.svg', color: brandColors['Redis'] },
    { name: 'Figma', icon: '/T-icons/figma-icon.svg', color: brandColors['Figma'] },
    { name: 'Angular', icon: '/T-icons/angular_gradient.png', color: brandColors['Angular'] },
    { name: 'Python', icon: '/T-icons/python-5.svg', color: brandColors['Python'] },
    { name: 'TypeScript', icon: '/T-icons/typescript.svg', color: brandColors['TypeScript'] },
    { name: 'JavaScript', icon: '/T-icons/javascript-1.svg', color: brandColors['JavaScript'] }
];

