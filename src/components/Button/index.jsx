import React from "react";
import PropTypes from "prop-types";

const shapes = {
  icbRoundedBorder12: "rounded-[12px]",
  RoundedBorder5: "rounded-[5px]",
};
const variants = {
  icbFillRed400: "bg-red_400",
  FillWhiteA700: "bg-white_A700",
};
const sizes = { smIcn: "p-[7px]", sm: "p-1.5" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["icbRoundedBorder12", "RoundedBorder5"]),
  variant: PropTypes.oneOf(["icbFillRed400", "FillWhiteA700"]),
  size: PropTypes.oneOf(["smIcn", "sm"]),
};

Button.defaultProps = { className: "", shape: "", variant: "", size: "" };
export { Button };
