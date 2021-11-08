import { TextFieldProps } from "./TextField.interface";
const TextField = ({ label, ...props }: TextFieldProps) => {
  return (
    <>
      <label htmlFor={props.id} className="sr-only">
        {label}
      </label>
      <input
        {...props}
        autoComplete={props.autoComplete || props.name}
        name={props.name || props.id}
        required
        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
        placeholder={props.placeholder || label}
      />
    </>
  );
};

// eslint-disable-next-line react/display-name
TextField.Group = ({ ...props }) => (
  <div {...props} className="rounded-md shadow-sm -space-y-px" />
);

export { TextField };
