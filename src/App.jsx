import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import BlogsPage from './pages/BlogsPage';
import SingleBlog from './pages/blog/SingleBlog';
import CaseStudiesPage from './pages/CaseStudiesPage';
import CaseStudyPostPage from './pages/CaseStudyPostPage';
import ContactPage from './pages/ContactPage';
import PricingPage from './pages/PricingPage';
import CareerPage from './pages/CareerPage';
import FaqsPage from './pages/FaqsPage';
import WorksPage from './pages/WorksPage';
import TestimonialsPage from './pages/TestimonialsPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* All routes share the Layout (Header + Footer) */}
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="blogs" element={<BlogsPage />} />
          <Route path="blogs/:slug" element={<SingleBlog />} />
          <Route path="case-studies" element={<CaseStudiesPage />} />
          <Route path="case-studies/:slug" element={<CaseStudyPostPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="pricing" element={<PricingPage />} />
          <Route path="career" element={<CareerPage />} />
          <Route path="faqs" element={<FaqsPage />} />
          <Route path="our-works" element={<WorksPage />} />
          <Route path="testimonials" element={<TestimonialsPage />} />
          {/* Catch-all 404 */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
