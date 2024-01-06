import React from 'react';
export default function Main() {
  return (
    <div>
      <div className="hero">
        <img src="Fah.jpg" className="profile-img" />
        <h1>Sutthida Senawong</h1>
        <h4>Frontend Developer</h4>
        <p>sutthida.website</p>
        <a
          href="mailto:sutthida.sen@gmail.com?body=Dear Sutthida,"
          className="email-btn"
        >
          <i class="fa-solid fa-envelope"></i>Email
        </a>
      </div>
      <div className="info">
        <h3>About</h3>
        <p>
          I am a frontend developer with a particular interest in making things
          simple and automating daily tasks. I try to keep up with security and
          best practices, and am always looking for new things to learn.
        </p>
        <h3>Interests</h3>
        <p>
          Food Review. Cooking. Bakery. Jazz Music. Travel. Video Content.
          Entrepreneur. Macro Economic.
        </p>
      </div>
    </div>
  );
}
