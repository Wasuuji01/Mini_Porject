import React from 'react'
import { useNavigate } from 'react-router-dom'
import EmployeeService from '../Services/EmployeeService'

const AddEmployee = () => {
  const [employee, setEmployee] = React.useState({
    id: "",
    name: "",
    phone: "",
    email: "",
  });

  const saveEmployee = () => {
    EmployeeService.saveEmployee(employee)
    .then((response) => {
      console.log("save",response.data);
      navigate("/employeesList");
    })
    .catch((error) => {
      console.log(error);
    });
  };

  const resset = () => {
    
    setEmployee({
      id: "",
      name: "",
      phone: "",
      email: "",
    });
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEmployee((prevEmployee) => ({
      ...prevEmployee,
      [name]: value,
    }));
  }

  const navigate = useNavigate();
  return (
    <div className="max-w-xl mx-40 bg-slate-800 my-20 rounded shadow py-4 px-8">
        <div className='text-4xl tracking-wider semifont-bold text-center py-4 px-8'>
        <p> Add 👨‍💻New Employee </p>
        </div>

        <div className='mx-8 my-2'>
        <input name='name'
        value={employee.name}
        onChange={(event) => handleChange(event)}
        className='w-full py-2 my-1 text-slate-800' type="text" placeholder="Name" />
        
        <input name='phone'
        value={employee.phone}
        onChange={(event) => handleChange(event)}
        className='w-full py-2 my-1 text-slate-800' type="number" placeholder="12365498" />
        
        <input name='email'
        value={employee.email}
        onChange={(event) => handleChange(event)}
        className='w-full py-2 my-1 text-slate-800' type="text" placeholder="name@gmail.com" />
        </div>

        <div className='flex my-4 space-x-4 px-20'>
        <button 
        onClick={saveEmployee}
        className='bg-green-400 hover:bg-green-700 font-semibold px-6 py-2 rounded' > Save </button>

        <button 
        onClick={resset}
        className='bg-blue-400 hover:bg-blue-700 font-semibold px-6 py-2 rounded'> Clear </button>

        <button
        onClick={() => navigate("/homepage")}
        className='bg-red-400 hover:bg-red-700 font-semibold px-6 py-2 rounded'> Cancel </button>
        </div>
    </div>
  )
}

export default AddEmployee