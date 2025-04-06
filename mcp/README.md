# mcp
- [model context protocol](https://modelcontextprotocol.io/)

## how to use mcp server
- build `pnpm run build`
- mcp serverの設定をcursorに追加する
```json
{
  "mcpServers": {
    "mcp-playgrounds": {
      "command": "node",
      "args": [
          "/Users/osaguild/MyApp/llm-playground/mcp/build/index.js"
      ]
    }
  }
}
```
