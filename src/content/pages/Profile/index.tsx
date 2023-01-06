import { Box, Container, Tab, Tabs } from '@mui/material';
import { TabsContext } from '@mui/base';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { useState } from 'react';
import {
  FaInfoCircle,
  FaLock,
  FaFileSignature as FaPlan
} from 'react-icons/fa';
import GeneralInfo from './GeneralInfo';
import { Helmet } from 'react-helmet-async';
import SecurityInfo from './SecurityInfo';

export default function Profile() {
  const [value, setValue] = useState('1');
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      <Helmet>
        <title>Perfil</title>
      </Helmet>

      <Container sx={{ mt: 3 }} maxWidth="md">
        <Box>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList aria-label="tabs example" onChange={handleChange}>
                <Tab
                  label="Informações Gerais"
                  value="1"
                  icon={<FaInfoCircle />}
                  iconPosition="start"
                />
                <Tab
                  label="Segurança"
                  value="2"
                  icon={<FaLock />}
                  iconPosition="start"
                />
                <Tab
                  label="Planos"
                  value="3"
                  icon={<FaPlan />}
                  iconPosition="start"
                />
              </TabList>
            </Box>
            <TabPanel value="1">
              <GeneralInfo />
            </TabPanel>
            <TabPanel value="2">
              <SecurityInfo />
            </TabPanel>
            <TabPanel value="3">Panel three</TabPanel>
          </TabContext>
        </Box>
      </Container>
    </>
  );
}
