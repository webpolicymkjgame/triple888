import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import './App.css';

import logoImg from './assets/logo.jpg';
import imgMkj from './assets/banner.jpg';
import googlePlayIcon from './assets/google-play.png';

import tr204 from './assets/app/tr204.png';
import tr230 from './assets/app/tr230.png';
import tr253 from './assets/app/tr253.png';
import tr262 from './assets/app/tr262.png';
import tr301 from './assets/app/tr301.png';


import PolicyPage from './PolicyPage';

// Header component
function Header() {
  const location = useLocation();
  const isPolicyPage = location.pathname === '/policy';

  return (
      <header className="header">
          <div className="container header-container">
            <div className="header-left">
              <div className="logo-wrapper">
                <img src={logoImg} alt="Triple888Dev Studio" className="logo-img" />
                <span className="studio-name">Triple888Dev Studio</span>
              </div>
            </div>

            {!isPolicyPage && (
              <nav className="nav">
                <Link to="/" className="nav-link">HOME</Link>
                <Link to="/policy" className="nav-link">POLICY</Link>
                <a href="#contact" className="nav-link">CONTACT</a>
              </nav>
            )}
          </div>
        </header>
  );
}

// Trang chính
function HomePage() {
  const games = [
    {
      name: 'QR Code-Fast Scanner',
      image: tr204,
      link: 'https://play.google.com/store/apps/details?id=com.tools.qrcode.scanner.qrcodescan.barcodescanner'
    },
    {
      name: 'Money Budget Planner Tracker',
      image: tr262,
      link: 'https://play.google.com/store/apps/details?id=com.moneysaving.moneymanager.cashplan.budget.expense'
    },
    {
      name: 'Assistive Touch: Touch Panel',
      image: tr301,
      link: 'https://play.google.com/store/apps/details?id=com.assistivetouch.quicksetting.homebutton.quickcontrol.smarttouch'
    },
    {
      name: 'Prank Call: Video Faker',
      image: tr230,
      link: 'https://play.google.com/store/apps/details?id=com.fakevideocall.fakechat.prank.fake.call.prank.app'
    },
    {
      name: 'Auto Clicker – Tap & Click',
      image: tr253,
      link: 'https://play.google.com/store/apps/details?id=com.autoclick.autotapper.autotap.quicktouch.tapping'
    },
  ];

  return (
    <>
      {/* About Section */}
      <section id="about" className="section about">
        <div className="container about-row">
          <div className="about-text-container">
            <h2 className="highlight-title">Welcome to Triple888Dev Studio</h2>
            <p className="about-text">Triple888Dev Studio is a mobile app development studio dedicated to creating innovative, high-quality, and user-friendly applications.
              Our official website serves as a showcase for all the apps developed by Triple888Dev – from casual games and productivity tools to educational and lifestyle apps.
            </p>
          </div>
          <div className="about-img-container">
            <img src={imgMkj} alt="About MKJ Studio" className="about-img" />
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="games" className="section games">
        <div className="container">
          <h2 className="text-center">Our Products</h2>
          <div className="game-grid">
            {games.map((game, index) => (
              <div key={index} className="game-card">
                <img src={game.image} alt={game.name} />
                <div className="game-info">
                  <h3>{game.name}</h3>
                  <a href={game.link} target="_blank" rel="noopener noreferrer" className="btn btn-google-play">
                    <img src={googlePlayIcon} alt="Google Play" className="google-play-icon" />
                    Get on Google Play
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact">
        <div className="container text-center">
          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, request support, please contact us at:<br />
            <a href="mailto:franssetia888@gmail.com">franssetia888@gmail.com</a><br />
            <span style={{ display: 'inline-block', marginTop: '10px' }}>
              📍 Thôn Bình Tây Hoằng Thịnh, Hoằng Hóa, Thanh Hóa
                Thanh Hoa - 440000
            </span>
          </p>
        </div>
      </section>
    </>
  );
}

// App Component
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/policy" element={<PolicyPage />} />
        </Routes>
        <footer className="footer">
          <div className="container text-center">
            <p>&copy; {new Date().getFullYear()} Triple888Dev Studio. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
