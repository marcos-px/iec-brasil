import React from "react";
import { Button } from "./Button";

type StyledButtonProps = {
  children: React.ReactNode;
  background: string;
  color?: any & typeof defaultProps;
};
const defaultProps = {
  color: "white",
};

export function StyledButton({
  color,
  background,
  children,
}: StyledButtonProps) {
  return <Button style={{ background, color }}>{children}</Button>;
}

StyledButton.defaultProps = defaultProps;
