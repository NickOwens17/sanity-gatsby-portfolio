import React from 'react'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import Container from '../components/container'

import styles from '../components/resume.module.css'
import {responsiveTitle1, responsiveTitle3} from '../components/typography.module.css'

const ResumeItem = ({title, date, children}) => {
  return (
    <div>
      <div className={styles.itemTitleCont}>
        <h3>{title}</h3>
        <h3>{date}</h3>
      </div>
      <ul>{children}</ul>
    </div>
  )
}

const ResumePage = props => {
  return (
    <Layout>
      <SEO title='Resume' />
      <Container>
        <div className={styles.grid}>
          <aside className={styles.metaContent}>
            <h3 className={responsiveTitle3}>Software/ Skills</h3>
            <div className={styles.categories}>
              <h3 className={styles.categoriesHeadline}>Proficient</h3>
              <ul>
                <li>JAVA</li>
                <li>HTML</li>
                <li>CSS/SCSS</li>
                <li>Adobe Photoshop</li>
                <li>Adobe XD</li>
              </ul>
              <h3 className={styles.categoriesHeadline}>Comfortable</h3>
              <ul>
                <li>Angular 8</li>
                <li>Flutter</li>
                <li>C/C++</li>
                <li>Javascript/Typescript</li>
                <li>Adobe Illustrator</li>
                <li>Adobe Indesign</li>
                <li>Adobe After Effects</li>
                <li>Unity Engine</li>
              </ul>
              <h3 className={styles.categoriesHeadline}>Familiar</h3>
              <ul>
                <li>React</li>
                <li>Jekyll</li>
                <li>Gatsby</li>
              </ul>
            </div>
          </aside>
          <div className={styles.mainContent}>
            <h1 className={responsiveTitle1}>Resume</h1>
            <section>
              <h1 className={styles.sectionHeader}>Education</h1>
              <ResumeItem title='Lehigh University' date='Expected May 2022'>
                <li>Major: BS. Computer Science Engineering</li>
                <li>Major: B.S., Computer Science Engineering</li>
                <li>Major: Integrated Degree in Engineering and Arts and Sciences</li>
                <li>Minor: Graphic Design and Entreprenuership</li>
                <li>
                  Relevant Coursework: Programming and Data Structures, Database Design and
                  Applications, 2-dimensional design, Motion Graphics, Foundations of algorithms,
                  Computer Organization and Architecture
                </li>
                <li>GPA: 3.4</li>
              </ResumeItem>
            </section>
            <section>
              <h1 className={styles.sectionHeader}>Work Experience</h1>
              <ResumeItem
                title='Project Lead ~ Lehigh SSI LAB ~ Bethlehem, PA'
                date='Sept 2019 - Present'
              >
                <li>
                  Lead team of three programmers in developing a virtual reality simulation in Unity
                  Engine
                </li>
                <li>
                  Coordinate with psychology team to ensure experiment readiness under direction of
                  psychology professor
                </li>
              </ResumeItem>
              <ResumeItem
                title='Coach/Technical Asistant ~ Star Academy ~ Timonium, MD'
                date='Jun 2018 - Aug 2018'
              >
                <li>
                  Mentored students ranging from 5 to 15 years in Robotics, Arduino, Game
                  Development using the Unity Engine
                </li>
                <li>
                  Collaborated with Network Administrator to create server to automate set up of new
                  devices and improve network security
                </li>
              </ResumeItem>
            </section>
            <section>
              <h1 className={styles.sectionHeader}>Projects</h1>
              <ResumeItem title='Campus App ~ Personal' date='May 2019 - Present'>
                <li>
                  Coordinate business strategy, design, and product development among team of three
                  peers
                </li>
                <li>
                  Interviewed group leaders and first-year students to determine pain points in
                  college group discovery process
                </li>
                <li>
                  Built relationships with University to leverage established distribution channels
                </li>
              </ResumeItem>
              <ResumeItem title='Regork Database ~ School' date='Apr 2019'>
                <li>Diagramed SQL database for fictional supermarket supply chain</li>
                <li>
                  Implemented Java interface for mulitple entities to view and update information in
                  database
                </li>
              </ResumeItem>
              <ResumeItem title='Project Phoenix News ~ Personal' date='Dec 2017'>
                <li>
                  Took initiative to create website that distributed candid news and student opinion
                  in high school and inspired student involvement and enthusiasm for writing
                </li>
                <li>Improved maintainability of website through Jekyll</li>
              </ResumeItem>
            </section>
            <section>
              <h1 className={styles.sectionHeader}>Activities</h1>
              <ResumeItem title='Club Frisbee Team Member ' date='Aug 2019 - Present' />
              <ResumeItem title='Outing Club Exec Team ' date='Mar 2018 - Present' />
              <ResumeItem title='Lehigh Silicoln Valley' date='Jan 2020'>
                <li>
                  Selected as part of elite cohort (50/500) to travel to Silicon Valley to gain
                  insight into startup culture and work through live case studies
                </li>
              </ResumeItem>
              <ResumeItem title='Eureka Pitch Night Winner' date='Oct 2019'>
                <li>Pitched student engagement app to panel of three judges</li>
              </ResumeItem>
              <ResumeItem title='SAE Cyber Auto Challenge' date='Jun 2017'>
                <li>
                  Collaborated with team to find security flaws in new car models for major car
                  companies (Mitsubishi, Ford, GM)
                </li>
              </ResumeItem>
            </section>
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export default ResumePage
