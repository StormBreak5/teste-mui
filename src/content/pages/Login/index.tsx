import { Grid, Typography } from "@mui/material";

import { Helmet } from "react-helmet-async";
import LoginForm from "../../../components/LoginForm";

export default function LoginPage() {
  //let [isValid, setIsValid] = useState(false);

  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <Typography variant="h1" sx={{ mb: 2 }}>
          Faça seu Login
        </Typography>
        <Grid item xs={3}>
          <LoginForm />
        </Grid>
      </Grid>
    </>
  );
}
