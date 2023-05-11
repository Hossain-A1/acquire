import Link from "next/link";
import { cva } from "class-variance-authority";
const buttonVariants = cva("rounded", {
  variants: {
    color: {
      primary:"",
      secndery:""
    },
      size: {
        default:"",
        full:""
      },
    
  },
  defaultVariants:{
    color:"primary",
    size:"default"
  }
});

const Button = ({ href, placeholder }) => {
  return (
    <Link
      href={href}
      className="px-4 py-2 bg-orange-800 text-gray-50 rounded text-sm font-semibold"
    >
      {placeholder}
    </Link>
  );
};

export default Button;
