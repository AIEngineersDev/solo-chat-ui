export default {
	"TinyLlama-1.1B-Chat-v1.0.F16": [
		{
			name: "mistralai/TinyLlama-1.1B-Chat-v1.0.F16",
			displayName: "mistralai/TinyLlama-1.1B-Chat-v1.0.F16",
			description:
				"Mistral 7B is a new Apache 2.0 model, released by Mistral AI that outperforms Llama2 13B in benchmarks.",
			websiteUrl: "https://mistral.ai/news/announcing-mistral-7b/",
			preprompt: "",
			chatPromptTemplate:
				"<s>{{#each messages}}{{#ifUser}}[INST] {{#if @first}}{{#if @root.preprompt}}{{@root.preprompt}}\n{{/if}}{{/if}}{{content}} [/INST]{{/ifUser}}{{#ifAssistant}}{{content}}</s>{{/ifAssistant}}{{/each}}",
			parameters: {
				temperature: 0.1,
				top_p: 0.95,
				repetition_penalty: 1.2,
				top_k: 50,
				truncate: 3072,
				max_new_tokens: 1024,
				stop: ["</s>"],
			},
			promptExamples: [
				{
					title: "wwwWrite an email from bullet list",
					prompt:
						"As a restaurant owner, write a professional email to the supplier to get these products every week: \n\n- Wine (x10)\n- Eggs (x24)\n- Bread (x12)",
				},
				{
					title: "Code a snake game",
					prompt: "Code a basic snake game in python, give explanations for each step.",
				},
				{
					title: "Assist in a task",
					prompt: "How do I make a delicious lemon cheesecake?",
				},
			],
			endpoints: [
				{
					type: "llamacpp",
					baseURL: "http://localhost:8080",
				},
			],
		},
	],
};
