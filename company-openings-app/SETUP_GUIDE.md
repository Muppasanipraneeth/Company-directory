# Company Openings App - Complete Setup Guide

## 🎯 Project Overview

A modern, responsive React application for displaying job openings with advanced filtering capabilities, built with shadcn/ui components and Tailwind CSS.

## ✨ Features

### 1. **Responsive UI**

- Built with React 19 and modern React hooks
- Mobile-first responsive design with Tailwind CSS
- Beautiful gradient backgrounds and smooth transitions
- Dark mode support with CSS variables

### 2. **Display Options**

- **Grid View**: Card-based layout for better visual appeal
- **Table View**: Compact tabular format for detailed comparison
- Toggle between views with convenient buttons

### 3. **Advanced Filtering**

- **Search by Job Title**: Real-time search functionality
- **Filter by Company**: Dropdown with all available companies
- **Filter by Location**: Location-based filtering
- **Combined Filters**: Apply multiple filters simultaneously
- **Reset Filters**: Clear all filters with one click

### 4. **Component Library**

- Built with [shadcn/ui](https://ui.shadcn.com/) components
- Pre-built Button, Card, and custom JobFilters components
- Lucide React icons for beautiful iconography
- Class Variance Authority (CVA) for component variants

### 5. **State Management**

- React Context API for global state management
- Custom `useJobs` hook for accessing job data
- Proper error handling and loading states
- Type-safe with TypeScript

### 6. **API Integration**

- JSON Server for mock API (`http://localhost:3001`)
- Axios for HTTP requests
- Filtered queries with support for:
  - Title search (`title_like`)
  - Company filter (`company`)
  - Location filter (`location_like`)

## 📁 Project Structure

```
src/
├── api/
│   ├── companyAPI.ts       # Original job API (pagination)
│   └── jobsAPI.ts          # New filtering API functions
├── components/
│   ├── JobCard.tsx         # Card component for grid view
│   ├── JobTable.tsx        # Table component for table view
│   └── ui/
│       ├── button.tsx      # shadcn Button component
│       ├── card.tsx        # shadcn Card component
│       ├── button-variants.ts  # Button styling variants
│       └── job-filters.tsx # Advanced filter controls
├── context/
│   └── JobContext.tsx      # Job state management provider
├── pages/
│   ├── MainLayout.tsx      # Main layout with header/footer
│   ├── HomePage.tsx        # Landing page
│   ├── JobsPage.tsx        # Jobs listing with filters
│   └── PaginatedJobsPage.tsx # Original pagination page
├── types/
│   └── index.ts            # TypeScript interfaces
├── App.tsx                 # Main app with routing
├── main.tsx               # Entry point
└── index.css              # Global styles with CSS variables
```

## 🚀 Installation & Setup

### Prerequisites

- Node.js 18+
- npm or yarn

### Step 1: Install Dependencies

```bash
cd company-openings-app
npm install
```

This installs:

- React 19 & React DOM
- Tailwind CSS with animations
- shadcn/ui components (Radix UI + CVA)
- Lucide React icons
- Axios for API calls
- React Router for navigation

### Step 2: Start JSON Server

In a separate terminal:

```bash
npm run server
```

This starts the mock API server on `http://localhost:3001` with the jobs data from `db.json`.

### Step 3: Start Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173` (or next available port).

## 📊 API Endpoints

The application uses JSON Server with the following endpoints:

### Get All Jobs

```
GET http://localhost:3001/jobs
```

### Filter Jobs

```
GET http://localhost:3001/jobs?title_like=React
GET http://localhost:3001/jobs?company=InnovatechSolutions
GET http://localhost:3001/jobs?location_like=San%20Francisco
```

### Combined Filters

```
GET http://localhost:3001/jobs?company=Innovatech%20Solutions&location_like=San%20Francisco
```

## 🎨 Styling & Themes

### CSS Variables (src/index.css)

The app uses CSS custom properties for theming:

- `--primary`: Primary brand color
- `--foreground`: Text color
- `--background`: Background color
- `--card`: Card background
- `--border`: Border color
- And more...

### Tailwind Configuration

- Custom colors mapped to CSS variables
- Border radius configuration
- Animation support via `tailwindcss-animate`

## 🔧 Key Components

### JobFilters

Advanced filter component with:

- Search input with Enter key support
- Company dropdown
- Location dropdown
- Toggle advanced filters
- Reset button

```tsx
<JobFilters
  companies={companies}
  locations={locations}
  onFilter={handleFilter}
  isLoading={loading}
/>
```

### JobCard

Beautiful card for job listings:

- Job title and company
- Location with icon
- Description preview
- View details button

```tsx
<JobCard job={job} />
```

### JobTable

Compact table view:

- All job details in rows
- Alternating row colors
- Hover effects
- Quick view button

```tsx
<JobTable jobs={jobs} isLoading={loading} />
```

## 📱 Responsive Design

- **Mobile**: Single column grid, full-width table
- **Tablet**: Two-column grid with adjustable padding
- **Desktop**: Three-column grid with full features

## 🔍 State Management

### JobContext

Global state provider for:

- Jobs list
- Companies list
- Locations list
- Loading and error states
- Filter functions

```tsx
const { jobs, companies, loading, error, applyFilters } = useJobs();
```

## ⚠️ Error Handling

- Network error messages
- No results empty state
- Loading spinners during data fetch
- User-friendly error messages

## 🛠️ Development Commands

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint

# Format code
npm run format

# Start JSON server
npm run server
```

## 📦 Key Dependencies

| Package                    | Purpose                |
| -------------------------- | ---------------------- |
| `react`                    | UI framework           |
| `react-router-dom`         | Client-side routing    |
| `tailwindcss`              | Utility-first CSS      |
| `shadcn/ui`                | Component library      |
| `lucide-react`             | Icons                  |
| `axios`                    | HTTP client            |
| `class-variance-authority` | Component variants     |
| `clsx`                     | Utility for className  |
| `tailwind-merge`           | Merge Tailwind classes |

## 🎓 Learning Resources

- [Shadcn/ui Documentation](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)
- [JSON Server](https://github.com/typicode/json-server)

## 🚀 Future Enhancements

- [ ] Job detail page with full description
- [ ] Apply to job functionality
- [ ] User authentication
- [ ] Saved jobs/bookmarks
- [ ] Advanced analytics
- [ ] Email notifications
- [ ] Company profiles
- [ ] Rating and reviews

## 📝 Notes

- The app uses Context API for state management. Consider Redux/Zustand for larger apps.
- JSON Server is for development only. Use a real backend for production.
- All styling is responsive and mobile-first.
- TypeScript provides type safety throughout the application.

---

**Happy Coding!** 🎉
