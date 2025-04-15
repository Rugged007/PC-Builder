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
import Checkout from "./components/pc-builder/Checkout";
import Documentation from "./components/pages/Documentation";
import Tutorials from "./components/pages/Tutorials";
import Blog from "./components/pages/Blog";
import Support from "./components/pages/Support";
import FAQ from "./components/pages/FAQ";
import Testimonials from "./components/pages/Testimonials";
import WarrantyInfo from "./components/pages/WarrantyInfo";
import AboutUs from "./components/pages/AboutUs";
import ContactUs from "./components/pages/ContactUs";
import Profile from "./components/pages/Profile";
import SavedBuilds from "./components/pages/SavedBuilds";
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
          path="/checkout"
          element={
            <Layout>
              <Checkout />
            </Layout>
          }
        />
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
          path="/faq"
          element={
            <Layout>
              <FAQ />
            </Layout>
          }
        />
        <Route
          path="/testimonials"
          element={
            <Layout>
              <Testimonials />
            </Layout>
          }
        />
        <Route
          path="/warranty-info"
          element={
            <Layout>
              <WarrantyInfo />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <AboutUs />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout>
              <ContactUs />
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
          path="/profile"
          element={
            <PrivateRoute>
              <Layout>
                <Profile />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/saved-builds"
          element={
            <PrivateRoute>
              <Layout>
                <SavedBuilds />
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
