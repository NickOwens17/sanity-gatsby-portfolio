import React from 'react'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import Container from '../components/container'

// eslint-disable-next-line no-unused-vars
import styles from './contact.module.css'

const contactPage = () => {
  return (
    <Layout>
      <SEO title='contact' />
      <Container>
        <h1>Get in touch.</h1>
        <form name='contact' method='POST' netlify-honeypot='bot-field' data-netlify='true'>
          <input type='hidden' name='form-name' value='contact' />
          <h3>
            <label>
              Your Name: <input type='text' name='name' />
            </label>
          </h3>
          <h3>
            <label>
              Your Email: <input type='email' name='email' />
            </label>
          </h3>
          <h3>
            <label>
              Message: <textarea name='message' />
            </label>
          </h3>
          <h3>
            <button type='submit'>Send</button>
          </h3>
        </form>
      </Container>
    </Layout>
  )
}

export default contactPage
