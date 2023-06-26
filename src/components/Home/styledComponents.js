import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #183b56;
  height: 100vh;
`

export const NavContainer = styled.nav`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  padding: 20px;
`
export const NavLogo = styled.img`
  width: 150px;
  height: 80px;
  margin-left: 40px;
`
export const LogoutButton = styled.button`
  background-color: transparent;
  width: 120px;
  height: 40px;
  font-size: 20px;
  font-family: 'Roboto';
  border: 1px solid #5a7184;
  color: #5a7184;
  cursor: pointer;
  outline: none;
`

export const Heading = styled.h1`
  color: #ffffff;
  font-size: 45px;
  font-weight: bold;
  font-family: 'Roboto';
  margin-bottom: 15px;
`
export const VisaCard = styled.img`
  width: 50%;
  height: 400px;
  border-radius: 20px;
  border-width: 0px;
  margin-bottom: 20px;
`
