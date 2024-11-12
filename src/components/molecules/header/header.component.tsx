import React from 'react';
import { StyledDisplayBox } from './header.styles';
interface headerProps {
  text: string;
}

const DisplayBox: React.FC<headerProps> = ({ text }) => <StyledDisplayBox>{text}</StyledDisplayBox>;

export default React.memo(DisplayBox);
