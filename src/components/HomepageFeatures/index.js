import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Blockchain and Web3",
    Svg: require("@site/static/img/info_defactor.jpg").default,
    description: (
      <>
        We provide all the relevant information you need to understand and use
        Defactor. From tutorials to case studies, we've got it all.
      </>
    ),
  },
  {
    title: "Smart Contracts",
    Svg: require("@site/static/img/sc_defactor.jpg").default,
    description: (
      <>
        Defactor provides secure and efficient smart contracts. Our
        documentation will guide you through each step to effectively use them.
      </>
    ),
  },
  {
    title: "Powerful API",
    Svg: require("@site/static/img/api_defactor.jpg").default,
    description: (
      <>
        Our API is robust and easy to use, allowing you to integrate Defactor
        into your own applications. Detailed documentation will help you get
        started.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img className={styles.featureSvg} src={Svg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

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
