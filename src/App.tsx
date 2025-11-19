import { Route, Switch } from 'wouter'
import Home from './pages/home'
import Posts from './pages/posts'
import LegalDisclaimer from './pages/legal'
import PrivacyPolicy from './pages/privacy'

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
      <Route
        path='/legaldisclaimer'
        component={LegalDisclaimer}
      />
      <Route
        path='/privacypolicy'
        component={PrivacyPolicy}
      />
    </Switch>
  )
}

export default App
