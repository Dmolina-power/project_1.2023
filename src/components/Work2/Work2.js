import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const photos = [
  {
    src: '/images/paintpot1.JPG',
    rows: 1,
    cols: 2,
  },
  {
    src: '/images/paintpot2.JPG',
    rows: 1,
    cols: 1,
  },
  {
    src: '/images/piantpot3.JPG',
    rows: 1,
    cols: 1,
  },
  {
    src: '/images/paintpot4.JPG',
    rows: 1,
    cols: 2,
  },
];


const Work = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

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
        Paint & Plant
        </Typography>
        <Typography
          variant="h6"
          component="p"
          color="text.secondary"
          align={'center'}
        >
         Knowing the importance of learning how to love, to protect and to take care of our planet, we are also aiming to create awareness with this project. Participants will paint on a terracota pot and bring home their art with a small plant inside.
        </Typography>
      </Box>
      <Box marginY={4}>
        <ImageList
          variant="quilted"
          cols={3}
          rowHeight={isMd ? 300 : 220}
          gap={isMd ? 16 : 8}
        >
          {photos.map((item, i) => (
            <ImageListItem key={i} cols={item.cols || 2} rows={item.rows || 1}>
              <img
                height={'100%'}
                width={'100%'}
                src={item.src}
                alt="..."
                loading="lazy"
                style={{
                  objectFit: 'fill',
                  cursor: 'poiner',
                  borderRadius: 8,
                  filter:
                    theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
                }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Box>
  );
};

export default Work;
