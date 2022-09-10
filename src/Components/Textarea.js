import React, { useState } from "react";
import EmailService from "../service/email-service";

export default function Textarea(props) {
  const [dataa, setData] = useState("");
  const [fileName, setfileName] = useState("");
  const [listheading, setlistheading] = useState("");
  const filteredlist = [];

  const values = {
    from_name: "",
    to_email: "",
    message: "",
    subject: "",
  };

  let array = dataa.split(/\r?\n|\r/).map((e) => {
    return e.split(",");
  });
  array.forEach((e) => {
    e.map((e) => {
      let regx = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\.[a-z]{2,3}$/;
      if (regx.test(e)) {
        filteredlist.push(e);
      }
    });
  });
  // console.log(filteredlist.length);

  const Filter = () => {
    document.querySelector("table").innerHTML = "";
    let array = dataa.split(/\r?\n|\r/).map((e) => {
      return e.split(",");
    });
    array.forEach((e) => {
      let m = e.map((e) => {
        let regx = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\.[a-z]{2,3}$/;
        if (regx.test(e)) {
          // filteredlist.push(e);
          return `<td>${e}</td>`;
        }
      });

      let ce = document.createElement("tr");
      ce.innerHTML = m;
      document.querySelector("table").appendChild(ce);
      setlistheading(`Filtered List -Total result=${filteredlist.length}:`);
      props.showAlert("Filtered!", "success");
    });
    // console.log(filteredlist);
  };
  const SendMail = () => {
    let subject = document.querySelector(".subject").value;
    let body = document.querySelector(".message").value;
    let from = document.querySelector(".from").value;

    // console.log(body);
    values.message = body;
    values.from_name = from;
    values.subject = subject;

    // Just for testing purpose,I have included only the first mail id in the csv file
    values.to_email = filteredlist[0];
    EmailService.sendEmail(values);

    filteredlist.forEach((item) => {
      values.to_email = item;
      console.log(values);
      // EmailService.sendEmail(values);
      // console.log(item);
    });
  };

  const Showvalidemails = () => {
    document.querySelector("table").innerHTML = "";
    let array = dataa.split(/\r?\n|\r/).map((e) => {
      return e.split(",");
    });
    let elen = 0;
    array.forEach((e) => {
      let m = e.map((e) => {
        let regx = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\.[a-z]{2,3}$/;

        if (regx.test(e)) {
          elen++;
          return `<td>${e}</td>`;
        }
      });

      let ce = document.createElement("tr");
      ce.innerHTML = m;
      document.querySelector("table").appendChild(ce);
    });
    setlistheading(`Valid Mail-Id List-Total result=${elen}:`);
    props.showAlert("Valid Email-Id's extracted!", "success");
  };

  const clear = () => {
    let newtext = "";
    settext(newtext);
    props.showAlert("Cleared!", "success");
  };

  const Showinvalidemails = () => {
    document.querySelector("table").innerHTML = "";
    let array = dataa.split(/\r?\n|\r/).map((e) => {
      return e.split(",");
    });
    let elen = 0;
    array.forEach((e) => {
      let m = e.map((e) => {
        let pattern = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\.[a-z]{2,3}$/;
        if (pattern.test(e)) {
        } else {
          elen++;
          return `<td>${e}</td>`;
        }
      });
      let ce = document.createElement("tr");
      ce.innerHTML = m;
      document.querySelector("table").appendChild(ce);
    });
    setlistheading(`InValid Mail-Id List:Total Results=${elen}`);
    props.showAlert("InValid Email-Id's extracted!", "success");
  };

  const Showallemails = () => {
    document.querySelector("table").innerHTML = "";
    // console.log(dataa);

    let array = dataa.split(/\r?\n|\r/).map((e) => {
      return e.split(",");
    });
    let elen = 0;
    array.forEach((e) => {
      let m = e.map((e) => {
        elen++;
        return `<td>${e}</td>`;
      });
      let ce = document.createElement("tr");
      ce.innerHTML = m;
      document.querySelector("table").appendChild(ce);
    });
    setlistheading(`All Mail-Id List:Total Result=${elen}`);
    props.showAlert("All Email-Id's extracted!", "success");
  };

  const Upload = () => {
    let fileselected = document.getElementById("file-select");
    const input = document.getElementById("file-select");
    const file = input.value.split("\\");
    setfileName(file[file.length - 1]);
    // console.log(fileName);

    const reader = new FileReader();
    let files = document.getElementById("file-select").files;

    reader.readAsText(files[0]);
    reader.addEventListener("load", (e) => {
      var data = e.target.result;
      setData(data);
      // console.log(data);
    });

    fileselected.value
      ? props.showAlert(`${fileName} sucessfully uploaded!`, "success")
      : props.showAlert(
          "File not uploaded.Select the appropriate CSV file!",
          "warning"
        );
  };

  const handleOnchange = (event) => {
    settext(event.target.value);

    // console.log("change");
  };
  const handleOnchangefrom = (event) => {
    setfrom(event.target.value);

    // console.log("change");
  };

  const handleOnchangesub = (event) => {
    setsub(event.target.value);
    // console.log("change");
  };
  const [text, settext] = useState(" ");
  const [sub, setsub] = useState("");
  const [from, setfrom] = useState("");
  const [to, setto] = useState("");

  return (
    <>
      <div className="mb-3 container my-3">
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            From email:
          </label>
          <textarea
            spellCheck="false"
            className="form-control from"
            id="exampleFormControlTextarea1"
            rows="1"
            onChange={handleOnchangefrom}
            value={from}
            placeholder="Type the from email here!"
          ></textarea>

          <label htmlFor="exampleFormControlInput1" className="form-label">
            Subject:
          </label>
          <textarea
            spellCheck="false"
            className="form-control subject"
            id="exampleFormControlTextarea1"
            rows="1"
            onChange={handleOnchangesub}
            value={sub}
            placeholder="Type the subject here!"
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Message:
          </label>
          <textarea
            spellCheck="false"
            className="form-control message"
            id="exampleFormControlTextarea1"
            rows="7"
            onChange={handleOnchange}
            value={text}
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
          <b>{text.length}</b> characters and <b>{text.split(" ").length}</b>{" "}
          words
        </p>
        <hr />
        <h4>Preview:</h4>
        {text ? (
          <p>{text}</p>
        ) : (
          <p>
            <i>Nothing to preview!</i>
          </p>
        )}
      </div>
      <hr />
      <div className="container">
        <h5 id="heading">{listheading}</h5>
        <table></table>
      </div>
    </>
  );
}
