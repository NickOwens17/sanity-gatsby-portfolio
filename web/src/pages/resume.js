import React from 'react'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import Container from '../components/container'

import styles from './resume.module.css'
import {responsiveTitle1, responsiveTitle3} from '../components/typography.module.css'

const ResumeItem = ({title, date, children}) => {
  return (
    <div>
      <div className={styles.itemTitleCont}>
        <h3>{title}</h3>
        <h4>{date}</h4>
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
            <h3 className={responsiveTitle3}>Software & Skills</h3>
            <div className={styles.categories}>
              <h3 className={styles.categoriesHeadline}>Proficient</h3>
              <ul>
                <li>React / React Native</li>
                <li>HTML</li>
                <li>CSS / SCSS</li>
                <li>Javascript / Typescript</li>
                <li>Adobe Photoshop</li>
                <li>Adobe Illustrator</li>
                <li>Adobe Indesign</li>
                <li>Adobe XD / Figma</li>
              </ul>
              <h3 className={styles.categoriesHeadline}>Comfortable</h3>
              <ul>
                <li>C / C#</li>
                <li>JAVA</li>
                <li>Unity Game Engine / VRTK</li>
                <li>Adobe After Effects</li>
              </ul>
              <h3 className={styles.categoriesHeadline}>Familiar</h3>
              <ul>
                <li>Angular 8</li>
                <li>Flutter</li>
                <li>R</li>
                <li>Haskell</li>
                <li>Rust</li>
              </ul>
            </div>
          </aside>
          <div className={styles.mainContent}>
            <h1 className={responsiveTitle1}>Resume</h1>
            <section>
              <h1 className={styles.sectionHeader}>Education</h1>
              <ResumeItem title='Lehigh University' date='Expected May 2022'>
                <li>Major: BS. Computer Science Engineering</li>
                <li>Major: Integrated Degree in Engineering and Arts and Sciences</li>
                <li>Minor: Graphic Design and Entreprenuership</li>
                <li>
                  Relevant Coursework: Data Structures, Database Design and
                  Applications, Algorithms, Programming languages, Theory of Probability and Statistics,
                  Computer Organization and Architecture, Software Engineering
                </li>
                <li>GPA: 3.5</li>
              </ResumeItem>
            </section>
            <section>
              <h1 className={styles.sectionHeader}>Work Experience</h1>
              <ResumeItem
                title='Research Study Lead ~ Lehigh DAS Lab ~ Bethlehem, PA'
                date='Dec 2020 - Present'>
                <li>Conducting IRB approved study in association with Pro Publica,
                to explore how the design data visulazation impacts the readers interpretation of the
                validity / confidence of the underlying mathematical models</li>
                <li>Collaborating with Human Computer Interaction Proffesor to conduct the study,
                as well as design the future questions the study might ask</li>
              </ResumeItem>
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
                <li>Collaborating with three friends in the design, development, marketing, and bussiness strategy of a student engagement app targeted towards college students</li>
                <li>Working closely with on campus group leaders, the office of student engagement, and students (primarily first years) to adapt our bussiness strategy and end user product during Covid-19</li>
                <li>Hosted virtual club fair in the fall, which took the place of an in person club fair. Handled traffic of 1500 users, with 200+ clubs signing up to participate</li>
                <li>Developing a solution to the stiffled social opportunities for students during covid, that prioritizes student mental health and happiness while remaining covid-safe, in conjuction with Lehigh Administrators</li>
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
              <h1 className={styles.sectionHeader}>Activities and Awards</h1>
              <ResumeItem title='Club Frisbee Team Member ' date='Aug 2019 - Present' />
              <ResumeItem title='Lehigh Baker Fellow' date='Dec 2020'>
                <li>Recognized in the inagural class of 14 students that have exhuded the entrepenuerial spirit, and design thinking techniques in both their personal projects and in their everyday actions</li>
              </ResumeItem>
              <ResumeItem title='Lehigh Silicoln Valley' date='Jan 2020'>
                <li>
                  Selected as part of elite cohort (50/500) to travel to Silicon Valley to gain
                  insight into startup culture and work through live case studies
                </li>
              </ResumeItem>
              <ResumeItem title='Eureka Pitch Night Winner' date='Oct 2019, Aug 2020'>
                <li>Pitched Student Engagement App (Campus) to panel of three judges in increasing detail on two occasions</li>
                <li>Won sums of $100 and $1000 dollars to help fund venture</li>
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
