import { Link } from "react-router-dom";
import { generateTemplate } from "../../services/generate";
import { useState } from "react";

const Generate: React.FC = () => {
  const [templateData, getTemplateData] = useState();
  const [text, setText] = useState("");

  // State to store all submitted texts
  const [submittedTexts, setSubmittedTexts] = useState([]);

  // Handle text area change
  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  // Handle submit button click
  const handleSubmit = () => {
    if (text.trim()) {
      setSubmittedTexts([...submittedTexts, text]);
      setText(""); // Clear the text area after submitting
    }
  };

  // Handle reset button click
  const handleReset = () => {
    setText("");
  };

  // Handle dropdown selection
  const handleDropdownChange = (e) => {
    const selectedText = e.target.value;
    setText(selectedText);
  };

  // handle data
  const [pdfData, setPdfData] = useState("");
  const onFormSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    setPdfData("");
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const formData = Object.fromEntries(form.entries());
    fetch("https://ratnaafinuatcustomer.aiplservices.com/api/generate", {
      method: "POST",
      body: formData.templateData,
      headers: {
        "x-client-token": "YArUWh1Daf23VhRsxb5e-mn_OGhTX-fAx4AA5U_OsPQ",
        "x-api-key": "Bv6rZ0i-qeLsXg-Qum9K52f8PKDRvMxQeO2m7zFumu8",
        "content-type": "application/json",
      },
    })
      .then(async (response) => {
        console.log(typeof response);
        const url = URL.createObjectURL(await response.blob());
        setPdfData(url);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <h2>Generate Templates</h2>
      <span>URL</span>

      <form onSubmit={onFormSubmit}>
        <input
          type="url"
          name="url"
          defaultValue={
            "https://ratnaafinuatcustomer.aiplservices.com/api/generate"
          }
        />
        <select name="method" id="methods">
          <option value="POST">POST</option>
          <option value="GET">GET</option>
        </select>
        <button style={{ margin: "0 50px" }} type="submit">
          SUBMIT
        </button>
        <div>
          <h3>parameters</h3>
          Template data
          <div
            style={{
              maxWidth: "400px",
              padding: "20px",
              textAlign: "center",
            }}
          >
            <textarea
              style={{ width: "100%", height: "100px" }}
              value={text}
              onChange={handleTextChange}
              placeholder="Type something here..."
            />
            <div style={{ margin: "10px 0" }}>
              <button onClick={handleSubmit} style={{ marginRight: "10px" }}>
                Submit
              </button>
              <button onClick={handleReset}>Reset</button>
            </div>
            <div>
              <h3>Submitted Texts:</h3>
              <select
                style={{ width: "100%" }}
                onChange={handleDropdownChange}
                value=""
              >
                <option value="" disabled>
                  Select a text
                </option>
                {submittedTexts.map((text, index) => (
                  <option key={index} value={text}>
                    {text}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </form>

      {pdfData ? (
        <iframe src={pdfData} width="100%" height="600px" title="PDF Viewer" />
      ) : (
        <p>Loading PDF...</p>
      )}

      <div className="nav-button">
        <div className="nav-btn-left">
          <Link to={"../upload"}>
            <button>previous</button>
          </Link>
        </div>
        <div className="nav-btn-right">
          <Link to={"../profile"}>
            <button>next</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Generate;
