import { useRef } from "react";

type FormType = {
  className?: string;
  onSubmit: (e: any) => {};
  children?: any;
};

const Form = ({ children, onSubmit, className, ...props }: FormType) => {
  const processing = useRef(false);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (processing.current) return;
    processing.current = true;
    onSubmit(e);
    setTimeout(() => {
      processing.current = false;
    }, 2000);
  };
  return (
    <form onSubmit={handleSubmit} className={className} {...props}>
      {children}
    </form>
  );
};

export default Form;
