import { useState } from 'react';
import { faReact, faGit, faDocker,
  faHtml5, faCss3Alt, } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import nginxLogo from '../Image/nginx-icon.png';
import ApacheLogo from '../Image/apache-logo.jpg';
import PythonLogo from '../Image/python-logo.jpg';
import FlaskLogo from '../Image/flask-logo.png';
import NodeLogo from '../Image/node-logo.png';
import DjangoLogo from '../Image/django-logo.png';
import ExpressLogo from '../Image/express-logo.png';
import MongoLogo from '../Image/mongodb-logo.png';
import MysqlLogo from '../Image/mysql-logo.png';
import JsLogo from '../Image/javascript-logo.png';
import ReactNativeLogo from '../Image/react-native-logo.png';
import '../CSS/logo.css'


function DisplayLogo({ handleItemHover, handleItemLeave, brightnessMode }) {
  const [clickedItem, setClickedItem] = useState('');

  const handleItemClick = (title) => {
    setClickedItem(title);
  };

  const handleDocumentClick = () => {
    setClickedItem('');
  };
   
    return (
      <div className='logo-container' onClick={handleDocumentClick}>
          <div className='image-container'>
            <img src={JsLogo} alt="javascript Logo" title='Javascript' onClick={() => handleItemClick('Javascript')} />
            <span className='image-title'>{(clickedItem) === 'Javascript' ? 'Javascript' : ''}</span>
      </div>

          <div className='image-container'>
            <img src={PythonLogo} alt="python Logo" title='Python' />
          </div>

          <div className='image-container'>
            <img src={NodeLogo} alt="node Logo" title='Node.js' />
          </div>

          <div className='image-container'>
            <img src={ExpressLogo} alt="express Logo" title='Express.js' />
          </div>

          <div className='image-container'>
            <img src={DjangoLogo} alt="django Logo" title='Django' />
          </div>

          <div className='image-container'>
            <img src={FlaskLogo} alt="flask Logo" title='Flask' />
          </div>

          <div className='image-container'>
            <img src={MysqlLogo} alt="mysql Logo" title='sql' />
          </div>

          <div className='image-container'>
            <img src={MongoLogo} alt="mongodb Logo" title='Mongodb' />
          </div>

        <FontAwesomeIcon icon={faReact} style={{ color: 'blue' }} /> 
        <div className='image-container'>
            <img src={ReactNativeLogo} alt="Logo" title='React native' />
          </div>
        <FontAwesomeIcon icon={faHtml5} style={{ color: 'red' }} title='HTML'/>
        <FontAwesomeIcon icon={faCss3Alt} style={{ color: 'blue' }} title='CSS'/>
        <FontAwesomeIcon icon={faGit} style={{ color: brightnessMode ? 'black' : 'white' }} title='Git' />
        <FontAwesomeIcon icon={faDocker} style={{ color: '#30A2FF' }} title='Docker' />
        <div className='image-container'>
        <img src={nginxLogo} alt="Nginx Logo" title='nginx' />
        </div>
        <div className='image-container'>
        <img src={ApacheLogo} alt="Apache Logo" title='Apache' />
        </div>
        </div>
    )
}

export default DisplayLogo