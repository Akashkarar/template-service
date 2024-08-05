import { useRef } from "react";

interface DragAndDropProps {
  file: File | null;
  setFile: React.Dispatch<React.SetStateAction<File | null>>;
  name: string;
}
const DragAndDrop: React.FC<DragAndDropProps> = ({
  name,
  file: _file,
  setFile,
}) => {
  // const [file, setFile] = useState<File | null>(null);

  const inputRef = useRef<HTMLInputElement | null>(null);
  let file: File | null = null;

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    const droppedFile = event.dataTransfer.files[0];
    file = droppedFile;
    setFile(droppedFile);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.length) {
      const selectedFile = event.target.files[0];
      file = selectedFile;
      setFile(selectedFile);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleClick = () => {
    if (!file) {
      if (inputRef.current) {
        inputRef.current.click();
      }
    }
  };

  const handleRemove = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setFile(null);
    // Reset the file input value
    if (inputRef.current?.value) {
      inputRef.current.value = ""; // Clear the file input value
    }
  };

  return (
    <div
      className="drop-zone"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onClick={handleClick}
    >
      {inputRef.current?.files?.item(0)?.name ? (
        <div className="file-info">
          <span className="file-name">
            {inputRef.current?.files?.item(0)?.name}
          </span>
          <button className="btn" onClick={handleRemove}>
            ❌
          </button>
        </div>
      ) : (
        <p>Drag & Drop your files here or click to select files</p>
      )}
      <input
        type="file"
        name={name}
        ref={inputRef}
        style={{ display: "none" }}
        onChange={handleChange}
      />
    </div>
  );
};

export default DragAndDrop;
