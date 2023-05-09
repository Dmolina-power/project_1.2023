import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';




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
        Art Exhibitions
        </Typography>
      </Box>
      <Box paddingX={{ xs: 0, sm: 4, md: 6 }}>
        <Typography variant={'subtitle1'}>
        Art must be experienced in person to truly get a sense of its magnitude and to truly appreciate it. What a better way to expose the artist work and for the public to appreciate it than with Art exhibitions. Many artist are rejected in art galleries because they do not have an extensive curriculum. Piag Museum gives opportunity to artists of all ages to showcase their work considering more their talent, creativity and quality of art work rather than his resume. We will continue to do Art exhibitions and also floating art exhibitions for the enjoyment of the young and old.
        </Typography>
        <Box width={1} height={1} marginY={4}>
          <img
            height={'100%'}
            width={'100%'}
            src={'/images/Manuel Espinoza Piag Museum 2005 copy (1).jpg'}
            alt="Remote working"
            loading="lazy"
            style={{
              filter:
                theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
              objectFit: 'cover',
              borderRadius: 8,
              width: '100%',
              height: '100%',
              maxHeight: 400,
            }}
          />
        </Box>
        </Box>
    </Box>
  );
};

export default Work;
