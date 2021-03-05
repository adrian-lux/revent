import React,{useState} from 'react';
import { Grid, GridColumn } from 'semantic-ui-react';
import EventForm from '../eventForm/EventForm';
import EventList from './EventList';
import {sampleData} from '../../../app/api/sampleData';

export default function EventDashboard({formOpen, setFormOpen,selectedEvent,selectEvent}) {

    const [events,setEvents] = useState(sampleData);

    function handleCreateEvent(event){
      setEvents([...events, event])
    }

    function handleUpdateEvent(updatedEvent){
      setEvents(events.map(
        (event)=>{
          if(event.id === updatedEvent.id){
            return updatedEvent;
          }
          return event;
        }
      ))
      selectEvent(null);
    }

    function handleDeleteEvent(event){
      const reducedEvents = events.filter((evt)=>{
        return evt.id !== event.id
      });
      setEvents(reducedEvents);
    }



    return (<Grid>
            <GridColumn width={10}>
             <EventList events={events} selectEvent={selectEvent} deleteEvent={handleDeleteEvent}/>
            </GridColumn>
            <GridColumn width={6}>
              { formOpen && 
              <EventForm 
              setFormOpen={setFormOpen} 
              setEvents={setEvents} 
              createEvent={handleCreateEvent} 
              updateEvent={handleUpdateEvent}
              selectedEvent={selectedEvent}
              key={selectedEvent && selectedEvent.id}
              />}
            </GridColumn>
            </Grid>)
};