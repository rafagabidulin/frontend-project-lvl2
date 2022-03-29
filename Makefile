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
		NODE_OPTIONS=--experimental-vm-modules npx jest

test-coverage: #покрытие кода тестами
		NODE_OPTIONS=--experimental-vm-modules npx jest --coverage

.PHONY: test