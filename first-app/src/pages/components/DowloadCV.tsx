import React from 'react';

const DownloadButton = () => {
    const  handleDownload  = () => {
        const   urlCV = '/first-app/public/Dincher_Nedzhatinov Selimov_Resume.pdf';
        window.open(urlCV, '_blank');
    }
    return(
        <button onClick={handleDownload}>Download CV</button>
    );
}

export default DownloadButton;