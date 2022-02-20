import styled from "styled-components";

export const Container = styled.main`
  max-width: 50vw;

  display: block;
  margin-left: auto;
  margin-right: auto;
`;

export const VariantSelector = styled.div`
  width: 100%;

  display: flex;
  justify-content: flex-end;

  select {
    width: 30%;
    height: 50px;

    border: 0;
    outline: none;

    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    font-size: 0.9rem;
    font-weight: bold;

    padding: 0 20px;

    cursor: pointer;

    &:focus {
      outline: none;
    }

    &:hover {
      background-color: whitesmoke;
    }
  }
`;
