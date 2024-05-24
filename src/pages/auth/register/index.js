import { Grid } from '@mui/material'
import React from 'react'
import SideBar from './SideBar'
import TabBar from './tabs'

export default function Register() {
  return (
    <Grid container height={'91.2vh'}>
        <Grid item lg={2.8} sm={12}>
            <SideBar/>
        </Grid>
        <Grid item lg={9.2}>
            <TabBar/>
        </Grid>
    </Grid>
  )
}
