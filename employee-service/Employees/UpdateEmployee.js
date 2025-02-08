import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import EmployeeService from '../Services//EmployeeService'

const UpdateEmployee = () => {

    const {id} = useParams();
    const navigate = useNavigate();
  const [employee, setEmployee] = React.useState({
    id: id,
    name: "",
    phone: "",
    email: "",
  });

  const UpdateEmployee = () => {
    EmployeeService.updateEmployee(employee,id)
    .then((response) => {
      console.log("save",response.data);
      navigate("/employeesList");
    })
    .catch((error) => {
      console.log(error);
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEmployee((prevEmployee) => ({
      ...prevEmployee,
      [name]: value,
    }));
  }

  React.useEffect(() => {
    const fetctData = async () => {
      try {
        const response = await EmployeeService.getEmployeeById(employee.id);
        setEmployee(response.data);
      } catch (error) {
        console.log(error);
      } 
    };
    fetctData();
}, [employee.id]);

  return (
    <div className="max-w-xl mx-40 bg-slate-800 my-20 rounded shadow py-4 px-8">
        <div className='text-4xl tracking-wider semifont-bold text-center py-4 px-8'>
        <p> Update 👨‍💻 Employee </p>
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
        onClick={UpdateEmployee}
        className='bg-green-400 hover:bg-green-700 font-semibold px-6 py-2 rounded' > Update </button>

        <button
        onClick={() => navigate("/employeesList")}
        className='bg-red-400 hover:bg-red-700 font-semibold px-6 py-2 rounded'> Cancel </button>
        </div>
    </div>
  )
}

export default UpdateEmployee