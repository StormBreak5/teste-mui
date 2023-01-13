import { Box, Container, Grid, Typography } from "@mui/material";
import { MdEmail } from "react-icons/md";
import Controls from "../../../components/Controls/Controls";

export default function AccountConfirm() {
  return (
    <>
      <title>E-mail de ativação enviado</title>
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
            <MdEmail size={75} />
            <Typography variant="h2" sx={{ mt: 2, mb: 2 }}>
              E-mail de para ativar a conta enviado!
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Siga as instruções no e-mail enviado para continuar o seu
              cadastro.
            </Typography>
          </Box>
          <Controls.Button text="Retornar ao início" />
        </Grid>
      </Container>
    </>
  );
}
