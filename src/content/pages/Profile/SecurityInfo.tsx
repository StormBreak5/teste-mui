import { Box, Divider, Grid, IconButton, Typography } from "@mui/material";
import { FaEdit } from "react-icons/fa";
import Controls from "../../../components/Controls/Controls";

export default function SecurityInfo() {
  return (
    <Grid container display="flex">
      <Typography variant="h4">
        Deseja alterar suas informações de segurança?
      </Typography>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        spacing={3}
      >
        <Grid
          item
          xs={12}
          md={10}
          display="flex"
          alignItems="center"
          sx={{ mt: 2 }}
        >
          <Typography variant="caption" fontSize={18} sx={{ mr: 2 }}>
            E-mail
          </Typography>
          <Typography variant="body1" fontSize={16} sx={{ mr: 2 }}>
            example@dom.com
          </Typography>
          <IconButton aria-label="Editar e-mail">
            <FaEdit />
          </IconButton>
        </Grid>
        <Divider />
        <Grid item xs={12} md={10} display="flex" alignItems="center">
          <Typography
            variant="caption"
            color="red"
            fontSize={18}
            sx={{ mr: 2 }}
          >
            Senha
          </Typography>
          <IconButton aria-label="Editar senha">
            <FaEdit />
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  );
}
