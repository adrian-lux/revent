import React from 'react';
import { Segment, Item, Icon, List, Button } from 'semantic-ui-react';
import EventListAttendee from './EventListAttendee';

export default function EventListItem({event,selectEvent,deleteEvent}){

    return (
        <Segment.Group>
            <Segment>
                <Item.Group>
                    <Item>
                        <Item.Image size='tiny' circular src={event.hostPhotoURL} ></Item.Image>
                        <Item.Content>
                        <Item.Header>
                            {event.title}
                        </Item.Header>
                        <Item.Description>
                            {event.hostedBy}
                        </Item.Description>    
                        </Item.Content>
                        </Item>
                </Item.Group>
            </Segment>
            <Segment>
                <span>
                    <Icon name='clock' /> {event.date}
                    <Icon name='marker' /> {event.venue}
                </span>
            </Segment>
            <Segment secondary>
                <List horizontal>
                    {event.attendees.map((attendee
                    )=>{
                      return  <EventListAttendee attendee={attendee} key={attendee.id}/>
                    })}
                    
                </List>
            </Segment>
            <Segment clearing>
                <div>{event.description}</div>
                <Button color='teal'floated='right' content='View' onClick={()=>{selectEvent(event)}} ></Button>
                <Button color='red'floated='right' content='Delete' onClick={()=>{deleteEvent(event)}} ></Button>
            </Segment>
        </Segment.Group>
    )
}