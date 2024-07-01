import logo from './logo.svg';
import './App.css';
import RegistrationForm from './RegistrationForm';
import NavBar from './Component/NavBar/NavBar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { LoginForm } from './Component/LoginForm/LoginForm';
import MovieList from './Component/MovieList/MovieList';
import SeatSelection from './Component/SeatSelection/SeatSelection';
import TicketReservation from './Component/TicketReservation/TicketReservation';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <NavBar />
      {/* <MovieList /> */}
      {/* <SeatSelection />
      <TicketReservation /> */}
     <Routes>
          <Route path='registrationform' element={<RegistrationForm/>}></Route>
          <Route path='login' element={<LoginForm />}></Route>
          <Route path="/movies" element={<MovieList />} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
