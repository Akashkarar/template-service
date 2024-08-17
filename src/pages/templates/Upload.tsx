import { SetStateAction, useState } from "react";
import { Link } from "react-router-dom";
import DragAndDrop from "../../components/DragAndDrop";
import { uploadTemplate } from "../../services/upload";

const Upload = () => {
  const [message, setMessage] = useState("");
  const [templateName, setTemplateName] = useState("dummy");
  const [templateFile, setTemplateFile] = useState<File | null>(null);
  const [validationSchema, setValidationSchema] = useState<File | null>(null);
  const onFormSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("templateName", templateName);
    if (templateFile) formData.append("templateFile", templateFile);
    if (validationSchema) formData.append("validationSchema", validationSchema);

    fetch("https://ratnaafinuatcustomer.aiplservices.com/api/upload_template", {
      method: "POST",
      body: formData,
      headers: {
        "x-client-token": "YArUWh1Daf23VhRsxb5e-mn_OGhTX-fAx4AA5U_OsPQ",
        "x-api-key": "Bv6rZ0i-qeLsXg-Qum9K52f8PKDRvMxQeO2m7zFumu8",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        console.log(json);
        setMessage(JSON.stringify(json.message ?? json.error));
      })
      .catch((error) => {
        console.log(error);
        setMessage(error);
      });
  };

  return (
    <div className="container">
      <h2>Generate Templates</h2>
      <span>URL</span>

      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          name="url"
          style={{ width: "30%" }}
          defaultValue={
            "https://ratnaafinuatcustomer.aiplservices.com/api/upload"
          }
        />
        <select name="method" id="methods">
          <option value="post">POST</option>
          <option value="get">GET</option>
        </select>
        <button style={{ margin: "0 50px" }}>SUBMIT</button>
        <div>
          <h3>parameters</h3>
          Template Name
          <div>
            <input
              name="templateName"
              type="text"
              defaultValue={"dummy"}
              onChange={(e) => {
                setTemplateName(e.target.value);
              }}
            />
          </div>
          Template File:
          <DragAndDrop
            name="templateFile"
            setFile={setTemplateFile}
            file={templateFile}
            fileType=".html"
          />
          Validation Schema:
          <DragAndDrop
            name="validationSchema"
            setFile={setValidationSchema}
            file={validationSchema}
            fileType=".json"
          />
        </div>
      </form>
      <div className="nav-button">
        <div className="nav-btn-left">
          <Link to={"../introduction"}>
            <button>previous</button>
          </Link>
        </div>
        <div className="nav-btn-right">
          <Link to={"../generate"}>
            <button>next</button>
          </Link>
        </div>
      </div>

      <p>{message}</p>
    </div>
  );
};

export default Upload;
