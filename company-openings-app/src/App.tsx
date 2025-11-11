import { Route, Routes } from 'react-router-dom';
import { JobProvider } from './context/JobContext';
import ApplicationTrackerPage from './pages/ApplicationTrackerPage';
import { FLMLandingPage } from './pages/FLMLandingPage';
import JobApplicationsPage from './pages/JobApplicationsPage';
import JobDetail from './pages/JobDetail';
import { JobsPage } from './pages/JobsPage';
import { MainLayout } from './pages/MainLayout';
import { HomePage } from './pages/HomePage';

function App() {
  return (
    <JobProvider>
      <Routes>
        <Route path="/flm" element={<FLMLandingPage />} />
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/jobs" element={<JobsPage />} />
          <Route path="/jobs/:id" element={<JobDetail />} />
          <Route path="/applications" element={<ApplicationTrackerPage />} />
          <Route path="/jobs/:jobId/applications" element={<JobApplicationsPage />} />
        </Route>
      </Routes>
    </JobProvider>
  );
}

export default App;
