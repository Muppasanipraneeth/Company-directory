# Application Tracker - Setup & Troubleshooting Guide

## 🔧 Setup Instructions

### Step 1: Start JSON Server

JSON Server needs to be running to handle API requests for application tracking.

```bash
npm run db
```

This will start the server at `http://localhost:3000`

**Expected Output:**

```
  ✔ watch your db.json file for changes
  ✔ GET, POST, PUT, PATCH, DELETE requests

  http://localhost:3000
```

### Step 2: Start Development Server

In a new terminal, start the Vite development server:

```bash
npm run dev
```

**Expected Output:**

```
  VITE v5.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
```

### Step 3: Access Application Tracker

Open your browser and navigate to:

```
http://localhost:5173/applications
```

---

## 🐛 Troubleshooting

### Issue 1: "Failed to save application" or CORS Error

**Error Message:**

```
Referrer Policy: strict-origin-when-cross-origin
Failed to create application
```

**Cause:** The JSON Server is not accessible, or CORS headers are not configured properly.

**Solutions:**

#### Option A: Verify JSON Server is Running

1. Check if `npm run db` is still running in its terminal
2. Look for the output `http://localhost:3000`
3. Open `http://localhost:3000/applications` in your browser - you should see JSON data

#### Option B: Restart JSON Server

```bash
# In the terminal running `npm run db`, press Ctrl+C
# Then restart it
npm run db
```

#### Option C: Check Port is Not in Use

If port 3000 is already in use:

```bash
# On macOS/Linux, find process using port 3000
lsof -i :3000

# Kill the process (replace PID with actual number)
kill -9 <PID>

# Then restart JSON Server
npm run db
```

#### Option D: Clear Browser Cache

1. Open DevTools (F12 or Cmd+Option+I)
2. Right-click Refresh button → "Empty cache and hard refresh"
3. Try submitting the form again

---

### Issue 2: Applications Not Showing Up

**Cause:** Data not being fetched from the server.

**Solutions:**

1. **Check Console for Errors:**
   - Open Browser DevTools (F12)
   - Go to Console tab
   - Look for any red error messages
   - Screenshot and note the error

2. **Verify db.json File:**
   - Check if `db.json` exists in project root
   - Verify it's not corrupted by opening it in an editor
   - Should start with `{ "applications": [`

3. **Check Network Requests:**
   - Open DevTools → Network tab
   - Try to load applications or submit a form
   - Look for requests to `localhost:3000`
   - Check the response for errors

4. **Restart Both Servers:**

   ```bash
   # Terminal 1: Stop JSON Server (Ctrl+C)
   npm run db

   # Terminal 2: Stop Dev Server (Ctrl+C)
   npm run dev
   ```

---

### Issue 3: Form Submission Hangs

**Cause:** Server is slow or not responding.

**Solutions:**

1. **Check JSON Server Terminal:**
   - Should show requests like: `POST /applications 201 8.234 ms`
   - If nothing appears, JSON Server isn't receiving requests

2. **Verify Network Connection:**
   - Open DevTools → Network tab
   - Try submitting form
   - Watch for request to `http://localhost:3000/applications`
   - Check if it completes or times out

3. **Check System Resources:**
   - Open Activity Monitor (macOS) or Task Manager (Windows)
   - Verify Node.js process is not using excessive CPU/Memory
   - Restart if needed

---

### Issue 4: 404 Error - Applications Route Not Found

**Error Message:**

```
Cannot GET /applications
```

**Cause:** Application Tracker page component not properly imported.

**Solutions:**

1. **Verify App.tsx imports:**

   ```typescript
   import ApplicationTrackerPage from "./pages/ApplicationTrackerPage";
   ```

2. **Verify route exists:**

   ```typescript
   <Route path="/applications" element={<ApplicationTrackerPage />} />
   ```

3. **Check file exists:**
   ```
   src/pages/ApplicationTrackerPage.tsx
   ```

---

### Issue 5: "Cannot find module" Errors

**Error Message:**

```
Cannot find module '@/components/ApplicationCard'
Cannot find module '@/api/applicationsAPI'
```

**Cause:** Missing files or import paths.

**Solutions:**

1. **Verify files exist:**
   - `src/components/ApplicationCard.tsx`
   - `src/components/ApplicationForm.tsx`
   - `src/api/applicationsAPI.ts`

2. **Check import paths are correct:**
   - Should use `@/` alias (configured in `vite.config.ts`)
   - Should match actual file names exactly

3. **Restart dev server:**
   - Stop: Ctrl+C
   - Start: `npm run dev`

---

### Issue 6: Data Not Persisting

**Problem:** Applications save but don't show after page refresh.

**Cause:** Data saved to wrong location or JSON Server not reloading.

**Solutions:**

