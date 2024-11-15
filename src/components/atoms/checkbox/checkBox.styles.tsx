import styled from 'styled-components';

export const CheckBoxContainer = styled.div`
  width: 110px;
  border-radius: 10px;
  border: 2px;
  text-align: left;
  padding: 4px;
  margin: 0.5rem;
  background-color: white;

  input {
    width: 15px;
    height: 15px;
    margin-left: 10px;
    margin-right: 3px;
  }

  label {
    display: contents;
    marginleft: 1em;
    cursor: pointer;
    font-size: 18px;
  }
`;
