export default {
	"TinyLlama-1.1B-Chat-v1.0.F16": [
		{
			name: "TinyLlama/TinyLlama-1.1B-Chat-v1.0.F16",
			displayName: "TinyLlama/TinyLlama-1.1B-Chat-v1.0.F16",
			description:
				'The TinyLlama project aims to pretrain a 1.1B Llama model on 3 trillion tokens. With some proper optimization, we can achieve this within a span of "just" 90 days using 16 A100-40G GPUs 🚀🚀',
			websiteUrl: "https://huggingface.co/GetSoloTech/TinyLlama-1.1B-Chat-v1.0-llamafile",
			preprompt:
				"This is a conversation between User and Llama, a friendly chatbot. Llama is helpful, kind, honest, good at writing, and never fails to answer any requests immediately and with precision.",
			chatPromptTemplate: "",
			parameters: {
				temperature: 0.7,
				repeat_last_n: 256,
				top_p: 0.95,
				repeat_penalty: 1.18,
				top_k: 40,
				min_p: 0.05,
				n_predict: 400,
				stop: ["</s>", "Llama:", "User:", "<|im_end|>"],
				stream: true,
				tfs_z: 1,
				typical_p: 1,
				presence_penalty: 0,
				frequency_penalty: 0,
				mirostat: 0,
				mirostat_tau: 5,
				mirostat_eta: 0.1,
				grammar: "",
				n_probs: 0,
				min_keep: 0,
				image_data: [],
				cache_prompt: true,
				slot_id: 0,
			},
			promptExamples: [
				{
					title: "Write an email from bullet list",
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
					baseURL: "http://localhost:8000",
				},
			],
		},
	],
};
