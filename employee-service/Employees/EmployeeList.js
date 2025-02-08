import React, { useEffect, useState } from 'react'
import { useNavigate} from 'react-router-dom'
import EmployeeService from '../Services/EmployeeService';


const EmployeesList = () => {

  const [loading, setLoading] = useState(true);
  const [Employees, setEmployees] = React.useState();

  React.useEffect(() => {

      const fetctData = async () => {
        setLoading(true);
        try {
          const response = await EmployeeService.getEmployees();
          setEmployees(response.data);
        } catch (error) {
          console.log(error);
        } 
        setLoading(false); 
      };
      fetctData();
  }, []);

  const deleteEmployee = (id) => {
    EmployeeService.deleteEmployeeById(id)
    .then(() => {
      if(Employees){
        setEmployees((prevElements) => {
          return prevElements.filter((Employee) => Employee.id !== id);
        })
      }
    })
  };

  const editEmployee = (id) => {
    navigate(`/editEmployee/${id}`);
  };

    const navigate = useNavigate();
  return (
  <> 
  <div className="mx-100 my-20 rounded shadow py-2 px-0">
        
        <p className='text-6xl text-slate-700 font-bold mx-20 my-6'>👨‍💻 Employees List</p>
        

  <div className="container text-2xl align-center mx-20 my-4">
  <div>
    <table className="bg-transparent-hover shadow-md rounded">
      <thead className="bg-slate-700 text-left rounded">
        <th className="px-4 py-2 uppercase tracking-wider"> Name </th>
        <th className="px-4 py-2 uppercase tracking-wider"> Phone </th>
        <th className="px-6 py-2 uppercase tracking-wider"> Email </th>
        <th className="px-4 py-2 uppercase tracking-wider"> Action </th>  
      </thead>
      {!loading && 
      (
      <tbody>
        {Employees.map((Employee) => (
        <tr key={Employee.id}
        className="hover:bg-white hover:text-black rounded">
        <td className="text-left px-6 py-4 whitespace-nowrap">{Employee.name}</td>
        <td className="text-left px-6 py-4 whitespace-nowrap">{Employee.phone}</td>
        <td className="text-left px-6 py-4 whitespace-nowrap">{Employee.email}</td>
        <td className="text-left px-6 py-4 whitespace-nowrap">

          <a onClick={(id) => editEmployee(Employee.id)}  
          className='text-2xl hover:text-green-600 hover:cursor-pointer'
          > Edit 📝</a>

          <a onClick={(id) => deleteEmployee(Employee.id)}  
          className='text-2xl hover:text-red-600 hover:cursor-pointer'        
          > Delete 🗑️</a>

        </td>
        </tr>
      ))}  
      </tbody>
    )}  
    </table>
  </div>
</div>
</div> 
</> 
  )
}

export default EmployeesList