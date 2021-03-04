import './styles.css';
import EventDashboard from '../../features/events/EventDashboard'
import NavBar from '../../features/nav/NavBar'
import {Container} from 'semantic-ui-react'
import EventList from '../../features/events/EventList'

function App() {
  return (
    <>
      <h1>
        Re-vent
      </h1>  
      <NavBar/>
      <Container className='main'>
        <EventDashboard/>
        <EventList/>
      </Container>
    
    </>
  );
}

export default App;
