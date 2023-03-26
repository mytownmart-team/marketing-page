import React from "react";
import cn from "classnames";

export default function Button({
  className,
  onClick = () => {},
  children,
  ...rest
}) {
  const classname = cn(
    "bg-primary text-white text-sm px-6 py-3 rounded-lg outline-none border-none",
    className
  );
  return (
    <button onClick={onClick} {...rest} className={classname}>
      {children}
    </button>
  );
}
