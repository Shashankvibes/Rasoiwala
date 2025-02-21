    //header
    //---logo , nav list item(right side), cart;


    //body
    //-searchbar
    //-restraunt list
    //restraunt card x10
    //--restraunt info
    //image of restraunt
    //rating of restraunt and cuisine


    //footer
    //---links, copyright, 

import React, { lazy,Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
//Default import
import Header,{Title} from "./components/Header.jsx";
//Named import
//import { Title } from "./components/Header";
import Body from "./components/Body.jsx";
import Footer from "./components/footer.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
// import About from "./components/About.jsx";
import Error from "./components/Error.jsx";
import Contact from "./components/contact.jsx";
import { Outlet } from "react-router";
import RestrauntMenu from "./components/RestrauntMenu.jsx";
import Profile from "./components/Profile.jsx"; 
import { Provider } from "react-redux";
import store from "./utils/store.js";
import Cart from "./components/Cart.jsx";

const GharKaMart = lazy(() => import("./components/GharKaMart.jsx"));
const About = lazy(() => import("./components/About.jsx"));

//chunking
//code spilliting
//lazy loading  ------>
//bundling: make logical bundles in the application
//on demand loading
//mmt is a image heavy website 




const AppLayout = () =>{

// const [user, setUser] = useState({
//   names: "Shashank",
//   email: "shashank01@gmail.com",
// });



  return(
  <>
  <>
  <Provider store={store}>
    <Header />
    {/* Outlet is use similar as an polaceholder , for the thing it will contain for ex. about etc */}
    <Outlet/>
    <Footer />  
    </Provider>
    </>  
  </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
    element: <Body/>,
    errorElement: <Error/>,
      },
      {
        path: "/about",
    element: <About/>,
    errorElement: <Error/>,
    children:[
      {
        path: "profile",
        element: <Profile/>,
        errorElement: <Error/>,
      },
    ]
      },
      {
        path: "/contact",
    element: <Contact/>,
    errorElement: <Error/>,
      },
      
      {
        path: "/restraunt/:resId",
    element: <RestrauntMenu/>,
    errorElement: <Error/>,
      },
      {
        path: "/GharKaMart",
        element: (
            <Suspense fallback={<div>Loading...</div>}>
                <GharKaMart />
            </Suspense>
        ),
        errorElement: <Error />,
    },
    {
      path: "/cart",
      element: <Cart />,
      
    }
    ]
  },

])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
