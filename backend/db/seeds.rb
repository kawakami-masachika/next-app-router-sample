
10.times do |genre_name|
  Monster.find_or_create_by!(
    name: Faker::Games::Pokemon.name,
    tribe: 1,
    level: rand(1..6),
    category: rand(0..3)
  )
end

def insert_kind
  # 属性
  %i(火炎 格闘 大気 自然 氷水 機械 汚物).each do |kind|
    Kind.find_or_create_by!(
      name: kind
    )
  end
  puts "属性を登録しました"
end

insert_kind