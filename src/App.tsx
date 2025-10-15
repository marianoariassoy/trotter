import { Route, Switch } from 'wouter'
import Home from './pages/home'
import Posts from './pages/posts'

const App = () => {
  return (
    <Switch>
      <Route
        path='/'
        component={Home}
      />
      <Route
        path='/articles/:slug'
        component={Posts}
      />
      <Route
        path='/videos/:slug'
        component={Posts}
      />
      <Route
        path='/posts/:slug'
        component={Posts}
      />
    </Switch>
  )
}

export default App
