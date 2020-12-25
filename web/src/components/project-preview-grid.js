import React, {useState, useEffect} from 'react'
import ProjectPreview from './project-preview'

import styles from './project-preview-grid.module.css'

import {responsiveTitle3, responsiveTitle1} from '../components/typography.module.css'
import {cn, filterOutDesignProjects, filterOutDevelopmentProjects} from '../lib/helpers'

function ProjectPreviewGrid (props) {
  const [designShowing, setDesignShowing] = useState(true)
  const [developmentShowing, setDevelopmentShowing] = useState(true)

  const allProjects = (props || {}).nodes
  const [activeProjects, setActiveProjects] = useState(allProjects)

  const toggleDesignShowing = () => {
    setDesignShowing(!designShowing)
  }

  const toggleDevelopmentShowing = () => {
    setDevelopmentShowing(!developmentShowing)
  }

  useEffect(() => {
    let filteredProjects = allProjects

    filteredProjects = designShowing
      ? developmentShowing
        ? filteredProjects
        : filteredProjects.filter(filterOutDevelopmentProjects)
      : developmentShowing
        ? filteredProjects.filter(filterOutDesignProjects)
        : filteredProjects.filter(filterOutDesignProjects).filter(filterOutDevelopmentProjects)
    setActiveProjects(filteredProjects)
  }, [designShowing, developmentShowing])

  return (
    <div className={styles.root}>
      <h1 className={responsiveTitle1}>Projects</h1>
      <div className={styles.filterContainer}>
        <h3
          onClick={toggleDesignShowing}
          className={cn(responsiveTitle3, designShowing ? styles.active : styles.inactive)}>Design</h3>
        <h3
          onClick={toggleDevelopmentShowing}
          className={cn(responsiveTitle3, developmentShowing ? styles.active : styles.inactive)}>Development</h3>
      </div>
      <ul className={styles.grid}>
        {activeProjects &&
          activeProjects.map(node => (
            <li key={node.id}>
              <ProjectPreview {...node} />
            </li>
          ))}
      </ul>
    </div>
  )
}

ProjectPreviewGrid.defaultProps = {
  title: '',
  nodes: [],
  browseMoreHref: ''
}

export default ProjectPreviewGrid
