import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {SearchPage} from './Pages/SearchPage'
import { Home } from './Pages/Home';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='/search' element={<SearchPage />}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
