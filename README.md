# Next Template

A production-ready Next.js 15+ starter template with modern UI components, advanced features, and optimized tooling. Perfect for building performant web applications with TypeScript and App Router architecture.

## Key Features

✨ **Core Stack**
- Next.js 15 with Turbopack
- TypeScript 5 + React 19
- Tailwind CSS
- shadcn/ui component library

🚀 **Main Features**
- App Router architecture
- MDX content support with Shiki syntax highlighting
- Authentication-ready patterns
- Internationalization (i18n) foundations
- Server Actions & API routes examples
- Optimized SEO and metadata
- Built-in theme system

📦 **UI Toolkit**
- 40+ pre-configured shadcn/ui components
- Customizable theme system with CSS variables
- Animated components (Hover, Loading, etc)
- Data Table with sorting/filtering
- Form validation with React Hook Form
- Sonner toast notifications

⚙️ **Dev Experience**
- Strict ESLint/TypeScript config
- Pre-commit hooks
- Docker production setup
- CI/CD ready configuration
- Component auto-imports
- Utilities for path aliases

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

## Fetching Data
[/example/fetching-data/page.tsx](./src/app/(home)/example/fetching-data/page.tsx)

## MDX
[/example/mdx/page.mdx](./src/app/(home)/example/mdx/page.mdx)

## Authentication
- [Login route](./src/app/(auth)/login/page.tsx)
- [auth.config.ts](./src/auth.config.ts)
- [auth.ts](./src/auth.ts)
- [middleware.ts](./src/middleware.ts)
- [LoginForm](./src/app/(auth)/login/LoginForm.tsx)
- [Logout](./src/app/(home)/user-button.tsx)

#### Setting up NextAuth.js
```bash
openssl rand -base64 32
```
Then, in your .env file, add your generated key to the AUTH_SECRET variable:
```bash
AUTH_SECRET=your-secret-key
```