# Next Template

## Layouts and Pages

```
src/app/
  ├── (auth)/           # 认证相关页面
  ├── (home)/        	# 首页
  │   ├── example/      # 示例
  │   │   ├── basic/    # 基础示例
  │   │   └──.../
  │   └── .../
  └── ...
```

- 根 layout：[Layout](./src/app/layout.tsx)
- Home layout：[HomeLayout](<./src/app/(home)/layout.tsx>)
- 路由 layout：[ExampleLayout](<./src/app/(home)/example/layout.tsx>)

## UI

UI 库：[shadcn/ui](https://ui.shadcn.com/)  
项目配置文件：[components-json](./components.json)

## Theming

[Docs](https://ui.shadcn.com/docs/theming)  
修改 css 变量自定义主题颜色：[globals.css](./src/app/globals.css)

## Icons

[Lucide](https://lucide.dev/icons/)
