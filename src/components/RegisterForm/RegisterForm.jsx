import { useState } from "react";
import { useNavigate } from "react-router-dom";
import RegisterFormStyle from "./RegisterForm.module.css";
import "../../App.css";

export default function RegisterForm() {
  const [formValues, setFormValues] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    registerCheckbox: false,
  });

  const [errors, setErrors] = useState({
    name: null,
    username: null,
    email: null,
    mobile: null,
    registerCheckbox: null,
  });

  // const [isError, setIsError]=useState(false);

  const navigate = useNavigate();

  const handleSubmit = () => {
    let isError = false;
    if (formValues.name.trim().length === 0) {
      isError = true;
      document
        .getElementById("name")
        .setAttribute("style", "border: 1px solid red");
      setErrors((prev) => {
        return { ...prev, name: "Field is required" };
      });
    } else {
      document.getElementById("name").setAttribute("style", "border: none");
      setErrors((prev) => {
        return { ...prev, name: null };
      });
    }

    if (formValues.username.trim().length === 0) {
      isError = true;
      document
        .getElementById("userName")
        .setAttribute("style", "border: 1px solid red");
      setErrors((prev) => {
        return { ...prev, username: "Field is required" };
      });
    } else {
      document.getElementById("userName").setAttribute("style", "border: none");
      setErrors((prev) => {
        return { ...prev, username: null };
      });
    }

    if (formValues.email.trim().length === 0) {
      isError = true;
      document
        .getElementById("email")
        .setAttribute("style", "border: 1px solid red");
      setErrors((prev) => {
        return { ...prev, email: "Field is required" };
      });
    } else {
      document.getElementById("email").setAttribute("style", "border: none");
      setErrors((prev) => {
        return { ...prev, email: null };
      });
    }

    if (formValues.mobile.trim().length === 0) {
      isError = true;
      document
        .getElementById("mobile")
        .setAttribute("style", "border: 1px solid red");
      setErrors((prev) => {
        return { ...prev, mobile: "Field is required" };
      });
    } else {
      document.getElementById("mobile").setAttribute("style", "border: none");
      setErrors((prev) => {
        return { ...prev, mobile: null };
      });
    }

    if (formValues.registerCheckbox === false) {
      isError = true;
      setErrors((prev) => {
        return {
          ...prev,
          registerCheckbox: "Check this box if you want to proceed",
        };
      });
    } else {
      setErrors((prev) => {
        return { ...prev, registerCheckbox: null };
      });
    }

    if (isError === true) {
      return true;
    } else {
      window.localStorage.setItem("userInfo", JSON.stringify(formValues));
      navigate("/info");
    }
  };

  return (
    <div className={RegisterFormStyle.container}>
      <h1 className="projectTitle">Super app</h1>
      <h3 className="">Create your new account</h3>

      <input
        id="name"
        className={RegisterFormStyle.inputBox}
        value={formValues.name}
        onChange={(e) => {
          setFormValues((prev) => {
            return { ...prev, name: e.target.value };
          });
        }}
        type="text"
        placeholder="Name"
      />
      <p className={RegisterFormStyle.error}>{errors.name}</p>

      <input
        id="userName"
        className={RegisterFormStyle.inputBox}
        value={formValues.username}
        onChange={(e) => {
          setFormValues((prev) => {
            return { ...prev, username: e.target.value };
          });
        }}
        type="text"
        placeholder="UserName"
      />
      <p className={RegisterFormStyle.error}>{errors.username}</p>

      <input
        id="email"
        className={RegisterFormStyle.inputBox}
        value={formValues.email}
        onChange={(e) => {
          setFormValues((prev) => {
            return { ...prev, email: e.target.value };
          });
        }}
        type="text"
        placeholder="Email"
      />
      <p className={RegisterFormStyle.error}>{errors.email}</p>

      <input
        id="mobile"
        className={RegisterFormStyle.inputBox}
        value={formValues.mobile}
        onChange={(e) => {
          setFormValues((prev) => {
            return { ...prev, mobile: e.target.value };
          });
        }}
        type="text"
        placeholder="Mobile"
      />
      <p className={RegisterFormStyle.error}>{errors.mobile}</p>

      <label className={RegisterFormStyle.checkbox} htmlFor="registerCheckbox">
        <input
          checked={formValues.registerCheckbox}
          onChange={(e) => {
            console.log(e.target.checked);
            setFormValues((prev) => {
              return { ...prev, registerCheckbox: e.target.checked };
            });
          }}
          type="checkbox"
          name="registerCheckbox"
          id="registerCheckbox"
        />
        &nbsp;&nbsp;Share my registration data with Superapp
      </label>
      <p className={RegisterFormStyle.error}>{errors.registerCheckbox}</p>

      <button onClick={handleSubmit} className={RegisterFormStyle.submit}>
        SIGN UP
      </button>
      <p className={RegisterFormStyle.termsAndPolicy}>
        By clicking on Sign up. you agree to Superapp
        <span>Terms and Conditions of Use</span>
      </p>
      <p className={RegisterFormStyle.termsAndPolicy}>
        To learn more about how Superapp collects, uses, shares and protects
        your personal data please head Superapp <span>Privacy Policy</span>
      </p>
    </div>
  );
}
