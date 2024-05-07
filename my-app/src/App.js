import './CSS/App.css';
import SlideShow from './Components/SlideShow';
import { Fade } from 'react-reveal';
import About from './Components/about';
import ProjectDisplay from './Components/projects';
import QuotesDemoVideo from './Components/quotesappdemo';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import DisplayLogo from './Components/logo';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import brightnessLogo from './Image/brightness-icon3.png';
import darknessLogo from './Image/darkness-icon.png';
import skillsLogo from './Image/skills-icon.png';
import EducationDisplay from './Components/education';
import educationIcon from './Image/education-icon.png';
import myLogo from './Image/my-logo.png'

function App() {
  const [brightnessMode, setBrightnessMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [circlePosition, setCirclePosition] = useState({ x: 0, y: 0 });
  const [hoveredItem, setHoveredItem] = useState(null);

  const toggleMenu = () => {
    setMenuOpen((prevValue) => !prevValue);
  };

  const toggleBrightness = () => {
    setBrightnessMode(prevMode => !prevMode)
  }

  const handleMouseMove = (e) => {
    setCirclePosition({ x: e.pageX, y: e.pageY });
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleItemHover = (title) => {
    if (title) {
      setHoveredItem(title);
      const circle = document.querySelector('.cursor-circle');
      circle.classList.add('expanded');
    }
  };
  
  const handleItemLeave = () => {
    setHoveredItem(null); // Reset hoveredItem state
    // Reset circle size only if there is no hovered item
    const circle = document.querySelector('.cursor-circle');
    circle.classList.remove('expanded');
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false); // Close the menu after scrolling
  };

  const GithubLink = () => {
    return (
      <a
        href="https://github.com/opxzy22"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => handleItemHover('Github')}
        onMouseLeave={handleItemLeave}
      >
        <FontAwesomeIcon icon={faGithub} className='icon' style={{ color: brightnessMode ? 'black' : 'white' }} onMouseLeave={handleItemLeave} />
      </a>
    );
  };

  const LinkedinLink = () => {
    return (
      <a
        href="https://www.linkedin.com/in/adeyemi-opeyemi/"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => handleItemHover('LinkedIn')}
        onMouseLeave={handleItemLeave}
      >
         <FontAwesomeIcon className='icon' icon={faLinkedin} style={{ color: '#0077B5' }} onMouseLeave={handleItemLeave} />
        </a>
    );
  };

  const TwitterLink = () => {
    return (
      <a
        href="https://github.com/opxzy22"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => handleItemHover('Twitter')}
        onMouseLeave={handleItemLeave}
      >
         <FontAwesomeIcon className='icon' icon={faTwitter} style={{ color: '#0077B5' }} onMouseLeave={handleItemLeave} />
        </a>
    );
  };

  const InstagramLink = () => {
    return (
      <a
        href="https://www.instagram.com/opxzy007"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => handleItemHover('Instagram')}
        onMouseLeave={handleItemLeave}
      >
         <FontAwesomeIcon className='icon' icon={faInstagram} style={{ color: 'purple' }} onMouseLeave={handleItemLeave} />
        </a>
    );
  };

  const WhatsappLink = () => {
    return (
      <a
        href="https://wa.link/178cy6"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => handleItemHover('Whatsapp')}
        onMouseLeave={handleItemLeave}
      >
         <FontAwesomeIcon className='icon' icon={faWhatsapp} style={{ color: 'green'}} onMouseLeave={handleItemLeave} />
        </a>
    );
  };
  
  return (
    <Router>
      <div className={`App ${brightnessMode ? 'dark-mode' : ''}`} onMouseLeave={handleItemLeave}>
        <header className='App-header' onMouseLeave={handleItemLeave}>
          <div className='header-content'>
            <a href='/' className={`home-link ${brightnessMode ? 'dark-mode' : ''}`}
               onMouseEnter={() => handleItemHover('home')}>
              <img src={myLogo} alt='Home' />
            </a>
            <div className='about-profile' onMouseLeave={handleItemLeave} >
              
              <a href='#projects' className={`profile-link ${brightnessMode ? 'dark-mode' : ''}`}
              onMouseEnter={() => handleItemHover('projects')}>Projects</a>
              <a href='#skills' className={`profile-link ${brightnessMode ? 'dark-mode' : ''}`}
              onMouseEnter={() => handleItemHover('skills')}>Skills</a>
              <a href='#about' className={`about-link ${brightnessMode ? 'dark-mode' : ''}`}
              onMouseEnter={() => handleItemHover('about')}>About</a>
            </div>
            {/* Brightness toggle */}
            <img
              src={brightnessMode ? darknessLogo : brightnessLogo}
              alt='brightness logo'
              className={brightnessMode ? 'darkness-logo' : 'brightness-logo'}
              onClick={toggleBrightness}
              onMouseEnter={() => handleItemHover(`${brightnessMode ? 'dark mode' : 'brightness mode'}`)}
              onMouseLeave={handleItemLeave}
            />

            {/* Menu toggle */}
            <div className='hamburger-menu' onClick={toggleMenu}>
              <div className={`hamburger-bar ${brightnessMode ? 'dark-mode' : ''}`}></div>
              <div className={`hamburger-bar ${brightnessMode ? 'dark-mode' : ''}`}></div>
              <div className={`hamburger-bar ${brightnessMode ? 'dark-mode' : ''}`}></div>
              
            </div>
          </div>
        </header>

        {/* Circle below cursor */}
        <div className={`cursor-circle ${hoveredItem ? 'expanded' : ''} ${brightnessMode ? 'dark-mode' : ''} `} style={{ left: circlePosition.x, top: circlePosition.y }} onMouseLeave={handleItemLeave}></div>
        {hoveredItem && <div className='hovered-item' style={{'--cursor-x': circlePosition.x + 'px', '--cursor-y': circlePosition.y + 'px' }} onMouseLeave={handleItemLeave}>{hoveredItem}</div>}

        {/* Menu items */}
        <nav className={`menu ${menuOpen ? 'open' : ''} ${brightnessMode ? 'dark-mode' : ''}`} style={{ right: menuOpen ? '30px' : '-300px' }}>
          <div onClick={() => scrollToSection('about')} className={`menu-item ${brightnessMode ? 'dark-mode' : ''}`}>About</div>
          <div onClick={() => scrollToSection('skills')} className={`menu-item ${brightnessMode ? 'dark-mode' : ''}`}>Skills</div>
          <div onClick={() => scrollToSection('project')} className={`menu-item ${brightnessMode ? 'dark-mode' : ''}`}>Projects</div>
        </nav>

        <Routes>
          <Route path="/" element={<Homepage brightnessMode={brightnessMode} handleItemHover={handleItemHover} handleItemLeave={handleItemLeave} 
                                    WhatsappLink={WhatsappLink} 
                                    GithubLink={GithubLink}
                                    InstagramLink={InstagramLink}
                                    TwitterLink={TwitterLink} 
                                    LinkedinLink={LinkedinLink} />} />
          <Route path='/quotesapp' Component={QuotesDemoVideo} />
        </Routes>
        <footer className={`footer ${brightnessMode ? 'dark-mode' : ''}`} onMouseLeave={handleItemLeave}>
          <div className='footer-contact-details'>
            <GithubLink />
            <LinkedinLink />
            <TwitterLink />
            <InstagramLink />
            <WhatsappLink />
          </div>
          <div className='copyright'>©copyright all rights reserved</div>
      </footer>
      </div>
    </Router>
  );
}

