import { Grid } from '@mui/material'
import React from 'react'
import SideBar from './SideBar'
import LoginForm from './LoginForm'

export default function Login() {
  return (
    <Grid container height={'91.2vh'}>
        <Grid item lg={2.8}>
            <SideBar/>
        </Grid>
        <Grid item lg={9.2}>
            <LoginForm/>
        </Grid>
    </Grid>
  )
}
