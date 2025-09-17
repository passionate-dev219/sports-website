import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center animate-fade-in">
        <h1 className="mb-4 text-hero gradient-text">404</h1>
        <p className="mb-8 text-subtitle text-muted-foreground">Oops! Page not found</p>
        <a 
          href="/" 
          className="btn-hockey inline-flex items-center px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
