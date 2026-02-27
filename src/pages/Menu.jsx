import React from 'react'
import MenuBanner from '../components/menu/MenuBanner'
import MenuCategories from '../components/menu/MenuCategories'
import MenuSection from '../components/menu/MenuSection'
import { entreeMenu, popularMenu, swallowMenu } from "../data/MenuData"

export default function Menu() {
  return (
    <div>
      <MenuBanner/>
      <MenuCategories />
      <MenuSection
        title="Popular"
        items={ popularMenu }
      />
      <MenuSection
        title="Jollof Rice and Entrees"
        items={ entreeMenu }
      />
      <MenuSection
        title="Swallow & Soup"
        items={ swallowMenu }
      />
    </div>
  )
}
