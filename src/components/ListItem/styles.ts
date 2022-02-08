import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 45px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  margin-bottom: 10px;
`;

export const TaskName = styled.p`
  width: 100%;
  height: 100%;
  font-size: 18px;
  padding: 13px 10px;
  color: #fff;
  border-radius: 5px;
  background-color: #8257e6;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const DeleteButton = styled.button`
  height: 100%;
  text-align: center;
  border: none;
  border-radius: 5px;
  outline: none;
  padding: 0px 20px;
  background-color: #f00;
  margin-left: 10px;
`;
