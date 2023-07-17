import {
  Box,
  TextField,
  InputLabel,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { TypeOf } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { LoadingButton } from "@mui/lab";
import { loginSchema } from "./utils";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

import { useRouter } from "next/router";
import { AuthenticationService } from "@Services/API/Authentication";

type LoginInput = TypeOf<typeof loginSchema>;

export const LoginForm: React.FunctionComponent<{}> = ({}): JSX.Element => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [successMsg, setSuccesMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const [loading, setLoading] = useState(false);
  const {
    register,
    formState: { errors, isSubmitSuccessful },
    reset,
    handleSubmit,
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
  });

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }, [isSubmitSuccessful]);

  const onSubmitHandler: SubmitHandler<LoginInput> = async (values: {
    email: string;
    password: string;
  }) => {
    setErrorMsg("");
    setSuccesMsg("");
    setLoading(true);

    try {
      const result = await AuthenticationService.ValidateLogin({
        payload: {
          email: values.email,
          password: values.password,
        },
      });
      if (result) {
        setSuccesMsg("You will be redirect soon!");

        setTimeout(() => {
          router.push("/");
        }, 2000);
      } else {
        setErrorMsg("");
      }
    } catch (error: any) {
      console.error(error); // logging the error to the console
      setErrorMsg(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Box
        className="login__form animate__animated animate__fadeInUp"
        component="form"
        autoComplete="off"
        onSubmit={handleSubmit(onSubmitHandler)}
      >
        <InputLabel htmlFor="email">Email</InputLabel>
        <TextField
          required
          id="email"
          sx={{ mb: 2 }}
          type="email"
          size="small"
          error={!!errors["email"]}
          helperText={errors["email"] ? errors["email"].message : ""}
          {...register("email")}
        />
        <InputLabel htmlFor="password">Password</InputLabel>
        <TextField
          sx={{ mb: 2 }}
          required
          size="small"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          type={showPassword ? "text" : "password"}
          error={!!errors["password"]}
          helperText={errors["password"] ? errors["password"].message : ""}
          {...register("password")}
        />
        <Box sx={{ textAlign: "center", marginBottom: "32px" }}>
          <LoadingButton
            className="login-button"
            variant="contained"
            type="submit"
            loading={loading}
            sx={{ py: "0.8rem", mt: "1rem" }}
          >
            Login
          </LoadingButton>
        </Box>
        {errorMsg && errorMsg.length > 0 && (
          <Alert className="animation-fade-in" severity="error">
            <AlertTitle>Error</AlertTitle>
            {errorMsg}
          </Alert>
        )}
        {successMsg && successMsg.length > 0 && (
          <Alert className="animation-fade-in" severity="success">
            <AlertTitle>Success!</AlertTitle>
            {successMsg}
          </Alert>
        )}
      </Box>
    </>
  );
};
