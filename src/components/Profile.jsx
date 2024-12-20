import React from 'react';

const Profile = () => {
  return (
    <div
      style={{
        background: 'linear-gradient(135deg, #1f4037, #99f2c8)',
        padding: '50px',
        borderRadius: '15px',
        maxWidth: '900px',
        margin: '50px auto',
        boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.5)',
        color: '#fff',
        fontFamily: "'Poppins', sans-serif",
        textAlign: 'center',
      }}
    >
      {/* Profile Picture */}
      <div>
        <img
          src="https://via.placeholder.com/200"
          alt="Shashank Chaturvedi"
          style={{
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            border: '5px solid #fff',
            boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.3)',
          }}
        />
      </div>

      {/* Name and Title */}
      <h1 style={{ fontSize: '3rem', margin: '20px 0 10px' }}>
        Shashank Chaturvedi
      </h1>
      <p style={{ fontSize: '1.5rem', fontStyle: 'italic', opacity: '0.9' }}>
        <strong>Visionary Coder</strong> | <strong>Web Architect</strong> |{' '}
        <strong>Innovator</strong>
      </p>

      {/* Intro */}
      <p
        style={{
          fontSize: '1.2rem',
          margin: '20px 0',
          lineHeight: '1.8',
          textAlign: 'justify',
        }}
      >
        Hi, I’m <strong>Shashank Chaturvedi</strong>, a passionate full-stack
        developer with a love for crafting cutting-edge applications and
        solving real-world problems. From humble beginnings in a small town to
        making strides in the tech world, I have dedicated myself to mastering
        skills like <strong>React.js</strong>, <strong>Node.js</strong>, and{' '}
        <strong>AI-powered web solutions</strong>.
      </p>

      {/* Highlighted Achievements */}
      <div
        style={{
          margin: '30px 0',
          padding: '20px',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '12px',
          textAlign: 'left',
          color: '#fff',
        }}
      >
        <h2 style={{ fontSize: '2rem', marginBottom: '15px' }}>Highlights:</h2>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li style={{ margin: '10px 0', fontSize: '1.2rem' }}>
            🚀 Developed <strong>VIDYUT</strong>, a smart infrastructure project
            integrating IoT and renewable energy.
          </li>
          <li style={{ margin: '10px 0', fontSize: '1.2rem' }}>
            🏆 2nd Runner-Up in a national hackathon sponsored by DSIR, among
            500+ participants.
          </li>
          <li style={{ margin: '10px 0', fontSize: '1.2rem' }}>
            🌟 Organized a LinkedIn Mastery Seminar with 1,200+ attendees and
            top influencers.
          </li>
        </ul>
      </div>

      {/* Vision */}
      <p
        style={{
          fontSize: '1.2rem',
          margin: '20px 0',
          lineHeight: '1.8',
          textAlign: 'justify',
        }}
      >
        My ultimate goal is to empower communities with technology, foster
        sustainability, and inspire others to pursue excellence in coding and
        innovation. Let's make the impossible happen!
      </p>

      {/* Call-to-Action Buttons */}
      <div style={{ marginTop: '30px' }}>
        <a
          href="https://www.linkedin.com/in/shashank-chaturvedi"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            padding: '15px 30px',
            margin: '10px',
            fontSize: '1.2rem',
            color: '#fff',
            background: '#0077b5',
            borderRadius: '8px',
            textDecoration: 'none',
            boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.3)',
            transition: 'transform 0.3s ease',
          }}
        >
          Connect on LinkedIn
        </a>
        <a
          href="https://github.com/shashankchaturvedi"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            padding: '15px 30px',
            margin: '10px',
            fontSize: '1.2rem',
            color: '#fff',
            background: '#333',
            borderRadius: '8px',
            textDecoration: 'none',
            boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.3)',
            transition: 'transform 0.3s ease',
          }}
        >
          View GitHub
        </a>
      </div>
    </div>
  );
};

export default Profile;
