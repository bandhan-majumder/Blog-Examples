import React from 'react';

const LogIn = () => {
  const handleGoogleLogin = () => {
    console.log('Google login clicked');
  };

  return (
    <div style={styles.container}>
      <div style={styles.loginBox}>
        <h1 style={styles.title}>Welcome</h1>
        <button onClick={handleGoogleLogin} style={styles.button}>
          Login with Google
        </button>
      </div>
    </div>
  );
};

// CSS styles
const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#f0f0f0',
  },
  loginBox: {
    padding: '20px',
    maxWidth: '300px',
    width: '100%',
    backgroundColor: 'white',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '4px',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '20px',
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#4285F4',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default LogIn;