import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(#4f5bd5, #962fbf);
`
const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 300px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
`
const SpanLogin = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: #777777;
  margin-bottom: 20px;
`
export { Container, FormLogin, SpanLogin }
