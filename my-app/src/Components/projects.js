import '../CSS/projects.css';
import '../CSS/animations.css'; // Import animations CSS file
import { Link } from 'react-router-dom';
import { Fade } from 'react-reveal';
import githubIcon from '../Image/github-icon5.png';
import projectsLogo from '../Image/projects-icon.png';

function ProjectsDisplay() {
  const GithubLink = () => {
    return (
      <div className='icon-container'>
        <img src={githubIcon} alt='github icon' className='github-icon' />
      </div>
    );
  };

  return (
    <div className='projects'>
      <div className='quotesapp-marketplace animate-slide-left'>
        <Fade>
          <div className='project-quotesapp'>
            <div className='project-icon-con'>
              <img src={projectsLogo} alt='icon' className='title-icon'/>
              <h2>Projects</h2>
            </div>
            <div className='quotesapp-container'>
              <div className='quotesapp'>
                {/* Content for Quotes App */}
              </div>
              <div className='github-demo'>
                <div className='app-details'>
                  <h3>Random quote app</h3>
                  <p>A mobile app that randomly generates quotes. Technology used: Django for user authentication and React Native (Expo) for seamless user interface.</p>
                </div>
                <div className='git-container'>
                  <div className='github'>
                  <a href='https://github.com/Opxzy22/RandomQuoteApp'>
                    <GithubLink />
                  </a>
                  </div>
                  <Link to='quotesapp'>
                    <button className='quotesvideobutton'>➡ Watch Demo</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Fade>

        <div className='marketplace-container animate-slide-right'>
          <div className='marketplace'>
            {/* Content for Marketplace */}
          </div>
          <div className='marketplace-demo'>
            <div className='market-details'>
              <h3>Marketplace website</h3>
              <p>A marketplace platform built to connect buyers and sellers in a seamless and user-friendly manner. Leveraging the power of React for the frontend, Django for robust user authentication, and MySQL for efficient database management.</p>
            </div>
            <div className='git-container'>
              <div className='github'>
                  <a href='https://github.com/Opxzy22/market_place/tree/main'>
                    <GithubLink />
                  </a>
              </div>
              <Link to='quotesapp'>
                <button className='quotesvideobutton'>➡ Watch Demo</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className='ecommerce-app'>
        <div className='ecommerce-container'>
          <div className='e-commerce'>
             {/* E-commerce screenshot */}
          </div>
            <div className='ecommerce-details'>
              <h3>E-commerce App</h3>
              <h2>in progress...</h2>
            </div>
        </div>
      </div>
    </div> 
  );
}

export default ProjectsDisplay;
