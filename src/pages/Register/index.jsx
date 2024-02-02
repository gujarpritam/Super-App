import RegisterForm from "../../components/RegisterForm/RegisterForm";
import RegistrationPageImage from "../../assets/registrationPageImage.png";
import RegisterStyle from "./index.module.css";
import "../../App.css";

function Register() {
  return (
    <div className={RegisterStyle.container}>
      <div className={RegisterStyle.imageBox}>
        <img src={RegistrationPageImage} />
        <p className={RegisterStyle.heading}>Discover new things on Superapp</p>
      </div>
      <div className={RegisterStyle.registerBox}>
        <RegisterForm className={RegisterStyle.form} />
      </div>
    </div>
  );
}

export default Register;
