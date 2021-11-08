import { LoginProps } from "./Login.interface";
import { Container, LoginBlock } from "components";
export const Login: React.FC<LoginProps> = ({
  ...props
}: LoginProps) => {
  return (
    <Container>
      <LoginBlock {...props} />
    </Container>
  );
};
