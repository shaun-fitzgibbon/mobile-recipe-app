import React from 'react'
import styled from 'styled-components'
import Fastfood from '@material-ui/icons/Fastfood'
import FavoriteIcon from '@material-ui/icons/Favorite'
import Person from '@material-ui/icons/Person'

import {
  AppBar,
  BottomNavigation,
  BottomNavigationAction,
} from '@material-ui/core'

const StyledAppBar = styled(AppBar)`
  top: auto;
  bottom: 0;
`

const BottomNav = () => {
  const [value, setValue] = React.useState(0)

  return (
    <StyledAppBar position='fixed'>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue)
        }}
        showLabels
      >
        <BottomNavigationAction label='Recipes' icon={<Fastfood />} />

        <BottomNavigationAction label='Favorites' icon={<FavoriteIcon />} />

        <BottomNavigationAction label='Profile' icon={<Person />} />
      </BottomNavigation>
    </StyledAppBar>
  )
}

export default BottomNav
