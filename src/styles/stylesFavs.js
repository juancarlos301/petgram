

import styled from "styled-components";
import { fadeIn } from "./animation";

export const UserTitle = styled.h2`
  color: #aea5e4;
  font-weight: 500px;
  margin-bottom: 10px;
  margin: 0 auto;
`;
export const Div = styled.div`
  display: flex;
  flex-direction: column;
  ${fadeIn()}
`;

export const H1Favs = styled.h1`
  margin: 0 0 20px 20px;
`;
