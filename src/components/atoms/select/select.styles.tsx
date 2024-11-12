import styled from 'styled-components';

export const StyledSelect = styled.select`
  width: 100%;
  padding: 8px;
  font-size: 16px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  color: #000;
  appearance: none; /* Hide default arrow */
  background-image: url("data:image/svg+xml,%3Csvg width='12' height='12' viewBox='0 0 24 24' fill='black' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7 10l5 5 5-5H7z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 8px center;
  background-size: 12px 12px;
`;

export const SelectContainer = styled.div`
  display: inline-block;
  width: 200px; /* Adjust width as needed */
  padding: 8px;
  background-color: #fff;
  border-radius: 4px;
`;
