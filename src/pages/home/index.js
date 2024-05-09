import { Button } from '@mui/material'
import React from 'react'
import MainSection from './MainSection'
import RentAndChoice from './RentAndChoice'
import LandLords from './LandLords'
import Tenants from './Tenants'
import TenantService from './TenantService'
import VacantRentalBid from './VacantRentalBid'
import PreConstruction from './PreConstruction'
import YourChoice from './YourChoice'
import BidPlatForm from './BidPlatForm'
import BidPlatForm2 from './BidPlatForm2'

export default function Home() {
  return (
    <div>
      <MainSection/>
      <RentAndChoice/>
      <LandLords/>
      <Tenants/>
      <TenantService/>
      <VacantRentalBid/>
      <PreConstruction/>
      <YourChoice/>
      <BidPlatForm/>
      <BidPlatForm2/>
    </div>
  )
}
