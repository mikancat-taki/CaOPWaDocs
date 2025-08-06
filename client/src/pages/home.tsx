import { useState, useEffect } from "react";
import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";
import { DocumentationContent } from "@/components/documentation-content";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleSidebarClose = () => {
    setSidebarOpen(false);
  };

  // Close sidebar on window resize to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && sidebarOpen) {
        setSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [sidebarOpen]);

  // Update active navigation on scroll
  useEffect(() => {
    const updateActiveNavigation = () => {
      const sections = document.querySelectorAll('section[id]');
      const navLinks = document.querySelectorAll('.nav-link');
      
      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 200) {
          current = section.getAttribute('id') || '';
        }
      });
      
      navLinks.forEach(link => {
        const button = link as HTMLElement;
        button.classList.remove('bg-blue-50', 'text-blue-700');
        if (button.dataset.testid === `nav-link-${current}`) {
          button.classList.add('bg-blue-50', 'text-blue-700');
        }
      });
    };

    window.addEventListener('scroll', updateActiveNavigation);
    updateActiveNavigation(); // Initial call

    return () => window.removeEventListener('scroll', updateActiveNavigation);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 font-sans" data-testid="page-home">
      <Header onSidebarToggle={handleSidebarToggle} />
      
      <div className="flex">
        <Sidebar isOpen={sidebarOpen} onClose={handleSidebarClose} />
        
        <main className="main-content flex-1 md:ml-72 min-h-screen" data-testid="main-content">
          <DocumentationContent />
        </main>
      </div>
    </div>
  );
}
