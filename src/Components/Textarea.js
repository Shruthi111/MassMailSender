import React, { useState } from "react";

export default function Textarea(props) {
  const SendMail = () => {
    props.showAlert("Mail sucessfully sent!", "success");
  };

  const Showvalidemails = () => {
    props.showAlert("Valid email-id's sucessfully fetched!", "success");
  };

  const clear = () => {
    let newtext = "";
    settext(newtext);
    props.showAlert("Cleared!", "success");
  };

  const Showinvalidemails = () => {
    props.showAlert("Invalid Email-Id's extracted!", "success");
  };
  const Filter = () => {
    props.showAlert("Filtered", "success");
  };
  const Showallemails = () => {
    props.showAlert("All Email-Id's extracted!", "success");
  };
  const Upload = () => {
    let fileselected = document.getElementById("file-select");
    // console.log(fileselected.value);
    fileselected.value
      ? props.showAlert("CSV file sucessfully uploaded!", "success")
      : props.showAlert(
          "File not uploaded.Select the appropriate CSV file!",
          "warning"
        );
  };

  const handleOnchange = (event) => {
    settext(event.target.value);
    // console.log("change");
  };
  const [text, settext] = useState(" ");
  return (
    <>
      <div className="mb-3 container my-3">
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Subject:
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Type your mail subject here"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Message:
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="7"
            onChange={handleOnchange}
            placeholder="Type the message here!"
          ></textarea>
        </div>
        <div className="my-3">
          <form action="/">
            <label htmlFor="myfile">Accepts only csv files! : </label>
            <input type="file" id="file-select" accept=".csv" />
            <button
              type="button"
              className="btn btn-primary btn-sm my-2 mx-3"
              onClick={Upload}
            >
              Upload
            </button>
            <button
              type="button"
              className="btn btn-primary btn-sm my-2 mx-3"
              onClick={Filter}
            >
              Filter
            </button>
          </form>
        </div>
        <button
          type="button"
          className="btn btn-primary my-2 mx-3"
          onClick={SendMail}
        >
          SendMail!
        </button>
        <button
          type="button"
          className="btn btn-primary my-2 mx-3"
          onClick={Showvalidemails}
        >
          Valid Email-Id List
        </button>

        <button
          type="button"
          className="btn btn-primary my-2 mx-3"
          onClick={Showinvalidemails}
        >
          Invalid Email-Id List
        </button>
        <button
          type="button"
          className="btn btn-primary my-2 mx-3"
          onClick={Showallemails}
        >
          Show All Mail-Ids
        </button>
        <button
          type="button"
          className="btn btn-primary my-2 mx-3"
          onClick={clear}
        >
          Clear!
        </button>
      </div>
      <div className="container">
        <h4>Your text summary:</h4>
        <p>
          {text.length} characters and {text.split(" ").length} words
        </p>
        <h4>Preview</h4>
        <p>{text}</p>
      </div>
    </>
  );
}
