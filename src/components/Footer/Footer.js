import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

const Footer = () => {
  const theme = useTheme();
  const { mode } = theme.palette;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
          width={1}
          flexDirection={{ xs: 'column', sm: 'row' }}
        >
          <Box
            display={'flex'}
            component="a"
            href="/"
            title="PIAG"
            width={80}
          >
            <Box component={'img'} src={'/images/logo1.png'} height={1} width={1} />
          </Box>
          <Box display="flex" flexWrap={'wrap'} alignItems={'center'}>
            <Box marginTop={1} marginRight={2}>
              <Typography
                align={'right'}
                variant={'caption'}
                color="text.secondary"
                component={'p'}
              >
                Mireya Perez-Power 
                <br />
                President & Director 
                <br />
                Email:Ayerimzerep@gmail.com
                <br />
                 Phone: 305-443-0770
              </Typography>
            </Box>
            <Box marginTop={1} marginRight={2}>
            <Typography
                align={'right'}
                variant={'caption'}
                color="text.secondary"
                component={'p'}
              >
                Martha Power-Perez 
                <br />
                Coordinator
                <br />
                Email: marthapower@mac.com
                <br />
                Phone: 786-712-2872
              </Typography>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Typography
          align={'center'}
          variant={'subtitle2'}
          color="text.secondary"
          gutterBottom
        >
          &copy; PIAG MUSEUM, 2023. All rights reserved
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
