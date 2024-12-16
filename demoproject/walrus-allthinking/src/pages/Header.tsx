import React from 'react';
import { ConnectButton } from '@mysten/dapp-kit';
import { Box } from '@radix-ui/themes';
import { useState } from 'react';
import { useCurrentWallet } from '@mysten/dapp-kit';

const Header: React.FC = () => {
    const [showModal, setShowModal] = useState(false); // 控制弹窗显示状态
    const [summary, setSummary] = useState(''); // 摘要
    const [epoch, setEpoch] = useState(''); // Epoch
    const { currentWallet, connectionStatus } = useCurrentWallet();
    const isWalletConnected = () => {
        if (connectionStatus == 'disconnected') { //=赋值   ==相等   ===严格相等
          return false;
        }
        return true;
    };
    const isShowModal = () => {
        if(isWalletConnected()){
            setShowModal(true);
        } else {
            alert('Please connect your wallet first');
        }
    }
    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (isWalletConnected()) {
          const file = event.target.files?.[0];
          if (file) {
            console.log('Uploaded file:', file.name); // 这里可以处理上传的文件
          }
        } else {
          alert('Please connect your wallet first');
        }
      };
    return (
        <Box className="allHeader">
            <header className="header">
                <Box className="logo">LHFA</Box>
                <Box className="upload_buttons" style={{ display: 'flex', alignItems: 'center' }}>
                    <button
                    onClick={() => isShowModal()} // 点击按钮显示弹窗
                    style={{
                        padding: '10px 20px',
                        fontSize: '15px',
                        backgroundColor: '#007BFF',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        marginRight: '20px',
                    }}
                    >
                    Upload your issue
                    </button>
                </Box>
                <Box className="connect_buttons">
                    <ConnectButton />
                </Box>
            </header>
            {/* 弹窗 */}
            {showModal && (
            <Box
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 1000,
            }}
            >
            <Box
                style={{
                backgroundColor: 'black',
                padding: '20px',
                borderRadius: '10px',
                width: '400px',
                textAlign: 'center',
                }}
            >
                <h2>数据输入</h2>
                <table style={{ width: '100%', marginTop: '20px', borderCollapse: 'collapse' }}>
                <tbody>
                    <tr>
                    <td style={{ padding: '10px', textAlign: 'left' }}>摘要</td>
                    <td>
                        <input
                        type="text"
                        value={summary}
                        onChange={(e) => setSummary(e.target.value)}
                        style={{
                            width: '100%',
                            padding: '5px',
                            border: '1px solid #ccc',
                            borderRadius: '5px',
                        }}
                        />
                    </td>
                    </tr>
                    <tr>
                    <td style={{ padding: '10px', textAlign: 'left' }}>上传文件</td>
                    <td>
                        <input
                        type="file"
                        onChange={handleFileUpload}
                        style={{
                            width: '100%',
                        }}
                        />
                    </td>
                    </tr>
                    <tr>
                    <td style={{ padding: '10px', textAlign: 'left' }}>Epoch</td>
                    <td>
                        <input
                        type="text"
                        value={epoch}
                        onChange={(e) => setEpoch(e.target.value)}
                        style={{
                            width: '100%',
                            padding: '5px',
                            border: '1px solid #ccc',
                            borderRadius: '5px',
                        }}
                        />
                    </td>
                    </tr>
                </tbody>
                </table>
                <button
                onClick={() => setShowModal(false)} // 点击按钮关闭弹窗
                style={{
                    marginTop: '20px',
                    padding: '10px 20px',
                    fontSize: '14px',
                    backgroundColor: '#007BFF',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                }}
                >
                Submit
                </button>
            </Box>
            </Box>
            )}
        </Box>
    );
};

export default Header;
