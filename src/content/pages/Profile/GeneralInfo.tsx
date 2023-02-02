import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import { FaEdit } from "react-icons/fa";
import Controls from "../../../components/Controls/Controls";

export default function GeneralInfo() {
  return (
    <Grid container display="flex">
      <Grid
        container
        direction="row"
        justifyContent="center"
        // alignItems="stretch"
        // spacing={1}
      >
        <Grid item xs={12} md={12} display="flex" alignItems="center">
          <Typography
            variant="caption"
            fontSize={20}
            fontWeight="600"
            sx={{ mr: 2 }}
            color="#344767"
          >
            Nome
          </Typography>
          <Typography variant="body1" fontSize={16}>
            Fulano
          </Typography>
        </Grid>
        <Grid item xs={12} md={12} display="flex" alignItems="center">
          <Typography
            variant="caption"
            fontSize={20}
            fontWeight="600"
            sx={{ mr: 2 }}
            color="#344767"
          >
            Telefone
          </Typography>
          <Typography variant="body1" fontSize={16}>
            (99) 99999-9999
          </Typography>
        </Grid>
        <Grid item xs={12} md={12} display="flex" alignItems="center">
          <Typography
            variant="caption"
            fontSize={20}
            fontWeight="600"
            sx={{ mr: 2 }}
            color="#344767"
          >
            Nome
          </Typography>
          <Typography variant="body1" fontSize={16}>
            Fulano
          </Typography>
        </Grid>
      </Grid>
      <Box sx={{ mt: 2 }}>
        <Controls.Button
          startIcon={<FaEdit />}
          text="Editar"
          display="flex"
          sx={{ borderRadius: 10 }}
        />
      </Box>
    </Grid>
  );
}
