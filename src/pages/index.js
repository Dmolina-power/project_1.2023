import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Hero from '../components/Hero'
import Story from '../components/Story'
import Container from '../components/Container'
import Box from '@mui/material/Box';
import Activities from '../components/Advantages'
import Spaces from '../components/Work'
import Folio from '../components/Folio'
import Work2 from '../components/Work2'
import Work3 from '@/components/Work3'
import Work4 from '@/components/Work4'
import HowItWorks from '@/components/HowItWorks'
import HowItWorks2 from '@/components/HowItWorks2'
import HowItWorks3 from '@/components/HowItWorks3'
import { useTheme } from '@mui/material/styles';
import Director from '../components/Director'
import  Footer  from '../components/Footer'
import Topbar2 from '../components/Topbar2'
import Partners from '../components/Partners'
import Folio2 from '../components/Folio2'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const theme = useTheme();
  return (
    <>
      <Head>
        <title>DMC</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Topbar2 />
        <Hero />
        <Box bgcolor={'alternate.main'}>
        <Container>
        <Story />
        </Container>
        </Box>
        <Container>
        <Activities />
        </Container>
        <Box bgcolor={'alternate.main'}>
        <Container>
          <Spaces />
        </Container>
        </Box>
        <Container>
          <Folio />
        </Container>
        <Box bgcolor={'alternate.main'}>
        <Container>
          <Work2 />
        </Container>
        </Box>
        <Container>
          <Work3 />
        </Container>
        <Box bgcolor={'alternate.main'}>
        <Container>
          <Work4 />
        </Container>
        </Box>
        <Box
        sx={{
          backgroundImage: `linear-gradient(180deg, ${theme.palette.alternate.main} 50%, ${theme.palette.background.paper} 0%)`,
        }}
      >
        <Container>
          <HowItWorks />
        </Container>
      </Box>
      <Box bgcolor={'alternate.main'}>
      <Container>
          <Director />
        </Container>
        </Box>
        <Box
        sx={{
          backgroundImage: `linear-gradient(180deg, ${theme.palette.alternate.main} 50%, ${theme.palette.background.paper} 0%)`,
        }}
      >
        <Container>
          <HowItWorks2 />
        </Container>
        </Box>
        <Container>
          <Folio2 />
        </Container>
        <Box
        sx={{
          backgroundImage: `linear-gradient(180deg, ${theme.palette.alternate.main} 50%, ${theme.palette.background.paper} 0%)`,
        }}
      >
        <Container>
          <HowItWorks3 />
        </Container>
        </Box>
        <Box bgcolor={'primary.main'}>
        <Container paddingX={'0 !important'} maxWidth={1}>
        <Partners />
        </Container>
        </Box>
        <Footer />
      </main>
    </>
  )
}
