import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'



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
  const { authIsReady }= useAuthContext()

  const { mode } = useTheme();
  return (
    <div className={`App ${mode}`}>
      {!authIsReady && <Loader />}
      {authIsReady && (
      <BrowserRouter >
      <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/signup'>
            <Signup />
          </Route>
        </Switch>
      </BrowserRouter>
      )}
    </div>
  );
}

export default App
