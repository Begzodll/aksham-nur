import axios from "axios";
import {useEffect, useState} from "react";

const Admin = () => {

    const [selectedFile, setSelectedFile] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault()
        const formData = new FormData();
        formData.append("selectedFile", selectedFile);

        console.log(formData)
        // try {
        //     const response = await axios.post("", formData, {
        //         headers: {"Content-Type": "multipart/form-data"}
        //     }).then((res) => {
        //         alert("File Uploaded Successfully");
        //     }).catch((error) => {
        //         alert("Error")
        //     });
        // } catch(error) {
        //     console.log(error)
        // }
    }

    const handleFileSelect = (event) => setSelectedFile(event.target.files[0])


    return (
        <div>
            <input type="file" onChange={(e) => handleFileSelect(e)}/>
            <button onClick={handleSubmit}>submit</button>
        </div>
    )
}
export default Admin