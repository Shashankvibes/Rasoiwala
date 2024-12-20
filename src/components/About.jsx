import React from "react";
import { Link, Outlet } from "react-router";
import { motion } from "framer-motion"; // For animations

const About = () => {
    return (
        <div style={styles.container}>
            {/* Animated title */}
            <motion.h1 
                style={styles.title}
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                Welcome to Rasoiwala 🍴
            </motion.h1>

            {/* Animated description */}
            <motion.p 
                style={styles.description}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.3 }}
            >
                Discover the ultimate destination for food lovers! At Rasoiwala, we connect you to the finest restaurants, diverse cuisines, and unforgettable dining experiences in your city.
            </motion.p>

            {/* Section for 'Why Choose Us' */}
            <motion.div 
                style={styles.section}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, delay: 0.5 }}
            >
                <h2 style={styles.subtitle}>Why Choose Us?</h2>
                <ul style={styles.list}>
                    <li>Handpicked restaurants offering the best flavors.</li>
                    <li>Real-time reviews from trusted foodies.</li>
                    <li>Personalized recommendations just for you.</li>
                </ul>
            </motion.div>

            {/* Section for 'Our Mission' */}
            <motion.div 
                style={styles.section}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, delay: 0.7 }}
            >
                <h2 style={styles.subtitle}>Our Mission</h2>
                <p style={styles.text}>
                    To create a vibrant community of food enthusiasts while empowering local businesses to thrive in a competitive culinary landscape.
                </p>
            </motion.div>

            {/* Footer with smooth animation */}
            <motion.footer 
                style={styles.footer}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 1 }}
            >
                <p style={styles.signature}>Bon appétit! 🥂</p>
                <p style={styles.credits}>© 2024 Rasoiwala. All rights reserved.</p>
            </motion.footer>

            <Outlet />
            <button className="px-4 py-2 bg-orange-500 text-white text-sm font-semibold rounded-lg hover:bg-orange-600 transition duration-300">
    <Link to="./profile">
    About me
    </Link>
</button>
        </div>
        
    );
 
};

const styles = {
    container: {
        fontFamily: 'Poppins, sans-serif',
        backgroundColor: '#f9fafb',
        color: '#333',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px',
        textAlign: 'center',
    },
    title: {
        fontSize: '3rem',
        marginBottom: '20px',
        color: '#e74c3c',
        fontWeight: 'bold',
    },
    description: {
        fontSize: '1.4rem',
        marginBottom: '30px',
        lineHeight: '1.8',
        maxWidth: '700px',
        color: '#34495e',
    },
    section: {
        marginBottom: '30px',
        maxWidth: '700px',
        textAlign: 'left',
    },
    subtitle: {
        fontSize: '1.8rem',
        marginBottom: '15px',
        color: '#e67e22',
        fontWeight: '600',
    },
    list: {
        fontSize: '1.2rem',
        lineHeight: '1.8',
        color: '#7f8c8d',
        paddingLeft: '20px',
    },
    text: {
        fontSize: '1.2rem',
        lineHeight: '1.8',
        color: '#7f8c8d',
    },
    footer: {
        marginTop: '40px',
        borderTop: '1px solid #ecf0f1',
        paddingTop: '20px',
    },
    signature: {
        fontSize: '1.4rem',
        fontStyle: 'italic',
        color: '#e74c3c',
    },
    credits: {
        fontSize: '1rem',
        color: '#95a5a6',
    },
};



export default About;
