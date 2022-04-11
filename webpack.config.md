# webpack.config.js 설명

```md
    plugins: [new HtmlWebpackPlugin({ template: './index.html' }), new MiniCssExtractPlugin({ filename: 'style.css' })],
```

- new HtmlWebpackPlugin({ template: './index.html' })
    - index.html 템플릿을 기반으로 빌드 결과물을 추가해줌
