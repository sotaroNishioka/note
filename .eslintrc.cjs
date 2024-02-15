module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["standard-with-typescript", "plugin:react/recommended", "prettier"],
  parser: "@typescript-eslint/parser", // TypeScriptのパーサーを設定
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json", // TypeScriptのプロジェクトファイルを指定
  },
  ignorePatterns: ["remix.config.js", "remix.env.d.ts"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ["*.tsx", "*.ts", "*.js", "*.jsx"],
      // 必要に応じて、ここでTypeScriptファイル用の特定の設定を追加
    },
  ],
  rules: {
    "react/react-in-jsx-scope": "off", // Reactをimportしなくても使えるようにする
  },
};
