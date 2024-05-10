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
import myLogo from './Image/my-logo.png';
import MarketplaceDemoVideo from './Components/marketplacedemo';
import Hammer from 'hammerjs';

function App() {
  const [brightnessMode, setBrightnessMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [circlePosition, setCirclePosition] = useState({ x: 0, y: 0 });
  const [hoveredItem, setHoveredItem] = useState(null);


  

  useEffect(() => {
    
    const toggleMenu = () => {
      setMenuOpen((prevValue) => !prevValue);
    };

    const toggleBrightness = () => {
    setBrightnessMode(prevMode => !prevMode)
  }

  const homePath = () => {
    // Navigate to the quotesapp route
    window.location.href = '/';
  };

    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const hammer = new Hammer(hamburgerMenu);
    hammer.on('tap press', toggleMenu);

    const brightnessElement = document.querySelector('.brightness-mode');
    const brightnessHammer = new Hammer(brightnessElement);
    brightnessHammer.on('tap press', toggleBrightness);

    const homeLink = document.querySelector('.home-link')
    const homeHammer = new Hammer(homeLink)
    homeHammer.on('tap press', homePath)

    const handleMenuItemTouchEnd = (sectionId) => {
      // Scroll to the specified section
      scrollToSection(sectionId);
    };

    // Attach touch event listeners to menu items
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach((menuItem) => {
      menuItem.addEventListener('touchend', (event) => {
        const sectionId = event.target.dataset.sectionId;
        handleMenuItemTouchEnd(sectionId);
      });
    });

    // Clean up event listeners
    return () => {
      menuItems.forEach((menuItem) => {
        menuItem.removeEventListener('touchend', handleMenuItemTouchEnd);
      });
    };

  }, []);

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
    console.log(`Scrolling to section with id: ${sectionId}`);
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: 'smooth' });
        setMenuOpen(false); // Close the menu after scrolling
    } else {
        console.error(`Element with id ${sectionId} not found.`);
    }
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
            <div className={`home-link ${brightnessMode ? 'dark-mode' : ''}`}
               onMouseEnter={() => handleItemHover('home')}>
              <img src={myLogo} alt='Home' />
            </div>
            <div className='about-profile' onMouseLeave={handleItemLeave} >
              
              <a href='#projects' className={`profile-link ${brightnessMode ? 'dark-mode' : ''}`}
              onMouseEnter={() => handleItemHover('projects')}>Projects</a>
              <a href='#skills' className={`profile-link ${brightnessMode ? 'dark-mode' : ''}`}
              onMouseEnter={() => handleItemHover('skills')}>Skills</a>
              <a href='#about' className={`about-link ${brightnessMode ? 'dark-mode' : ''}`}
              onMouseEnter={() => handleItemHover('about')}>About</a>
            </div>

            <div className='brightness-mode'>
            {/* Brightness toggle */}
            <img
              src={brightnessMode ? darknessLogo : brightnessLogo}
              alt='brightness logo'
              className={brightnessMode ? 'darkness-logo' : 'brightness-logo'}
            
              onMouseEnter={() => handleItemHover(`${brightnessMode ? 'dark mode' : 'brightness mode'}`)}
              onMouseLeave={handleItemLeave}
            />
            </div>

            {/* Menu toggle */}
            <div className='hamburger-menu'  >
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
          <div data-section-id="about" className={`menu-item ${brightnessMode ? 'dark-mode' : ''}`}>About</div>
          <div data-section-id="skills" className={`menu-item ${brightnessMode ? 'dark-mode' : ''}`}>Skills</div>
          <div data-section-id="projects" className={`menu-item ${brightnessMode ? 'dark-mode' : ''}`}>Projects</div>
        </nav>

        <Routes>
          <Route path="/" element={<Homepage brightnessMode={brightnessMode} handleItemHover={handleItemHover} handleItemLeave={handleItemLeave} 
                                    WhatsappLink={WhatsappLink} 
                                    GithubLink={GithubLink}
                                    InstagramLink={InstagramLink}
                                    TwitterLink={TwitterLink} 
                                    LinkedinLink={LinkedinLink} />} />
          <Route path='/quotesapp' Component={QuotesDemoVideo} />
          <Route path='/marketplace' Component={MarketplaceDemoVideo} />
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
                    GithubLink, TwitterLink, InstagramLink, WhatsappLink, LinkedinLink}) {
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
        <div className='display-img'>

        </div>
        <div id='about'>
        </div>
      </div>
      <div>
        <About brightnessMode={brightnessMode} />
      </div>
      <div className='education-comp'>
        <div className='education-icon-con'>
          <img src={educationIcon} alt='icon' className='education-icon' />
          <h2>Education</h2>
        </div>
        <EducationDisplay />
      </div>
      <div id='skills'></div>
      <div className='skills'>
        <Fade>
          <div className='icon-con'>
            <img src={skillsLogo} alt='icon' className='title-icon'/>
            <h2 id='skills'>Skills</h2>
          </div>
        </Fade>
        <div className='display-logo'>
          <Fade>
          <DisplayLogo handleItemHover={handleItemHover} handleItemLeave={handleItemLeave} brightnessMode={brightnessMode} />
          </Fade>
        </div>
        <div className='decoy' id='projects'></div>
        <div id='projects'>
          <ProjectDisplay />
        </div>
      </div>
    </div>
  );
}
