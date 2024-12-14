import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import ScrollingBanner from "./ScrollingBanner";
import { SiLangchain, SiPydantic, SiOpenai } from "@icons-pack/react-simple-icons";

const CodeExample = () => {
  const codeSnippet = `from wildcard_core import WildcardClient

# Initialize the tool search client
tool_search_client = WildcardClient(
    api_key='your-api-key'
)

# Create an agent with the tool search client
agent, initial_state = create_tool_selection_agent(
    model,
    tool_search_client,
    system_prompt="You are an autonomous personal assistant."
)

# Execute tasks with natural language
response = agent.invoke({
    "messages": ["Get the latest news from the NYT and post a summary to Slack"]
})`;


const frameworks = [
  { name: "LangGraph", icon: <SiLangchain className="h-8 w-8" /> },
  { name: "OpenAI Swarm", icon: <SiOpenai className="h-8 w-8" /> },
  { name: "Pydantic", icon: <SiPydantic className="h-8 w-8" /> },
]

  return (
    <section className="py-10 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Use Wildcard with Agent Frameworks
          </h2>
          <div className="mb-8">
            <ScrollingBanner items={frameworks} direction="left" />
          </div>
          <div className="relative text-left">
            <pre className="bg-primary/5 p-6 rounded-xl overflow-x-auto shadow-lg">
              <code className="text-sm text-foreground font-mono">
                {codeSnippet}
              </code>
            </pre>
            <Button
              variant="outline"
              size="sm"
              className="absolute top-4 right-4"
              onClick={() => navigator.clipboard.writeText(codeSnippet)}
            >
              <Copy className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeExample;