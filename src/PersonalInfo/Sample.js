import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import jsPDF from "jspdf";
import htmlDocx from 'html-docx-js/dist/html-docx';
import { useNavigate } from 'react-router-dom';
import Karyalogo from '../Images/karya.jpg';
import logo from '../logo.svg';
import dotnet from '../Images/dotnetimg.png'
const Sample = () => {

    const generatePDF = () => {
        // const doc = new jsPDF();
        // const content = document.querySelector('.Pdf').innerText;
        // const margin = 10;
        // const lineHeight = 8;
        // const pageHeight = doc.internal.pageSize.height;
        // let cursorY = margin;

        // const addContent = (text) => {
        //     const lines = doc.splitTextToSize(text, 180);
        //     lines.forEach((line) => {
        //         if (cursorY + lineHeight > pageHeight - margin) {
        //             doc.addPage();
        //             cursorY = margin;
        //         }
        //         doc.text(line, margin, cursorY);
        //         cursorY += lineHeight;
        //     });
        // };
        // doc.setFontSize(16);
        // doc.text("Resume - Gajjala Pavani", margin, cursorY);
        // cursorY += lineHeight + 5;
        // doc.setFontSize(12);
        // addContent(content);
        // doc.save("Pavani-Resume.pdf");
        window.open('https://pavaniresume.tiiny.site/')
    };
    const OnKarya = () => {
        window.open("https://karya.cloud/");
    }
    const OnShuttleq = () => {
        window.open("https://shuttleq.com/");
    }

    const OnHrvms=()=>{
        window.open("https://www.ehrvms.com/");
    }

    const generateWord = () => {
        // const content = document.querySelector('.Pdf');
        // if (content) {
        //     const contentHTML = content.outerHTML;
        //     const converted = htmlDocx.asBlob(contentHTML);
        //     const link = document.createElement('a');
        //     link.href = URL.createObjectURL(converted);
        //     link.download = 'Pavani-Resume.docx';
        //     link.click();
        // } else {
        //     alert('No content found to generate Word document');
        // }
        window.open('https://pavaniresume.tiiny.site/')
    };

    return (
        <div>
            <div className='Border ms-3  me-2 ms-2'>
                <div className='Pdf'
                >
                    <h1 className='text-danger FontSize'>GAJJALA PAVANI</h1>
                    <h1 className='text-info'>FULL-STACK .NET DEVELOPER | REACTJS DEVELOPER </h1>
                    <div className="subheading mb-5">
                        <a href="https://www.google.com/maps/place/Hyderabad" className="contact-link" >
                            <svg className="fa fa-location-dot" viewBox="0 0 384 512">
                                <path
                                    fill="currentColor"
                                    d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
                                />
                            </svg>
                            Hyderabad, India
                        </a>
                        <a href="tel:+919100925373" className="contact-link">
                            <svg className="fa fa-phone-flip" viewBox="0 0 512 512">
                                <path
                                    fill="currentColor"
                                    d="M347.1 24.6c7.7-18.6 28-28.5 47.4-23.2l88 24C499.9 30.2 512 46 512 64c0 247.4-200.6 448-448 448c-18 0-33.8-12.1-38.6-29.5l-24-88c-5.3-19.4 4.6-39.7 23.2-47.4l96-40c16.3-6.8 35.2-2.1 46.3 11.6L207.3 368c70.4-33.3 127.4-90.3 160.7-160.7L318.7 167c-13.7-11.2-18.4-30-11.6-46.3l40-96z"
                                />
                            </svg>
                            +91-919100925373
                        </a>
                        <a href="mailto:pavanigajjala8@gmail.com" className="contact-link">
                            <svg className="fa fa-envelope" viewBox="0 0 512 512">
                                <path
                                    fill="currentColor"
                                    d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
                                />
                            </svg>
                            pavanigajjala8@gmail.com
                        </a>
                        <a href="Dotnet_Consultant" className="contact-link" onClick={() => generatePDF()}>
                            <svg className="fa fa-file-word" viewBox="0 0 384 512">
                                <path
                                    fill="currentColor"
                                    d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0z"
                                />
                            </svg>
                            Dotnet_Consultant
                        </a>
                        <a href="Dotnet_Consultant" className="contact-link" onClick={() => generateWord()}>
                            <svg className="fa fa-file-pdf" viewBox="0 0 448 512">
                                <path
                                    fill="currentColor"
                                    d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V304H296 272 184 160c-35.3 0-64 28.7-64 64v80 48 16H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z"
                                />
                            </svg>
                            Dotnet_Consultant
                        </a>
                    </div>
                    <div
                        className="m-3 p-3">
                        <h5 className="text-dark fw-bold">
                            With three years of hands-on experience in software development,
                            I am a results-driven <a className='Fullstackdata'>Full-Stack .NET Developer </a>specializing in designing and delivering scalable,
                            high-performance applications. I have a proven track record of turning complex business requirements
                            into robust, user-friendly solutions that drive efficiency and innovation.
                        </h5>
                    </div>
                    <div className='m-3 p-3'>
                        <h3 className='text-primary text-start'>Core Expertise:</h3>
                        <div>
                            <h5 class="text-start">
                                <strong>Backend Development: </strong>
                            </h5>
                            <p className='text-start'>Proficient in ASP.NET Core, C#, Web API, and microservices architecture. Skilled in creating secure, optimized APIs and backend systems that ensure seamless application performance.</p>
                            <h5 class="text-start">
                                <strong>Front Development: </strong>
                            </h5>
                            <p className='text-start'>Expertise in React,Redux,Ajax,Bootstrap,HTML5, CSS3, jQuery
                                and JavaScript frameworks to develop dynamic, responsive user interfaces.</p>
                        </div>
                    </div>
                    <div className="social-media-container">
                        <a href="https://www.linkedin.com/in/pavani-g-64b051234/" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-linkedin SocialMediaIcons"></i>
                        </a>
                        <a href='https://github.com/pavani605' target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-github SocialMediaIcons"></i>
                        </a>
                        <i className="bi bi-twitter SocialMediaIcons"></i>
                        <i className="bi bi-facebook SocialMediaIcons"></i>
                        <i className="bi bi-instagram SocialMediaIcons"></i>
                        <i className="bi bi-youtube SocialMediaIcons"></i>
                        <i className="bi bi-whatsapp SocialMediaIcons"></i>
                        <i className="bi bi-telegram SocialMediaIcons"></i>
                        <i className="bi bi-snapchat SocialMediaIcons"></i>
                        <i className="bi bi-pinterest SocialMediaIcons"></i>
                        <i className="bi bi-reddit SocialMediaIcons"></i>
                        <i className="bi bi-twitch SocialMediaIcons"></i>
                    </div>
                    <hr></hr>
                    <div className='m-3 p-3'>
                        <h1 className='text-primary text-start'>
                            Experience
                        </h1>
                    </div>
                      <div className='m-3 p-3'>
                        <div>
                            <h4 className='text-start'>
                                Software Engineer | Full-Stack .NET Developer
                            </h4>
                            <h5 className="d-flex justify-content-between text-dark fw-bold">
                                <span
                                    className='Fullstackdata'
                                    style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}
                                    onClick={() => {
                                        OnHrvms()
                                    }}
                                >HRVMS (Human Resource Vendor Management System)</span>
                                <span className='Fullstackdata'>March-2025 To Present</span>
                            </h5>
                            <h6 className='text-start'>
                              HRVMS is a SaaS-based, user-friendly application designed to help organizations maintain detailed records of their employees. It empowers employees to create timesheets, raise employee service requests, and manage their tasks effortlessly with a single click. HRVMS aims to streamline internal HR operations and enhance employee satisfaction by providing a centralized, accessible platform.
                            </h6>
                           <p className="text-start">
                            <strong>Features & Deliverables:</strong>
                            <br />
                            Collaborated with UI/UX designers to bridge the gap between visual design and technical implementation, ensuring a smooth and intuitive user experience.
                            <br />
                            Implemented responsive and adaptive design using HTML, CSS, JavaScript, jQuery, and React.js Web APIs.
                            <br />
                            Developed user interfaces aligned with web design and development principles for optimal performance and maintainability.
                            <br />
                            Ensured cross-browser compatibility through extensive testing across modern browsers.
                            <br />
                            Maintained brand standards while consulting on UI best practices and front-end coding conventions.
                            <br />
                            Performed code merging and participated in build and release management activities.
                            <br />
                            Documented use cases to support development clarity and QA processes.
                            <br />
                            Applied asynchronous programming techniques to enhance responsiveness and performance.
                            <br />
                            Followed layered architecture by separating UI components from the logic layer, improving scalability and code organization.
                            </p>
                        </div>
                    </div>
                    <div className='m-3 p-3'>
                        <div>
                            <h4 className='text-start'>
                                Software Engineer | Full-Stack .NET Developer
                            </h4>
                            <h5 className="d-flex justify-content-between text-dark fw-bold">
                                <span
                                    className='Fullstackdata'
                                    style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}
                                    onClick={() => {
                                        OnKarya()
                                    }}
                                >Karya.Cloud</span>
                                <span className='Fullstackdata'>July-2024 To Nov-2024</span>
                            </h5>
                            <h6 className='text-start'>
                                Karya is a SaaS-based All-in-one Business Management Software. Karya is working on revolutionizing the way SMEs operate by bringing a process-oriented approach resulting in increased productivity and accountability. The main Features of Karya is HRM, CRM, Finance and Project Management
                            </h6>
                            <p className='text-start'>
                                <strong> Features & Deliverables:</strong>
                                <br></br>
                                Collaborating with UI/UX designers to bridge the gap between graphical design and technical implementation
                                Implementing web design and development principles to build stable software
                                Building responsive and adaptive web designs using  HTML, CSS, JavaScript, and jQuery,React js Web Apis.
                                Ensuring cross-browser compatibility and testing front-end code in multiple browsers
                                Maintaining brand standards and consulting on UI best practices and code standards
                                Code merging and build/release activities.
                                Writing use cases.
                                Asynchronous programming for better performance.
                                Converting Separate layers for UI and Code behind.
                            </p>
                        </div>
                    </div>
                    <div className='m-3 p-3'>
                        <div>
                            <h4 className='text-start'>
                                Software Engineer | Full-Stack .NET Developer
                            </h4>
                            <h5 className="d-flex justify-content-between text-dark fw-bold">
                                <span
                                    className='Fullstackdata'
                                    style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}
                                    onClick={() => OnShuttleq()} // Remove () to avoid immediate execution
                                >
                                    ShuttleQ.net - Technology Migration (EZ Hospitality, USA)
                                </span>
                                <span className='Fullstackdata'>Nov-2021 To July-2024</span>
                            </h5>
                            <h6 className='text-start'>
                                Technology migration to latest technologies which includes performance and service-oriented programming.
                                It is the system developed for maintaining shuttles to pick up or drop off the customers from the source and destination. The system is well opted for hotels,
                                hospitals and some other small businesses run on customer transportation.
                                These companies can purchase the instance of the system and can use all the features.
                            </h6>
                            <p className='text-start'>
                                <strong> Features & Deliverables:</strong>
                                <br></br>
                                Analyzing the existing application and gathering all requirements.
                                Writing use cases
                                Code merging and build/release activities.
                                Mapping the existing product and comparing and concluding compatible functions and user interface.
                                Google maps upgrades with new module.
                                Separating reports as separate module
                                Asynchronous programming for better performance.
                                Converting Separate layers for UI and Code behind.
                            </p>
                        </div>
                    </div>
                    <div className='m-3 p-3'>
                        <div>
                            <h4 className='text-start'>
                                Software Engineer | Full-Stack .NET Developer
                            </h4>
                            <h5 className="d-flex justify-content-between text-dark fw-bold">
                                <span
                                    className='Fullstackdata'
                                    style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}
                                    onClick={() => OnShuttleq()} // Remove () to avoid immediate execution
                                >
                                    ShuttleQ.net - (Maintanence)
                                </span>
                                <span className='Fullstackdata'>Nov-2021 To July-2024</span>
                            </h5>
                            <h6 className='text-start'>
                                It is the system developed for maintaining shuttles to pick up or drop off the customers from the source and destination. The system is well opted for hotels, hospitals and some other small businesses run on customer transportation. These companies can purchase the instance of the system and can use all the features.  It is a system developed in SAAS Model.
                            </h6>
                            <p className='text-start'>
                                <strong> Features & Deliverables:</strong>
                                <br></br>
                                Developed and maintained a robust shuttle management system with features such as user registration, guest pickup/drop-off, shuttle-driver assignment, automated SMS notifications, reservation reports, customer feedback, and bulk messaging. Ensured smooth deployment and maintenance by analyzing change requests, resolving bugs within timelines,
                                providing technical guidance, managing code merging and releases, and optimizing database performance with stored procedures and views for data analysis.
                            </p>
                        </div>
                    </div>
                    <hr></hr>
                    <div className='m-3 p-3'>
                <h1 className='text-start text-primary'>Professional Experience</h1>
                <div className='mb-3'>
                    <h5 className='text-start'>Full-Stack .NET Developer - Client-Server Technology</h5>
                    <h6 className='text-start text-muted'>March 2025 - Present</h6>
                    <ul className='text-start'>
                    <li>Working on enterprise-level applications using ASP.NET Core and React.js.</li>
                    <li>Involved in developing REST APIs, integrating Azure Functions,Blob Storage, and managing deployments.</li>
                    <li>Participated in Agile/Scrum ceremonies and used JIRA for project tracking.</li>
                    </ul>
                </div>

                <div className='mb-3'>
                    <h5 className='text-start'>Full-Stack .NET Developer - Dividant Business Solutions Private Limited</h5>
                    <h6 className='text-start text-muted'>July 2024 - Nov 2024</h6>
                    <ul className='text-start'>
                    <li>Developed and maintained web UI using React, Bootstrap, and RESTful APIs.</li>
                    <li>Worked with Git CI/CD pipelines and followed best practices in responsive design.</li>
                    <li>Collaborated closely with UX teams to ensure high-quality UI implementation.</li>
                    </ul>
                </div>

                <div className='mb-3'>
                    <h5 className='text-start'>Junior Developer - Iblesoft Private Limited</h5>
                    <h6 className='text-start text-muted'>Nov-2021 - July-2024</h6>
                    <ul className='text-start'>
                    <li>Contributed to backend logic in ASP.NET MVC and SQL Server-based systems.</li>
                    <li>Supported ongoing enhancements and participated in QA support cycles.</li>
                    <li>Learned Agile processes and worked under the mentorship of senior developers.</li>
                    </ul>
                </div>
                </div>

                    <hr></hr>
                    <div className='m-3 p-3'>
                        <h1 className='text-primary text-start'>
                            Education
                        </h1>
                    </div>
                    <div className='m-3 p-3'>
                        <h1 className="d-flex justify-content-between text-dark fw-bold">
                            <span> GOVERNMENT DEGREE COLLEGE FOR WOMEN-(Osmania University)</span>

                        </h1>
                        <div className="d-flex justify-content-between text-dark fw-bold">
                            <span> Bachelor of Science (Computers)</span>
                            <span className='Fullstackdata'>June-2018 To May-2021</span>
                        </div>
                        <p className='text-start'>GPA-8.6 %</p>
                    </div>
                    <div className='m-3 p-3'>
                        <h2 className="d-flex justify-content-between text-dark fw-bold">
                            <span>GOVERNMENT JUNIOR COLLEGE</span>
                        </h2>
                        <div className="d-flex justify-content-between text-dark fw-bold">
                            <span> Intermediate(+2)</span>
                            <span className='Fullstackdata'>June-2016 To March-2018</span>

                        </div>
                        <p className='text-start'>GPA-7.2 %</p>
                    </div>
                    <div className='m-3 p-3'>
                        <h2 className="d-flex justify-content-between text-dark fw-bold">
                            <span>ZPHS GIRLS BHADRACHALAM</span>
                        </h2>
                        <div className="d-flex justify-content-between text-dark fw-bold">
                            <span> High School(10th)</span>
                            <span className='Fullstackdata'>June-2015 To April-2016</span>
                        </div>
                        <p className='text-start'>GPA-8.2 %</p>
                    </div>
                    <hr></hr>
                    <div className='m-3 p-3'>
                        <h1 className='text-primary text-start mb-3'>
                            SKILLS
                        </h1>
                        <div className="social-media-container">
                            <i className="bi bi-box SocialMediaIcons" title=".NET"></i>
                            <i className="bi bi-file-earmark-code SocialMediaIcons" title="C#"></i>
                            <i className="bi bi-database SocialMediaIcons" title="Database"></i>
                            <i class="bi bi-android2 SocialMediaIcons" title='android'></i>
                            <i class="bi bi-bootstrap-fill SocialMediaIcons" title='bootstrap'></i>
                            <i class="bi bi-filetype-jsx SocialMediaIcons" title='jsx'></i>
                            <i className="bi bi-filetype-html SocialMediaIcons" title='html'></i>
                            <i class="bi bi-filetype-css SocialMediaIcons" title='CSS'></i>
                            <img src={logo} width={100} height={60} className='custom-logo' ></img>
                            <img src={dotnet} width={100} height={60} className='custom-logo' ></img>
                        </div>
                        <div className='m-3 p-3'>
                            <div>
                            <h3 className='text-start skillsColor'>Programming Languages & Frameworks</h3>
                            <h6 className='text-start '>C#, ASP.NET Core (Web API, MVC)</h6>
                            <h6 className='text-start'>React.js (Reactstrap, Redux Toolkit)</h6>
                            <h6 className='text-start'>JavaScript,Angular</h6>
                            <h3 className='text-start skillsColor'>Databases & ORM</h3>
                            <h6  className='text-start'> SQL Server, Entity Framework Core</h6>
                            <h6 className='text-start'>LINQ</h6>
                            <h2 className='text-start skillsColor'>Cloud & DevOps</h2>
                            <h6 className='text-start'>Azure Functions,Blob Storage</h6>
                            <h2 className='text-start skillsColor'>Frontend Development</h2>
                            <h6 className='text-start'>ReactJs</h6>
                            <h6 className='text-start'>Bootstrap, Reactstrap, CSS</h6>
                            <h2 className='text-start skillsColor'>Other Technologies & Tools</h2>
                            <h6 className='text-start'>RESTful APIs, JWT Authentication</h6>
                            <h6 className='text-start'>Version Control (AzureDevOps,Git, GitHub, GitLab, Bitbucket)</h6>
                            <h6 className='text-start'>Postman (API Testing)</h6>
                            <h2 className='text-start skillsColor'>Project Management & Agile Tools</h2>
                            <h6 className='text-start'>JIRA (Task Tracking & Sprint Planning)</h6>
                            <h6 className='text-start'>Scrum Methodology</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sample