import {
    AppBar, Box, Container, FormControl, MenuItem, Select, Toolbar, Typography,
  } from '@mui/material';
  
  import './Header.scss';
import React from 'react';

  
  
  
  const Header = () => {
   
    
  
  
    return (
      <AppBar position="static" color="inherit" sx={{ width: '100%', backgroundColor: '#1b202c' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <img src="/assets/logo.png" alt="logo" width={80} height={80} />
            <Box sx={{
              flexGrow: 1, ml: 5, display: 'flex', alignItems: 'center',
            }}
            >
              <FormControl className="selector" sx={{ my: 2 }}>
                <Select value={1} sx={{ border: 'thin solid #fff', color: '#ffffff', caretColor: '#ffffff' }}>
                  <MenuItem value={1}>Bedev</MenuItem>
                  <MenuItem value={2}>HDM Network</MenuItem>
                  <MenuItem value={2}>School of Talents</MenuItem>
                  <MenuItem value={3}>Challenges Associatifs</MenuItem>
                </Select>
              </FormControl>
              <FormControl className="selector" sx={{ ml: 2 }}>
                <Select value={0}  sx={{ border: 'thin solid #fff', color: '#ffffff', caretColor: '#ffffff' }}>
                  <MenuItem value={0} disabled>Créer une page web</MenuItem>
                  <MenuItem value={1} >Statique</MenuItem>
                  <MenuItem value={2}>Article</MenuItem>
                  <MenuItem value={3} >Catégorie</MenuItem>
                </Select>
              </FormControl>
              <FormControl className="selector" sx={{ ml: 2 }}>
                <Select value={0} sx={{ border: 'thin solid #fff', color: '#ffffff', caretColor: '#ffffff' }}>
                  <MenuItem value={0} disabled>Créer une publication</MenuItem>
                  <MenuItem value={1}>Facebook</MenuItem>
                  <MenuItem value={2} >Linkedin</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={{
              flexGrow: 0, display: 'flex', flexDirection: 'column', alignItems: 'center',
            }}
            >
              <div>
                <img src="../../public/assets/levels/1.png" width={42} height={42} />
                <Typography mr={1} fontWeight="500" color="white">Ben</Typography>
              </div>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    );
  };
  
  export default Header;
  