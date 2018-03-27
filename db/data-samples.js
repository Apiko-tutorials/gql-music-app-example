/* eslint-disable */
import mongoose from 'mongoose';

const { ObjectId } = mongoose.Types;

export const tracks = [
  {
    "_id" : new ObjectId("5ab2bf99b316750897ec44d3"),
    "name" : "Lost On You",
    "rating" : 200,
    "hypeCoefficient" : 1.1,
    "genres" : [
      "POP",
      "INDIE_POP"
    ],
    "releasedAt" : new Date("2016-05-31T21:00:00.000+0000"),
    "url" : "https://www.youtube.com/watch?v=hn3wJ1_1Zsg",
    "artists" : [
      new ObjectId("5ab2bf99b316750897ec44dd"),
    ]
  },
  {
    "_id" : new ObjectId("5ab2bf99b316750897ec44d4"),
    "name" : "You are beautiful",
    "genres" : [
      "POP"
    ],
    "rating" : 110,
    "hypeCoefficient" : 0.3,
    "releasedAt" : new Date("2008-05-11T21:00:00.000+0000"),
    "url" : "https://www.youtube.com/watch?v=oofSnsGkops",
    "artists" : [
      new ObjectId("5ab2bf99b316750897ec44de"),
    ]
  },
  {
    "_id" : new ObjectId("5ab2bf99b316750897ec44d5"),
    "name" : "Do I Wanna Know?",
    "rating" : (240),
    "hypeCoefficient" : 0.6,
    "genres" : [
      "INDIE_ROCK"
    ],
    "releasedAt" : new Date("2013-06-18T21:00:00.000+0000"),
    "label" : "Domino",
    "logo" : "https://static.infomusic.ro/media/2013/06/arctic-monkeys-do-i-wanna-know-single-600x600.jpg",
    "url" : "https://www.youtube.com/watch?v=bpOSxM0rNPM",
    "artists" : [
      new ObjectId("5ab2bf99b316750897ec44e3"),
    ]
  },
  {
    "_id" : new ObjectId("5ab2bf99b316750897ec44d6"),
    "name" : "R U Mine?",
    "rating" : (210),
    "hypeCoefficient" : 0.6,
    "genres" : [
      "INDIE_ROCK",
      "HARD_ROCK"
    ],
    "releasedAt" : new Date("2012-02-26T22:00:00.000+0000"),
    "label" : "Domino",
    "logo" : "https://upload.wikimedia.org/wikipedia/en/e/ee/Arctic_Monkeys_-_R_U_Mine.png",
    "url" : "https://www.youtube.com/watch?v=VQH8ZTgna3Q",
    "artists" : [
      new ObjectId("5ab2bf99b316750897ec44e3"),
    ],
  },
  {
    "_id" : new ObjectId("5ab2bf99b316750897ec44d7"),
    "name" : "Snap Out of It",
    "rating" : (210),
    "hypeCoefficient" : 0.5,
    "genres" : [
      "INDIE_ROCK"
    ],
    "releasedAt" : new Date("2014-06-08T21:00:00.000+0000"),
    "label" : "Domino",
    "logo" : "https://upload.wikimedia.org/wikipedia/en/8/8f/Arctic_Monkeys_Snap_Out_of_It.jpg",
    "url" : "https://www.youtube.com/watch?v=H8tLS_NOWLs",
    "artists" : [
      new ObjectId("5ab2bf99b316750897ec44e3"),
    ],
  },
  {
    "_id" : new ObjectId("5ab2bf99b316750897ec44d8"),
    "name" : "Wovchytsa",
    "rating" : (777),
    "hypeCoefficient" : (10),
    "genres" : [
      "HEAVY_METAL"
    ],
    "releasedAt" : new Date("2013-12-24T22:00:00.000+0000"),
    "label" : "RockSoulana Music GmbH",
    "logo" : "https://lastfm-img2.akamaized.net/i/u/300x300/08d4cd7ae9838ba6029b5e5e25deb6e5.jpg",
    "url" : "https://www.youtube.com/watch?v=MWMEA8Hm2do",
    "artists" : [
      new ObjectId("5ab2bf99b316750897ec44e4"),
    ],
  },
  {
    "_id" : new ObjectId("5ab2bf99b316750897ec44d9"),
    "name" : "Policeman",
    "rating" : (290),
    "hypeCoefficient" : 4.1,
    "genres" : [
      "GARAGE_ROCK",
      "HARD_ROCK"
    ],
    "releasedAt" : new Date("2013-05-11T21:00:00.000+0000"),
    "label" : "RockSoulana Music GmbH",
    "logo" : "https://lastfm-img2.akamaized.net/i/u/300x300/08d4cd7ae9838ba6029b5e5e25deb6e5.jpg",
    "url" : "https://www.youtube.com/watch?v=Tfszi0cOb7Y",
    "artists" : [
      new ObjectId("5ab2bf99b316750897ec44e4"),
    ],
  },
  {
    "_id" : new ObjectId("5ab2bf99b316750897ec44da"),
    "name" : "Young Eagle",
    "rating" : (320),
    "hypeCoefficient" : 5.4,
    "genres" : [
      "INDIE_POP",
      "BLUES"
    ],
    "releasedAt" : new Date("2011-02-04T22:00:00.000+0000"),
    "logo" : "http://img.1001mem.ru/posts_temp/17-03-29/3899420.jpg",
    "url" : "https://www.youtube.com/watch?v=4n1NyZWdklo",
    "artists" : [
      new ObjectId("5ab2bf99b316750897ec44e5"),
    ]
  }
];

