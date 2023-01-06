import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import { FaEdit } from "react-icons/fa";
import Controls from "../../../components/Controls/Controls";

export default function GeneralInfo() {
  return (
    <Grid container display="flex">
      {/* <Container maxWidth={false}>
        <RxAvatar size={100} />
      </Container> */}
      <Container sx={{ mt: 3 }} maxWidth="md">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} md={10} display="flex" alignItems="center">
            <Typography variant="caption" fontSize={24} sx={{ mr: 2 }}>
              Nome
            </Typography>
            <Typography variant="body1" fontSize={20}>
              Fulano
            </Typography>
          </Grid>
          <Grid item xs={12} md={10} display="flex" alignItems="center">
            <Typography variant="caption" fontSize={24} sx={{ mr: 2 }}>
              Telefone
            </Typography>
            <Typography variant="body1" fontSize={20}>
              (99) 99999-9999
            </Typography>
          </Grid>
          <Grid item xs={12} md={10} display="flex" alignItems="center">
            <Typography variant="caption" fontSize={24} sx={{ mr: 2 }}>
              Nome
            </Typography>
            <Typography variant="body1" fontSize={20}>
              Fulano
            </Typography>
          </Grid>
        </Grid>
        <Box sx={{ ml: 8, mt: 2 }}>
          <Controls.Button
            startIcon={<FaEdit />}
            text="Editar"
            display="flex"
          />
        </Box>
      </Container>
    </Grid>
  );
}

const edit = () => {
  return <FaEdit />;
};
