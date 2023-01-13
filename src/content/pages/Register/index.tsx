import { Grid, Typography } from "@mui/material";

import UserForm from "../../../components/UserForm";

export default function RegisterPage() {
  return (
    <>
      <title>Cadastro de Usuário</title>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <Typography variant="h1" sx={{ mb: 2 }}>
          Cadastre-se
        </Typography>
        <Grid item xs={3}>
          <UserForm />
        </Grid>
      </Grid>
    </>
  );
}
