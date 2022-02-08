import styled from "styled-components";

export const Container = styled.div`
  widtth: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Area = styled.div`
  max-width: 600px;
  width: 100%;
  padding: 15px;
  border-radius: 6px;
  background-color: rgba(255, 255, 255, 0.05);
`;

export const Header = styled.h1`
  color: #fff;
  text-align: center;
  padding: 10px 0;
  margin-bottom: 15px;
`;

export const InputArea = styled.div`
  width: 100%;
  height: 45px;
  display: flex;
  margin-bottom: 25px;
`;

export const InputField = styled.input`
  width: 100%;
  font-size: 18px;
  border-radius: 5px;
  border: none;
  outline: none;
  color: #fff;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.1);
`;

export const AddButton = styled.button`
height: 100%;
text-align: center;
font-size: 40px;
border: none;
border-radius: 5px;
outline: none;
color: #fff;
padding: 0px 20px;
margin-left: 10px;
background-color: #8257e6;
`;

export const TasksArea = styled.div`
  width: 100%;
  max-height: 270px;
  overflow-y: scroll;
  margin-bottom: 25px;

`;

export const FooterArea = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Description = styled.p`
  color: #fff;

  span{
    color: #8257e6;
    font-weight: bold;
  }

`;

export const ClearButton = styled.button`
  color: #fff;
  border: none;
  border-radius: 5px;
  outline: none;
  font-weight: bold;
  padding: 10px 20px;
  background-color: #8257e6;
`;
