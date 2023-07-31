import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { Container } from "shared/components/Container";
import { Text } from "shared/components/Text";
import css from "./NotFoundPage.module.css";
import { paths } from "./../../../shared/routes/routes";

export const NotFoundPage = () => {
  const { pathname } = useLocation();

  return (
    <Container>
      <Text className={css.text} fz="s40">
        Страница "{pathname}" не найдена!
      </Text>
    </Container>
  );
};
