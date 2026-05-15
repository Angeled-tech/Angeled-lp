import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { HomePage } from "./pages/HomePage";
import { PrivacyPolicyPage } from "./pages/PrivacyPolicyPage";
import { TermsOfUsePage } from "./pages/TermsOfUsePage";
import { trackPageView } from "./services/analytics";

function PageViewTracker() {
  const location = useLocation();

  useEffect(() => {
    trackPageView(`${location.pathname}${location.search}${location.hash}`);
  }, [location]);

  return null;
}

export function App() {
  return (
    <div className="app-shell">
      <PageViewTracker />
      <Header />
      <main className="main-content">
        <Routes>
          <Route element={<HomePage />} path="/" />
          <Route element={<PrivacyPolicyPage />} path="/privacidade" />
          <Route element={<TermsOfUsePage />} path="/termos" />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
