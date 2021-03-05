import React from 'react';
import { Button, Form, Header, Segment } from 'semantic-ui-react';

export default function EventForm({setFormOpen}) {
    return (
        <Segment clearing>
            <Header content="Create new event" />
            <Form>
                <Form.Field >
                    <input type="text" placeholder="Event Title"/>
                </Form.Field>
                <Form.Field >
                    <input type="text" placeholder="Category"/>
                </Form.Field>
                <Form.Field >
                    <input type="text" placeholder="Description"/>
                </Form.Field>
                <Form.Field >
                    <input type="text" placeholder="City"/>
                </Form.Field>
                <Form.Field >
                    <input type="text" placeholder="Venue"/>
                </Form.Field>
                <Form.Field >
                    <input type="date" placeholder="Date"/>
                </Form.Field>
                <Form.Field >
                <Button type='submit' floated='right' content='Cancel' onClick={() => setFormOpen(false)}/>     
                <Button type='submit' floated='right' positive content='Create'/>
                </Form.Field>
            </Form>
        </Segment>
    )
}