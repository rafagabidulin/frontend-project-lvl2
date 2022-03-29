install: #установка зависимостей
		npm ci

link: #создание ссылок
		npm link

lint: #запуск линтера
		npx eslint .

lint-fix: #устранение замечаний линтера
		npx eslint --fix .

publish: #публикация
		npm publish --dry-run

test: #тестирование
		npx jest

test-coverage: #покрытие кода тестами
		npx jest --coverage

.PHONY: test