import { Container } from "shared/components/Container"
import { RegistrationForm } from "widgets/RegistrationForm"
import css from "./RegistrationPage.module.scss"

export const RegistrationPage = () => {
  return (
    <Container className={css.reg_container}>
      <RegistrationForm />
    </Container>
  )
}

