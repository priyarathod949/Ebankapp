import Cookies from 'js-cookie'
import {
  HomeContainer,
  NavContainer,
  NavLogo,
  LogoutButton,
  Heading,
  VisaCard,
} from './styledComponents'

const Home = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/ebank/login')
  }
  return (
    <HomeContainer>
      <NavContainer>
        <NavLogo
          src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
          alt="website logo"
        />
        <LogoutButton onClick={onClickLogout}>Logout</LogoutButton>
      </NavContainer>
      <Heading>Your Flexibility, Our Excellence</Heading>
      <VisaCard
        src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png"
        alt="digital card"
      />
    </HomeContainer>
  )
}

export default Home
