import { HTMLAttributes } from "react";

type OnClickSignInProps = {
  username: string;
  password: string;
};

export interface LoginProps extends HTMLAttributes<HTMLElement> {
  message?: string;
  onClickSignIn?: (OnClickSignInProps) => void;
  onChangeFields?: (any) => void;
}
