class Monster < ApplicationRecord

  enum type: {
    reptile: 1,
  }

  enum level: {
    in_training_1: 1,
    in_training_2: 2,
    rookie: 3,
    champion: 4,
    ultimate: 5,
    mega: 6,
  }

  enum attribute: {
    unknown: 0,
    vaccine: 1,
    data: 2,
    virus: 3,
  }
end