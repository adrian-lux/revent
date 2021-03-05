import cuid from 'cuid';
import React, { useState } from 'react';
import { Button, Form, Header, Segment } from 'semantic-ui-react';

export default function EventForm({setFormOpen, setEvents,createEvent,updateEvent,selectedEvent}) {

    const initialValues = selectedEvent ?? {
        title: "",
        category: "",
        description: "",
        city: "",
        venue: "",
        date:"",

    }


    const [values,setValues] = useState(initialValues);

    function handleSubmit(e){
        e.preventDefault();
        console.log(values)

        if(selectedEvent){
            updateEvent({...selectedEvent,...values
            }); 
        }
        else{
        createEvent({...values,
            attendees : [],
            hostedBy: "Bob",
            hostPhotoURL: "",
            id: cuid(),
        });
        }
        setFormOpen(false);
    }

    function handleInputChange(e){
        const {name, value} = e.target;
        
        setValues({...values, [name]: value});
    }

    return (
        <Segment clearing>
            <Header content={selectedEvent? "Edit Event" :"Create new event"} />
            <Form onSubmit={handleSubmit}>
                <Form.Field >
                    <input type="text" placeholder="Event Title" name='title' value={values.title} onChange={e => handleInputChange(e)}/>
                </Form.Field>
                <Form.Field >
                    <input type="text" placeholder="Category" name='category' value={values.category} onChange={e => handleInputChange(e)}/>
                </Form.Field>
                <Form.Field >
                    <input type="text" placeholder="Description" name='description' value={values.description} onChange={e => handleInputChange(e)}/>
                </Form.Field>
                <Form.Field >
                    <input type="text" placeholder="City" name='city' value={values.city} onChange={e => handleInputChange(e)}/>
                </Form.Field>
                <Form.Field >
                    <input type="text" placeholder="Venue" name='venue' value={values.venue} onChange={e => handleInputChange(e)}/>
                </Form.Field>
                <Form.Field >
                    <input type="date" placeholder="Date" name='date' value={values.date} onChange={e => handleInputChange(e)}/>
                </Form.Field>
                <Form.Field >
                <Button type='submit' floated='right' content='Cancel' onClick={() => setFormOpen(false)}/>     
                <Button type='submit' floated='right' positive content={selectedEvent ? 'Update': 'Create'}/>
                </Form.Field>
            </Form>
        </Segment>
    )
}