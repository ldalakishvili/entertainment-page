import styled from 'styled-components'

const StyledForm = styled.form`
  background-color: rgba(22, 29, 47, 1);
  padding: 3.2rem;
  border-radius: 0.9rem;
  max-width: 40rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 20rem auto; /* This will center the form horizontally */
  @media (max-width: 450px) {
    max-width: 327px;
  }
  input {
    width: 33.6rem;
    padding: 0 1rem 1.6rem 1.8rem;
    margin-bottom: 2.4rem;
    border: none;
    border-bottom: 1px solid rgba(90, 105, 143, 1);
    color: rgba(255, 255, 255, 1);
    font-size: 15px;
    font-weight: 300;
    line-height: 19px;
    letter-spacing: 0px;
    text-align: left;
    background-color: transparent;
    cursor: pointer;
    @media (max-width: 450px) {
      max-width: 279px;
    }
  }

  input:focus {
    border-bottom: 1px solid rgba(255, 255, 255, 1);
  }
  button {
    background-color: rgba(252, 71, 71, 1);
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    text-align: center;
    font-size: 15px;
    font-weight: 300;
    line-height: 19px;
    letter-spacing: 0px;
    text-align: center;
    margin-bottom: 2.4rem;
  }
  button:hover {
    background-color: white;
    color: rgba(22, 29, 47, 1);
  }
`

export default StyledForm
