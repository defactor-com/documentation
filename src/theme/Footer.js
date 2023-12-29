/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";

import { useThemeConfig } from "@docusaurus/theme-common";
import FooterLinks from "@theme/Footer/Links";
import FooterLogo from "@theme/Footer/Logo";
import FooterCopyright from "@theme/Footer/Copyright";
import FooterLayout from "@theme/Footer/Layout";

function Footer() {
  const { footer } = useThemeConfig();
  if (!footer) {
    return null;
  }
  const { copyright, links, logo, style } = footer;
  console.log({ logo, links });
  return (
    // <FooterLayout
    //   style={style}
    //   links={links && links.length > 0 && <FooterLinks links={links} />}
    //   logo={logo && <FooterLogo logo={logo} />}
    //   copyright={copyright && <FooterCopyright copyright={copyright} />}
    // />
    <div style={{ backgroundColor: "#211f23" }}>
      <div
        style={{
          padding: "40px 180px 16px 180px",
        }}
      >
        <div
          style={{
            justifyContent: "space-between",
            borderBottom: "solid 1px #535058",
            paddingBottom: "24px",
            display: "flex",
          }}
        >
          <div>
            <a href="https://www.defactor.com/">
              <img
                src="https://assets-global.website-files.com/64555cbab4849c7309c3ff36/645a4c1a6a368f6b46de2e40_Defactor%20Logo%20-%20Light.svg"
                alt="Defactor Logo"
              />
            </a>
          </div>
          <div>
            <h4>Docs</h4>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <a style={{ color: "white" }} href="/docs/category/back-end-api/">
                API
              </a>
              <a
                style={{ color: "white" }}
                href="/docs/category/smart-contracts/"
              >
                Smart Contracts
              </a>
              <a style={{ color: "white" }} href="/docs/front-end-ui/">
                Front End
              </a>
              <a
                style={{ color: "white" }}
                href="/docs/category/real-world-use-cases/"
              >
                Real World Use Cases
              </a>
            </div>
          </div>
          <div>
            <h4>More</h4>
            <a
              style={{ color: "white" }}
              href="https://github.com/defactor-com"
            >
              GitHub
            </a>
          </div>
          <div></div>
        </div>
        <div style={{ paddingTop: "24px" }}>
          <p>Follow us:</p>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ display: "flex" }}>
              <img
                width={25}
                style={{ marginRight: "16px" }}
                src="https://assets-global.website-files.com/64555cbab4849c7309c3ff36/645a5939e751f051a5f5b725_Telegram%20Icon.svg"
              />
              <img
                width={25}
                style={{ marginRight: "16px" }}
                src="https://assets-global.website-files.com/64555cbab4849c7309c3ff36/654a799ede3ae4c77f819d4d_x-twitter%20light.svg"
              />
              <img
                width={25}
                style={{ marginRight: "16px" }}
                src="https://assets-global.website-files.com/64555cbab4849c7309c3ff36/645a59667c961c4ba540c0ea_LinkedIn%20Icon.svg"
              />
              <img
                width={25}
                style={{ marginRight: "16px" }}
                src="https://assets-global.website-files.com/64555cbab4849c7309c3ff36/64d4e3b34cc6594553e35972_Youtube%20(1).svg"
              />
              <img
                width={25}
                src="https://assets-global.website-files.com/64555cbab4849c7309c3ff36/64d4e38c0da218e95c85dea8_discord.svg"
              />
            </div>
            <p>© Defactor 2023. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Footer);
