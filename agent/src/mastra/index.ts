import { Mastra } from "@mastra/core/mastra";
import { createLogger } from "@mastra/core/logger";
import { cursorRulesAgent } from "./agents/cursorRulesAgent";
import { githubAnalysisAgent } from "./agents/githubAnalysisAgent";

export const mastra = new Mastra({
    agents: {
        cursorRulesAgent,
        githubAnalysisAgent,
    },
    logger: createLogger({
        name: "GitHub Cursor Rules Agent",
        level: "info",
    }),
});