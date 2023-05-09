import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';


const HowItWorks = () => {
  return (
    <Box width={1} height={1} data-aos={'fade-up'} component={Card}>
      <CardContent>
        <Box>
          <Box marginBottom={4}>
            <Box marginBottom={2}>
            
            </Box>
            <Typography
        variant={'h4'}
        color={'secondary'}
        align={'center'}
        fontWeight={'normal'}
      >
        “Today we are proud to say, our mission and our goals have taken us to places, to people, to communities that have welcomed our knowledge, our services and our love for art with opened arms. And on their behalf we will continue to do so for many years to come.”
      </Typography>
          </Box>
          
        </Box>
      </CardContent>
    </Box>
  );
};

export default HowItWorks;
