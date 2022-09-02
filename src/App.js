import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { useAuthContext, user } from './hooks/useAuthContext'



// pages and components
import Home from '../src/pages/home/Home'
import Login from '../src/pages/login/Login'
import Signup from '../src/pages/signup/Signup'
import Navbar from './components/Navbar';
import { useTheme } from './hooks/useTheme';


// styles
import './App.css'
import Loader from './components/Loader'

function App() {
  const { authIsReady, user }= useAuthContext()

  const { mode } = useTheme();
  return (
    <div className={`App ${mode}`}>
      {!authIsReady && <Loader />}
      {authIsReady && (
      <BrowserRouter >
      <Navbar />
        <Switch>
          <Route exact path='/'>
            {!user && <Redirect to="Login" />}
            {user && <Home />}
          </Route>
          <Route path='/login'>
            {user && <Redirect to='/' />}
            {!user &&  <Login />}
          </Route>
          <Route path='/signup'>
            {user && <Redirect to='/' />}
            {!user && <Signup />}
          </Route>
        </Switch>
      </BrowserRouter>
      )}
    </div>
  );
}

export default App
