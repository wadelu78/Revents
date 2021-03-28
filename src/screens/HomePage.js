import React from 'react'
import {
  Container,
  Header,
  Segment,
  Image,
  Button,
  Icon,
} from 'semantic-ui-react'

function HomePage({ history }) {
  return (
    <Segment inverted textAlign='center' className='masthead'>
      <Container>
        <Header as='h1' inverted>
          <Image
            size='massive'
            src='/assets/logo.png'
            style={{ marginBottom: 12 }}
          />
          Revents
        </Header>
        <Button size='huge' inverted onClick={() => history.push('/events')}>
          Get started
          <Icon name='right arrow' inverted />
        </Button>
      </Container>
    </Segment>
  )
}

export default HomePage
