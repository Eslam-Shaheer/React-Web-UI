// function App() {
//   return <></>;
// }

// export default App;

// import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import React from "react";
// import Nav from "./components/Nav";
// export default class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       userName: "Eslam",
//     };
//   }

//   componentDidMount() {
//     console.log("componentDidMount");

//     console.log(this.state.userName, "After mounting");
//   }

//   componentDidUpdate(prevProps, prevState) {
//     console.log(prevProps);
//     console.log(prevState);
//   }

//   componentWillUnmount() {
//     console.log("componentWillUnmount");
//   }

//   render() {
//     console.log("render");
//     return (
//       <>
//         {/* <span>{this.state.userName}</span> */}
//         {/* <h1>App component</h1> */}
//         <Nav></Nav>
//       </>
//     );
//   }
// }

// import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import React from "react";
// import Nav from "./components/Nav";
// import Sidebar from "./components/Sidebar";
// import Form from "./components/Form";
// import NewForm from "./components/NewForm";

// const App = () => {
//   const [selectedForm, setSelectedForm] = useState("normal form");

//   return (
//     <div>
//       <Nav />
//       <div style={{ display: "flex", gap: 10, height: "100vh" }}>
//         <Sidebar />
//         <div>
//           <div className="d-flex gap-2">
//             <button
//               className="btn btn-primary"
//               onClick={() => setSelectedForm("normal form")}
//             >
//               Normal form
//             </button>
//             <button
//               className="btn btn-secondary"
//               onClick={() => setSelectedForm("React hook form")}
//             >
//               React hook form
//             </button>
//           </div>
//           {selectedForm == "normal form" ? <Form /> : <NewForm />}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Profile from "./routes/Profile";
import Products from "./routes/Products";
import ProfileEdit from "./routes/ProfileEdit";
import Dashboard from "./routes/Dashboard";
import Layout from "./routes/Layout";
import NotFound from "./routes/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import Product from "./routes/Product";
const Login = React.lazy(() => import("./routes/Login"));

const App = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/products",
          element: <Products />,
          // loader: async () => {
          //   await new Promise((resolve) => setTimeout(resolve, 2000));
          // throw new Error();
          //   return { data: [] };
          // },
          errorElement: <NotFound />,
        },
        {
          path: "/login",
          element: (
            <React.Suspense fallback="Loading...">
              <Login />
            </React.Suspense>
          ),
        },
        {
          path: "/contact",
          element: <Contact />,
          // lazy: () => import("./routes/Contact"),
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/product/:productID",
          element: <Product />,
        },
        {
          path: "/profile",
          element: (
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          ),
        },
        {
          path: "/profile/dashboar",
          element: <Dashboard />,
        },
        {
          path: "/profile/edit",
          element: <ProfileEdit />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
};

export default App;

{
  /* <BrowserRouter >
  <Routes>
    <Route path="/" element={<Home />}/> 
   
  </Routes>
</BrowserRouter> */
}
