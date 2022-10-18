import './style.css';

const showsArray = [
  {
    id: 1,
    name: 'Under the Dome',
    genres: [
      'Drama',
      'Science-Fiction',
      'Thriller',
    ],
    rating: {
      average: 6.5,
    },
    image: {
      medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg',
      original: 'https://static.tvmaze.com/uploads/images/original_untouched/81/202627.jpg',
    },
    summary: "<p><b>Under the Dome</b> is the story of a small town that is suddenly and inexplicably sealed off from the rest of the world by an enormous transparent dome. The town's inhabitants must deal with surviving the post-apocalyptic conditions while searching for answers about the dome, where it came from and if and when it will go away.</p>",
  },

  {
    id: 2,
    name: 'Person of Interest',
    genres: [
      'Action',
      'Crime',
      'Science-Fiction',
    ],
    rating: {
      average: 8.8,
    },
    image: {
      medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/163/407679.jpg',
      original: 'https://static.tvmaze.com/uploads/images/original_untouched/163/407679.jpg',
    },
    summary: "<p>You are being watched. The government has a secret system, a machine that spies on you every hour of every day. I know because I built it. I designed the Machine to detect acts of terror but it sees everything. Violent crimes involving ordinary people. People like you. Crimes the government considered 'irrelevant'. They wouldn't act so I decided I would. But I needed a partner. Someone with the skills to intervene. Hunted by the authorities, we work in secret. You'll never find us. But victim or perpetrator, if your number is up, we'll find you.</p>",
  },

  {
    id: 4,
    name: 'Arrow',
    genres: [
      'Drama',
      'Action',
      'Science-Fiction',
    ],
    rating: {
      average: 7.4,
    },
    image: {
      medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/213/534017.jpg',
      original: 'https://static.tvmaze.com/uploads/images/original_untouched/213/534017.jpg',
    },
    summary: '<p>After a violent shipwreck, billionaire playboy Oliver Queen was missing and presumed dead for five years before being discovered alive on a remote island in the Pacific. He returned home to Starling City, welcomed by his devoted mother Moira, beloved sister Thea and former flame Laurel Lance. With the aid of his trusted chauffeur/bodyguard John Diggle, the computer-hacking skills of Felicity Smoak and the occasional, reluctant assistance of former police detective, now beat cop, Quentin Lance, Oliver has been waging a one-man war on crime.</p>',
  },

];

console.log(showsArray);