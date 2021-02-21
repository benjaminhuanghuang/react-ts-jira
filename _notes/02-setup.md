# 第2章 项目起航：项目初始化与配置
本章我们将会⽤Create-React-App初始化项⽬。并配置eslint检验代码质量，prettier检 验代码格式，commitlint检验提交信息，使得⼯程规范化。最后会配置⼀个优秀的后端 Mock⽅案，JSON SERVER 第三、四章使⽤Mock，从第五章开始连接真实服务器。...

共 4 节 (28分钟) 收起列表

## 2-1 用 Create React App 初始化项目 (07:16)
```
  npx create-react-app jira --template typescript
```

## 2-2 配置 eslint、 prettier 和 commitlint 规范工程 (08:56)
- Fix the import path
在 tsconfig.json中添加
```
  "baseUrl": "./src"
```
import file will base on this path

- prettier
```
  npm i -D prettier

  echo {} > .prettierric.json
  touch .prettierignore
```

- husky
hook when comit
```
  # Install husky, lint-staged
  # create config in package.json
  npx mrm lint-staged    
```

- eslint
```
  npm i -D eslint-config-prettier
```
add prettier to eslint extends config

- commitlint
```
  npm i -D @commitlint/{config-conventional,cli}
```
add commitlint to husky config



## 2-3 对比常见 Mock 方案 配置 JSON SERVER (10:53)
Mock.js
  随机假数据， 只支持 ajax


swagger/moco/rap/yapi


json-server
```
  npm i json-server -g

  json-server --watch db.json
```



## 2-4 【注意了】大家不用再手动引入 React 了