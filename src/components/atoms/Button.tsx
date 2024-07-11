import styled from 'styled-components';

const Button = styled.button`
  padding: 0.5em 1em;
  font-size: 1em;
  cursor: pointer;
  border-radius: 100rem;
  font-family: inherit;
  background: #ffffffcc;
  color: #111;
  font-weight: bold;
  border: none;
  &:hover{
    opacity: .7;
  }
`;

export const CancelButton = styled(Button)`
  background: #ff2b2b;
  color: white;
`;

export const ConfirmButton = styled(Button)`
  background: #1852f5;
  color: white;
`;

export default Button;
