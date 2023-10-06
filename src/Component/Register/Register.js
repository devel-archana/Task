import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const schema = yup
  .object({
    Username: yup.string().required("User Name is required").trim(),

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
    ConfirmPassword: yup
      .string()
      .required([yup.ref("password"), null], "Passwords must match")
      .matches(
        /^(?=.*[!@#$%^&*])/, // At least one special character required
        "Password must contain at least one special character (!@#$%^&*)"
      )
      .required("Confirm Password is required")
      .trim(),
    termsAndConditions: yup
      .boolean()
      .oneOf([true], "You must accept the Terms and Conditions"),
  })
  .required();
// type FormData = yup.InferType<typeof schema>;

export default function App() {
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
    const registeredUsers = JSON.parse(localStorage.getItem("regData")) || [];
    const isEmailAlreadyRegistered = registeredUsers.some(
      (user) => user.email === data.email
    );
    console.log(isEmailAlreadyRegistered);

    if (isEmailAlreadyRegistered) {
      toast.error("Email is already registered.");
      return;
    } else {
      const id = registeredUsers.length + 1;
      const formWithId = { ...data, id };
      registeredUsers.push(formWithId);
      localStorage.setItem("regData", JSON.stringify(registeredUsers));
      resetField("Username");

      resetField("email");
      resetField("Password");
      resetField("ConfirmPassword");
    }

    toast.success("Register successfully.....");
    const storedData = JSON.parse(localStorage.getItem("userdata")) || [];
    const id = storedData.length + 1;
    const datawithID = { ...data, id };
    storedData.push(datawithID);
    localStorage.setItem("userdata", JSON.stringify(storedData));

    console.log(data);
    resetField("Username");

    resetField("email");
    resetField("Password");
    resetField("ConfirmPassword");
    setTimeout(() => {
      window.location.href = "/Login";
    }, 6000);
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
        <div className="toast-container">
          {" "}
          <ToastContainer limit={2} />
        </div>
        <h1>REGISTER </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label style={{ fontWeight: "bold" }}>USERNAME:</label> <br></br>
          <input
            {...register("Username")}
            placeholder=" Enter the Username"
            autoFocus="On"
            style={{ textAlign: "center", padding: "10px", width: "80%" }}
          />
          <p style={{ color: "yellow" }}>{errors.Username?.message}</p>
          <label style={{ fontWeight: "bold" }}>EMAIL :</label> <br></br>
          <input
            {...register("email")}
            placeholder="abc@gmail.com"
            style={{ textAlign: "center", padding: "10px", width: "80%" }}
          />
          <p style={{ color: "yellow" }}>{errors.email?.message}</p>
          <label style={{ fontWeight: "bold" }}>PASSWORD :</label>
          <br></br>
          <input
            {...register("Password")}
            placeholder="******"
            style={{ textAlign: "center", padding: "10px", width: "80%" }}
          />
          <p style={{ color: "yellow" }}>{errors.Password?.message}</p>
          <label style={{ fontWeight: "bold" }}> CONFIRM PASSWORD :</label>
          <br></br>
          <input
            {...register("ConfirmPassword")}
            placeholder="******"
            style={{ textAlign: "center", padding: "10px", width: "80%" }}
          />
          <p style={{ color: "yellow" }}>{errors.Password?.message}</p>
          <label style={{ fontWeight: "bold" }}>
            <input type="checkbox" {...register("termsAndConditions")} />I
            accept the Terms and Conditions
          </label>
          <p style={{ color: "yellow" }}>
            {errors.termsAndConditions?.message}
          </p>
          <button
            type="submit"
            className="btn  btn-outline-danger  bg-black"
            style={{ marginBottom: "20px" }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