export default App;

function Homepage({ brightnessMode, handleItemHover, handleItemLeave,
                    GithubLink, TwitterLink, InstagramLink, WhatsappLink, LinkedinLink }) {
  return (
    <div className={`Container ${brightnessMode ? 'dark-mode' : ''}`} id='home' onMouseLeave={handleItemLeave}>
      <div className={`slide-display ${brightnessMode ? 'dark-mode' : ''}`}>
        <SlideShow />
      </div>
      <div className='details-container'>
        <div className='name-link'>
          <div>
            <p className='my-name'>Adeyemi Emmanuel</p>
            <p className='role'>Fullstack Software Engineer</p>
          </div>
          <div className='contact-details'>
            <GithubLink />
            <LinkedinLink />
            <TwitterLink />
            <InstagramLink />
            <WhatsappLink />
          </div>
        </div>
        <div className='display-i'>
        <div className='display-img'>

        </div>
        </div>
      </div>
      <div id='about'>
        <About brightnessMode={brightnessMode} />
      </div>
      <div className='education-comp'>
        <div className='education-icon-con'>
          <img src={educationIcon} alt='icon' className='education-icon' />
          <h2>Education</h2>
        </div>
        <EducationDisplay />
      </div>
      <div className='skills' id='skills'>
        <Fade>
          <div className='icon-con'>
            <img src={skillsLogo} alt='icon' className='title-icon'/>
            <h2>Skills</h2>
          </div>
        </Fade>
        <div className='display-logo'>
          <Fade>
          <DisplayLogo handleItemHover={handleItemHover} handleItemLeave={handleItemLeave} brightnessMode={brightnessMode} />
          </Fade>
        </div>
        <div id='projects'>
          <ProjectDisplay />
        </div>
      </div>
    </div>
  );
}
