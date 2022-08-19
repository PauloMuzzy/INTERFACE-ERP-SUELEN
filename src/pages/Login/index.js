import React from 'react'
import { useState } from 'react'
import * as S from './styles'
import { Button, Form } from 'react-bootstrap'
import { toast } from 'react-toastify'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    console.log(email, password)
    toast.success('Success Notification !', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: 'dark'
    })
  }

  return (
    <S.Container>
      <S.FormLogin>
        <S.SpanLogin>Login</S.SpanLogin>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder="Senha"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="button" onClick={handleLogin}>
          ENTRAR
        </Button>
      </S.FormLogin>
    </S.Container>
  )
}
