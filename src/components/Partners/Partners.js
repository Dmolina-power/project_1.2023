import React from 'react';
import Slider from 'react-slick';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';

const mock = [
  'William Lehman Elementary Mrs. Maria Cecilia Cruz, Principal (4) Mrs. Aileen Garcia, Counselor',
  'Kendale Lakes Elementary Mrs. Martha T Jaureguizar, Principal',
  'Wesley Mathews Elementary Mrs. Jackqueline Maldonado, Counselor John Lengomin, Principal (2) Mrs. Maria Lopez, Lead Teacher',
  'South Dade Middle School Mrs. Maria Medina, Principal Mr. Brian Hamilton',
  'Felix Varela High School Mr. Daniel Vinat, Social Studies teacher(8)',
  'Arthur & Polly Mays Mrs. Maria Freeman, PTSA President (2)',
'Kendale Lakes Elementary Mrs. K. Atkinson, Art Teacher Mrs. Ivette Ceballos, Counselor',
'Jack Gordon Elementary Mrs. D. Baugh, Counselor (3)',
'Bowman Ashe Elementary Mrs. Yamilet Lombard, counselor (3) Dr.Kamela Patton, Principal',
'Dr Carlos Finlay Elementary Mrs. Cecilia Sanchez, Principal • Dr Manuel C. Barreiro Elementary Mrs. Cecilia Sanchez, Principal Mrs.Karla Montes, Art Teacher',
'Oliver Hoover Elementary Mrs. Mindy Lampert, counselor (3)',
'G Holmes Braddock Senior Education Center Mrs. Mary Martin Alegret, Assist Principal',
'Dante Fascell Elementary Mrs. Patricia Ortega, Counselor (3)',
'Christina M. Eve Elementary Mrs Kathy de la Calle, Counselor Mrs Beth Chirino, Art Teacher(2)',
'Miami Gardens Elementary Mrs Camille Lecoutre',
'EWF Stirrup Elementary Dr Marisel Elias Miranda, Principal(2)',
'George Washington Carver Elementary Dr Cheryl Johnson, Principal',
'Devon Aire K-8 center Mrs Heather Parker, Assistant principal',
'Hammocks Middle School Mrs Colondria Williams, Assist Principal Mr Peter Cabrera, Principal',
'Laura Sanders Elementary Mrs Linda Oldenburg',
'Pine Villa Elementary Mrs Marianella Ferris, Art Teacher',
'Miami Dade County School board Member Carlos Curbelo Mrs. Jackie Llama (2)',
'Florida International University Mrs. Leslie Northrup- Dean of Honors College Mrs. Aubrey Burgess, Sustainability office Mrs.Carrie Kashar, Assistant Director Sustainability office',
'Department of Veteran Affairs Mrs. Mary D. Berrocal, Director Mr.Richard L. Vroman, Chief Recreation Therapy',
'West Kendall Baptist Hospital Mrs. Karen Vasell • Miami Art Museum Mrs. Tina Cornely, Art Coordinator Roger M. Burgel, Art Curator',
'Air Alliance Houston Texas Mrs. Sara Heald',
'Miami Beach Botanical Garden Mrs. Laura Jamieson, Exec Director',
'The Children’s Trust Mrs. Emily Cardenas',
'Parks & Recreations Mr. Andrew Goldberg',
'Jungle Island Miami Florida Mrs. Aralis Santana',
'Regis House Mr. Fernando Colon',
'Girls Scout Mrs. Maria T. Green',
'Adrianne Arsht Center Mr. Andrew Goldberg',
'Miami Team Metro Mrs. Rosaline Morales, Regional Coordinator',
'St. Thomas University Vice President Dr. Olga',
'Nova Southeastern University Dr. Suarez',
'Miami Children Hospital Marcel J Deray department of Neurology',
'Torre La Americas Hemisfair Park, San Antonio Texas Tanya S.Drake,Special Project Manager',
'District of Columbia Public Lary- Washington D.C. Elena Tscherny coordinator exhibit and Programs',
'Sexto Dialogo interamericano para la gestión del Agua. Guatemala',
'Carlos Roberto Cobos/ Alberto Palombo.',
'Miami Dade Public Lary System Mr. Nick Garcia',
'Vice president of the United States Mr. Al Gore',
'Congress of the United States Mr. Joe Garcia',
'Florida Senate Mrs. Anitere Flores',
'Miami Dade County Mayor Carlos Alvarez Mayor. Carlos A. Gimenez',
'City of Miami Mayor Carlos Alvarez Mayor Manuel A. Díaz',
'Miami Dade County Commissioners Chairman Joe A. Martinez Chairman Dennis Moss',
'Miami Dade Cultural Affairs Mr. Michael Spring, Director',
'Walt Disney World Mr. Eric Darden',
'The Frost Art Museum Mrs. Linda Power, Curator Mrs. Amy Pollack,Curator',
'Miami Police Department Mrs. Mimi Lam Freedman Mr. James Di Bernardo, Mayor.',
'City of Sugarland, Texas Mayor James A. Thompson',
'Art Miami Laura Lavernia',
'Mayor City of Doral Mayor Juan Carlos Bermudez Mr. Robert L Walker- Parks & Recreation',
'Florida International University Mrs. Leslie Northrup- Dean of Honors College Mrs. Aey Burgess, Sustainability office Mrs.Carrie Kashar, Assistant Director Sustainability office',
'Department of Veteran Affairs Mrs. Mary D. Berrocal, Director Mr.Richard L. Vroman, Chief Recreation Therapy West Kendall Baptist Hospital Mrs. Karen Vasell',




];

const Partners = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.up('xs'), {
    defaultMatches: true,
  });
  const isSm = useMediaQuery(theme.breakpoints.up('sm'), {
    defaultMatches: true,
  });
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const isLg = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches: true,
  });

  let slidesToShow = 2;
  if (isXs) {
    slidesToShow = 2;
  }
  if (isSm) {
    slidesToShow = 3;
  }
  if (isMd) {
    slidesToShow = 4;
  }
  if (isLg) {
    slidesToShow = 5;
  }

  const sliderOpts = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Box>
      <Slider {...sliderOpts}>
        {mock.map((item, i) => (
          <Typography
            variant="h7"
            align={'center'}
            data-aos={'fade-up'}
            gutterBottom
            sx={{
              fontWeight: 700,
              marginTop: 1,
            }}
          >
            {item}
          </Typography>
        ))}
      </Slider>
    </Box>
  );
};

export default Partners;
