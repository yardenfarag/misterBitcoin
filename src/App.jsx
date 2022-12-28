import { HashRouter as Router, Navigate, Route, Routes } from 'react-router-dom'
import './assets/styles/styles.scss'
import { AppHeader } from './components/AppHeader'
import { StatisticPage } from './views/StatisticPage'
import { ContactPage } from './views/ContactPage'
import { HomePage } from './views/HomePage'
import { ContactEdit } from './views/ContactEdit'
import { ContactDetails } from './views/ContactDetails'
import { SignupPage } from './views/SignupPage'
import { userService } from './services/user.service'

function App() {
  const PrivateRoute = ({ children }) => {
    const loggedInUser = userService.getUser()
    return loggedInUser ? children : <Navigate to='/signup' />
  }
  return (
    <Router>
      <section className='main-app'>
        <AppHeader />
        <Routes>
          <Route
            path='/'
            element={
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            }
          />
          <Route path='/signup' element={<SignupPage />} />
          <Route
            path='/contact'
            element={
              <PrivateRoute>
                <ContactPage />
              </PrivateRoute>
            }
          />
          <Route
            path='/statistic'
            element={
              <PrivateRoute>
                <StatisticPage />
              </PrivateRoute>
            }
          />
          <Route
            path='/contact/edit/:id'
            element={
              <PrivateRoute>
                <ContactEdit />
              </PrivateRoute>
            }
          />
          <Route
            path='/contact/edit/'
            element={
              <PrivateRoute>
                <ContactEdit />
              </PrivateRoute>
            }
          />
          <Route
            path='/contact/:id'
            element={
              <PrivateRoute>
                <ContactDetails />
              </PrivateRoute>
            }
          />
        </Routes>
      </section>
    </Router>
  )
}

export default App
