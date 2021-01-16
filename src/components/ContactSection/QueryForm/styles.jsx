import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 5px;
  padding: 10px 0;
  font-family: 'Raleway';
  font-weight: 600;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  margin: 6px 0;
`;

export const Input = styled.input`
  padding: 0.7em;
  font-size: 1rem;
  background-color:#fafafa;
  border:1px solid #eaeaea;
  font-family: 'Raleway';
`;

export const Label = styled.label`
  color: #7A7A7A;
  padding-bottom: 7px;
`;

export const TextArea = styled.textarea`
  background-color:#fafafa;
  border:1px solid #eaeaea;
  padding: 0.7em;
  height: 120px;
`;

export const Button = styled.button`
  background-color:#40bf4f;
  margin: 5px auto;
  padding: 15px 17px;
  border-radius: 8px;
  color: white;
  font-family: 'Poppins';
  &:hover {
    background-color: #07bf1d;
    cursor: pointer;
  }
`;
