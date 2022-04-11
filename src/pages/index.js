import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Typography, Box } from '@mui/material'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import moment from 'moment'

import { useCountdown } from '../context/AppContext'

import DateTimePicker from '../components/DateTimePicker'
import NavBar from '../components/NavBar'
import EdgePanel from '../components/EdgePanel'
import Footer from '../components/Footer'
import MainContent from '../components/MainContent'
import LoadingScreen from '../components/LoadingScreen'

export default function Home(props) {
  const router = useRouter()
  const { app, setApp, countdown, setCountdown } = useCountdown()

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };


  return (
    <Box container sx={{
      minHeight: "100vh",
      minWidth: "100vw",
      flexDirection: "column",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: 0,
      padding: 0,
    }}>
      <Head>
        <title>Countdown App</title>
        <meta name="description" content="Created by Trillium Smith" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar
        drawerWidth={240}
        handleDrawerToggle={handleDrawerToggle}
      />

      <Box as="main" sx={{
        alignItems: "center",
        justifyContent: "space-between",
        display: "flex",
        minHeight: "100vh",
        mt: 0,
        mb: 0,
      }}>
        {(app.isLoaded
          ? <MainContent />
          : <LoadingScreen />
        )}
      </Box>

      <Footer className={styles.footer} />
    </Box>
  )

}