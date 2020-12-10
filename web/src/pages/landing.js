import React from 'react'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import van from '../images/van.svg'

import ScrollMagic from 'scrollmagic'
import gsap, {TimelineMax, TweenMax, Power2, Linear} from 'gsap'
import {ScrollMagicPluginGsap} from 'scrollmagic-plugin-gsap'

import styles from './landing.module.css'

ScrollMagicPluginGsap(ScrollMagic, gsap)

class LandingPage extends React.Component {
  constructor (props) {
    super(props)
    this.controller = null
    this.van = styles.van
    this.pinMaster = null
  }

  componentDidMount () {
    this.controller = new ScrollMagic.Controller()

    var sectionTl = new TimelineMax()

    let width = window.innerHeight
    let height = window.innerHeight

    var sections = document.getElementsByClassName(styles.scene)

    for (var i = 0; i < sections.length; i++) {
      var section = sections[i]
      let text = section.childNodes

      // create scene to fade-in text
      new ScrollMagic.Scene({
        triggerElement: this.pinMaster,
        triggerHook: 0,
        offset: width * (i + 1),
        duration: '30%'
      })
        .setTween(TweenMax.from(text, 0.3, {opacity: 0, y: 50, ease: Power2.easeInOut}))
        .addTo(this.controller)

      // create scene to fade-out text
      new ScrollMagic.Scene({
        triggerElement: this.pinMaster,
        triggerHook: 0,
        offset: width * (i + 1.5),
        duration: '30%'
      })
        .setTween(TweenMax.to(text, 0.3, {opacity: 0, y: 50, ease: Power2.easeInOut}))
        .addTo(this.controller)

      //   // animate each section in from the right
      sectionTl.from(section, 1, {x: '100%', ease: Linear.easeNone}, '+=1')
    }

    // create scene to pin all sections
    new ScrollMagic.Scene({
      triggerElement: this.pinMaster,
      triggerHook: 0,
      duration: '500%'
    })
      .setPin(this.pinMaster)
      .setTween(sectionTl)
      .addTo(this.controller)
  }

  render () {
    return (
      <Layout>
        <SEO title='landing' />
        <div
          id='#pinMaster'
          ref={el => (this.pinMaster = el)}
          style={{
            position: 'relative',
            color: '#234',
            backgroundColor: 'aliceblue'
            // overflow: 'hidden'
            // overflowX: 'hidden'
          }}
        >
          <img src={van} alt='van' id={this.van} ref={img => (this.van = img)} />
          <div className={styles.scene} id='s1'>
            <h1>Hi! I'm Nick</h1>
          </div>
          <div className={styles.scene} id='s2'>
            <h1>A student studying DESIGN and COMP SCI at Lehigh University</h1>
          </div>
          <div className={styles.scene} id='s3'>
            <h1>When I'm not working to build my COMPANY</h1>
          </div>
          <div className={styles.scene} id='s4'>
            <h1>You can find me at the ROCKWALL or out on the FRISBEE field</h1>
          </div>
          <div className={styles.scene} id='s5'>
            <h1>Or sharing my thoughts with the world</h1>
          </div>
        </div>
      </Layout>
    )
  }
}
export default LandingPage
