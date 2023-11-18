import HomePage from "./pages/HomePage/HomePage";
import { Route, Routes, BrowserRouter, Link, Outlet } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* Put Your Layout here */}
        {/* This is Part To Show How Links Work */}
        <div className="col-12 alert alert-success">
          <Link className="m-3" to="/">
            Home
          </Link>
          <Link className="m-3" to="/testpath">
            Test Path
          </Link>
          <Link className="m-3" to="/anyThingElese">
            Page 404
          </Link>
        </div>
        <Routes>
          <Route path="/">
            <Route index element={<HomePage />} />
            <Route path="testpath" element={"Router is working"} />
            <Route path="*" element={"Page 404"} />
          </Route>
        </Routes>
        <Outlet />
      </BrowserRouter>
    </div>
  );
}

export default App;
