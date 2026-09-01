// import { useState } from "react";
import "./App.css";
// import { Button } from "./components/Button";
// import Form from "./components/Form";
// import Profile from "./components/Profile";
import Home from "./pages/landing/Home";
import About from "./pages/landing/About";
import { Route, Routes } from "react-router-dom";
import Contact from "./pages/landing/Contact";
import DashBoardLayout from "./pages/dashboard/DashboardLayout";
import Login from "./pages/Login";
import ProtectedRoute from "./routes/ProtectedRoute";
import Products from "./components/Product";


function App() {
  // const [cart, setCart] = useState(0)
  // const profileData = [
  //   {
  //     name: "Alex"
  //   }, {
  //     name: "George"
  //   }, {
  //     name: "John"
  //   }
  // ]

  // let existingAccount = false;
  {/* <Form />
    {
      profileData.map((profile)=>{
        return <Navbar name={profile.name} />
      })
    }
    <Button onClick={()=> setCart(cart + 1)}>Add to Cart</Button>
    <Button onClick={()=> alert(existingAccount? "User exist" : "User Not Found")}>Click Me!</Button>

    <h1>Fetched Data</h1>
    <Profile /> */}

  return (
    <>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<DashBoardLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/products/:id" element={<Products />} />
        <Route path="*" element={<h1>404, page not found</h1>} />
      </Routes>
    </>
  );
}

export default App;



// Hooks are special React functions that let functional components use React features such as:

// State
// Lifecycle methods
// Context
// References



// Rules of Hooks

// Hooks should:

// Be called at the top level of a component.
// Never be inside loops.
// Never be inside conditions.
// Never be inside nested functions.