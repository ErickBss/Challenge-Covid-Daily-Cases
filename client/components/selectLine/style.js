import styled from "styled-components";
import { CheckSquareFill } from "@styled-icons/bootstrap";

export const InputRange = styled.input`
  width: 85%;
  height: 5px;

  outline: none;

  border-radius: 3px;

  &::-webkit-slider-thumb {
    cursor: pointer;
  }
`;

export const OptionsContainer = styled.div`
  display: flex;
  width: 60%;
  justify-content: space-around;
`;

export const VisualDateValue = styled.div`
  padding: 5px;
  border: 2px solid blue;
  float: left;

  font-size: 0.6rem;
`;

export const ConfirmButton = styled(CheckSquareFill)`
  width: 30px;

  cursor: pointer;
`;
