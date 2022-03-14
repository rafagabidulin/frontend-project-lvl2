install: #установка зависимостей
		npm ci

lint: #линтинг
		npx eslint .

publish: #публикация
		npm publish --dry-run