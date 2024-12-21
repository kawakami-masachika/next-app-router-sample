class Monster < ApplicationRecord

  enum tribe: {
    reptile: 1
  }

  enum level: {
    in_training_1: 1, # 幼年期1
    in_training_2: 2, # 幼年期2
    rookie: 3,        # 成長期
    champion: 4,      # 成熟期
    ultimate: 5,      # 完全体
    mega: 6,          # 究極体
  }

  enum category: {
    unknown: 0, # 不明
    vaccine: 1, # ワクチン
    data: 2, # データ
    virus: 3, # ウィルス
  }
end