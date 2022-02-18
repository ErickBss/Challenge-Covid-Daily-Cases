import styled from "styled-components";

export const Container = styled.header`
  width: 100vw;
  height: 40vh;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const OptionsBox = styled.section`
  width: 85%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  h1 {
    font-size: 2rem;
  }
`;

export const Options = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 20px;

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

  option {
    outline: none;

    padding: 20px;
  }
`;

export const TimeLine = styled.div`
  display: flex;
  justify-content: space-between;

  width: 85%;
`;

export const TimeLineOption = styled.div`
  display: flex;
  flex-direction: column;

  input {
    width: 40px;
  }
`;

export const Date = styled.label`
  font-weight: bold;
`;
