/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import { useTheme } from '@mui/material/styles';
import { Container } from '@mui/material';

const Locations = () => {
  const theme = useTheme();

  return (
    <Box>
      <Grid container spacing={4}>
        <Grid item container alignItems={'center'} xs={12} md={6}>
          <Box>
            <Box marginBottom={2}>
              <Typography variant={'h4'} sx={{ fontWeight: 700 }} gutterBottom>
                Meet the Art Director Mireya Perez-Power
              </Typography>
              <Typography color="text.secondary">
                Born in Caracas, Venezuela and since very young was interested
                in the arts. Study arts in Florence Italy when she was a young
                at the Poggie Imperiale. Since then her passion have taken her
                far in the art world. She is a well known Venezuelan painter,
                inventor, art instructor and sculptor.
                <br />
                Mrs. Power’s triumphs have not come without taking her years of
                commitment and much effort. As a result, her enthusiastic
                approach to the arts has made her an important icon in Caracas
                the city where she was born and in the city of Miami and beyond.
                A large number of articles have been written regarding her
                progress, new ideas and projects throughout time and in several
                local, national and international publications.
                <br />
                Her art has appeared in several galleries worldwide. Power’s
                talent for capturing the elements of nature: lights, shades and
                colors especially grays and greens provides her works incredible
                realism.
                <br />
                Her contribution to South Florida community has been recognized
                with numerous letters of supports , awards, commendation and
                proclamations. She received a plaque as one of the 100
                successful Hispanic Women.
                <br />
                Creator of the undulating canvas and the floating art cubes. Her
                unique tri-dimensional landscapes on undulating canvases utilize
                classic characteristics in an original new format. The artist
                titles her recent creation “Landscape on waves”.
                <br />
                The Floating art cubes are part of a project she created in
                which she uses this format ( art cubes) to send a message and
                portray the beauty of nature and the need to protect our
                environment. She is always creating and inventing new ways to
                present art and to showcase it.
                <br />
                President of Power International art gallery in Caracas
                Venezuela and then in Miami Florida Director and founder of Piag
                Museum since 2003, a non profit Organization dedicated to to
                plan, organize, promote and disseminate the visual arts in all
                its forms and manifestations throughout our community, South
                Florida, Nationwide and Worldwide. She promoted emerging as well
                as established artists by implementing art exhibits focused on
                the individual creative qualities rather than on extensive
                resumes.
                <br />
                Her goal is to continue showcasing her art worldwide and also
                reach many people with the Museum art projects , exhibitions and
                art workshops.
              </Typography>
            </Box>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={6}>
                <Box
                  component={ListItem}
                  disableGutters
                  width={'auto'}
                  padding={0}
                >
                  <Box
                    component={ListItemAvatar}
                    minWidth={'auto !important'}
                    marginRight={2}
                  ></Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box height={1} width={1} display={'flex'} flexDirection={'column'}>
            <Box
              component={'img'}
              width={300}
              height={300}
              src={'/images/director.jpg'}
              alt="..."
              marginTop={'20%'}
              marginLeft={'calc(100% - 300px)'}
              zIndex={1}
              borderRadius={'100%'}
              boxShadow={4}
              data-aos={'fade-up'}
              sx={{
                objectFit: 'cover',
                filter:
                  theme.palette.mode === 'dark' ? 'brightness(0.5)' : 'none',
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Locations;
