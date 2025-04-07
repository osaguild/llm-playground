import { Agent } from "@mastra/core/agent";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { cloneRepositoryTool } from "../tools/github/cloneRepository";

// Google Gemini AIプロバイダーの作成
const google = createGoogleGenerativeAI({
    apiKey: process.env.GOOGLE_API_KEY || "",
});

// エージェント定義
export const githubAnalysisAgent = new Agent({
  name: "GitHub Analysis Agent",
  instructions: "GitHubリポジトリを解析するエージェントです。リポジトリのURLを指定すると、それをクローンして解析できます。",
  model: google("gemini-2.0-flash-001"),
  tools: {
    cloneRepositoryTool
  }
});