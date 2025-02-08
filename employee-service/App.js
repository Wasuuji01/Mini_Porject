import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Homepage from './Home/Homepage';
import About from './Home/About';
import ContactUs from './Home/ContactUs';
import EmployeeList from './Employees/EmployeeList'
import AddEmployee from './Employees/AddEmployee';
import UpdateEmployee from './Employees/UpdateEmployee';


function App() {
  return (
    <>  
    <BrowserRouter>
      <Routes>
        <Route index element = {<Login />} /> 
        <Route path="/login" element = {<Login />} /> 
        <Route path="/register" element={<Register />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path='/employeesList' element={<EmployeeList />} />
        <Route path='/addemployee' element={<AddEmployee />} />
        <Route path='/editEmployee/:id' element={<UpdateEmployee />} />
      </Routes>
    </BrowserRouter>
    </>  
  );
}

export default App;
