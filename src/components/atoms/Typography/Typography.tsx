import { TypographyProps } from "./Typography.interface";
export const Typography: React.FC<TypographyProps> = ({
  variant = "body",
  as,
  ...props
}: TypographyProps) => {
  const Tag = as || "p";
  return (
    <Tag
      {...props}
      className="mt-6 text-center text-3xl font-extrabold text-gray-900"
    />
  );
};
