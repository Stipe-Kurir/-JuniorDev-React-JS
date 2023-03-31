import Contacts from "../Contacts/Contacts"
import Education from "../Education/Education"
import Image from "../Image/Image"
import Motivation from "../Motivation/Motivation"
import ProgrammingSkills from "../ProgrammingSkills/ProgrammingSkills"
import Skills from "../Skills/Skills"
import Title from "../Title/Title"
import "./card.css"


const Card = () => {
 
  
  return (
    <div className="cardContainer">
        <div className="cardHeader">
        <Image />
        <Title ime="stipe" prezime="kurir" />
        </div>
      <div className="cardPodaci">
      
        <div className="cardLeft">
          <Contacts 
            sex="Male"
            datum="29.08.2000"
            nacionalnost="Croatian"
            lokacija="Ninska 16, 21000 Split, Croatia "
            mobitel="095 508 0485"
            mail="skurir00@fesb.hr"
            github="https://github.com/Stipe-Kurir" 
          />
          <Motivation />
        </div>

      <div className="cardRight">
        <p className="Title">EDUCATION AND TRAINING</p>

          <div className="education">
           <Education  
            datum="Oct 2022 - (ongoing)"
            info="Master’s Degree in Computer Science
             Master of Science (MS) in Computer Science
             FESB – Computing, Split, Croatia"
           />
           <Education  
            datum="Oct 2019 - Sep 2022"
            info="Bachelor’s Degree in Computer Science      
            Bachelor of Science (BS) in Computer Science 
            FESB – Computer Science, Split, Croatia
            Final thesis – Nerve action potential analysed and modelled using signal and    system theory
            Mentor - Prof. dr. sc. Tamara Grujić"
            />
           <Education  
            datum=" Nov 2015 - May 2019"
            info="Gymnasium degree at IV Gimnazija Marko Marulić"
            />
           <Education  
            datum="Aug 2022 - Sep 2022"
            info="Professional practice at Institute of Oceanography and Fisheries Split
            Optimization of the online application ČistiMO-Database for collecting data
            on marine waste"
            />
          </div>

        <p className="Title">PERSONAL SKILLS</p>

        <div className="skills">

          <Skills type="Mother tongue" desc="Croatian" />
          <Skills type="English language" desc="C1 - Proficient user" />
          <Skills type="Driving licence" desc="B - category" />
          <div className="programmingSkills">
          <p className="skillTitle">Programming skills:</p>
            <div className="programmingItems">
              <ProgrammingSkills item="C" desc="advanced (three university courses)"/>
              <ProgrammingSkills item="Html" desc="advanced (used in university course and for university projects)"/>
              <ProgrammingSkills item="C#" desc="basic (no applied theory, used in university project)"/>
              <ProgrammingSkills item="C++" desc="basic (object-oriented programming university course)"/>
              <ProgrammingSkills item="SQL" desc="basic (databases university course and used for creating"/>
              <ProgrammingSkills item="MATLAB" desc="basic (used in university course, used for final thesis)"/>
              <ProgrammingSkills item="React" desc="basic (used in university course, used in university project)"/>
              <ProgrammingSkills item="CSS" desc="basic(self - taught and as a part of projects at university) "/>
              <ProgrammingSkills item="Javascript" desc="basic(self - taught and as a part of projects at university) "/>
            </div>
          </div>

          <div className="programmingSkills">
          <p className="skillTitle">Other tehnical skills:</p>
            <div className="programmingItems">
              <ProgrammingSkills  item="Linux OS" desc="(used in university courses)"/>
              <ProgrammingSkills  item="Github" desc="(self - taught and as a part of projects at university)"/>
              <ProgrammingSkills  item="Figma" desc="(self - taught and as a part of projects at university)"/>
              <ProgrammingSkills  item="MSOffice" desc="(self - taught and through school and university) "/>
            </div>
          </div>

        </div>

      </div>
      </div>
    </div>
  )
}

export default Card
