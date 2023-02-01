# 文件别名的配置（css可能需要单独拎出来）

- 1. vite.config.ts

  ``` javascript
    resolve: {
      alias: [
        {
          find: /^~/,
          replacement: '',
        },
        {
          find: '@',
          replacement: path.resolve(__dirname, './src')
        }
      ]
    }
  ```

- 2. vite-tsconfig-paths

  ``` javascript
  // compilerOptions
  {
  "baseUrl": "src",
  "paths": {
    "@/*": [
      "./*"
    ]
  }
  }
  ```

- 3. vite-tsconfig-paths

  ``` javascript
  // compilerOptions
  {
  "baseUrl": "./",
  "paths": {
    "@assets/*": [
      "src/assets/*"
    ],
    "@assets": [
      "src/assets/index.ts",
      "src/assets/index.tsx"
    ]
  }
  }
  ```
