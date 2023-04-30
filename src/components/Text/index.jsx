import React from "react";

const variantClasses = {
  h1: "font-extrabold sm:text-3xl md:text-[32px] text-[34px]",
  h2: "font-bold md:text-2xl sm:text-[22px] text-[26px]",
  h3: "font-extrabold text-[22px] sm:text-lg md:text-xl",
  h4: "font-bold text-base",
  h5: "font-normal text-sm",
};

const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
