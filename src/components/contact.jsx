import React from "react";

const Contact = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Get in Touch with Rasoiwala 📞</h1>
            <p style={styles.description}>
                We would love to hear from you! Whether you have questions, feedback, or partnership opportunities, feel free to reach out.
            </p>

            <div style={styles.section}>
                <h2 style={styles.subtitle}>Contact Information</h2>
                <ul style={styles.list}>
                    <li><strong>Email:</strong> support@rasoiwala.com</li>
                    <li><strong>Phone:</strong> +91-9876543210</li>
                    <li><strong>Address:</strong> 123 Foodie Street, Gourmet City, India</li>
                </ul>
            </div>

            <div style={styles.section}>
                <h2 style={styles.subtitle}>Follow Us</h2>
                <p style={styles.text}>Stay updated with the latest food trends and offers:</p>
                <ul style={styles.socialLinks}>
                    <li><a href="#" style={styles.link}>Facebook</a></li>
                    <li><a href="#" style={styles.link}>Instagram</a></li>
                    <li><a href="#" style={styles.link}>Twitter</a></li>
                </ul>
            </div>

            <footer style={styles.footer}>
                <p style={styles.signature}>Let’s create delicious memories together! 🍔🍕</p>
                <p style={styles.credits}>© 2024 Rasoiwala. All rights reserved.</p>
            </footer>
        </div>
    );
};

const styles = {
    container: {
        fontFamily: 'Poppins, sans-serif',
        backgroundColor: '#ffffff',
        color: '#2c3e50',
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
        color: '#3498db',
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
        color: '#27ae60',
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
    socialLinks: {
        listStyle: 'none',
        padding: 0,
        display: 'flex',
        justifyContent: 'center',
        gap: '15px',
    },
    link: {
        fontSize: '1.2rem',
        color: '#2980b9',
        textDecoration: 'none',
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

export default Contact;