type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "default" | "secondary";
  className?: string;
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const Button = ({
  children,
  variant = "default",
  className,
  ...rest
}: ButtonProps) => {
  const defaultClasses = "border border-stone-500 py-2 px-2 text-sm";

  if (variant === "secondary") {
    return (
      <button
        {...rest}
        className={`${defaultClasses} ${className} bg-primary text-white`}
      >
        {children}
      </button>
    );
  }

  if (variant === "primary") {
    return (
      <button
        {...rest}
        className={`${defaultClasses} ${className} rounded-md bg-primary text-white`}
      >
        {children}
      </button>
    );
  }

  return (
    <button {...rest} className={`${defaultClasses} ${className} rounded-md`}>
      {children}
    </button>
  );
};

export default Button;
