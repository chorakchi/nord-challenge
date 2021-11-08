import { FormProps } from "./Form.interface";
export const Form = ({ children, ...props }: FormProps) => {
  return (
    <form {...props} className="mt-8 space-y-6" action="#" method="POST">
      <input type="hidden" name="remember" value="true" />
      {children}
    </form>
  );
};
