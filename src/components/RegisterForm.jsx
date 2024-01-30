import { useState } from "react";
import { useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();

  const handleSubmit = () => {
    let isError = false;
    if (formValues.name.trim().length === 0) {
      isError = true;
      setErrors((prev) => {
        return { ...prev, name: "Field is required" };
      });
    } else {
      setErrors((prev) => {
        return { ...prev, name: null };
      });
    }

    if (formValues.username.trim().length === 0) {
      isError = true;
      setErrors((prev) => {
        return { ...prev, username: "Field is required" };
      });
    } else {
      setErrors((prev) => {
        return { ...prev, username: null };
      });
    }

    if (formValues.email.trim().length === 0) {
      isError = true;
      setErrors((prev) => {
        return { ...prev, email: "Field is required" };
      });
    } else {
      setErrors((prev) => {
        return { ...prev, email: null };
      });
    }

    if (formValues.mobile.trim().length === 0) {
      isError = true;
      setErrors((prev) => {
        return { ...prev, mobile: "Field is required" };
      });
    } else {
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
      return;
    } else {
      navigate("/info");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <input
        value={formValues.name}
        onChange={(e) => {
          setFormValues((prev) => {
            return { ...prev, name: e.target.value };
          });
        }}
        type="text"
        placeholder="Name"
      />
      <p style={{ color: "#FF0000" }}>{errors.name}</p>
      <br />

      <input
        value={formValues.username}
        onChange={(e) => {
          setFormValues((prev) => {
            return { ...prev, username: e.target.value };
          });
        }}
        type="text"
        placeholder="UserName"
      />
      <p style={{ color: "#FF0000" }}>{errors.username}</p>
      <br />

      <input
        value={formValues.email}
        onChange={(e) => {
          setFormValues((prev) => {
            return { ...prev, email: e.target.value };
          });
        }}
        type="text"
        placeholder="Email"
      />
      <p style={{ color: "#FF0000" }}>{errors.email}</p>
      <br />

      <input
        value={formValues.mobile}
        onChange={(e) => {
          setFormValues((prev) => {
            return { ...prev, mobile: e.target.value };
          });
        }}
        type="text"
        placeholder="Mobile"
      />
      <p style={{ color: "#FF0000" }}>{errors.mobile}</p>
      <br />

      <label htmlFor="registerCheckbox">
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
        Share my registration data with Superapp
      </label>
      <p style={{ color: "#FF0000" }}>{errors.registerCheckbox}</p>

      <button
        onClick={handleSubmit}
        style={{ border: "none", background: "#72DB73", padding: "6px" }}
      >
        SIGN UP
      </button>
    </div>
  );
}
