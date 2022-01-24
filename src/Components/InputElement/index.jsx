import React, { useRef, useEffect } from "react";
import { useField } from "@unform/core";

import { Container, Input, Label } from "./style";

export const InputElement = ({ title, name, ...rest }) => {
  const inputRef = useRef();
  const { fieldName, DefaultValue, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: (ref) => {
        return ref.current.value;
      },
      setValue: (ref, value) => {
        ref.current.value = value;
      },
      clearValue: (ref) => {
        ref.current.value = "";
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <Label>{title}</Label>
      <Input ref={inputRef} name={name} {...rest} />
    </Container>
  );
};
