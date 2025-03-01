import { BrowserRouter, Routes, Route } from "react-router";
import Browse from './Browse'
import Login from './Login'

const Body = () => {

    const appRouter = BrowserRouter([
        {
            path: "/",
            element: <Body/>
        },
        {
            path: "/browse",
            element: <Browse/>
        }
    ])

  return (
    <div>
        
        <BrowserRouter>

        <Routes>
            <Route path="/" element={<Login/>}></Route>
            <Route path="/browse" element={<Browse/>}></Route>
        </Routes>

        </BrowserRouter>
    </div>
  )
}

export default Body