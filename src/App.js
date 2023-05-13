import { Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import Homepage from "./component/Homepage";
import Movies from "./component/Movies/Movies";
import Admin from "./component/admin/Admin";
import Auth from "./component/auth/Auth";
import {useDispatch, useSelector} from "react-redux";
import { useEffect } from "react";
import { adminActions, userActions } from "./store";
import Booking from "./component/Bookings/Booking";
import UserProfile from "./Profile/UserProfile";
import AddMovies from "./component/Movies/AddMovies";
import AdminProfile from "./Profile/AdminProfile";
 
function App() {
  const dispatch = useDispatch();
  const isAdminLoggedIn = useSelector((state)=>state.admin.isLoggedIn)
  const isUserLoggedIn = useSelector((state)=>state.user.isLoggedIn)

  console.log("isAdminLoggedIn: ", isAdminLoggedIn);
  console.log("isUserLoggedIn: ", isUserLoggedIn);

  useEffect(() => {
    if (localStorage.getItem("userId")) {
      dispatch(userActions.login());
    }
    else if(localStorage.getItem("adminId")) {
      dispatch(adminActions.login());
    }
  }, );
  
  return (
   <div>
   <Header />
    <section>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/movies" element={<Movies/>} />
        <Route path="/admin" element={<Admin/>} />
        <Route path="/auth" element={<Auth/>} />
        <Route path="/booking/:id" element={<Booking/>} />
        <Route path="/user" element={<UserProfile/>} />
        <Route path="/add" element={<AddMovies/>}/>
        <Route path="/user-admin" element={<AdminProfile/>}/>
      </Routes>
    </section>
   </div>
  );
}

export default App;