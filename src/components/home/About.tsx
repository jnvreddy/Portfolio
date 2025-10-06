import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
    Code,
    Palette,
    Smartphone,
    Database,
    Cloud,
    Zap,
    Users,
    Target,
    Lightbulb
} from "lucide-react";

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const skills = [
        { name: "Frontend Development", icon: Code, color: "from-blue-500 to-cyan-500" },
        { name: "UI/UX Design", icon: Palette, color: "from-purple-500 to-pink-500" },
        { name: "Mobile Development", icon: Smartphone, color: "from-green-500 to-emerald-500" },
        { name: "Backend Development", icon: Database, color: "from-orange-500 to-red-500" },
        { name: "Cloud Services", icon: Cloud, color: "from-indigo-500 to-blue-500" },
        { name: "Performance Optimization", icon: Zap, color: "from-yellow-500 to-orange-500" },
    ];

    const values = [
        {
            icon: Users,
            title: "User-Centered",
            description: "Every decision is made with the end user in mind, ensuring intuitive and accessible experiences."
        },
        {
            icon: Target,
            title: "Goal-Oriented",
            description: "I focus on delivering solutions that meet business objectives while exceeding user expectations."
        },
        {
            icon: Lightbulb,
            title: "Innovation-Driven",
            description: "Constantly exploring new technologies and methodologies to create cutting-edge solutions."
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    const skillVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
    };

    return (
        <section id="about" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 dark:from-blue-900/20 dark:via-transparent dark:to-purple-900/20"></div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="max-w-6xl mx-auto"
                >
                    {/* Section Header */}
                    <motion.div variants={itemVariants} className="text-center mb-16">
                        <motion.span
                            className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-sm font-medium mb-4"
                            whileHover={{ scale: 1.05 }}
                        >
                            About Me
                        </motion.span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text-blue mb-6 leading-tight">
                            Passionate Developer & Designer
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
                            With over 3 years of experience in full-stack development, I specialize in creating
                            beautiful, functional, and scalable digital solutions that make a real impact.
                        </p>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                        {/* Left Column - Story */}
                        <motion.div variants={itemVariants} className="space-y-8">
                            <div className="space-y-6">
                                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                                    My Journey
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    I started my journey as a curious computer science student, fascinated by the
                                    intersection of technology and creativity. What began as simple HTML pages
                                    has evolved into a passion for building comprehensive digital experiences.
                                </p>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    Today, I work with modern technologies like React, Node.js, and cloud platforms
                                    to create solutions that are not just functional, but delightful to use.
                                    I believe great software should feel magical.
                                </p>
                            </div>

                            {/* Values */}
                            <div className="space-y-4">
                                {values.map((value, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex items-start space-x-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
                                        whileHover={{ scale: 1.02, x: 5 }}
                                    >
                                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                                            <value.icon className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">
                                                {value.title}
                                            </h4>
                                            <p className="text-sm text-gray-600 dark:text-gray-300">
                                                {value.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Right Column - Skills */}
                        <motion.div variants={itemVariants} className="space-y-8">
                            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 text-center lg:text-left">
                                Technical Expertise
                            </h3>

                            <div className="grid grid-cols-2 gap-4">
                                {skills.map((skill, index) => (
                                    <motion.div
                                        key={index}
                                        variants={skillVariants}
                                        className="group relative p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
                                        whileHover={{
                                            scale: 1.05,
                                            rotateY: 5,
                                            transition: { duration: 0.3 }
                                        }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <div className={`w-12 h-12 bg-gradient-to-r ${skill.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                            <skill.icon className="w-6 h-6 text-white" />
                                        </div>
                                        <h4 className="font-semibold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                                            {skill.name}
                                        </h4>

                                        {/* Hover Effect Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Stats */}
                            <motion.div
                                className="grid grid-cols-3 gap-4 pt-8"
                                variants={itemVariants}
                            >
                                {[
                                    { number: "50+", label: "Projects Completed" },
                                    { number: "3+", label: "Years Experience" },
                                    { number: "100%", label: "Client Satisfaction" },
                                ].map((stat, index) => (
                                    <motion.div
                                        key={index}
                                        className="text-center p-4 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl"
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <div className="text-2xl font-bold gradient-text-blue mb-1">
                                            {stat.number}
                                        </div>
                                        <div className="text-sm text-gray-600 dark:text-gray-300">
                                            {stat.label}
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
