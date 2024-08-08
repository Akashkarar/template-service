import { useState } from "react";
import { Link } from "react-router-dom";
import DragAndDrop from "../../components/DragAndDrop";
import { generateTemplate } from "../../services/generate";

const Upload = () => {
  const [file, setFile] = useState<File | null>(null);

  // handle data
  const onFormSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(form.entries());
    console.log({ data });
    generateTemplate(data);
  };
  return (
    <div className="container">
      <h2>Generate Templates</h2>
      <span>URL</span>

      <form onSubmit={onFormSubmit}>
        <input type="text" name="url" defaultValue={"https://localhost:3001"} />
        <select name="method" id="methods">
          <option value="post">POST</option>
          <option value="get">GET</option>
        </select>
        <button style={{ margin: "0 50px" }}>SUBMIT</button>
        <div>
          <h3>parameters</h3>
          Template Name
          <div>
            <input name="templateName" type="text" />
          </div>
          Template File:
          <DragAndDrop name="templateFile" setFile={setFile} file={file} />
          Validation Schema:
          <DragAndDrop name="validationSchema" setFile={setFile} file={file} />
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
    </div>
  );
};

export default Upload;
