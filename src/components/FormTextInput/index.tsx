import React from "react";
import { Input, InputProps } from "react-native-elements";
type Props = InputProps;
export default function FormTextInput(props: Props) {
  const newProps = {
    ...props
  };
  return <Input {...newProps} />;
}
