import React from 'react';
import { useParams } from 'react-router-dom';

const ImageDetail: React.FC = () => {
  const { id } = useParams();
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

  const image = images.find((img) => img.id === id) || {
    title: 'Unknown',
    description: 'No information available.',
    url: '',
  };

  return (
    <div>
      <h1>{image.title}</h1>
      <p>{image.description}</p>
      {/* 您可以在这里添加更多内容，例如图片、描述等 */}
    </div>
  );
};

export default ImageDetail;