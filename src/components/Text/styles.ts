import styled from 'styled-components/native';
import { IText } from '.';
import { Text } from 'react-native';

export const TextContainer = styled(Text)<IText>`
  font-family: ${({ fontFamily }) => fontFamily};
  font-size: ${({ fontSize }) => fontSize}px;
  color: ${({ color }) => color};
  text-align: ${({ textAlign }) => textAlign && textAlign};
`;
