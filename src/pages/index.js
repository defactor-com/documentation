import clsx from "clsx"
import Layout from "@theme/Layout"
import Link from "@docusaurus/Link"
import Heading from "@theme/Heading"
import { useColorMode } from '@docusaurus/theme-common'
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import HomepageFeatures from "@site/src/components/HomepageFeatures"

import styles from "./index.module.css"

const HomepageHeader = () => {
  const { siteConfig } = useDocusaurusContext()

  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="https://defactor.com"
          >
            Not a Developer? Visit our Website
          </Link>
        </div>
      </div>
    </header>
  )
}

const HomepageBody = () => {
  const { colorMode } = useColorMode()

  return (
    <div className={colorMode === 'light' ? styles.homeBodyLight : styles.homeBodyDark}>
      <HomepageFeatures />
    </div>
  )
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext()

  return (
    <Layout
      title={`${siteConfig.title}: Smart Contracts, APIs, and Use Cases for RWA Blockchain Platform`}
      description="Explore the comprehensive technical documentation for Defactor's blockchain platform. Dive into detailed guides on smart contracts, backend architecture, APIs, and real-world use cases. Ideal for developers and stakeholders in decentralized finance and tokenized assets.">
      <HomepageHeader />
      <HomepageBody />
    </Layout>
  )
}
