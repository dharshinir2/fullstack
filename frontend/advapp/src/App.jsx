import { RouterProvider, createBrowserRouter } from "react-router-dom"

import Home from "./pages/Home"
import { Suspense, lazy } from "react"
import Spinner from "./components/Spinner"
import Signup from "./pages/Signup";


import ShowBooking from "./pages/ShowBooking";

import Adminhome from "./pages/Adminhome";
import AdminLogin from "./pages/Adminlogin";
import UserProfile from "./pages/UserProfile";
import Adminprofile from "./pages/Adminprofile";
import Cal from "./components/Cal";
import Adminpending from "./pages/Adminpending";
import Adminviewevent from "./pages/Adminviewevent";
import Adminincome from "./pages/Adminincome";
import Login from "./pages/Login";
import Booking from "./pages/Booking";
import Payment from "./pages/Payment";
import Feedback from "./pages/Feedback";
const LazyAbout=lazy(()=>import('./pages/About'));
const LazyContact=lazy(()=>import('./pages/Contact'));

const App=()=> {
  const router=createBrowserRouter([
    {
      path:'/home',
      element:<Suspense fallback={<Spinner/>}><Home/></Suspense>
    },
    {
      path:'/adminincome',
      element:<Suspense fallback={<Spinner/>}><Adminincome/></Suspense>
    },
    {
      path:'/adminviewevent',
      element:<Suspense fallback={<Spinner/>}><Adminviewevent/></Suspense>
    },
    {
      path:'/adminpending',
      element:<Suspense fallback={<Spinner/>}><Adminpending/></Suspense>
    },
    {
      path:'/admincalender',
      element:<Suspense fallback={<Spinner/>}><Cal/></Suspense>
    },
    {
      path:'/adminprofile',
      element:<Suspense fallback={<Spinner/>}><Adminprofile/></Suspense>
    },
    {
      path:'/userprofile',
      element:<Suspense fallback={<Spinner/>}><UserProfile/></Suspense>
    },
    {
      path:'/adminlogin',
      element:<Suspense fallback={<Spinner/>}><AdminLogin/></Suspense>
    },
    {
      path:'/adminhome',
      element:<Suspense fallback={<Spinner/>}><Adminhome/></Suspense>
    },
    {
      path:'/showbooking',
      element:<Suspense fallback={<Spinner/>}><ShowBooking/></Suspense>
    },
    {
      path:'/login',
      element:<Suspense fallback={<Spinner/>}><Login/></Suspense>
    },
    {
      path:'/editbooking',
      element:<Suspense fallback={<Spinner/>}><Booking/></Suspense>
    },
    {
      path:'/',
      element:<Suspense fallback={<Spinner/>}><Login/></Suspense>
    },
    {
      path:'/payment',
      element:<Suspense fallback={<Spinner/>}><Payment/></Suspense>
    },
    {
      path:'/feedback',
      element:<Suspense fallback={<Spinner/>}><Feedback/></Suspense>
    },
    {
      path:'/signup',
      element:<Suspense fallback={<Spinner/>}><Signup/></Suspense>
    },
    {
      path:'/booking',
      element:<Suspense fallback={<Spinner/>}><Booking/></Suspense>
    },
    {
      path:'/contact',
      element:<Suspense fallback={<Spinner/>}><LazyContact></LazyContact></Suspense>
    },
    {
      path:'/about',
      element:<Suspense fallback={<Spinner/>}><LazyAbout></LazyAbout></Suspense>
    }

  ])
 

  return (
    <>
    <RouterProvider router={router}/>
      
    </>
  )
}

export default App
