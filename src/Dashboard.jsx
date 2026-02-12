import { useState } from "react";
import SplitText from "./SplitText";
import "./StyleAnimation.css"
import { useNavigate } from "react-router-dom";
import venkyimg from "../public/venkatesh.jpeg"
import { Tabs,Tab } from "react-bootstrap";
import { BiDownArrow } from "react-icons/bi";
const Dashboard = () => {
    const navigate = useNavigate()
    const words = ["Hello Hr! 👋" , "Greetings of the day", "Hear is my porfile"]
    const tabContent = [{name: "Home" , path : "/" } ,{name : "Portfolio" , path : "/cms"}, {name : "About", path : "/about"} ,{ name : "Service" , }]
    const [text,setText] =useState(words[0])
    const [active, setActive] = useState("Home")
    console.log(active)

     const handleAnimationComplete = () => {
  console.log('All letters have animated!');
  setTimeout(() => {
    setText((prev => {
        const currentIndex = words.indexOf(prev)
        console.log(currentIndex)
        return words[(currentIndex + 1) % words.length] 
    }))
  },500)

   
  };
  const handleNextpage = () => {
    navigate("/cms")
  }

  const handleChangeTab = (e) => {
    setActive(e)
    const selectedTab = tabContent.find(tab => tab.name === e)
    console.log(selectedTab)
    if(selectedTab){
        navigate(selectedTab.path)
    }
    if(selectedTab.name ==="Service" ){
      alert("No Services")
    }
    
  }

  return (
    <>
    <div className="mainContainer">
        <div className="detailsContainer">
                <h1 style={{textAlign:"left" , textDecorationLine:"underline", marginBottom:"5%",  }}>Portfolio</h1>
                <h2>
                Hi, 👋 I’m <strong>Venkateshwarlu Kandi a</strong> {" "}
                <span className="details">Senior Frontend Developer {" "}</span>  with 3+ years of
                experience building scalable, high-performance, and user-centric web
                applications.
                </h2>
                <h5>I have attached my resume for your review. I would appreciate your feedback on whether it accurately represents my skills and accomplishments</h5>
                <BiDownArrow/>
                <h4> <a href="/kandi_resume.pdf">Here is my resume</a></h4>
            </div>
            <div className="all-tabs-container">
                <Tabs activeKey={active} onSelect={handleChangeTab}>
                   {tabContent.map((tab,index) => (
                    <Tab key={index} eventKey={tab.name} title={tab.name} >
                         
                    </Tab>
                   ))}
                </Tabs>
            </div>
        <div className="profile">
            <img src={venkyimg} alt="venkyimg" className="profile-img"/>
            <h3 className="profile-water-mark">Kandi</h3>
        </div>
        <div className="mail-details">
        <h3 >Linkedin : <a href="https://www.linkedin.com/in/venkateshwarlu-kandi-736304242/">kandivenkateshwarlu</a></h3>
        <h4>Contact   : <a style={{marginLeft : "5%" , textDecoration : "underline"}} > 6301493516 / 9000293619</a></h4>
        </div>
         
    
<div className="bottomContent">
<SplitText
    key={text}
  text={ <span className="details">{text}</span>}
  className="text-2xl font-semibold text-center"
  delay={50}
  duration={1.25}
  ease="power3.out"
  splitType="chars"
  from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}
  threshold={0.1}
  rootMargin="-100px"
  textAlign="center"
  onLetterAnimationComplete={handleAnimationComplete}
  showCallback
/>
<div className="mainButton">
     <button onClick={handleNextpage}>Click Hear</button>
</div>
</div>
 </div>
 
 </>
  );
}
export default Dashboard;



