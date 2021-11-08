import { TypographyProps } from "./Result.interface";
import { Button, Container, ResultBlock } from "components";
export const Result: React.FC<TypographyProps> = ({
  logout,
  ...props
}: TypographyProps) => {
  return (
    <Container>
      <ResultBlock {...props}></ResultBlock>
      <div className="w-32 absolute top-10 right-10">
        <Button onClick={logout}>logout</Button>
      </div>
    </Container>
  );
};
