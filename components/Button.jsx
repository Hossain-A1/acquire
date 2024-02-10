import Link from "next/link";
import { cva } from "class-variance-authority";
import clsx from "clsx";
const buttonVariants = cva("rounded-md transition-colors duration-300", {
  variants: {
    color: {
      primary: "bg-gray-800 text-gray-50 border-2 hover:bg-gray-950",
      secondary: "bg-rose-700 shadow-lg border-2 border-gray-100 text-gray-50 hover:bg-rose-800",
      lazy:"border-2 px-6 py-2 shadow-lg border-gray-100 text-gray-50 font-medium bg-gray-950 hover:bg-slate-600"
    },
    size: {
      default: "py-2 px-4",
      full: "py-2 w-full",
    },
  },
  defaultVariants: {
    color: "primary",
    color:"lazy",
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