1. **Verify db.json is being written:**
   - Open `db.json` in file explorer
   - Look at "Modified" timestamp
   - Should update when you save an application

2. **Check write permissions:**

   ```bash
   # Verify file is writable
   ls -l db.json

   # Should show something like: -rw-r--r--
   ```

3. **Manually add data to db.json:**
   - Stop JSON Server
   - Edit `db.json` and add an application manually
   - Save file
   - Restart JSON Server
   - Refresh browser - you should see the application

---

### Issue 7: Form Validation Errors

**Problem:** Form won't submit even when filled out.

**Solutions:**

1. **Check Required Fields:**
   - Job Title (required)
   - Company (required)
   - Application Date (required)
   - Status (required)
   - All marked with \* in form

2. **Validate Field Values:**
   - Job Title: Non-empty string
   - Company: Non-empty string
   - Date: Valid date in YYYY-MM-DD format
   - Status: One of the predefined statuses

3. **Check Browser Console:**
   - Open DevTools
   - Try submitting form
   - Look for validation error messages

---

### Issue 8: Styles Not Applying

**Problem:** Form/cards look unstyled or broken.

**Cause:** Tailwind CSS not compiled or loaded.

**Solutions:**

1. **Verify Tailwind is running:**
   - Check if `postcss` process is active
   - Restart with: `npm run dev`

2. **Check CSS file:**
   - Verify `src/index.css` exists
   - Should contain Tailwind directives

3. **Clear Cache:**
   - Clear browser cache (Cmd+Shift+Delete)
   - Hard refresh page (Cmd+Shift+R)

---

## ✅ Verification Checklist

Make sure all of these are true:

- [ ] `npm run db` is running in a terminal (showing `http://localhost:3000`)
- [ ] `npm run dev` is running in another terminal (showing `http://localhost:5173`)
- [ ] Can visit `http://localhost:3000/applications` and see JSON data
- [ ] Can visit `http://localhost:5173/applications` and see the Application Tracker page
- [ ] Can see "My Applications" link in the navigation menu
- [ ] Form appears when clicking "+ Track New Application"
- [ ] Can fill out and submit the form without errors
- [ ] New applications appear in the list
- [ ] Status dropdown works and saves changes
- [ ] Filter by Status and Platform work

---

## 🚀 Quick Start Command

Run this to start everything at once (requires two terminals):

**Terminal 1:**

```bash
npm run db
```

**Terminal 2:**

```bash
npm run dev
```

Then open: `http://localhost:5173/applications`

---

## 📝 Sample Data

When you first run the app, the database comes with 3 sample applications:

1. **Senior Frontend Developer** @ Innovatech Solutions
   - Platform: LinkedIn
   - Status: Interview Scheduled
   - Date Applied: 2025-11-01

2. **Full-Stack Engineer** @ CloudSphere Inc.
   - Platform: Indeed
   - Status: Applied
   - Date Applied: 2025-11-08

3. **DevOps Engineer** @ InfraCloud
   - Platform: Company Website
   - Status: Rejected
   - Date Applied: 2025-10-28

You can edit, delete, or add new applications as needed.

---

## 🔍 Debug Commands

### Check if servers are running:

```bash
# Check port 5173 (Vite dev server)
lsof -i :5173

# Check port 3000 (JSON Server)
lsof -i :3000
```

### View real-time logs:

```bash
# Terminal running `npm run db` shows JSON Server logs
# Terminal running `npm run dev` shows Vite logs
```

### View database directly:

```bash
# Open in terminal
cat db.json | jq '.applications'

# Or in browser
http://localhost:3000/applications
```

### Clear database (start fresh):

```bash
# Edit db.json manually or:
# 1. Stop JSON Server
# 2. Delete all application entries from db.json
# 3. Restart JSON Server
```

---

## 📞 Still Having Issues?

1. **Check browser console for errors:**
   - Press F12
   - Go to Console tab
   - Look for red error messages
   - Copy exact error text

2. **Check JSON Server terminal output:**
   - Look for HTTP status codes (201, 404, 500, etc.)
   - Note the endpoint being called

3. **Verify file structure:**

   ```
   src/
   ├── api/applicationsAPI.ts ✓
   ├── components/
   │   ├── ApplicationCard.tsx ✓
   │   └── ApplicationForm.tsx ✓
   ├── pages/
   │   ├── ApplicationTrackerPage.tsx ✓
   │   └── JobApplicationsPage.tsx ✓
   └── types/index.ts ✓

   db.json ✓
   ```

4. **Common Quick Fixes:**
   - Restart both servers (stop with Ctrl+C, restart)
   - Clear browser cache
   - Hard refresh page (Cmd+Shift+R)
   - Check all required ports are available

---

**Happy tracking! 🎯**
