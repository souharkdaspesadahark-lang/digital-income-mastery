-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create site_settings table for managing links and configuration
CREATE TABLE public.site_settings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  key TEXT NOT NULL UNIQUE,
  value TEXT NOT NULL,
  label TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;

-- Allow public read access (so the landing page can fetch links)
CREATE POLICY "Anyone can read site settings" 
ON public.site_settings 
FOR SELECT 
USING (true);

-- Only authenticated users can update settings
CREATE POLICY "Authenticated users can update settings" 
ON public.site_settings 
FOR UPDATE 
USING (auth.uid() IS NOT NULL);

CREATE POLICY "Authenticated users can insert settings" 
ON public.site_settings 
FOR INSERT 
WITH CHECK (auth.uid() IS NOT NULL);

-- Insert default settings
INSERT INTO public.site_settings (key, value, label) VALUES
('main_cta_link', 'https://pay.kiwify.com.br/stPj5Aq?afid=Gm9OtlYz', 'Link Principal do CTA'),
('bonus_link', '', 'Link do Bônus'),
('bonus_text', '', 'Texto do Botão de Bônus'),
('whatsapp_number', '5516997772628', 'Número do WhatsApp');

-- Create trigger for updated_at
CREATE TRIGGER update_site_settings_updated_at
BEFORE UPDATE ON public.site_settings
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();