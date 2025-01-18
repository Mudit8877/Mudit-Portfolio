export type WorkTile = {
  title: string;
  description: string;
  image: {
    src: string;
    width: number;
    height: number;
  };
};

export const workTiles: WorkTile[] = [
  {
    description: `Here are the Projects`,
    title: `I've worked on over the Years`,
    image: {
      src: '/static/images/projects.png',
      width: 800,
      height: 700,
    }, 
  },
  {
    description: 'I have Developed',
    title: 'FARMPE',
    image: {
      src: '/static/images/farm.jpeg',
      width: 600,
      height: 664,
    },
  },
  {
    description: `I have Developed`,
    title: 'Spotify Home Page Clone',
    image: {
      src: '/static/images/spotify-clone.jpg',
      width: 550,
      height: 1000,
    },
  },
  {
    description: `I have built`,
    title: 'Departmental Store Management System',
    image: {
      src: '/static/images/file.png',
      width: 700,
      height: 700,
    },
  },
];
