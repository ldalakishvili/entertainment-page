import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import StyledForm from './StyledForm'
import { useForm } from 'react-hook-form'

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm()

  const navigate = useNavigate()

  const onSubmit = (data) => {
    const existingAccountsString = localStorage.getItem('accounts')
    const existingAccounts = existingAccountsString
      ? JSON.parse(existingAccountsString)
      : []

    const emailExists = existingAccounts.some(
      (account) => account.email === data.email
    )

    if (emailExists) {
      setError('email', {
        type: 'manual',
        message: 'Email address already exists',
      })
    } else {
      clearErrors('email')

      const updatedAccounts = [...existingAccounts, data]
      localStorage.setItem('accounts', JSON.stringify(updatedAccounts))
      navigate('/')
    }
  }

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <SignUpTitle>Sign Up</SignUpTitle>

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

      <InputContainer>
        <input
          {...register('repeatPassword', { required: "Can't be empty" })}
          type='password'
          placeholder='Repeat password'
        />
        {errors.repeatPassword && (
          <ErrorMessage>{errors.repeatPassword.message}</ErrorMessage>
        )}
      </InputContainer>

      <button type='submit'>Create an account</button>
      <Question>
        Already have an account? <Link to='/'>Login</Link>
      </Question>
    </StyledForm>
  )
}
const SignUpTitle = styled.h2`
  font-family: Outfit;
  font-size: 32px;
  font-weight: 300;
  line-height: 40px;
  letter-spacing: -0.5px;
  text-align: left;
  color: white;
  margin-bottom: 4rem;
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