export const albums = [
  {
    "_id" : new ObjectId("5ab2bf99b316750897ec44db"),
    "name" : "AM",
    "genres" : [
      "INDIE_ROCK",
      "HARD_ROCK"
    ],
    "releasedAt" : new Date("2012-09-08T21:00:00.000+0000"),
    "label" : "Domino",
    "logo" : "https://upload.wikimedia.org/wikipedia/uk/5/55/Arctic_Monkeys_AM.png",
    "artist" : new ObjectId("5ab2bf99b316750897ec44e3"),
    "tracks" : [
      new ObjectId("5ab2bf99b316750897ec44d5"),
      new ObjectId("5ab2bf99b316750897ec44d6"),
      new ObjectId("5ab2bf99b316750897ec44d7"),
    ],
    "titleTrack" : [
      new ObjectId("5ab2bf99b316750897ec44d5"),
    ],
    "producer" : "James Ford"
  },
  {
    "_id" : new ObjectId("5ab2bf99b316750897ec44dc"),
    "name" : "Roksolana",
    "genres" : [
      "POP",
      "INDIE_POP",
      "INDIE_ROCK",
      "HARD_ROCK"
    ],
    "releasedAt" : new Date("2013-10-24T21:00:00.000+0000"),
    "label" : "RockSoulana Music GmbH",
    "logo" : "https://i1.sndcdn.com/artworks-000143487485-i94k6c-t500x500.jpg",
    "artist" : new ObjectId("5ab2bf99b316750897ec44e4"),
    "tracks" : [
      new ObjectId("5ab2bf99b316750897ec44d8"),
      new ObjectId("5ab2bf99b316750897ec44d9"),
    ],
    "titleTrack" : [
      new ObjectId("5ab2bf99b316750897ec44d8"),
    ]
  }
];

