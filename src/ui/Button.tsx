import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "default" | "secondary";
  className?: string;
  href?: string;
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
  const primaryClass = "rounded-md bg-primary text-white";
  const secondaryClass = "bg-primary text-white";

  if (rest.href && variant === "primary") {
    return (
      <Link
        href={rest.href}
        className={`${defaultClasses} ${className} rounded-md ${primaryClass}`}
      >
        {children}
      </Link>
    );
  }

  if (variant === "secondary") {
    return (
      <button
        {...rest}
        className={`${defaultClasses} ${className} ${secondaryClass}`}
      >
        {children}
      </button>
    );
  }

  if (variant === "primary") {
    return (
      <button
        {...rest}
        className={`${defaultClasses} ${className} ${primaryClass}`}
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
