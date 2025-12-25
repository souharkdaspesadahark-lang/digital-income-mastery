import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useSiteSettingsList, useUpdateSiteSetting } from "@/hooks/useSiteSettings";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { LogOut, Save, Link, Settings, ArrowLeft, Type, Palette } from "lucide-react";

const Admin = () => {
  const navigate = useNavigate();
  const { user, loading: authLoading, signIn, signUp, signOut } = useAuth();
  const { data: settings, isLoading: settingsLoading } = useSiteSettingsList();
  const updateSetting = useUpdateSiteSetting();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [authError, setAuthError] = useState("");
  
  const [formValues, setFormValues] = useState<Record<string, string>>({});

  useEffect(() => {
    if (settings) {
      const values: Record<string, string> = {};
      settings.forEach((setting) => {
        values[setting.key] = setting.value;
      });
      setFormValues(values);
    }
  }, [settings]);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError("");
    
    const { error } = isSignUp 
      ? await signUp(email, password)
      : await signIn(email, password);
    
    if (error) {
      setAuthError(error.message);
    } else if (isSignUp) {
      toast.success("Conta criada com sucesso!");
    }
  };

  const handleSave = async (key: string) => {
    try {
      await updateSetting.mutateAsync({ key, value: formValues[key] || "" });
      toast.success("Configuração salva!");
    } catch (error) {
      toast.error("Erro ao salvar configuração");
    }
  };

  const handleSaveAll = async () => {
    try {
      for (const key of Object.keys(formValues)) {
        await updateSetting.mutateAsync({ key, value: formValues[key] || "" });
      }
      toast.success("Todas as configurações foram salvas!");
    } catch (error) {
      toast.error("Erro ao salvar configurações");
    }
  };

  // Categorize settings
  const linkSettings = settings?.filter(s => 
    s.key.includes('link') || s.key.includes('whatsapp')
  ) || [];
  
  const textSettings = settings?.filter(s => 
    s.key.includes('text') || s.key.includes('title') || s.key.includes('subtitle')
  ) || [];
  
  const colorSettings = settings?.filter(s => 
    s.key.includes('color')
  ) || [];

  const renderSettingInput = (setting: { key: string; label: string | null; value: string }) => {
    const isTextArea = setting.key.includes('subtitle');
    const isColor = setting.key.includes('color');
    
    return (
      <div key={setting.key} className="space-y-2">
        <Label htmlFor={setting.key}>
          {setting.label || setting.key}
        </Label>
        <div className="flex gap-2">
          {isColor ? (
            <div className="flex-1 flex gap-2">
              <Input
                id={setting.key}
                value={formValues[setting.key] || ""}
                onChange={(e) => 
                  setFormValues((prev) => ({
                    ...prev,
                    [setting.key]: e.target.value,
                  }))
                }
                placeholder="Ex: 42 100% 50%"
              />
              <div 
                className="w-12 h-10 rounded-md border border-border flex-shrink-0"
                style={{ backgroundColor: `hsl(${formValues[setting.key] || '0 0% 50%'})` }}
              />
            </div>
          ) : isTextArea ? (
            <Textarea
              id={setting.key}
              value={formValues[setting.key] || ""}
              onChange={(e) => 
                setFormValues((prev) => ({
                  ...prev,
                  [setting.key]: e.target.value,
                }))
              }
              placeholder="Digite aqui..."
              rows={3}
              className="flex-1"
            />
          ) : (
            <Input
              id={setting.key}
              value={formValues[setting.key] || ""}
              onChange={(e) => 
                setFormValues((prev) => ({
                  ...prev,
                  [setting.key]: e.target.value,
                }))
              }
              placeholder={
                setting.key.includes("link") 
                  ? "https://..." 
                  : setting.key.includes("whatsapp")
                  ? "5511999999999"
                  : "Digite aqui..."
              }
              className="flex-1"
            />
          )}
          <Button 
            size="icon"
            onClick={() => handleSave(setting.key)}
            disabled={updateSetting.isPending}
          >
            <Save className="h-4 w-4" />
          </Button>
        </div>
        {isColor && (
          <p className="text-xs text-muted-foreground">
            Formato HSL: Matiz Saturação% Luminosidade% (ex: 42 100% 50%)
          </p>
        )}
      </div>
    );
  };

  if (authLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  // Login/Signup Form
  if (!user) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">
              {isSignUp ? "Criar Conta" : "Painel Admin"}
            </CardTitle>
            <CardDescription>
              {isSignUp 
                ? "Crie sua conta para gerenciar o site" 
                : "Faça login para acessar as configurações"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleAuth} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu@email.com"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Senha</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  minLength={6}
                />
              </div>
              
              {authError && (
                <p className="text-sm text-destructive">{authError}</p>
              )}
              
              <Button type="submit" className="w-full">
                {isSignUp ? "Criar Conta" : "Entrar"}
              </Button>
              
              <Button 
                type="button" 
                variant="ghost" 
                className="w-full"
                onClick={() => setIsSignUp(!isSignUp)}
              >
                {isSignUp 
                  ? "Já tem conta? Faça login" 
                  : "Não tem conta? Cadastre-se"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Admin Panel
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => navigate("/")}
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div className="flex items-center gap-2">
              <Settings className="h-6 w-6 text-primary" />
              <h1 className="text-xl font-bold">Painel Admin</h1>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground hidden sm:block">
              {user.email}
            </span>
            <Button variant="outline" size="sm" onClick={signOut}>
              <LogOut className="h-4 w-4 mr-2" />
              Sair
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto space-y-6">
          <Tabs defaultValue="links" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="links" className="flex items-center gap-2">
                <Link className="h-4 w-4" />
                Links
              </TabsTrigger>
              <TabsTrigger value="texts" className="flex items-center gap-2">
                <Type className="h-4 w-4" />
                Textos
              </TabsTrigger>
              <TabsTrigger value="colors" className="flex items-center gap-2">
                <Palette className="h-4 w-4" />
                Cores
              </TabsTrigger>
            </TabsList>

            <TabsContent value="links">
              <Card>
                <CardHeader>
                  <CardTitle>Gerenciar Links</CardTitle>
                  <CardDescription>
                    Configure os links que aparecem nos botões do site
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {settingsLoading ? (
                    <div className="animate-pulse space-y-4">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="h-16 bg-muted rounded" />
                      ))}
                    </div>
                  ) : linkSettings.length > 0 ? (
                    linkSettings.map(renderSettingInput)
                  ) : (
                    <p className="text-muted-foreground text-center py-4">
                      Nenhuma configuração de link encontrada
                    </p>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="texts">
              <Card>
                <CardHeader>
                  <CardTitle>Gerenciar Textos</CardTitle>
                  <CardDescription>
                    Edite os textos dos títulos e botões
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {settingsLoading ? (
                    <div className="animate-pulse space-y-4">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="h-16 bg-muted rounded" />
                      ))}
                    </div>
                  ) : textSettings.length > 0 ? (
                    textSettings.map(renderSettingInput)
                  ) : (
                    <p className="text-muted-foreground text-center py-4">
                      Nenhuma configuração de texto encontrada
                    </p>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="colors">
              <Card>
                <CardHeader>
                  <CardTitle>Gerenciar Cores</CardTitle>
                  <CardDescription>
                    Personalize as cores do tema (formato HSL)
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {settingsLoading ? (
                    <div className="animate-pulse space-y-4">
                      {[1, 2].map((i) => (
                        <div key={i} className="h-16 bg-muted rounded" />
                      ))}
                    </div>
                  ) : colorSettings.length > 0 ? (
                    colorSettings.map(renderSettingInput)
                  ) : (
                    <p className="text-muted-foreground text-center py-4">
                      Nenhuma configuração de cor encontrada
                    </p>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <Card>
            <CardContent className="pt-6">
              <Button 
                className="w-full"
                onClick={handleSaveAll}
                disabled={updateSetting.isPending}
              >
                <Save className="h-4 w-4 mr-2" />
                Salvar Todas as Configurações
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Admin;