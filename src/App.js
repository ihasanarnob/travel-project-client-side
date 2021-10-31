
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider';
import AddTrek from './Pages/AddTrek/AddTrek';
import Booking from './Pages/Booking/Booking';
import Error404 from './Pages/Error404/Error404';
import Home from './Pages/Home/Home/Home';
import Trekking from './Pages/Home/Trekking/Trekking';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import ManageOrders from './Pages/ManageOrders/ManageOrders';
import Footer from './Shared/Footer/Footer';
import Header from './Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/addtreks">
            <AddTrek></AddTrek>
          </Route>
          <Route path="/booking">
            <Booking></Booking>
          </Route>
          <PrivateRoute path="/booking/:id">
            <Booking></Booking>
          </PrivateRoute>
          <Route path="/trekking">
            <Trekking></Trekking>
          </Route>
          <PrivateRoute path="/manageOrders">
            <ManageOrders></ManageOrders>
          </PrivateRoute>


          <Route path="*">
            <Error404></Error404>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
