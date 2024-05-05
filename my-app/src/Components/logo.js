
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
import '../CSS/logo.css'


function DisplayLogo({ handleItemHover, handleItemLeave, brightnessMode }) {
   
    return (
        <div className='logo-container'>
          <div className='image-container'>
            <img src={JsLogo} alt="javascript Logo" title='Javascript' />
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