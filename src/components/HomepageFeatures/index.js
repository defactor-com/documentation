import clsx from "clsx";
import Heading from "@theme/Heading";

import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Blockchain and Web3",
    link: "docs/blockchain-and-web3/",
    Svg: require("@site/static/img/bc_web3_defactor.svg").default,
    description: (
      <>
        We provide all the relevant information you need to understand and use
        Defactor. From tutorials to case studies, we've got it all.
      </>
    ),
  },
  {
    title: "Smart Contracts",
    link: "docs/category/smart-contracts",
    Svg: require("@site/static/img/sc_defactor.svg").default,
    description: (
      <>
        Defactor provides secure and efficient smart contracts. Our
        documentation will guide you through each step to effectively use them.
      </>
    ),
  },
  {
    title: "Powerful API",
    link: "docs/category/back-end-services",
    Svg: require("@site/static/img/api_defactor.svg").default,
    description: (
      <>
        Our API is robust and easy to use, allowing you to integrate Defactor
        into your own applications. Detailed documentation will help you get
        started.
      </>
    ),
  },
];

const Feature = ({ Svg, title, description, link }) => {
  return (
    <div className={clsx("col col--4")}>
      <div className={styles.featuresHeaderContainer}>
        <a href={link}>
          <div className={styles.featuresHeader}>
            <span className={styles.featuresSpam}>{title}</span>
            <div className={styles.featureHoverHeader}>
            </div>
              <Svg className={styles.featureSvg} role="img" />
          </div>
        </a>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
