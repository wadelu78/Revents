import React from 'react'
import {
  Icon,
  Item,
  Segment,
  SegmentGroup,
  List,
  Button,
} from 'semantic-ui-react'
import EventListAttendee from './EventListAttendee'

function EventListItem({ event, selectEvent, deleteEvent }) {
  return (
    <SegmentGroup>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image size='tiny' src={event.hostPhotoURL} />
            <Item.Content>
              <Item.Header content={event.title} />
              <Item.Description>Hosted by {event.hostedBy}</Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <Segment>
        <span>
          <Icon name='clock' />
          {event.date}
          <Icon name='marker' />
          {event.venue}
        </span>
      </Segment>
      <Segment secondary>
        <List horizontal>
          {event.attendees.map((attendee) => (
            <EventListAttendee key={attendee.id} attendee={attendee} />
          ))}
        </List>
      </Segment>
      {/* why using clearing */}
      <Segment clearing>
        <span>{event.description}</span>
        <Button
          color='red'
          floated='right'
          content='Delete'
          onClick={() => {
            deleteEvent(event.id)
          }}
        />
        <Button
          color='teal'
          floated='right'
          content='View'
          onClick={() => {
            selectEvent(event)
          }}
        />
      </Segment>
    </SegmentGroup>
  )
}

export default EventListItem
