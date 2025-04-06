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
