import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Nav from './Nav'
import Events from './Events'
import CreateEvent from './CreateEvent'
import UpdateEvent from './UpdateEvent'
import EventDetail from './EventDetail'
import LandingPage from './LandingPage'
function App() {


  return (
   <BrowserRouter>
   <Nav/>
    <Routes>
      <Route path='/' element={<LandingPage/>}></Route>
      <Route path='/events' element={<Events/>}></Route>
      <Route path='/create_events' element={<CreateEvent/>}></Route>
      <Route path='/update_events/:event_id' element={<UpdateEvent/>}></Route>
      <Route path="/event/:event_id" element={<EventDetail />} />
    </Routes>
   </BrowserRouter>
  )
}

export default App
