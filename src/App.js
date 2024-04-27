import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Health from './components/Health';

import Sports from './components/sports';
import Business from './components/Business';
import Tech from './components/Tech';
import Entertainment from './components/Entertainmnet';
import Politics from './components/ploitics';




function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home/>}></Route>
          <Route path="/health" exact element={<Health/>}></Route>
          <Route path="/sports" exact element={<Sports />}></Route>
          <Route path="/business" exact element={<Business/>}></Route>
          <Route
            path="/technology"
            exact
            element={<Tech />}
          ></Route>
          <Route
            path="/entertainment"
            exact
            element={<Entertainment/>}
          ></Route>
          <Route path="/politics" exact element={<Politics />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
