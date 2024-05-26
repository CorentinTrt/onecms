build_dev:
	docker compose --profile develop build --no-cache

run_dev:
	docker compose --profile develop up -d

stop_dev:
	docker compose --profile develop stop
