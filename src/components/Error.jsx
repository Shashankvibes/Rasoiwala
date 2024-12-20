import { useRouteError } from "react-router";
const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Oops! Something went wrong 😔</h1>
            {/* <h2 style={styles.title}>{err.statusText}</h2> */}

            <p style={styles.message}>It looks like you're lost in the kitchen. Let's get you back on track!</p>
        </div>
    );
};

const styles = {
    container: {
        fontFamily: 'Poppins, sans-serif',
        backgroundColor: '#fff5e6',
        color: '#ff5722',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
        padding: '20px',
        border: '2px solid #ff5722',
        borderRadius: '10px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    title: {
        fontSize: '3rem',
        marginBottom: '1rem',
    },
    message: {
        fontSize: '1.2rem',
        marginBottom: '2rem',
    },
};

export default Error;
