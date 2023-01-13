install: # установить зависимости
	npm ci

brain-games: #запуск игры
	node bin/brain-games.js

brain-even: #Запуск игры с четностью
	node bin/brain-even.js

publish: #выполнит установку publish
	npm publish --dry-run

lint: # запускать npx eslint .
	npx eslint .