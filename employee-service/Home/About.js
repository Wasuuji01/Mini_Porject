import React from 'react'
import '../custom Css/About.css';

const About = () => {
  return (
    <div className="about-page">
      <header className="about-header">
        <h1>About Our Employee Management System</h1>
        <p>Transforming the way you manage your workforce with innovative technology.</p>
      </header>

      <section className="about-content">
        <h2>Our Mission</h2>
        <p>
          At [Your Company Name], our mission is to empower businesses to manage their employees more efficiently. We strive to provide a user-friendly, comprehensive, and secure platform that streamlines HR processes, saving you time and resources.
        </p>

        <h2>What We Do</h2>
        <p>
          Our Employee Management System is designed to be a one-stop solution for all your workforce management needs. We offer a robust suite of features that make it easier for HR teams to handle everyday tasks such as managing employee profiles, tracking attendance, processing leave requests, and conducting performance reviews.
        </p>

        <h2>Why Choose Us?</h2>
        <ul>
          <li>
            <strong>Ease of Use:</strong> Our platform features an intuitive interface, ensuring minimal learning curve and maximum productivity.
          </li>
          <li>
            <strong>Comprehensive Features:</strong> From document management to detailed analytics, our system covers every aspect of employee management.
          </li>
          <li>
            <strong>Security:</strong> We take your data privacy seriously and implement top-notch security measures to keep your information safe.
          </li>
          <li>
            <strong>Customizability:</strong> Tailor the system to meet the unique requirements of your organization, regardless of its size.
          </li>
          <li>
            <strong>24/7 Support:</strong> Our dedicated support team is always here to help, ensuring a smooth experience for your team.
          </li>
        </ul>

        <h2>Our Vision</h2>
        <p>
          We envision a future where HR management is seamless and fully automated, allowing businesses to focus more on growth and employee satisfaction. By constantly innovating and listening to our users' needs, we aim to be the most reliable and efficient Employee Management System on the market.
        </p>
      </section>

      <section className="team-section">
        <h2>Meet Our Team</h2>
        <p>
          Our team is made up of experienced software developers, HR specialists, and customer support professionals dedicated to creating the best possible product for your organization. We are passionate about making your workforce management journey as smooth and efficient as possible.
        </p>
      </section>

      <footer className="about-footer">
        <p>
          Interested in learning more? <strong>Contact us</strong> or <strong>Sign up</strong> today to see how our Employee Management System can revolutionize your HR processes.
        </p>
      </footer>
    </div>
  )
}

export default About