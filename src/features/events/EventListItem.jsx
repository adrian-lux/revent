import React from 'react';
import { Segment, Item, Icon, List } from 'semantic-ui-react';
import EventListAttendee from './EventListAttendee';

export default function EventListItem(){

    return (
        <Segment.Group>
            <Segment>
                <Item.Group>
                    <Item>
                        <Item.Image size='tiny' circular src='../../assets/user.png' ></Item.Image>
                        <Item.Content>
                        <Item.Header>
                            Event Title 
                        </Item.Header>
                        <Item.Description>
                            Hosted by Bob.
                        </Item.Description>    
                        </Item.Content>
                        </Item>
                </Item.Group>
            </Segment>
            <Segment>
                <span>
                    <Icon name='clock' /> Date
                    <Icon name='marker' /> Venue
                </span>
            </Segment>
            <Segment secondary>
                <List>
                    <EventListAttendee/>
                </List>
            </Segment>
        </Segment.Group>
    )
}