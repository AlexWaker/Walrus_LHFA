import React from 'react';
import { useParams } from 'react-router-dom';

const DownloadPage: React.FC = () => {
  const {blob_id} = useParams();
  const handleDownload = () => {
    // 处理下载逻辑，比如下载一个文件
    const link = document.createElement('a');
    link.href = 'https://example.com/sample-file.pdf'; // 替换为文件的实际地址
    link.download = 'sample-file.pdf'; // 文件名
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      height: '100vh',
      textAlign: 'center',
    }}>
      <h1>Welcome to the Download Page</h1>
      <p>Click the button below to download your file.</p>
      <button 
        onClick={handleDownload} 
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          fontWeight: 'bold',
          color: '#fff',
          backgroundColor: '#007BFF',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginTop: '20px'
        }}
      >
        Download
      </button>
    </div>
  );
};

export default DownloadPage;
