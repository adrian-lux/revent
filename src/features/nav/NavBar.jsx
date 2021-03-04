import React from 'react';
import {Container, Menu, Button} from 'semantic-ui-react'

export default function NavBar(){

return (
    <Menu inverted fixed="top">
        <Container>
            <Menu.Item　header>
                <img src="assets/logo.png" alt="Logo"/>
                <span style={{paddingLeft: 15}}> Re-vents </span>
            </Menu.Item>
            <Menu.Item name="Events"/>
            <Menu.Item>
                <Button positive inverted content='Create Event'></Button>
            </Menu.Item>
            <Menu.Item position='right'>
                <Button basic inverted content='Login'></Button>
                <Button basic inverted content='Register' style={{marginLeft: 20}}></Button>
            </Menu.Item>
        </Container>
    </Menu>
    )
} 