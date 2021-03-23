import React from 'react'
import { Menu, Container, Button } from 'semantic-ui-react'

function Header() {
  return (
    <Menu inverted fixed='top'>
      <Container>
        <Menu.Item header>
          <img
            src='/assets/logo.png'
            alt='logo'
            style={{ marginRight: '0.5em' }}
          />
          Revents
        </Menu.Item>
        {/* why we add a menu here */}
        <Menu name='Events' />
        <Menu.Item>
          <Button positive inverted content='Create Event' />
        </Menu.Item>
        <Menu.Item>
          <Button basic inverted content='Login' />
          <Button
            basic
            inverted
            content='Register'
            style={{ marginLeft: '0.5em' }}
          />
        </Menu.Item>
      </Container>
    </Menu>
  )
}

export default Header
