import styled from "styled-components";

export const Container = styled.nav`
  height: 60px;
  background: ${(props) => props.theme.colors.primary};
  color: #fff;
  display: flex !important;
  align-items: center;
  padding: 0 30px;
  justify-content: space-between;
`;

export const Images = styled.img`
  width: 30px;
  margin: auto;
`;

export const ContainerImg = styled.div`
  display: grid;
  align-items: center;
  margin: 0 10px 0 10px;
`;

export const ContainerTxt = styled.div`
  display: flex;
`;

export const ContainerLogin = styled.div`
  display: grid;
  align-items: center;
  margin: 0 10px 0 10px;
  font-size: 18px;
`;
