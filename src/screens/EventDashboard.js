import React from 'react'
import { Grid } from 'semantic-ui-react'
import EventForm from '../components/EventForm'
import EventList from '../components/EventList'
import { sampleData } from '../api/sampleData'

function EventDashboard() {
  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList events={sampleData} />
      </Grid.Column>
      <Grid.Column width={6}>
        <EventForm />
      </Grid.Column>
    </Grid>
  )
}

export default EventDashboard
