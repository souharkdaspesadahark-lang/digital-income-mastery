import { useEffect } from "react";
import { useSiteSettings } from "@/hooks/useSiteSettings";

const DynamicTheme = () => {
  const { data: settings } = useSiteSettings();

  useEffect(() => {
    if (settings) {
      const root = document.documentElement;
      
      if (settings.primary_color) {
        root.style.setProperty("--primary", settings.primary_color);
        root.style.setProperty("--ring", settings.primary_color);
      }
      
      if (settings.accent_color) {
        root.style.setProperty("--accent", settings.accent_color);
      }
    }
  }, [settings]);

  return null;
};

export default DynamicTheme;