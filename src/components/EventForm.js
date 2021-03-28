import React, { useState } from 'react'
import { Form, Header, Segment, Button } from 'semantic-ui-react'
import { v4 as uuidv4 } from 'uuid'

function EventForm({ setFormOpen, createEvent, selectedEvent, updateEvent }) {
  //prop in initial state, anti-pattern?
  const initialValues = selectedEvent ?? {
    title: '',
    category: '',
    city: '',
    venue: '',
    date: '',
  }
  const [values, setValues] = useState(initialValues)

  function handleInputChange(e) {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  function handleFormSubmit() {
    //keep all properties in selectedEvent, then update some of them from values.
    selectedEvent
      ? updateEvent({ ...selectedEvent, ...values })
      : createEvent({
          ...values,
          id: uuidv4(),
          hostedBy: 'Bob',
          attendees: [],
          hostPhotoURL: '/assets/user.png',
        })
    setFormOpen(false)
  }

  return (
    <Segment clearing>
      <Header
        content={selectedEvent ? 'Update the event' : 'Create new event'}
      />
      <Form onSubmit={handleFormSubmit}>
        <Form.Field>
          <input
            name='title'
            type='text'
            placeholder='Event title'
            value={values.title}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type='text'
            placeholder='Category'
            name='category'
            value={values.category}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type='text'
            placeholder='City'
            name='city'
            value={values.city}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type='text'
            placeholder='Venue'
            name='venue'
            value={values.venue}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type='date'
            placeholder='Date'
            name='date'
            value={values.date}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Button type='submit' floated='right' positive content='Submit' />
        <Button
          type='submit'
          floated='right'
          content='Cancel'
          onClick={() => setFormOpen(false)}
        />
      </Form>
    </Segment>
  )
}

export default EventForm
