import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

const mock = [
  {
    title: ' ',
    description:
      'In this specific project adults & kids use art eco cubes to express the importance of maintaining plants, animals, water and the environment in general and also portray our beautiful nature. The Eco cubes can be painted, sculpted and use it as the main tool to express a message with a positive and educational twist. We are committed to bring projects to the community that bring awareness and to encourage changes to protect our environment.',
    illustration:
      '/images/ cubesMain.jpg',
  },
  {
    title: ' ',
    description:
      'The Piag Museum presented a unique art exhibition in the form of Floating Cubes. Under an environment al theme, this exhibit now has hundred cubes designed by various painters, poets, sculptors, photographers and also children and youth. Each cube has a unique message related to the conservation of our planet. On January, March & April 2009 participating children artists simultaneously placed their artwork in the schools pond as part of a ceremony dedicated to our planet.',
    illustration:
      '/images/cube3.JPG',
  },
  {
    title: ' ',
    description:
      '"The event was also presented earlier this year at the Plaza Cascade of The Miami-Dade Cultural Center, Pelican Island and St. Thomas University, this exhibit will travel to over 30 cities, also Public Schools fand Universities from Miami Dade County and participants will be recognized for their efforts.',
    illustration:
      '/images/cube11.jpg',
  },
  {
    title: ' ',
    description:
      '"It was free of cost for the public and included a complementary brunch and live music. The Mobile Gallery of The Piag Museum, a bus which carries art work inside and travels throughout Miami-Dade County, was also brought to the event so the public could have an opportunity to look at the pieces that hang inside. The Floating Cubes exhibited is one of the various events the Art programs organizes in which the community has an opportunity to participate and learn about art and students get hands-on experience in organizing art events through creative.',
    illustration:
      '/images/cube8.jpg',
  },
];

const Work = () => {
  const theme = useTheme();

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'secondary'}
          align={'center'}
        >
          PIAG MUSEUM
        </Typography>
        <Typography variant={'h4'} sx={{ fontWeight: 700 }} align={'center'}>
         Earth & Water Project
        </Typography>
        <Typography
          variant="h6"
          component="p"
          color="text.secondary"
          align={'center'}
        >
         Enviromental Art a Big Sucess!
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {mock.map((item, i) => (
          <Grid
            data-aos="fade-up"
            data-aos-delay={i * 100}
            data-aos-offset={100}
            data-aos-duration={600}
            key={i}
            item
            container
            xs={12}
            spacing={4}
            direction={i % 2 === 1 ? 'row-reverse' : 'row'}
          >
            <Grid item container alignItems={'center'} xs={12} sm={6}>
              <Box>
                <Typography
                  variant={'h6'}
                  gutterBottom
                  sx={{ fontWeight: 700 }}
                >
                  {item.title}
                </Typography>
                <Typography color="text.secondary">
                  {item.description}
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              container
              justifyContent={'center'}
              alignItems={'center'}
              xs={12}
              sm={6}
            >
              <Box
                component={'img'}
                src={`${
                  theme.palette.mode === 'light'
                    ? item.illustration
                    : item.illustrationDark
                }`}
                alt={item.title}
                width={1}
                maxWidth={'80%'}
              />
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Work;
