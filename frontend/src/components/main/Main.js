import React, { useState } from "react";
import styles from "./Main.module.css";

const Main = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!selectedFile) {
      console.error("No file selected.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      console.log("heloo1");

      const response = await fetch("http://127.0.0.1:8080/upload", {
        method: "POST",
        body: formData,
      });
      console.log(response);
      if (response.ok) {
        // console.log(response.message);
        console.log("File uploaded successfully.");
      } else {
        console.error("Failed to upload file.");
      }
    } catch (error) {
      console.log("heloooo2");
      console.error("Error uploading file:", error);
    }
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Upload CSV File</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="file"
          accept=".csv"
          onChange={handleFileChange}
          className={styles.fileInput}
        />
        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Main;
