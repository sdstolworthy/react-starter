import React, { ReactElement, ReactComponentElement } from "react";
import {
  Container,
  Content,
  Header,
  Body,
  Right,
  Left,
  Title
} from "native-base";

interface Props {
  children: React.ReactChild;
  title?: string;
  hasHeader?: boolean;
}

export default function BaseLayout({
  title,
  hasHeader = true,
  children
}: Props) {
  let header = null;
  if (hasHeader) {
    header = (
      <Header>
        <Left />
        <Body>
          <Title>{title}</Title>
        </Body>
        <Right />
      </Header>
    );
  }
  return (
    <Container>
      {header}
      {children}
    </Container>
  );
}
