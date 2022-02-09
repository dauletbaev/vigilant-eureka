const loremText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
const loremTextShort =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
const image = '/uploads/2022-09-2/file-1644387106564.jpg';

export const defaultBuildings = [
  {
    name: 'Educational buildings',
    slug: 'educational-buildings',
    description: loremText,
    image: image,
    subBuildings: [
      {
        name: 'School',
        description: loremTextShort,
        image: image,
      },
    ],
  },
  {
    name: 'Lecture halls',
    slug: 'lecture-halls',
    description: loremText,
    image: image,
    subBuildings: [
      {
        name: 'Lecture hall 1',
        description: loremTextShort,
        image: image,
      },
      {
        name: 'Lecture hall 2',
        description: loremTextShort,
        image: image,
      },
    ],
  },
];
