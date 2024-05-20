import LoginForm from './Forms/Login'
import SignForm from './Forms/SignUpForm'
import bannerImage from '../image/welcome banner.png'

const Welcome = () => {
  return (
      <div className='welcome_container'>
          <div className='banner'>
              <h2>Welcome to <br/> <span id='lib_name'>"Apna Library"</span></h2>
              <div className='banner_image'>
              <img src={bannerImage} alt="" />
             
              </div>
          </div>
          <div className='Loginform'>
              <SignForm/>
          </div>
          
      </div>
  )
}

export default Welcome