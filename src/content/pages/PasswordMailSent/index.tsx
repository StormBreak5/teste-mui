import { Box, Container, Grid, Typography } from "@mui/material";

import { FcCheckmark } from "react-icons/fc";
import Controls from "../../../components/Controls/Controls";

export default function PasswordMailSent() {
  return (
    <>
      <title>E-mail enviado</title>
      <Container>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: "100vh" }}
        >
          <Box
            sx={{ mb: 2 }}
            display="flex"
            alignItems="center"
            flexDirection="column"
          >
            <FcCheckmark size={75} />
            <Typography variant="h2" sx={{ mt: 2, mb: 2 }}>
              E-mail de redefinição de senha enviado!
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Um e-mail com as instruções para a redefinição de sua senha foi
              enviado para o e-mail de cadastro.
            </Typography>
          </Box>
          <Controls.Button text="Retornar" />
        </Grid>
      </Container>
    </>
  );
}
