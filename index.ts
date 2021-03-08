import fromMarkdown, { Options } from "mdast-util-from-markdown";

const options: Options = {
  extensions: {
    disable: {
      null: ["codeIndented"],
    },
  },
};
fromMarkdown("hello", options);
