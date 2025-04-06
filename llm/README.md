# LLM

## technology stack
- framework: ollama
- model: [llama3.2](https://ollama.com/library/llama3.2) ※パラメーター数が3Bの小さいモデルを利用

## how to build local llm
- [ollama](https://ollama.com/download)をインストール
- llama3.2を指定して起動 `ollama run llama3.2`

## how to remove model
- LLMのモデルは容量が大きいので利用しなくなったものは定期的に削除する。
- モデルの確認 `ollama list`
- 削除 `ollama rm llama3.2`

## how to access local llm via api
- curlコマンド経由でアクセス
```
curl http://localhost:11434/api/chat -d '{
  "model": "llama3.2",  
  "messages": [
    { "role": "user", "content": "Why is the sky blue?" }
  ]
}'
```
- Library経由でアクセス `pnpm run chat`

## how to use web ui
- docker起動 [docs](https://github.com/open-webui/open-webui?tab=readme-ov-file#installation-with-default-configuration)
- `docker run -d -p 3000:8080 --add-host=host.docker.internal:host-gateway -v open-webui:/app/backend/data --name open-webui --restart always ghcr.io/open-webui/open-webui:main`
- `http://localhost:3000` にアクセス