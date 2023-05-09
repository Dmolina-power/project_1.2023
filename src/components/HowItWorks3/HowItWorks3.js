import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const HowItWorks = () => {
  return (
    <Box width={1} height={1} data-aos={'fade-up'} component={Card}>
      <CardContent>
        <Box>
          <Box marginBottom={4}>
            <Box marginBottom={2}>
              <Typography
                variant="h4"
                data-aos={'fade-up'}
                gutterBottom
                sx={{
                  fontWeight: 700,
                }}
              >
                Service Endorsements
              </Typography>
            </Box>
            <Typography
              variant={'h4'}
              color={'secondary'}
              align={'center'}
              fontWeight={'normal'}
            >
              We have letters of supports from many Miami Dade Schools. These
              letters and commendations show our path and hard-work, but most
              importantly, the community’s satisfaction. By bringing art
              Exhibitions & art workshops to all ages, from the youngsters with
              their rich imaginations to the senior citizens with their wisdom
              and life long experiences, we have successfully accomplished all
              our goals.
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Box>
  );
};

export default HowItWorks;
