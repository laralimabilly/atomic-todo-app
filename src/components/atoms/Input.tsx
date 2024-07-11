import styled from 'styled-components';

const Input = styled.input.attrs({
  placeholder: "I need to:"
})`
  padding: 0.5em;
  font-size: 1em;
  background: transparent;
  border: none;
  border-bottom: solid 1px white;
  color: white;
  font-family: inherit;
  width: 100%;
  margin-right: 1rem;
  &:hover,
  &:focus,
  &:focus-visible,
  &:active{
    outline: none;
  }
`;

export default Input;