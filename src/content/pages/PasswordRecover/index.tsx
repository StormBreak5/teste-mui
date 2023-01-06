import {
  Box,
  Card,
  Container,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Helmet } from "react-helmet-async";
import Controls from "../../../components/Controls/Controls";
import { Form, useForm } from "../../../hooks/useForm";

const initialValues = {
  email: "",
};

export default function PasswordRecover() {
  const { values, setValues, handleInputChange } = useForm(initialValues);

  return (
    <>
      <Helmet>
        <title>Recuperar senha</title>
      </Helmet>
      <Container maxWidth="sm">
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: "100vh" }}
        >
          <Typography variant="h1" sx={{ mb: 2 }}>
            Vamos recuperar sua senha!
          </Typography>
          <Grid item>
            <Card>
              <Form>
                <Box
                  component="form"
                  autoComplete="on"
                  sx={{
                    "& .MuiTextField-root": { m: 1, width: "60ch" },
                  }}
                >
                  <div>
                    <TextField
                      required
                      label="E-mail de cadastro"
                      variant="outlined"
                      name="email"
                      placeholder="Seu e-mail"
                      value={values.email}
                      onChange={handleInputChange}
                    />
                  </div>
                </Box>
                <Divider />

                <Typography
                  variant="body2"
                  color="blue"
                  sx={{ m: 1, fontStyle: "italic", fontSize: "0.7rem" }}
                >
                  Caso você tenha esquecido sua senha, digite seu e-mail de
                  cadastro abaixo e enviaremos um e-mail com as instruções para
                  redefinição de senha.
                </Typography>

                <Divider />
                <Box sx={{ display: "flex", justifyContent: "center", m: 1 }}>
                  <Controls.Button text="Recuperar senha" />
                </Box>
              </Form>
            </Card>
          </Grid>
          <Typography
            variant="caption"
            display="block"
            gutterBottom
            align="center"
            color="red"
            sx={{ textTransform: "none", mt: 1 }}
          >
            E-mail inválido
          </Typography>
          <Typography
            variant="caption"
            display="block"
            gutterBottom
            align="center"
            color="green"
            sx={{ textTransform: "none", mt: 1 }}
          >
            Um e-mail com as instruções de recuperação foi enviado
          </Typography>
        </Grid>
      </Container>
    </>
  );
}
