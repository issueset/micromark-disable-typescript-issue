```
bash-3.2$ cd micromark-disable-typescript-issue
bash-3.2$ yarn
yarn install v1.22.10
[1/4] 🔍  Resolving packages...
success Already up-to-date.
✨  Done in 0.11s.
bash-3.2$ yarn run build
yarn run v1.22.10
$ tsc -p tsconfig.json
index.ts:5:5 - error TS2322: Type '{ disable: { null: string[]; }; }' is not assignable to type 'SyntaxExtension[]'.
  Object literal may only specify known properties, and 'disable' does not exist in type 'SyntaxExtension[]'.

5     disable: {
      ~~~~~~~~~~
6       null: ["codeIndented"],
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
7     },
  ~~~~~

  node_modules/mdast-util-from-markdown/types/index.d.ts:20:5
    20     extensions?: SyntaxExtension[]
           ~~~~~~~~~~
    The expected type comes from property 'extensions' which is declared here on type 'Options'


Found 1 error.

error Command failed with exit code 2.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
bash-3.2$
```