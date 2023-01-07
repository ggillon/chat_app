import { Configuration, OpenAIApi } from "openai";

// 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
const configuration = new Configuration({
    organization: "org-KSj8tNqYEWUqRDBfsW40XQpk",
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
//const response = await openai.listEngines();

