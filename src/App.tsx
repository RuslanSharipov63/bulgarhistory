import './App.css';
import MainContainer from './components/main/MainContainer';
import ResultContainer from './components/result/ResultContainer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      
        <Router basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route path="/" element={<MainContainer />} />
            <Route path="/result" element={<ResultContainer />} />
            <Route path="*" element={<MainContainer />} />
          </Routes>
        </Router>

    </div>
  );
}

export default App;
