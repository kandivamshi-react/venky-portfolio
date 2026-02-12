import { IoArrowBack } from "react-icons/io5"
import "./Project.css"
import { useNavigate } from "react-router-dom"
import professional from "../../public/professional-headshot.png"

const About = () => {
    const navigate = useNavigate()
  return (
    <div className='main-container' style={{
        backgroundImage: `url(${professional})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100%",
        width: "100%",
      }}>
        <div className="second-container">
            <IoArrowBack className="abouticon" onClick={() => navigate("/") }/>
                
        </div>
      <h1>Senior Frontend Developer in <a style={{color:"red"}}>People Tech It Counsultancy</a> <br/>with 3+ years of experience designing and developing scalable, high-performance web applications <br/> <a  style={{color:"#550000"}}>using React.js, JavaScript (ES6+), HTML5, and CSS3.</a><br/> Proven expertise in building responsive UIs, component-driven architecture, state management (Redux), and REST API integration. Strong focus on performance optimization, clean code, cross-browser compatibility, and user-centric design. Experienced in collaborating with cross-functional teams to deliver enterprise-grade solutions.</h1>
    </div>
  )
}

export default About
