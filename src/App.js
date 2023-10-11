import { Routes,Route} from 'react-router-dom';
import './App.css';
import Header from './Header';
import DataScience from './DataScience';
import Courses from './Courses';
import About from './About';
function App() {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Header/>}></Route>
          <Route path='/DataScience.js' element={<DataScience/>}></Route>
          <Route path='/Courses.js' element={<Courses/>}></Route>
          <Route path='/About.js' element={<About/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
