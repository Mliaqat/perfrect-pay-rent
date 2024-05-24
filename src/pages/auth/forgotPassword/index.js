import { Grid } from '@mui/material'
import React from 'react'
import SideBar from './SideBar'
import EnterEmail from './EnterEmail'

export default function ForgotPassword() {
  return (
    <Grid container height={'91.2vh'}>
        <Grid item lg={2.8} md={4} sm={12} xs={12}>
            <SideBar/>
        </Grid>
        <Grid item lg={9.2} md={8} sm={12} xs={12}>
            <EnterEmail/>
        </Grid>
    </Grid>
  )
}
