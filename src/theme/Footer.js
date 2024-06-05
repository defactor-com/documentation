/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import { useThemeConfig } from "@docusaurus/theme-common";

import styles from "./styles.module.css";

function Footer() {
  const { footer } = useThemeConfig();

  if (!footer) {
    return null;
  }

  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerBody}>
        <div className={styles.footerHeader}>
          <div>
            <a href="https://www.defactor.com/">
              <img
                width={200}
                alt="Defactor Logo"
                src="https://assets-global.website-files.com/64555cbab4849c7309c3ff36/645a4c1a6a368f6b46de2e40_Defactor%20Logo%20-%20Light.svg"
              />
            </a>
          </div>
          <div className={styles.footerLinksContainer}>
            <div>
              <h4>Documentation</h4>
              <a
                className={styles.linkStyles}
                href="/docs/introduction/defactor-toolkit"
              >
                Software Toolkit
              </a><br />
              <a
                className={styles.linkStyles}
                href="/docs/introduction/tech-stack"
              >
                Defactor Tech Stack
              </a><br />
                <a
                  className={styles.linkStyles}
                  href="/docs/blockchain-and-web3/"
                >
                  Blockchain and Web3
                </a>
            </div>
            <div>
              <h4>More</h4>
              <a
                target="_blank"
                className={styles.linkStyles}
                href="https://github.com/defactor-com"
              >
                Defactor GitHub
              </a>
              <br />
              <a
                className={styles.linkStyles}
                href="/docs/introduction/open-source-guidelines"
              >
                Open Source Guidelines
              </a>
              <br />
              <a className={styles.linkStyles} href="/docs/resources/roadmap">
                Technology Roadmap
              </a>
            </div>
            <div></div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>Follow us:</p>
          <div className={styles.footerBottomContent}>
            <div className={styles.socialMediaContainer}>
              <a href="https://t.me/defactor_official" target="_blank">
                <img
                  width={24}
                  className={styles.socialMediaStyle}
                  src="https://assets-global.website-files.com/64555cbab4849c7309c3ff36/645a5939e751f051a5f5b725_Telegram%20Icon.svg"
                />
              </a>
              <a href="https://twitter.com/defactor_" target="_blank">
                <img
                  width={24}
                  className={styles.socialMediaStyle}
                  src="https://assets-global.website-files.com/64555cbab4849c7309c3ff36/654a799ede3ae4c77f819d4d_x-twitter%20light.svg"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/defactordao/"
                target="_blank"
              >
                <img
                  width={24}
                  className={styles.socialMediaStyle}
                  src="https://assets-global.website-files.com/64555cbab4849c7309c3ff36/645a59667c961c4ba540c0ea_LinkedIn%20Icon.svg"
                />
              </a>
              <a href="https://www.youtube.com/@defactor_" target="_blank">
                <img
                  width={24}
                  className={styles.socialMediaStyle}
                  src="https://assets-global.website-files.com/64555cbab4849c7309c3ff36/64d4e3b34cc6594553e35972_Youtube%20(1).svg"
                />
              </a>
              <a href="https://discord.com/invite/S2SCMTPMUt" target="_blank">
                <img
                  width={24}
                  src="https://assets-global.website-files.com/64555cbab4849c7309c3ff36/64d4e38c0da218e95c85dea8_discord.svg"
                />
              </a>
            </div>
            <p>{`Copyright © ${new Date().getFullYear()} Defactor. All Rights Reserved`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Footer);
