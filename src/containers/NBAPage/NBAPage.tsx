import { Button, Card } from '@components';
import React from 'react';

function NBAPage() {
  return (
    <div className="font-gilroy mt-8">
      <Button
        className="bg-red text-white p-3 rounded float-right hover:bg-red500 mr-3"
        type="button"
      >
        Add a New Item
      </Button>
      <h1 className="text-4xl font-bold text-center">NBA Teams Items</h1>
      <div className="mt-14 mb-5 flex gap-5 flex-wrap justify-center">
        <Card
          item={{
            currentBid: '100',
            description: 'He wore this t-shirt in his farewell',
            imgSrc: 'https://flowbite.com/docs/images/blog/image-1.jpg',
            startingBid: '50',
            title: 'Lebron James',
          }}
        />
        <Card
          item={{
            currentBid: '100',
            description: 'He wore this t-shirt in his farewell',
            imgSrc: 'https://flowbite.com/docs/images/blog/image-1.jpg',
            startingBid: '50',
            title: 'Lebron James',
          }}
        />
        <Card
          item={{
            currentBid: '100',
            description: 'He wore this t-shirt in his farewell',
            imgSrc: 'https://flowbite.com/docs/images/blog/image-1.jpg',
            startingBid: '50',
            title: 'Lebron James',
          }}
        />
        <Card
          item={{
            currentBid: '100',
            description: 'He wore this t-shirt in his farewell',
            imgSrc: 'https://flowbite.com/docs/images/blog/image-1.jpg',
            startingBid: '50',
            title: 'Lebron James',
          }}
        />
      </div>
    </div>
  );
}

export default NBAPage;