export const artists = [
  {
    "_id" : new ObjectId("5ab2bf99b316750897ec44dd"),
    "name" : "LP",
    "rating" : (200),
    "startActivity" : new Date("1970-01-01T00:00:02.001+0000"),
    "country" : "US",
    "photo" : "http://www.muzoko.ru/wp-content/uploads/2016/10/lp01.jpg",
    "website" : "http://iamlp.com",
    "genres" : [
      "INDIE_POP",
      "POP_ROCK",
      "INDIE_ROCK"
    ],
    "artistType" : {
      "type" : "SINGLE",
      "birthDate" : new Date("1981-03-17T22:00:00.000+0000")
    }
  },
  {
    "_id" : new ObjectId("5ab2bf99b316750897ec44de"),
    "name" : "James Blunt",
    "rating" : (120),
    "country" : "UK",
    "photo" : "http://playmuz.ru/media/thumbnails/music/performers/2012/11/26/300/*/c/James_Blunt.jpg",
    "website" : "http://www.jamesblunt.com",
    "genres" : [
      "POP",
      "POP_ROCK"
    ],
    "artistType" : {
      "type" : "SINGLE",
      "birthDate" : new Date("1974-02-21T22:00:00.000+0000")
    }
  },
  {
    "_id" : new ObjectId("5ab2bf99b316750897ec44df"),
    "name" : "Alex Turner",
    "country" : "UK",
    "photo" : "https://lastfm-img2.akamaized.net/i/u/770x0/811a0956d66241e0af421b2829ee93ff.jpg",
    "genres" : [
      "INDIE_ROCK",
      "GARAGE_ROCK"
    ],
    "artistType" : {
      "type" : "BAND_PARTICIPANT",
      "birthDate" : new Date("1986-01-05T22:00:00.000+0000"),
      "roles" : [
        "VOCALIST",
        "MUSICIAN"
      ],
      "instruments" : [
        "GUITAR",
        "BASS_GUITAR"
      ]
    }
  },
  {
    "_id" : new ObjectId("5ab2bf99b316750897ec44e0"),
    "name" : "Matt Helders",
    "country" : "UK",
    "photo" : "https://ia.media-imdb.com/images/M/MV5BMTUzODAzMjcxM15BMl5BanBnXkFtZTgwNTUxNzQzMDI@._V1_UX214_CR0,0,214,317_AL_.jpg",
    "genres" : [
      "INDIE_ROCK",
      "GARAGE_ROCK"
    ],
    "artistType" : {
      "type" : "BAND_PARTICIPANT",
      "birthDate" : new Date("1986-05-06T21:00:00.000+0000"),
      "roles" : [
        "MUSICIAN"
      ],
      "instruments" : [
        "DRUM",
        "KEYBOARD"
      ]
    }
  },
  {
    "_id" : new ObjectId("5ab2bf99b316750897ec44e1"),
    "name" : "Jamie Cook",
    "country" : "UK",
    "photo" : "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Arctic_Monkeys_%40_Roseland.jpg/440px-Arctic_Monkeys_%40_Roseland.jpg",
    "genres" : [
      "INDIE_ROCK",
      "GARAGE_ROCK"
    ],
    "artistType" : {
      "type" : "BAND_PARTICIPANT",
      "birthDate" : new Date("1985-06-07T21:00:00.000+0000"),
      "roles" : [
        "MUSICIAN"
      ],
      "instruments" : [
        "GUITAR",
        "KEYBOARD"
      ]
    }
  },
  {
    "_id" : new ObjectId("5ab2bf99b316750897ec44e2"),
    "name" : "Nick O'Malley",
    "country" : "UK",
    "photo" : "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Nick_O%E2%80%99Malley_May_20%2C_2011_part_2cr.jpg/440px-Nick_O%E2%80%99Malley_May_20%2C_2011_part_2cr.jpg",
    "genres" : [
      "INDIE_ROCK",
      "GARAGE_ROCK"
    ],
    "artistType" : {
      "type" : "BAND_PARTICIPANT",
      "birthDate" : new Date("1986-06-04T21:00:00.000+0000"),
      "roles" : [
        "VOCALIST",
        "MUSICIAN"
      ],
      "instruments" : [
        "GUITAR",
        "BASS_GUITAR",
        "KEYBOARD"
      ]
    }
  },
  {
    "_id" : new ObjectId("5ab2bf99b316750897ec44e3"),
    "name" : "Arctic Monkeys",
    "rating" : (175),
    "country" : "UK",
    "photo" : "https://i1.wp.com/welovebudapest.com/en/wp-content/uploads/sites/2/2018/01/1052301_10151519277780967_1346292997_o.jpg?resize=1200%2C800&ssl=1",
    "website" : "http://www.arcticmonkeys.com/",
    "genres" : [
      "INDIE_ROCK",
      "GARAGE_ROCK"
    ],
    "startActivity" : new Date("1970-01-01T00:00:02.002+0000"),
    "artistType" : {
      "type" : "BAND",
      "members" : [
        new ObjectId("5ab2bf99b316750897ec44df"),
        new ObjectId("5ab2bf99b316750897ec44e0"),
        new ObjectId("5ab2bf99b316750897ec44e1"),
        new ObjectId("5ab2bf99b316750897ec44e2"),
      ]
    }
  },
  {
    "_id" : new ObjectId("5ab2bf99b316750897ec44e4"),
    "name" : "Oleg Vinnik",
    "rating" : (777),
    "startActivity" : new Date("1970-01-01T00:00:01.993+0000"),
    "country" : "UA",
    "photo" : "https://politeka.net/wp-content/uploads/2017/12/vinnik-900x600.jpg",
    "website" : "https://www.olegg.com",
    "genres" : [
      "POP",
      "HARD_ROCK",
      "HEAVY_METAL"
    ],
    "artistType" : {
      "type" : "SINGLE",
      "birthDate" : new Date("1973-07-30T22:00:00.000+0000")
    }
  },
  {
    "_id" : new ObjectId("5ab2bf99b316750897ec44e5"),
    "name" : "Michale Poplavsky",
    "rating" : (321),
    "startActivity" : new Date("1970-01-01T00:00:01.949+0000"),
    "country" : "UA",
    "photo" : "http://niklife.com.ua/680x510W/images/2013_04/36327_1_470x349.jpeg",
    "website" : "http://poplavskiy.com",
    "genres" : [
      "POP",
      "HARD_ROCK",
      "HEAVY_METAL"
    ],
    "artistType" : {
      "type" : "SINGLE",
      "birthDate" : new Date("1949-11-27T22:00:00.000+0000")
    }
  },
  {
    "_id": new ObjectId("5ab812c8c1f89b0a331eb8c1"),
    "name": "Phoebe Buffay",
    "rating": 410,
    "startActivity" : new Date("1993-01-01T00:00:01.949+0000"),
    "country" : "US",
    "photo" : "https://data.whicdn.com/images/68984869/large.jpg",
    "genres": [
      "ALTERNATIVE_ROCK",
      "GARAGE_ROCK",
    ],
    "artistType" : {
      "type" : "SINGLE",
      "birthDate" : new Date("1963-06-30T22:00:00.000+0000")
    }
  }
];
