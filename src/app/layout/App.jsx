import './styles.css';
import EventDashboard from '../../features/events/eventDashboard/EventDashboard'
import NavBar from '../../features/nav/NavBar'
import {Container} from 'semantic-ui-react'
import {useState} from 'react';

function App() {

  const [formOpen,setFormOpen] = useState(false);


  return (
    <>
      <h1>
        Re-vent
      </h1>  
      <NavBar setFormOpen={setFormOpen} />
      <Container className='main' style={{paddingTop:30}}>
        <EventDashboard formOpen={formOpen} setFormOpen={setFormOpen} />
      </Container>
    
    </>
  );
}

export default App;
