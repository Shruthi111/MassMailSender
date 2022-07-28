import React from "react";

export default function About() {
  return (
    <div className="container my-3">
      <div className="card">
        <h5 className="card-header">About this application:</h5>
        <div className="card-body">
          <h5 className="card-title">Mass-mail Dispatcher</h5>
          <p className="card-text my-3 mx-3">
            Mass-mail dispatcher is an amazing web-application which allows you
            to send mail to multiple people at a time.You can upload a csv
            file(comma seperated values-.csv files) which has a list of
            recipients email id's.
            <br />
            <br />
            It also categorizes the valid and invalid email-id's.So it will be
            easier for us to filter the email-id list.Isn't it super cool?
            <br />
          </p>
        </div>
      </div>
      <div
        className="container card my-3 text-center"
        style={{ width: "18rem" }}
      >
        <div className="card-header">
          <strong>Steps to use this application:</strong>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <strong>Step 1:</strong>You should have all recipients emailid list
            in a .csv file
          </li>
          <li className="list-group-item">
            <strong>Step 2:</strong>Filter the emailId list by removing invalid
            emailIds.To do this click on the Filter button
          </li>
          <li className="list-group-item">
            <strong>Step 3:</strong>After filtration,you can type your mail
            subject and mail in the textarea provided.
          </li>
          <li className="list-group-item">
            <strong>Step 4:</strong>Click on SendMail,which will do your job.You
            are good to go
          </li>
        </ul>
      </div>

      <p>
        Why delay then?Click on the button below to use the application and grow
        your business.
        <br />
        Using this application will make your work easy-peasy! Have a GoodDay!
      </p>
      <a href="/" className="btn btn-primary">
        Send Mail
      </a>
    </div>
  );
}
