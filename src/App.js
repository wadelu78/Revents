import React, { useState } from 'react'
import { Container } from 'semantic-ui-react'
import './App.css'
import Header from './components/Header'
import EventDashboard from './screens/EventDashboard'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomePage from './screens/HomePage'
import EventDetailPage from './screens/EventDetailPage'
import EventForm from './components/EventForm'
import { render } from '@testing-library/react'

function App() {
  const [formOpen, setFormOpen] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState(null)

  function handleSelectEvent(event) {
    setSelectedEvent(event)
    setFormOpen(true)
  }

  function handleCreateFormOpen() {
    setSelectedEvent(null)
    setFormOpen(true)
  }

  return (
    <Router>
      <Route exact path='/' component={HomePage} />
      {/* path is regex, means '/anything' the render the content in the callback ()=>{} */}
      <Route
        path={'/(.+)'}
        render={() => (
          <>
            <Header setFormOpen={handleCreateFormOpen} />
            <Container className='main'>
              <Route exact path='/events' component={EventDashboard} />
              <Route path='/events/:id' component={EventDetailPage} />
              <Route path='/createEvent' component={EventForm} />
            </Container>
          </>
        )}
      />
    </Router>
  )
}

export default App
