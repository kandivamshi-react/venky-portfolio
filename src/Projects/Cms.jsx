import "./Project.css"
import cluster from "../../public/cluster.jpg"
import vos from "../../public/vos.jpg"
import ultify from "../../public/ultify.jpg"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { Modal } from "react-bootstrap"
import { IoArrowBack,  } from "react-icons/io5"
const Cmsproject = () => {
    const [show , setShow] = useState(false)
    const [showvoc , setShowvoc] = useState(false)
    const [showultify , setShowultify] = useState(false)
    const handleClose = () => setShow(false)
    const handleClosevoc = () => setShowvoc(false)
    const handleCloseultify = () => setShowultify(false)
    const navigate = useNavigate()
    return (
        
        <> 
        
        <div className="project-main-container">
            <div className="back-btn" onClick={() => navigate("/")}>
                {/* <h1 style={{color:"#ffffff"}}>back *----</h1> */}
                <IoArrowBack />
            </div>
            
                <div className="container-cms" onClick={() => setShow(true)}>
                    <img src={cluster} alt="cluster" className="clusterimg" />
                    <div className="project-overlay">
                    <h4>Cluster Management System</h4>
                    <h5>(CMS)</h5>
                    </div>
                </div>
                 <div className="container-cms" onClick={() => setShowvoc(true)}>
                    <img src={vos} alt="vos" className="vocImg" />
                     <div className="project-overlay">
                     <h4>Vehicle Operation Center</h4>
                    <h5>(VOC)</h5>

                    </div>
                </div>
                 <div className="container-cms" onClick={() => setShowultify(true)}>
                    <img src={ultify} alt="ultify" className="vocImg" />
                    <div className="project-overlay"> 
                        <h4>Ultify web portal</h4>
                    <h5>(UWP)</h5></div>
                </div>
        </div>

        <Modal show={show} onHide={handleClose} >
            <Modal.Header closeButton >
            <Modal.Title>  Cluster Management System  </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Cluster Management System (CMS) is a web-based enterprise application designed to efficiently manage clusters, assets, and related configurations through a centralized dashboard. The system focuses on scalability, performance, and ease of use for administrators and operational teams.
            </Modal.Body>
           
               <Modal.Title> Key Responsibilities & Features</Modal.Title>
                 <Modal.Footer>

Designed and developed a responsive, user-friendly UI using React.js and Bootstrap.

Implemented secure authentication and authorization using AWS Cognito, ensuring role-based access control.

Built Create, Edit, Update, and Delete (CRUD) workflows for managing clusters, categories, models, and configurations.

Developed dynamic forms and validation to ensure accurate and consistent data entry.

Integrated Redux for efficient state management across complex modules.

Implemented real-time notifications for success, error, and status updates to enhance user experience.

Optimized application performance, reducing page load time by ~25% using code splitting, caching, and optimized API calls.

Collaborated closely with backend teams and business analysts to translate requirements into scalable UI solutions.

Ensured cross-browser compatibility and mobile responsiveness.
            </Modal.Footer>
        </Modal>

        <Modal show={showvoc} onHide={handleClosevoc} >
            <Modal.Header closeButton >
            <Modal.Title>  Vehicle Operation System (VOC) </Modal.Title>
            </Modal.Header>
            <Modal.Body>
               Vehicle Operation System (VOC) is an enterprise-grade web application designed to manage and monitor vehicle operations across multiple locations. The system streamlines vehicle tracking, trip management, maintenance workflows, and operational reporting through a centralized platform.
            </Modal.Body>
           
               <Modal.Title> Key Responsibilities & Features</Modal.Title>
                 <Modal.Footer>

Designed and developed a modern, responsive frontend using React.js for seamless user experience across devices.

Implemented vehicle onboarding and management modules including vehicle details, status tracking, and assignment workflows.

Built trip and operation tracking dashboards to monitor vehicle usage, availability, and performance.

Developed maintenance scheduling and alerts to ensure timely servicing and reduce vehicle downtime.

Integrated role-based access control to restrict features based on user roles (Admin, Operator, Viewer).

Implemented dynamic filters, search, and pagination for large operational datasets.

Optimized API interactions and state management using Redux, improving data consistency and performance.

Added real-time feedback and notifications for operational actions (start trip, end trip, service updates).

Ensured high performance, scalability, and maintainability through clean architecture and reusable components.
            </Modal.Footer>
        </Modal>

        <Modal show={showultify} onHide={handleCloseultify} >
            <Modal.Header closeButton >
            <Modal.Title>  Ultify (Utility Management Platform)</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Ultify is a centralized utility management platform designed to streamline internal tools, workflows, and operational processes across multiple business units. The application acts as a single hub for managing utilities, configurations, approvals, and operational data with a strong focus on usability, scalability, and performance.
            </Modal.Body>
           
               <Modal.Title> Key Responsibilities & Features</Modal.Title>
                 <Modal.Footer>

Designed and developed a scalable, modular frontend architecture using React.js.

Built dashboard-driven workflows to manage utilities, configurations, and operational actions from a single interface.

Implemented role-based access control to ensure secure and permission-driven access to features.

Developed dynamic forms, validations, and reusable components to support multiple utility modules.

Integrated REST APIs to fetch, update, and manage real-time operational data.

Implemented state management using Redux for consistent data flow across complex screens.

Added search, filters, and pagination for handling large datasets efficiently.

Focused on performance optimization and clean UI/UX, ensuring fast load times and intuitive navigation.

Collaborated closely with backend teams and stakeholders to convert business requirements into technical solutions.            </Modal.Footer>
        </Modal>
        </>
    )

}
export default Cmsproject
