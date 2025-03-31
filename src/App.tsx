import { Suspense } from "react";
import { Navigate, Route, Routes, useRoutes } from "react-router-dom";
import routes from "tempo-routes";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import Dashboard from "./components/pages/dashboard";
import Success from "./components/pages/success";
import PCBuilderLightMode from "./components/pc-builder/PCBuilderLightMode";
import PCDetails from "./components/pc-builder/PCDetails";
import ComponentSelection from "./components/pc-builder/ComponentSelection";
import PreBuiltPCs from "./components/pc-builder/PreBuiltPCs";
import Documentation from "./components/pages/Documentation";
import Tutorials from "./components/pages/Tutorials";
import Blog from "./components/pages/Blog";
import Support from "./components/pages/Support";
import { AuthProvider, useAuth } from "../supabase/auth";
import { Toaster } from "./components/ui/toaster";
import Layout from "./components/layout/Layout";

function PrivateRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
}

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <PCBuilderLightMode />
            </Layout>
          }
        />
        <Route
          path="/login"
          element={
            <Layout>
              <LoginForm />
            </Layout>
          }
        />
        <Route
          path="/signup"
          element={
            <Layout>
              <SignUpForm />
            </Layout>
          }
        />
        <Route
          path="/prebuilt-pcs"
          element={
            <Layout>
              <PreBuiltPCs />
            </Layout>
          }
        />
        <Route
          path="/pc-details"
          element={
            <Layout>
              <PCDetails />
            </Layout>
          }
        />
        <Route
          path="/component-selection"
          element={
            <Layout>
              <ComponentSelection />
            </Layout>
          }
        />
        <Route
          path="/documentation"
          element={
            <Layout>
              <Documentation />
            </Layout>
          }
        />
        <Route
          path="/tutorials"
          element={
            <Layout>
              <Tutorials />
            </Layout>
          }
        />
        <Route
          path="/blog"
          element={
            <Layout>
              <Blog />
            </Layout>
          }
        />
        <Route
          path="/support"
          element={
            <Layout>
              <Support />
            </Layout>
          }
        />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Layout>
                <Dashboard />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/success"
          element={
            <Layout>
              <Success />
            </Layout>
          }
        />
      </Routes>
      {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <Suspense fallback={<p>Loading...</p>}>
        <AppRoutes />
      </Suspense>
      <Toaster />
    </AuthProvider>
  );
}

export default App;
