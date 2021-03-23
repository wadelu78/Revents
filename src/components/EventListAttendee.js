import React from 'react'
import { List, Image } from 'semantic-ui-react'

//the parent in EventList.js is a <List>
function EventListAttendee({ attendee }) {
  return (
    <List.Item>
      <Image size='mini' circular src={attendee.photoURL} />
    </List.Item>
  )
}

export default EventListAttendee
