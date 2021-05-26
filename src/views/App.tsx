import { Switch, Route } from 'react-router-dom'
import { CssBaseline } from '@material-ui/core'

import BottomNav from '../components/BottomNav/BottomNav'
import Login from './Login'
import Profile from './Profile'
import RecipesList from './RecipesList'
import RecipeSingle from './RecipeSingle'
import Register from './Register'

function App() {
  return (
    <>
      <CssBaseline />

      <Switch>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/register'>
          <Register />
        </Route>
        <Route path='/profile'>
          <Profile />
          <BottomNav />
        </Route>
        <Route path='/recipe'>
          <RecipeSingle />
        </Route>
        <Route path='/'>
          <RecipesList />
          <BottomNav />
        </Route>
      </Switch>
    </>
  )
}

export default App
