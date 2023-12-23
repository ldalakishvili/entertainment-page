import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import StyledForm from './StyledForm'
import { useForm } from 'react-hook-form'

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm()

  const navigate = useNavigate()

  const handleSignInSubmit = (data) => {
    const storedAccountsString = localStorage.getItem('accounts')
    const storedAccounts = storedAccountsString
      ? JSON.parse(storedAccountsString)
      : []

    const matchedAccount = storedAccounts.find(
      (account) =>
        account.email === data.email && account.password === data.password
    )

    if (matchedAccount) {
      navigate('/trending')
    } else {
      setError('email', {
        type: 'manual',
        message: 'Invalid email or password',
      })
      setError('password', {
        type: 'manual',
        message: 'Invalid email or password',
      })
    }
  }
  return (
    <StyledForm onSubmit={handleSubmit(handleSignInSubmit)}>
      <SignInTitle> Login</SignInTitle>
      <InputContainer>
        <input
          {...register('email', {
            required: "Can't be empty",
            pattern: {
              value: /^\S+@\S+$/i,
              message: 'Invalid email address',
            },
          })}
          placeholder='Email address'
        />
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
      </InputContainer>
      <InputContainer>
        <input
          {...register('password', {
            required: "Can't be empty",
            minLength: {
              value: 8,
              message: 'Password must be at least 8 characters long',
            },
          })}
          type='password'
          placeholder='Password'
        />
        {errors.password && (
          <ErrorMessage>{errors.password.message}</ErrorMessage>
        )}
      </InputContainer>
      <button type='submit'>Sign In</button>
      <Question>
        Don't have an account? <Link to='/signup'>Sign Up</Link>
      </Question>
    </StyledForm>
  )
}

const SignInTitle = styled.h2`
  font-size: 32px;
  font-weight: 300;
  line-height: 40px;
  letter-spacing: -0.5px;
  text-align: left;
  color: white;
  margin-bottom: 4rem;
`

const InputContainer = styled.div`
  position: relative;
`

const ErrorMessage = styled.p`
  position: absolute;
  top: 0;
  right: 0; /* Adjusted position */
  color: red;
  font-size: 14px;
`
const Question = styled.p`
  font-size: 15px;
  font-weight: 300;
  line-height: 19px;
  letter-spacing: 0px;
  text-align: center;
  color: white;
  span {
    color: rgba(252, 71, 71, 1);
    cursor: pointer;
    margin-left: 5px;
  }
`
