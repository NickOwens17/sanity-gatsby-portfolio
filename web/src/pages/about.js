import React from 'react'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import Container from '../components/container'
import {graphql} from 'gatsby'
import BlockContent from '../components/block-content'
import {buildImageObj} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'

import {responsiveTitle1} from '../components/typography.module.css'
import styles from './about.module.css'

const AboutPage = ({data}) => {
  const image = data.allSanityPerson.nodes[0].image
  const _rawBio = data.allSanityPerson.nodes[0]._rawBio

  return (
    <Layout>
      <SEO title='About' />
      <Container>
        {image && image.asset && (
          <div className={styles.mainImage}>
            <img
              src={imageUrlFor(buildImageObj(image))
                .width(1200)
                .height(Math.floor((9 / 16) * 1200))
                .fit('crop')
                .url()}
              alt={image.alt}
            />
          </div>
        )}
        <h1 className={responsiveTitle1}>Hi! I'm Nick.</h1>
        {_rawBio && <BlockContent blocks={_rawBio || []} />}
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query AboutQuery {
    allSanityPerson (filter: {_id: {eq: "9122a1cc-40d0-4120-9f30-3e997007896c"}}) {
      nodes {
      image {
        crop {
          _key
          _type
          top
          bottom
          left
          right
        }
        hotspot {
          _key
          _type
          x
          y
          height
          width
        }
        alt
        asset {
          _id
        }
      }
      _rawBio
    }
    }
  }
`

export default AboutPage
