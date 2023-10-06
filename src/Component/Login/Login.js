import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

const schema = yup
  .object({
    // Username: yup.string().required("User Name is required").trim(),
    email: yup
      .string()
      .required("Email is required")
      .email("Email is invalid")
      .trim(),
    Password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .matches(
        /^(?=.*[!@#$%^&*])/, // At least one special character required
        "Password must contain at least one special character (!@#$%^&*)"
      )
      .required("Password is required")
      .trim(),
  })
  .required();

export default function App() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    console.log(data);
    const Values = JSON.stringify(data);
    alert(`Values : ${Values}`);
    const storedData = JSON.parse(localStorage.getItem("userdata")) || [];

    const user = storedData.find(
      (user) => user.email === data.email && user.Password === data.Password
    );
    console.log(user);
    if (user) {
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      
    } else {
      // alert(`error.message`);
      navigate("/OTPform");
    }

    resetField("email");
    resetField("Password");
  };

  return (
    <div
      className="App"
      style={{ background: "linear-gradient(45deg, red, blue)" }}
    >
      <div
        style={{
          textAlign: "center",
          border: "2px solid black",
          marginLeft: "300px",
          marginRight: "300px",
          background: "linear-gradient(45deg, red, blue)",
          borderRadius: "20px 20px",
          color: "black",
          marginBottom: "20px",
          marginTop: "10px",
        }}
      >
        <h1>LOG IN</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label style={{ fontWeight: "bold" }}>EMAIL :</label> <br></br>
          <input
            autoFocus
            {...register("email")}
            placeholder="abc@gmail.com"
            style={{ textAlign: "center", padding: "10px", width: "80%" }}
          />
          <p style={{ color: "yellow" }}>{errors.email?.message}</p>
          <label style={{ fontWeight: "bold" }}>PASSWORD :</label>
          <br></br>
          <input
            {...register("Password")}
            type="password"
            placeholder="******"
            style={{ textAlign: "center", padding: "10px", width: "80%" }}
          />{" "}
          <p style={{ color: "yellow" }}>{errors.Password?.message}</p>
          <br></br>
          <br></br>
          <button
            type="submit"
            className="btn btn-outline-danger  bg-black"
            style={{ marginBottom: "20px" }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
