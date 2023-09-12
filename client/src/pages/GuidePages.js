import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles/GuidePages.css";

const GuidePages = () => {
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/home");
  };

  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>GuidePage</title>
        <link rel="stylesheet" type="text/css" href="/style.css" />
      </head>
      <body>
        <div className="guidepage">
          {/* <h1>Welcome to the Guide page</h1> */}
          <div className="light-box-1">
            <h1>
              This services comes with <span>Gold Membership</span> only
            </h1>
            <h2>
              Don't Worry! you a <span>Free subscription</span> for a month...
            </h2>
          </div>

          <div className="light-box">
            <h1>Step - 1</h1>
            <h2>Verification of Contact Number(SMS)</h2>
            <p className="offer">
              To start with the services, you need to claim your `Free
              subscription`.{" "}
            </p>
            <div className="claim-question">
              <p className="question">How to claim the Free subscription?</p>
              <p className="answer">
                (You are just One click a away from Free subscription)
              </p>
              <p>👇🏻</p>
              <p>
                - Email :{" "}
                <a href="mailto:mhaskepy20.mfg@coeptech.ac.in?subject=Claim%20Gold%20Membership&body=Hello%20Team%20SmaDuleX,%20Please%20Claim%20my%20free%20membership">
                  mhaskepy20.mfg@coeptech.ac.in
                </a>
              </p>
              <p>
                - Contact :{" "}
                <a
                  href="https://api.whatsapp.com/send?phone=+919881470684&text=Hello Team SmaDuleX, Please Claim my free membership"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Send a WhatsApp Message
                </a>
              </p>
            </div>
            <p className="note">
              Note: The SmaDuleX Team will send you the OTP. You need to send
              this OTP back within a minute to the team.
            </p>
          </div>

          <div className="light-box">
            <h1>Step - 2</h1>
            <h2>Starting with Reminder services(WhatsApp Message)</h2>
            <p className="offer">
              To start with the services, you need to claim your `Free
              subscription`.{" "}
            </p>
            <div className="claim-question">
              <p className="question">How to claim the Free subscription?</p>
              <p className="answer">
                (You are just One click a away from Free subscription)
              </p>
              <p>👇🏻</p>

              <p>
                <a
                  href="https://api.whatsapp.com/send?phone=+14155238886&text=join production-name"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Start reminder services
                </a>
              </p>
            </div>
            <p className="note">
              Note: The SmaDuleX Team will disable the Reminder Services after
              24 hours due to security concerns. If you don't want to turn off
              the Reminder services every 24 hours, you can either drop the code
              on your Assistant Bot or use the link provided above directly.
            </p>
            <p className="security-code">
              security code = join production-name
            </p>
          </div>

          <button className="backButton" onClick={navigateToHome}>
            <div className="btn-flip" data-back="Back" data-front="Guide"></div>
          </button>
        </div>
      </body>
    </html>
  );
};

export default GuidePages;
