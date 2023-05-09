import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const mock = [
  {
    image: '/images/cube5.jpg',
  },
  {
    image: '/images/cube7.jpg',
  },
  {
    image: '/images/cube9.jpg',
  },
  {
    image: '/images/cube1.jpg',
  },
  {
    image: '/images/cube2.JPG',
  },
  {
    image: '/images/cube6.JPG',
  },
  {
    image: '/images/cube8.jpg',
  },
  {
    image: '/images/cube10.jpg',
  },
  {
    image: '/images/cube12.jpg',
  },
  {
    image: '/images/cube13.JPG',
  },
];

const Folio = () => {
  const theme = useTheme();
  return (
    <Box>
      <Grid container spacing={2}>
        {mock.map((item, i) => (
          <Grid key={i} item xs={12} md={6}>
            <Box
              sx={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: 2,
                '&:hover': {
                  '& img': {
                    transform: 'scale(1.2)',
                  },
                },
              }}
            >
              <Box
                component={'img'}
                loading="lazy"
                height={1}
                width={1}
                src={item.image}
                alt="..."
                minHeight={{ xs: 400, md: 600 }}
                sx={{
                  transition: 'transform .7s ease !important',
                  transform: 'scale(1.0)',
                  objectFit: 'cover',
                  filter:
                    theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
                }}
              />
              <Box
                position={'absolute'}
                bottom={0}
                left={0}
                right={0}
                padding={3}
                sx={{
                  backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 2%, ${item.color})`,
                }}
              >
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Folio;
