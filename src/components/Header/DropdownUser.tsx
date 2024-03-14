import Image from "next/image";
import {
  Container,
  ImageContainer,
  Infos,
  Name,
  Profile,
} from "./DropdownUser.styles";

export function DropdownUser() {
  return (
    <Container>
      <Infos>
        <Name>Dev02</Name>
        <Profile>Super Admin</Profile>
      </Infos>

      <ImageContainer>
        <Image
          width={80}
          height={80}
          src={"/images/user/user-01.png"}
          style={{ width: "auto", height: "auto" }}
          alt="User"
        />
      </ImageContainer>
    </Container>
  );
}
