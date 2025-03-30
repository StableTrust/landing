import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import MainLayout from "./components/Layout/MainLayout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import TeamPage from "./pages/TeamPage";
import CareersPage from "./pages/CareersPage";
import CapabilitiesPage from "./pages/CapabilitiesPage";
import SolutionsPage from "./pages/SolutionsPage";
import TechnologyPage from "./pages/TechnologyPage";
import FeaturesPage from "./pages/FeaturesPage";
import CaseStudiesPage from "./pages/CaseStudiesPage";
import CertificationsPage from "./pages/CertificationsPage";
import ContactPage from "./pages/ContactPage";
import TermsPage from "./pages/TermsPage";
import PrivacyPage from "./pages/PrivacyPage";
import RiskPage from "./pages/RiskPage";
import DisclaimerPage from "./pages/DisclaimerPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <LanguageProvider>
        <BrowserRouter>
          <MainLayout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/about/team" element={<TeamPage />} />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/about/capabilities" element={<CapabilitiesPage />} />
              <Route path="/solutions" element={<SolutionsPage />} />
              <Route path="/solutions/technology" element={<TechnologyPage />} />
              <Route path="/solutions/features" element={<FeaturesPage />} />
              <Route path="/case-studies" element={<CaseStudiesPage />} />
              <Route path="/certifications" element={<CertificationsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/risk" element={<RiskPage />} />
              <Route path="/disclaimer" element={<DisclaimerPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </MainLayout>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
