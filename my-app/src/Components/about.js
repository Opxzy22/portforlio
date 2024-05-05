import { Fade } from 'react-reveal';
import { useState } from 'react';
import '../CSS/about.css'

function About() {
  const [isextended, setIsextended] = useState(false);

  const toggleExtend = () => {
    setIsextended(!isextended)
  }
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
            <p className={`extended-part ${isextended ? 'show-extended' : 'hide-extended'}`}>
              During my one-year software engineering program at Alx, I underwent intensive 
              training aimed at tackling challenging tasks. This experience has ingrained 
              in me the belief that overcoming difficulties is an integral part of everyday 
              life. Consequently, I now approach challenges with a sense of normalcy, always 
              striving for success. This mindset fuels my continuous hunger for personal and 
              professional growth. By embracing challenges head-on and refusing to surrender 
              in the face of adversity, I have consistently improved in my endeavors. When 
              confronted with a particularly tough task, I opt for brief pauses to recharge 
              before returning with renewed determination. This approach has proven instrumental 
              in my journey of skill development and achievement.
              In addition, my time at Alx instilled in me not only technical expertise but also a 
              collaborative spirit. Working closely with peers and mentors, I learned the value of 
              teamwork and effective communication. These soft skills have complemented my technical 
              abilities, enabling me to navigate complex projects with ease. Furthermore, the program 
              fostered a culture of innovation and creativity, encouraging me to think outside the box and 
              explore unconventional solutions. This approach to software engineering has equipped me with a 
              versatile skill set, ready to tackle any challenge that comes my way.
            </p>
            <button className='extend-button'>{`${isextended ? 'READ MORE' : 'SHOW LESS'}`}</button>

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