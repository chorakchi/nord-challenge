import { HTMLAttributes } from "react";

export type variant =
  | "headline_xxl"
  | "headline_xl"
  | "headline_l"
  | "headline_m"
  | "headline_s"
  | "headline_xs"
  | "body"
  | "caption"
  | "inherit";
export type componentEnum =
  | "a"
  | "button"
  | "div"
  | "p"
  | "span"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "li";

export interface TypographyProps extends HTMLAttributes<HTMLElement> {
  /**
   * Applies the theme typography styles.
   */
  /** @default 'body' */
  variant?: variant;

  /**
   * The as component used for the root node. Either a string to use a HTML element.
   */
  as?: componentEnum;
  href?: string;
}
