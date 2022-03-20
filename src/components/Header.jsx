import * as React from "react";
import * as PropTypes from "prop-types";

import { DropDownList } from "@progress/kendo-react-dropdowns";
import {
  AppBar,
  AppBarSection,
  AppBarSpacer,
  Avatar,
} from "@progress/kendo-react-layout";
import { useLocalization } from "@progress/kendo-react-intl";

import { locales } from "./../resources/locales";

import { AppContext } from "./../AppContext";

import headerBg from "../assets/header-bg.png";
import userAvatar from "../assets/user-avatar.jpg";
import { Badge, BadgeContainer } from "@progress/kendo-react-indicators";
import { Link, NavLink } from "react-router-dom";

export const Header = (props) => {
  const { onButtonClick, page } = props;
  const { avatar, localeId, onLanguageChange } = React.useContext(AppContext);
  const localizationService = useLocalization();

  const currentLanguage = locales.find((item) => item.localeId === localeId);

  const imgRef = React.useRef(null);
  const hasImage = avatar && avatar.length > 0;

  React.useEffect(() => {
    if (hasImage) {
      var reader = new FileReader();

      reader.onload = function (e) {
        imgRef.current.setAttribute("src", e.target.result);
      };

      reader.readAsDataURL(avatar[0].getRawFile());
    }
  }, [avatar, hasImage]);

  return (
    <>
      <AppBar>
        <AppBarSection>
          <button className="k-button k-button-clear">
            <span className="k-icon k-i-menu" />
          </button>
        </AppBarSection>

        <AppBarSpacer
          style={{
            width: 4,
          }}
        />

        <AppBarSection>
          <h1 className="title">HealthPal</h1>
        </AppBarSection>

        <AppBarSpacer
          style={{
            width: 32,
          }}
        />

        <AppBarSection>
          <ul>
            <li>
              <NavLink
                to="/covid"
                activeStyle={{
                  fontWeight: "bold",
                  color: "#0B1134",
                }}
              >
                <span>Cases</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/covid/graphs"
                activeStyle={{
                  fontWeight: "bold",
                  color: "#0B1134",
                }}
              >
                <span>Graphs</span>
              </NavLink>
            </li>
          </ul>
        </AppBarSection>

        <AppBarSpacer />

        <AppBarSection className="actions">
          <button className="k-button k-button-clear">
            <BadgeContainer>
              <span className="k-icon k-i-bell" />
              <Badge
                shape="dot"
                themeColor="info"
                size="small"
                position="inside"
              />
            </BadgeContainer>
          </button>
        </AppBarSection>

        {/* <AppBarSection>
          <span className="k-appbar-separator" />
        </AppBarSection> */}
      </AppBar>
      <style>{`
                body {
                    background: #dfdfdf;
                }
                .title {
                    font-size: 18px;
                    margin: 0;
                }
                ul {
                    font-size: 14px;
                    list-style-type: none;
                    padding: 0;
                    margin: 0;
                    display: flex;
                }
                li {
                    margin: 0 10px;
                }
                li:hover {
                    cursor: pointer;
                    color: #84cef1;
                }
                .k-button {
                    padding: 0;
                }
                .k-badge-container {
                    margin-right: 8px;
                }
            `}</style>
    </>
  );
};

Header.displayName = "Header";
Header.propTypes = {
  page: PropTypes.string,
  onButtonClick: PropTypes.func,
};
