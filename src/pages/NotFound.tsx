
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center p-8">
        <h1 className="text-4xl font-serif mb-4">404</h1>
        <p className="text-lg font-serif mb-6">Page not found</p>
        <Button variant="outline" asChild>
          <a href="/">Return to invitation</a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
