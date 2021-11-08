import { HTMLAttributes } from "react";

type HeaderItem = {
  key: string;
  label: string;
};

export interface TypographyProps extends HTMLAttributes<HTMLElement> {
  logout?: () => void;
  header?: Array<HeaderItem>;
  onClickHeader?: (key: string) => void;
  items?: Array<any>;
}
