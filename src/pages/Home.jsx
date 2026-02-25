import React from 'react'
import HeroHome from '../components/home/HeroHome'
import PopularCategories from '../components/home/PopularCategories'
import ChefSpecials from '../components/home/ChefSpecials'
import NewMenuCTA from '../components/home/NewMenuCTA'

export default function Home() {
  return (
    <div>
      <HeroHome/>
      <PopularCategories/>
      <ChefSpecials/>
      <NewMenuCTA/>
    </div>
  )
}
