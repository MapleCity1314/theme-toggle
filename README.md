This is a [Plasmo extension](https://docs.plasmo.com/) project bootstrapped with [`plasmo init`](https://www.npmjs.com/package/plasmo).

## Getting Started

First, run the development server:

```bash
pnpm dev
# or
npm run dev
```

Open your browser and load the appropriate development build. For example, if you are developing for the chrome browser, using manifest v3, use: `build/chrome-mv3-dev`.

You can start editing the popup by modifying `popup.tsx`. It should auto-update as you make changes. To add an options page, simply add a `options.tsx` file to the root of the project, with a react component default exported. Likewise to add a content page, add a `content.ts` file to the root of the project, importing some module and do some logic, then reload the extension on your browser.

For further guidance, [visit our Documentation](https://docs.plasmo.com/)

## Making production build

Run the following:

```bash
pnpm build
# or
npm run build
```

This should create a production bundle for your extension, ready to be zipped and published to the stores.

## Submit to the webstores

The easiest way to deploy your Plasmo extension is to use the built-in [bpp](https://bpp.browser.market) GitHub action. Prior to using this action however, make sure to build your extension and upload the first version to the store to establish the basic credentials. Then, simply follow [this setup instruction](https://docs.plasmo.com/framework/workflows/submit) and you should be on your way for automated submission!

## 使用说明

### 1. 安装依赖

在项目根目录下运行：

```bash
pnpm install
# 或
npm install
```

### 2. 启动开发服务器

```bash
pnpm dev
# 或
npm run dev
```

### 3. 在 Chrome 中加载扩展

1. 打开 Chrome 浏览器，访问 `chrome://extensions/`。
2. 右上角开启“开发者模式”。
3. 点击“加载已解压的扩展程序”。
4. 选择本项目下的 `build/chrome-mv3-dev` 目录。
5. 成功后即可在扩展栏看到本插件。

### 4. 使用暗色模式开关

1. 点击浏览器右上角扩展图标，弹出窗口。
2. 使用开关切换暗色/亮色模式。
3. 切换后，当前网页会自动应用或移除暗色模式。

> 暗色模式通过在网页 `html` 元素上添加/移除 `dark-mode` 类实现，样式可在 `style.css` 中自定义。

### 5. 构建生产包

```bash
pnpm build
# 或
npm run build
```

构建后，`build/chrome-mv3-prod` 目录即为可发布的 Chrome 扩展包。
