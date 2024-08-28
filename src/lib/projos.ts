export type Projo = {
  title: string;
  description: string;
  github_link?: string;
  live_link?: string;
};

export const PROJOS: Projo[] = [
  {
    title: "Croisswapp",
    description:
      "Croisswapp is a web application that allows users to convert code snippets from one format to another. It currently supports conversion between Jupyter Notebook ipynb files to Python files and JSX to JSON files. We are also planning to add support for HTML and JSX conversion in the future.",
    live_link: "https://croissw.app/",
    github_link: "https://github.com/ahmad1702/croisswapp/",
  },
  {
    title: "Jim.AI",
    description: `A Full Stack Chat App featuring an ML Transformer Chatbot made from scratch in house. The main goal of the project was to make a chatbot that someone could talk to, not as a substitution for counseling, but for when one feels down, lonely, or at the very least bored. The project's implementation involves the use of different AI and Non-AI techniques, namely RNN, Non-AI rule-based, MLP, and LSTM. The models were trained on questions and answers from counsel chat forums where certified psychologists and therapists would answer questions about mental health and a variety of similar topics.`,
    github_link: "https://github.com/ahmad1702/jim-the-ai-friend",
  },
  {
    title: "Translang",
    description:
      "Created with React and D3.js. Translate text quickly and efficiently with this simple, nice to use app. Configure the two lanauages you would like to using the dropdowns, enter the text in the first half, and click the translate button to translate the text.",
    live_link: "https://translang.surge.sh/",
  },
];
