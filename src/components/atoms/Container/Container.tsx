import { TypographyProps } from "./Container.interface";
export const Container: React.FC<TypographyProps> = ({
  children,
  ...props
}: TypographyProps) => {
  return (
    <div
      {...props}
      className="flex flex-col h-screen container mx-auto justify-center"
    >
      <div className="fade-in min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </div>
  );
};
