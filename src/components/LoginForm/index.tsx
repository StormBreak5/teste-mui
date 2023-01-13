import {
  Box,
  Card,
  Container,
  Divider,
  Grid,
  TextField,
  Typography,
  Link,
} from "@mui/material";
import Controls from "../Controls/Controls";
import { Form, useForm } from "../../hooks/useForm";

const initialValues = {
  nameEmail: "",
  password: "",
  remember: false,
};

export default function LoginForm() {
  const { values, setValues, handleInputChange } = useForm(initialValues);

  return (
    <>
      <Container>
        <Form>
          <Grid
            container
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Grid item sx={{ mb: 1 }}>
              <Card>
                {/* <CardHeader
                  style={{ textAlign: 'center' }}
                  title="Faça seu login"
                />
                <Divider /> */}
                <Box
                  sx={{ "& .MuiTextField-root": { width: "40ch" }, padding: 1 }}
                >
                  <div>
                    <TextField
                      required
                      label="Informe seu nome ou e-mail"
                      variant="outlined"
                      placeholder="Nome ou e-mail"
                      sx={{ mt: 2, mx: 1, mb: 1 }}
                      value={values.nameEmail}
                      onChange={handleInputChange}
                      name="nameEmail"
                    />
                  </div>
                  <div>
                    <TextField
                      required
                      label="Senha"
                      placeholder="Senha"
                      type="password"
                      sx={{ mx: 1, mt: 1, mb: 0 }}
                      value={values.password}
                      onChange={handleInputChange}
                      name="password"
                    />
                  </div>

                  <Box sx={{ mx: 1, my: 0.5 }}>
                    <Controls.Checkbox
                      name="remember"
                      label="Lembrar usuário"
                      value={values.remember}
                      onChange={handleInputChange}
                    />
                  </Box>
                </Box>
                <Divider />
                <Box sx={{ display: "flex", justifyContent: "center", m: 1 }}>
                  <Controls.Button text="Entrar" />
                </Box>
              </Card>
            </Grid>
            <Box>
              <Typography
                variant="caption"
                display="block"
                gutterBottom
                align="center"
                sx={{ textTransform: "none", mb: 0 }}
              >
                Não lembra seus dados?
              </Typography>
              <Link
                align="center"
                display="block"
                href="/password-recovery"
                sx={{ mt: 0, fontSize: 16 }}
              >
                <Typography
                  variant="caption"
                  display="block"
                  gutterBottom
                  align="center"
                  sx={{ textTransform: "none", mb: 0 }}
                >
                  Clique aqui
                </Typography>
              </Link>
            </Box>
          </Grid>
        </Form>
      </Container>
    </>
  );
}
