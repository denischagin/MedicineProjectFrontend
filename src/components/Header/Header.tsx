import { useEffect, useState } from "react";
import Alert from "../ui/Alert/Alert";
import Container from "../ui/Container/Container";
import css from "./Header.module.css";
import { useCity } from "./hooks/useCity";

const Header = () => {
  const [openAlert, setOpenAlert] = useState(false);
  const [selectedCity, setSelectedCity] = useState("Выберите город");

  const { city, isSuccess } = useCity();

  useEffect(() => {
    isSuccess && setOpenAlert(true);
  }, [isSuccess]);

  const handleAlertSubmit = () => {
    setOpenAlert(false);
    setSelectedCity("г. " + (city ?? ""));
  };

  return (
    <div className={css.header}>
      <Container className={css.header_wrapper}>
        <p onClick={() => setOpenAlert((prev) => !prev)}>{selectedCity}</p>

        <Alert
          title={`Вы из города - ${city}?`}
          open={openAlert}
          submitButtonText="Всё верно"
          exitButtonText="Я из другого города"
          onClose={() => setOpenAlert(false)}
          onSubmit={handleAlertSubmit}
          position={{ top: "40px", left: "40px" }}
        />
      </Container>
    </div>
  );
};

export default Header;
