import Link from "next/link";
import { cva } from "class-variance-authority";
import clsx from "clsx";
const buttonVariants = cva("rounded-md transition-colors duration-300", {
  variants: {
    color: {
      primary: "bg-gray-900 text-gray-50",
      secondary: "bg-rose-700 text-gray-50 hover:bg-rose-800",
    },
    size: {
      default: "py-2 px-4",
      full: "",
    },
  },
  defaultVariants: {
    color: "primary",
    size: "default",
  },
});

const Button = ({ href, placeholder, color, size }) => {
  return (
    <Link className={clsx(buttonVariants({ color, size }))} href={href}>
      {placeholder}
    </Link>
  );
};

export default Button;
