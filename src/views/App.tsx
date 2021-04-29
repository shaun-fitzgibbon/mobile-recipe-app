import { Switch, Route } from 'react-router-dom'
import Login from './Login'
import RecipesList from './RecipesList'
import Register from './Register'

function App() {
  return (
    <Switch>
      <Route path='/login'>
        <Login />
      </Route>
      <Route path='/register'>
        <Register />
      </Route>
      <Route path='/'>
        <RecipesList />
      </Route>
    </Switch>
  )
}

export default App
