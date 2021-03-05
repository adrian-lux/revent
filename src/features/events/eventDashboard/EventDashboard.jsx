import React,{useState} from 'react';
import { Grid, GridColumn } from 'semantic-ui-react';
import EventForm from '../eventForm/EventForm';
import EventList from './EventList';
import {sampleData} from '../../../app/api/sampleData';

export default function EventDashboard({formOpen, setFormOpen}) {

    const [events,setEvents] = useState(sampleData);

    return (<Grid>
            <GridColumn width={10}>
              
            <EventList events={events}/>

            </GridColumn>
            <GridColumn width={6}>
              { formOpen && <EventForm setFormOpen={setFormOpen}/>}
            </GridColumn>
            </Grid>)
};