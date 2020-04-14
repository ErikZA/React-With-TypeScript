import React, { useContext } from "react";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import cake from "../../images/icons/cake.png";
import crown from "../../images/icons/crown.png";
import invitation from "../../images/icons/invitation.png";
import guests from "../../images/icons/guests.png";
import birthday from "../../images/icons/birthday-and-party.png";

import { Container, Images, ContainerImg, ContainerTxt, ContainerLogin } from "./styles";

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Container>
        
      <ContainerImg>
        <Images src={crown}></Images>
        My Events
      </ContainerImg>
      <ContainerTxt>
      <ContainerImg>
        <Images src={cake}></Images>
        Parties
      </ContainerImg>
      <ContainerImg>
        <Images src={guests}></Images>
        Weddings
      </ContainerImg>
      <ContainerImg>
        <Images src={birthday}></Images>
        Kids
      </ContainerImg>
      <ContainerImg>
        <Images src={invitation}></Images>
        Invitations
      </ContainerImg>
      </ContainerTxt>

      <ContainerTxt>
      <ContainerLogin>
      Sigin Up
      </ContainerLogin>
      <ContainerLogin>
      login
      </ContainerLogin>
      </ContainerTxt>

      <Switch
        onChange={toggleTheme}
        checked={title === "Primary"}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor="#A0C1B9"
        onColor="#331138" 
      />
    </Container>
  );
};

export default Header;
