import { Container } from 'semantic-ui-react'
import './App.css'
import Header from './components/Header'
import EventDashboard from './screens/EventDashboard'

function App() {
  return (
    <>
      <Header />
      <Container className='main'>
        <EventDashboard />
      </Container>
    </>
  )
}

export default App
