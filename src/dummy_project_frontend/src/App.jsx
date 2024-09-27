import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import User from "./pages/User";
// import { dummy_project_backend } from 'declarations/dummy_project_backend';

function App() {
  // const [greeting, setGreeting] = useState('');

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   const name = event.target.elements.name.value;
  //   // dummy_project_backend.greet(name).then((greeting) => {
  //   //   setGreeting(greeting);
  //   // });
  //   return false;
  // }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/jobs",
      element: <User />,
    },
  ]);

  return (
    <RouterProvider router={router} />
    // <main>
    //   <img src="/logo2.svg" alt="DFINITY logo" />
    //   <br />
    //   <br />
    //   <form action="#" onSubmit={handleSubmit}>
    //     <label htmlFor="name" className='text-[100rem]'>Enter your name: &nbsp;</label>
    //     <input id="name" alt="Name" type="text" />
    //     <button type="submit">Click Me!</button>
    //   </form>
    //   <section id="greeting">{greeting}</section>
    // </main>
  );
}

export default App;
