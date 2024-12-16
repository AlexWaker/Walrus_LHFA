import React from 'react';
import { Link } from 'react-router-dom';
import { ConnectButton } from '@mysten/dapp-kit';
import { Box } from '@radix-ui/themes';
import './MainPage.css';
import { useState } from 'react';
import { useCurrentWallet, useCurrentAccount } from '@mysten/dapp-kit';
import { useNavigate } from 'react-router-dom';
import Header from './Header';


const MainPage: React.FC = () => {

  const navigate = useNavigate();
  const { currentWallet, connectionStatus } = useCurrentWallet();
  const nowaccount = useCurrentAccount();
  // 这是钩子的标准写法，
  // const [state, setState] = useState(initialValue);
  // state 是状态，setState 是设置状态的函数
  // initialValue 是初始值
  // setState 用法：setState(newState)，将state设置为newState，就这么简单，就是一个简单的赋值
  const isWalletConnected = () => {
    if (connectionStatus == 'disconnected') { //=赋值   ==相等   ===严格相等
      return false;
    }
    return true;
  };

  const getWalletAddress = () => {
    return nowaccount?.address; //？是ts属性，表示可能为空
  };

  const handleImageClick = (id: string) => {
    if (isWalletConnected()) {
      navigate(`/${id}`); // 跳转到对应的页面
    } else {
      alert('Please connect your wallet first');
    }
  };
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
  const images = [
    {
      id: 'john-von-neumann',
      title: 'John von Neumann',
      description: 'A mathematician and physicist known for game theory and computer science.',
      url: 'https://pic.imgdb.cn/item/6756fd88d0e0a243d4e0b50d.webp',
    },
    {
      id: 'isaac-newton',
      title: 'Isaac Newton',
      description: 'A physicist and mathematician who developed the laws of motion.',
      url: 'https://pic.imgdb.cn/item/6756fd87d0e0a243d4e0b50c.webp',
    },
    {
      id: 'victor-hugo',
      title: 'Victor Hugo',
      description: 'A French poet and novelist best known for Les Misérables.',
      url: 'https://pic.imgdb.cn/item/6756fd87d0e0a243d4e0b50b.webp',
    },
    {
      id: 'thomas-edison',
      title: 'Thomas Edison',
      description: 'An inventor and businessman known for the light bulb and phonograph.',
      url: 'https://pic.imgdb.cn/item/6756fd76d0e0a243d4e0b506.webp',
    },
    {
      id: 'leonardo-da-vinci',
      title: 'Leonardo da Vinci',
      description: 'An Italian artist, scientist, and polymath known for his paintings and inventions.',
      url: 'https://pic.imgdb.cn/item/6756fd75d0e0a243d4e0b505.webp',
    },
    {
      id: 'sigmund-freud',
      title: 'Sigmund Freud',
      description: 'An Austrian neurologist and the founder of psychoanalysis.',
      url: 'https://pic.imgdb.cn/item/6756fd74d0e0a243d4e0b504.webp',
    },
    {
      id: 'alexander-the-great',
      title: 'Alexander the Great',
      description: 'A Macedonian king known for his military conquests and the spread of Hellenistic culture.',
      url: 'https://pic.imgdb.cn/item/6756fd73d0e0a243d4e0b503.webp',
    },
    {
      id: 'adam-smith',
      title: 'Adam Smith',
      description: 'A Scottish economist and philosopher known for his work on the division of labor.',
      url: 'https://pic.imgdb.cn/item/6756fd73d0e0a243d4e0b502.webp',
    },
  ];
  
  return (
    <Box className="allMainPage">
      {/* <header className="header">
        <Box className="logo">LHFA</Box>
        <Box className="upload_buttons" style={{ display: 'flex', alignItems: 'center' }}>
          <button
            onClick={() => setShowModal(true)} // 点击按钮显示弹窗
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
      </header> */}
      <Header />
      <Box className="main">
        <Box className="main-title" style={{ marginTop: '0' }}>
          <h1>Welcome to the Library of Human Freedom Academy</h1>
        </Box>
        <Box className="main-description" style={{ maxWidth: '800px', margin: '0 auto', marginTop: '0px' }}>
          <h2>
            This is a free academic website built on the Walrus, where you can publish your papers or explore anyone
            else's ideas.
          </h2>
        </Box>
        <Box className="search-box" style={{ width: '70%', marginTop: '30px' }}>
          <input
            type="text"
            placeholder="Search..."
            style={{
              borderRadius: '50px',
              width: '100%',
              padding: '20px',
              border: '1px solid #ccc',
            }}
          />
        </Box>
        <Box className="image-gallery" style={{ width: '80%', display: 'flex', flexWrap: 'wrap', marginTop: '30px' }}>
          {images.map((image) => (
            <Box key={image.id} style={{ flex: '1 0 21%', margin: '10px' }}>
              <img
                src={image.url}
                alt="Image 1"
                style={{ width: '100%', borderRadius: '10px' }}
                onClick={() => handleImageClick(image.id)}
              />
            </Box>
          ))}
        </Box>
      </Box>
      <Box className="footer">
        <footer className="footer">
          <p>&copy; 2024 My Website. All rights reserved.</p>
        </footer>
      </Box>
      {/* 弹窗 */}


    </Box>
  );
};

export default MainPage;
