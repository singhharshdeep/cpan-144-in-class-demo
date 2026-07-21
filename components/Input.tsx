import { ChangeEvent } from "react";

const Input = ({
  placeholder,
  onChange,
}: {
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement, Element>) => void;
}) => {
  return (
    <input
      className="mb-3.75 h-12.5 w-125 border rounded-2xl"
      style={{
        marginBottom: 15,
        height: 50,
        width: 500,
      }}
      type="text"
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;
