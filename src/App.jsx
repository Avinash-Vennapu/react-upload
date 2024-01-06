// import React from 'react'
// import { BrowserRouter,Routes,Route } from 'react-router-dom'
// import LayOut from './LayOut'
// import Home from './Home'
// import ViewAll from './ViewAll'
// import SingleStudent from './SingleStudent'
// import Update from './Update'
// import Errorpage from './Errorpage'

// const App = () => {
//   return (
//     <BrowserRouter>
//     <Routes>
//       <Route path='/' element={<LayOut/>}>
//         <Route index element={<Home/>}/>
//         <Route path='/ViewAll' element={<ViewAll/>}/>
//         <Route path='/singlestu/:id'element={<SingleStudent/>}/>
//         <Route path='/edit/:id'element={<Update/>}/>
//         <Route path='*' element={<Errorpage/>}/>
//       </Route>
//     </Routes>
//     </BrowserRouter>
//   )
// }

// export default App


import LayOut from './LayOut'
import Home from './Home'
import ViewAll from './ViewAll'
import SingleStudent from './SingleStudent'
import Update from './Update'
import Errorpage from './Errorpage'
import React from 'react'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
//
let r=createBrowserRouter([
  {
    path:"/",
    element:<LayOut/>,
    children:[
      {
        index:true,
        element:<Home/>,
      },
      {
        path:"/ViewAll",
        element:<ViewAll/>,
      },
      {
        path:"/singlestu/:id",
        element:<SingleStudent/>,
      },
      {
        path:"edit/:id",
        element:<Update/>
      },
      {
        path:'*',
        element:<Errorpage/>
      }
    ],
  },
]);



const App = () => {
  return (
    <>
    <RouterProvider router={r}></RouterProvider>
    </>
  )
}

export default App

