# React TypeScript Project

This is a scalable React + TypeScript folder structure template designed for large teams. It focuses on clarity, modularity, and clean separation of responsibilities.

## 📁 Project Structure

```
project-root/
├── public/
│   ├── favicon.ico
│   ├── index.html
│   └── assets/
│       └── images/
│
├── src/
│   ├── api/
│   │   ├── axiosClient.ts
│   │   └── services/
│   │       └── exampleService.ts
│   │
│   ├── assets/
│   │   ├── images/
│   │   ├── icons/
│   │   └── styles/
│   │       ├── global.css
│   │       └── variables.css
│   │
│   ├── components/
│   │   ├── common/
│   │   │   └── Button/
│   │   │       ├── Button.tsx
│   │   │       └── button.css
│   │   └── layout/
│   │       ├── Navbar.tsx
│   │       └── Footer.tsx
│   │
│   ├── pages/
│   │   ├── Home/
│   │   │   ├── Home.tsx
│   │   │   └── home.css
│   │   └── Error/
│   │       └── ErrorPage.tsx
│   │
│   ├── App.tsx
│   └── main.tsx
│
├── README.md
├── tsconfig.json
├── .env
├── .gitignore
├── package.json
└── vite.config.ts
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## 📚 How to Use

### Components

- **Shared UI components**: Place your reusable UI components in `src/components/common/`
- **Layout components**: Place layout components (Navbar, Sidebar, etc.) in `src/components/layout/`
- **Component structure**: Each component should have its own folder with the component file and styles

### Pages

- Pages follow the folder-per-page approach inside `src/pages/`
- Each page can have its own styles and sub-components

### API Logic

- API configuration lives in `src/api/axiosClient.ts`
- API service functions go in `src/api/services/`
- Environment variables (like API base URL) are configured in `.env`

### Assets

- Global assets (images, icons, styles) go inside `src/assets/`
- Public assets that don't need processing go in `public/`

## 🛠 Technology Stack

- **React 18+** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Axios** - HTTP client
- **CSS** - Styling (can be replaced with Tailwind, Styled Components, etc.)

## 📝 Scripts

- `npm install` - Install dependencies
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## ❓ Optional Folders

Based on your project needs, you may want to add these optional folders:

### 1. `constants/` (Optional)
Stores global constant values.
- **Example**: API_BASE_URL, roles, enums
- **Useful if**: The project is large or deals with many repeated constant values
- **Not needed for**: Small apps

### 2. `context/` (Optional)
Stores React Context providers.
- **Example**: AuthContext, ThemeContext
- **Useful if**: Your application needs global state WITHOUT using Redux/Zustand
- **If your app doesn't need React Context**: You can skip it

### 3. `hooks/` (Optional)
Stores custom reusable logic.
- **Example**: useAuth(), useFetch(), useDebounce()
- **Highly recommended for**: Medium/large projects
- **Optional but helpful**: For any project size

### 4. `layouts/` (Optional)
Defines page wrappers.
- **Example**: AuthLayout, DashboardLayout
- **Useful when**: Different pages share a layout
- **If your app uses only one layout**: Not needed

### 5. `routes/` (Optional)
Stores routing configuration.
- **Example**: Protected routes, route maps
- **Useful in**: Larger apps with many pages
- **Small apps can**: Manage routes directly in App.tsx

### 6. `store/` (Optional)
For global state management libraries:
- Redux Toolkit
- Zustand
- Jotai
- Recoil
- **Useful if**: Your app needs complex global state
- **Not necessary for**: Small/medium apps

## ✔ Recommended Minimal Folder Set

Based on scalable best practices while keeping it simple:

- `api/`
- `assets/`
- `components/`
- `pages/`
- `App.tsx` / `main.tsx`

Everything else depends on the project's complexity.

## 🔧 Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_BASE_URL=http://localhost:3001/api
```

Environment variables must be prefixed with `VITE_` to be accessible in the code via `import.meta.env.VITE_VARIABLE_NAME`.

## 📄 License

This project is open source and available under the MIT License.

