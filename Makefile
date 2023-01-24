install: # установить зависимости
	npm ci

brain-progression: #Запуск игры с арифметической прогрессией
	node bin/brain-progression.js	

brain-prime: #Запуск игры на простое число
	node bin/brain-prime.js	

brain-gcd: #Запуск игры НОД
	node bin/brain-gcd.js

brain-games: #запуск игры, приветствие
	node bin/brain-games.js

brain-even: #Запуск игры с четностью
	node bin/brain-even.js

brain-calc: #Запуск игры с выражением
	node bin/brain-calc.js	

publish: #выполнит установку publish
	npm publish --dry-run

lint: # запускать npx eslint .
	npx eslint .