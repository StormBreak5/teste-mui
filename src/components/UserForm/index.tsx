import {
  Box,
  Button,
  Card,
  CardHeader,
  Container,
  Divider,
  Grid,
  TextField
} from '@mui/material';
import Controls from '../Controls/Controls';

import { useForm, Form } from '../../hooks/useForm';

const initialValues = {
  id: 0,
  name: '',
  fName: '',
  email: '',
  password: ''
};

export default function UserForm() {
  const { values, setValues, handleInputChange } = useForm(initialValues);

  return (
    <>
      <Container maxWidth={false}>
        <Grid container>
          <Grid item>
            <Card>
              {/* <CardHeader title="Cadastro de Usuário" />
              <Divider /> */}
              <Form>
                <Box
                  component="form"
                  autoComplete="on"
                  sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' }
                  }}
                >
                  <div>
                    <TextField
                      required
                      label="Nome"
                      variant="outlined"
                      name="name"
                      placeholder="Seu nome"
                      value={values.name}
                      onChange={handleInputChange}
                    />
                    <TextField
                      required
                      label="Sobrenome"
                      variant="outlined"
                      name="fName"
                      placeholder="Sobrenome"
                      value={values.fName}
                      onChange={handleInputChange}
                    />
                  </div>
                </Box>
                <Box
                  component="form"
                  autoComplete="on"
                  sx={{
                    '& .MuiTextField-root': {
                      marginY: 0.5,
                      marginX: 1,
                      width: '52ch'
                    }
                  }}
                >
                  <div>
                    <TextField
                      required
                      fullWidth
                      label="E-mail"
                      variant="outlined"
                      value={values.email}
                      placeholder="Seu e-mail"
                    />
                  </div>
                  <div>
                    <TextField
                      required
                      fullWidth
                      label="Confirmação de e-mail"
                      variant="outlined"
                      placeholder="Confirme o e-mail"
                    />
                  </div>
                </Box>
                <Box
                  component="form"
                  autoComplete="on"
                  sx={{
                    '& .MuiTextField-root': {
                      width: '52ch'
                    }
                  }}
                >
                  <div>
                    <TextField
                      required
                      fullWidth
                      label="Senha"
                      variant="outlined"
                      value={values.password}
                      type="password"
                      placeholder="Senha"
                      sx={{ my: 0.5, mx: 1 }}
                    />
                  </div>
                  <div>
                    <TextField
                      required
                      fullWidth
                      label="Confirmação de senha"
                      variant="outlined"
                      type="password"
                      placeholder="Confirme a senha"
                      sx={{ mt: 0.5, mx: 1, mb: 2 }}
                    />
                  </div>
                </Box>
                <Divider />
                <Box sx={{ display: 'flex', justifyContent: 'end', m: 1 }}>
                  <Controls.Button text="Cadastrar" />
                </Box>
              </Form>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
