/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';


const Story = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Grid container spacing={4} direction={isMd ? 'row' : 'column'}>
        <Grid item container alignItems={'center'} xs={12} md={6}>
          <Box>
            <Typography variant={'h4'} gutterBottom sx={{ fontWeight: 700 }}>
              Our Mission
            </Typography>
            <Typography component={'p'}>
            PIAG MUSEUM is dedicated to educate, plan, organize, promote and showcase the visual arts in all its forms and manifestations throughout our community in Florida, Nationwide and Worldwide. 
              <br />
              Art is an important tool to provide opportunities for self-expression. We believe that art is a fundamental element in any healthy society , this is why we put an enormous amount of effort in creating outreach programs that will touch the lives of many. 
              <br />
              <br />
              This concept motivates PIAG Museum to provide art education to the community through different programs and art exhibitions for the enjoyment of the artist and the public in general. Today we are proud to say, our mission and our goals have taken us to places, to people, to communities that have welcomed our knowledge, our services and our love for art with opened arms.
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          xs={12}
          md={6}
        >
          <Box maxWidth={500} width={1}>
            <Box
              component={'img'}
              src={
                'images/cube12.jpg'
              }
              width={1}
              height={1}
              sx={{
                filter:
                  theme.palette.mode === 'dark' ? 'brightness(0.8)' : 'none',
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Story;
