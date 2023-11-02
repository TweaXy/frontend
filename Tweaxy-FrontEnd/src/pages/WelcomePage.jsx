import React from "react";
import Privacyclasses from "./WelcomePageStyle/PrivacyAndPolicy.module.css";
import classes from "./WelcomePageStyle/Footer.module.css";
import Headerclasses from "./WelcomePageStyle/Header.module.css";
import Posterclasses from "./WelcomePageStyle/PosterImage.module.css";
import backgroundImage from "../assets/X.png";
import welcomePage from "./WelcomePageStyle/WelcomePage.module.css";
import XLogo from "../assets/X.png";
import GoogleSignUp from "../components/Buttons/GoogleSignUp";
import AppleSignUp from "../components/Buttons/SignUpApple";
import GithubSignUp from "../components/Buttons/GithubSignUp";
import FacebookSignUp from "../components/Buttons/FacebookSignUp";
import SignUpButton from "../components/Buttons/SignUpButton";
import ORclasses from "./WelcomePageStyle/OrLabel.module.css";
export default function WelcomePage() {
  return (
    <React.Fragment>
      <div>
        <div className={welcomePage.loginSection}>
          <div>
            <div className={Headerclasses.container}>
              <h1 className={Headerclasses.heading}>Happening now</h1>
              <p className={Headerclasses.content}>Join today.</p>
            </div>
            <GoogleSignUp />
            <AppleSignUp />
            <GithubSignUp />
            <FacebookSignUp />
            <table>
              <tbody>
                <tr>
                  <td>
                    <div className={ORclasses.straightLine}></div>
                  </td>
                  <td>
                    <div className={ORclasses.label}>or</div>
                  </td>
                  <td>
                    <div className={ORclasses.straightLine}></div>
                  </td>
                </tr>
              </tbody>
            </table>
            <SignUpButton />
            <p className={Privacyclasses.privacyPolicy}>
              By signing up, you agree to the{" "}
              <a href="https://twitter.com/en/tos">Terms of Service</a> and{" "}
              <a href="https://twitter.com/en/privacy">Privacy Policy</a>,
              including{" "}
              <a href="https://help.twitter.com/en/rules-and-policies/twitter-cookies">
                Cookie Use
              </a>
            </p>

            {/*<SignInButton />*/}
          </div>
        </div>
        <div className={Posterclasses.posterSection}>
          <img
            className={Posterclasses.background}
            src={backgroundImage}
            alt="TwitterBackground"
          />
        </div>
      </div>
      <div className={classes.container}>
        <a className={classes.elements} href="https://about.twitter.com/en">
          About
        </a>{" "}
        <a className={classes.elements} href="https://help.twitter.com/en">
          Help Center
        </a>{" "}
        <a className={classes.elements} href="https://twitter.com/en/tos">
          Terms of Service
        </a>{" "}
        <a className={classes.elements} href="https://twitter.com/en/privacy">
          Privacy Policy
        </a>{" "}
        <a
          className={classes.elements}
          href="https://help.twitter.com/en/rules-and-policies/twitter-cookies"
        >
          Cookie Policy
        </a>{" "}
        <a
          className={classes.elements}
          href="https://help.twitter.com/en/resources/accessibility"
        >
          Accessibility
        </a>{" "}
        <a
          className={classes.elements}
          href="https://help.twitter.com/en/resources/accessibility"
        >
          Ads info
        </a>{" "}
        <a className={classes.elements} href="https://blog.twitter.com/">
          Blog
        </a>{" "}
        <a className={classes.elements} href="https://status.twitterstat.us/">
          Status
        </a>{" "}
        <a className={classes.elements} href="https://careers.twitter.com/">
          Careers
        </a>{" "}
        <a
          className={classes.elements}
          href="https://about.twitter.com/en/who-we-are/brand-toolkit"
        >
          Brand Resources
        </a>{" "}
        <a
          className={classes.elements}
          href="https://ads.twitter.com/login?ref=gl-tw-tw-twitter-advertise"
        >
          Advertising
        </a>{" "}
        <a
          className={classes.elements}
          href="https://marketing.twitter.com/en_gb"
        >
          Marketing
        </a>{" "}
        <a
          className={classes.elements}
          href="https://business.twitter.com/?ref=web-twc-ao-gbl-twitterforbusiness&utm_source=twc&utm_medium=web&utm_campaign=ao&utm_content=twitterforbusiness"
        >
          Twitter for Business
        </a>{" "}
        <a className={classes.elements} href="https://developer.twitter.com/en">
          Developers
        </a>{" "}
        <a
          className={classes.elements}
          href="https://twitter.com/i/directory/profiles"
        >
          Directory
        </a>{" "}
        <a
          className={classes.elements}
          href="https://twitter.com/settings/account/personalization"
        >
          Settings
        </a>{" "}
        <p className={classes.elements}>© 2023 X, Inc.</p>
      </div>
    </React.Fragment>
  );
}
