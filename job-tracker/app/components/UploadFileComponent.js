import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Typography } from '@mui/material';
import { useState } from 'react';

export default function UploadFileComponent() {
    const [files, setFiles] = useState(null)
    const submitResume = (event) => {
        const file = event.target.files[0]
        setFiles(event.target.files[0])
        console.log("file", file, files)
        //uploadFileToS3(file)
    }
    async function uploadFileToS3(file) {
        if (!file) return;
        const form = new FormData();
        form.append("file", file);

        const options = {
            method: 'POST'
        };

        options.body = form;

        fetch('http://localhost:3200/upload', options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
    }
    return (
        <div>
            <h1>Upload Your Resume</h1>
            <Typography variant='body2'></Typography>
            <Button
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                startIcon={<CloudUploadIcon />}>
                Upload files
                <input
                    type="file"
                    hidden
                    accept=".pdf,.doc,.docx"
                    onChange={submitResume}
                />
            </Button>
            <div>
                {files && <Typography variant='body2'>{files.name}</Typography>}
            </div>
            {/* <Button loading variant="outlined">
                Submit
            </Button> */}
            <Button variant="outlined" onClick={() => uploadFileToS3(files)}>
                Submit
            </Button>
        </div>
    )
}