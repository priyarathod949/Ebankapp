import styled from 'styled-components'

export const LoginContainer = styled.div`
  background-color: #152850;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
`

export const LoginCardContainer = styled.div`
  display: flex;
  margin-left: 40px;
  margin-right: 40px;
  margin-top: 60px;
  margin-bottom: 60px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 80vh;
  border-radius: 30px;
  border-width: 0px;
  background-color: #e0eefe;
`
export const LoginImage = styled.img`
  width: 50%;
  height: 80vh;
`

export const LoginFormContainer = styled.form`
  background-color: #ffffff;
  width: 60%;
  height: 80vh;
  border-radius: 30px;
  border-width: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
`
export const LoginHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 30px;
  font-weight: 500;
  color: #183b56;
`
export const InputLabel = styled.label`
  font-size: 16px;
  font-weight: 500;
  color: #5a7184;
  margin-bottom: 15px;
`
export const Input = styled.input`
  width: 80%;
  background-color: transparent;
  height: 40px;
  border-radius: 10px;
  border: 1px solid #c3cad9;
  outline: none;
  padding-left: 20px;
  font-size: 16px;
  font-weight: 500;
  color: #183b56;
  margin-bottom: 20px;
`
export const LoginButton = styled.button`
  width: 90%;
  height: 40px;
  background-color: #1565d8;
  font-size: 16px;
  font-weight: 500;
  color: #ffffff;
  border: none;
  border-radius: 10px;
  margin-top: 15px;
  cursor: pointer;
`

export const ErrorMsg = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: #ff0b37;
  align-self: center;
`
