import clsx from "clsx";
import Heading from "@theme/Heading";

import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Assets",
    link: "docs/category/assets/",
    Svg: require("@site/static/img/bc_web3_defactor.svg").default,
    description: (
      <>
        Learn how to tokenize real-world assets with Defactor. Our guides cover everything from basics to advanced techniques, ensuring secure and transparent transactions.
      </>
    ),
  },
  {
    title: "Pools",
    link: "docs/category/pools/",
    Svg: require("@site/static/img/sc_defactor.svg").default,
    description: (
      <>
        Discover how to use Defactor's lending pools to unlock liquidity. Our resources will guide you through utilizing tokenized assets as collateral efficiently.
      </>
    ),
  },
  {
    title: "Engage",
    link: "docs/category/engage/",
    Svg: require("@site/static/img/api_defactor.svg").default,
    description: (
      <>
        Engage with our community and governance tools on Defactor Engage. Find resources on network management, participation, and decision-making processes.
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
