import React from 'react'
import '../custom Css/NavHomepage.css';

const Homepage = () => {
  return (
    <>
      <nav className="navbar">
      <h2> 👨‍💻 EM Service</h2>
      <ul>
        <li>Employees
          <div className="dropdown">
            <ul>

              <li className='a'
                onClick={() => {
                  window.location.href = '/employeesList';
                }}
              >Employee List</li>

              <li className='a'
                onClick={() => {
                  window.location.href = '/addemployee';  
                }}
              >Add Employee</li>

            </ul>
          </div> 
        </li>

        <li
        onClick={() => {
          window.location.href = '/about';
        }}
        >About</li>

        <li
        onClick={() => {
          window.location.href = '/contact';
        }}
        >Contact</li>
      </ul>
    </nav>

    <div className="homepage">
      <header className="header">
        <h1>Employee Management System</h1>
        <p>Efficiently manage your workforce with our comprehensive system.</p>
      </header>

      <section className="introduction">
        <h2>Welcome to the Future of Workforce Management</h2>
        <p>
          Our Employee Management System provides a robust platform for managing your company's workforce. From tracking employee information to monitoring performance and managing leave, our system ensures you have everything you need to streamline HR processes.
        </p>
      </section>

      <section className="features">
        <h2>Key Features</h2>
        <ul>
          <li><strong>Employee Profiles:</strong> Maintain detailed profiles for each employee, including personal details, role, and department.</li>
          <li><strong>Attendance Tracking:</strong> Monitor daily attendance and receive alerts for irregularities.</li>
          <li><strong>Leave Management:</strong> Approve, reject, and manage leave requests seamlessly.</li>
          <li><strong>Performance Reviews:</strong> Conduct performance reviews and track goals to improve employee productivity.</li>
          {/* <li><strong>Document Management:</strong> Upload and store important documents securely.</li> */}
        </ul>
      </section>

      <section className="benefits">
        <h2>Why Choose Our System?</h2>
        <p>
          With our Employee Management System, your HR team can save valuable time and focus on strategic initiatives. The intuitive design and powerful features ensure that your workforce management processes are smooth and efficient.
        </p>
        <p>
          Experience real-time insights, automation of routine tasks, and secure data handling. We prioritize your company's data privacy and ensure that all information is safely stored and accessible.
        </p>
      </section>

      <section className="call-to-action">
        <h2>Get Started Today!</h2>
        <p>Join hundreds of businesses already benefiting from our Employee Management System. Sign up now and revolutionize your HR processes!</p>
      </section>
    </div>

    </>  
  )
}

export default Homepage