import { TypographyProps } from "./LoginBlock.interface";
import { TextField, Form, Typography, Button } from "components";
export const LoginBlock: React.FC<TypographyProps> = ({
  message,
  onClickSignIn,
  onChangeFields,
  ...props
}: TypographyProps) => {
  return (
    <div {...props} className="max-w-md w-full space-y-8">
      <Typography>🏠</Typography>
      <Typography>Homework - Sign in</Typography>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          onClickSignIn({
            username: e.target[1].value,
            password: e.target[2].value,
          });
        }}
      >
        <TextField.Group>
          <TextField
            id="username"
            name="username"
            type="text"
            label="Username"
            required
            placeholder="Username"
            onChange={onChangeFields}
          />
          <TextField
            id="password"
            name="password"
            type="password"
            label="Password"
            autoComplete="current-password"
            required
            onChange={onChangeFields}
          />
        </TextField.Group>
        <Button type="submit">Sign in</Button>
        <Typography>{message}</Typography>
      </Form>
    </div>
  );
};
