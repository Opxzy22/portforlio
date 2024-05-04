import { Fade } from 'react-reveal';
import '../CSS/about.css'

function About() {
    return (
        <div className='about' id='about'>
          <div className='detail'>
          <Fade>
          
          <div className='mypics'>

          </div>
          <p className='my-name'>Hi, i'm Emmanuel</p>
          <p className='role'>I'm a dedicated full-stack software developer
           with a passion for building robust and user-friendly web applications.
            With expertise in both front-end and back-end development, 
            I specialize in creating seamless digital experiences from start to finish. 
            From crafting elegant user interfaces with React.js to designing efficient 
            server-side architectures with Node.js and Django, I bring a comprehensive 
            skill set to every project I undertake. With a commitment to continuous 
            learning and a collaborative mindset, I thrive in dynamic environments where 
            innovation and creativity are valued.
            </p>

          </Fade>
          </div>
        <Fade>
          <div className='mypic'>

          </div>
        </Fade>
        
      </div>
    )
}


export default About