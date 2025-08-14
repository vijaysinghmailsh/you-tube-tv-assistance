import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MessageCircle, HelpCircle, Tv, Wifi, Settings, Zap, Star, Clock } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Header */}
      <header className="relative overflow-hidden bg-gradient-hero shadow-lg">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 py-6 relative z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 animate-slide-in-left">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/30 shadow-lg animate-float">
                <Tv className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">YouTube TV Support</h1>
                <p className="text-white/80 text-sm">Premium streaming assistance</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-white/80 hover:text-white transition-all duration-300 font-medium hover:scale-105">Help Center</a>
              <a href="#" className="text-white/80 hover:text-white transition-all duration-300 font-medium hover:scale-105">Live TV Guide</a>
              <a href="#" className="text-white/80 hover:text-white transition-all duration-300 font-medium hover:scale-105">Contact</a>
              <Button variant="secondary" className="bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30 transition-all duration-300">
                Sign In
              </Button>
            </nav>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              YouTube TV
              <span className="bg-gradient-accent bg-clip-text text-transparent"> Support Center</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Get instant help with your YouTube TV streaming experience. Our expert support team is here 24/7 to ensure uninterrupted entertainment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <a href="tel:+18883417651" Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                +1-888-341-7651
              </Button>
              <a href="tel:+18883417651" Button variant="outline" size="lg" className="px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300">
                Call Now
              </Button>
            </div>
          </div>
        </div>
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-primary/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-primary/10 rounded-full blur-2xl animate-float" style={{animationDelay: '1s'}}></div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 pb-12">
        {/* Support Categories */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">How can we help you today?</h2>
            <p className="text-muted-foreground text-lg">Choose from our most popular support categories</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-gradient-card border-0 shadow-lg animate-fade-in">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse-glow transition-all duration-300">
                  <Tv className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  Streaming Issues
                </CardTitle>
                <CardDescription className="text-base">
                  Buffering, quality problems, or playback errors
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-primary hover:bg-primary/90 group-hover:shadow-lg transition-all duration-300">
                  Fix Streaming
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-gradient-card border-0 shadow-lg animate-fade-in" style={{animationDelay: '0.2s'}}>
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse-glow transition-all duration-300">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  Account & Billing
                </CardTitle>
                <CardDescription className="text-base">
                  Subscription, payment, or account management
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-primary hover:bg-primary/90 group-hover:shadow-lg transition-all duration-300">
                  Manage Account
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-gradient-card border-0 shadow-lg animate-fade-in" style={{animationDelay: '0.4s'}}>
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse-glow transition-all duration-300">
                  <Wifi className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  Device Setup
                </CardTitle>
                <CardDescription className="text-base">
                  Connect your devices and optimize settings
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-primary hover:bg-primary/90 group-hover:shadow-lg transition-all duration-300">
                  Setup Guide
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-gradient-card border-0 shadow-lg animate-fade-in" style={{animationDelay: '0.6s'}}>
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse-glow transition-all duration-300">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  Live TV Guide
                </CardTitle>
                <CardDescription className="text-base">
                  Channel listings, DVR, and live features
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-primary hover:bg-primary/90 group-hover:shadow-lg transition-all duration-300">
                  View Guide
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-gradient-card border-0 shadow-lg animate-fade-in" style={{animationDelay: '0.8s'}}>
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse-glow transition-all duration-300">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  Family Features
                </CardTitle>
                <CardDescription className="text-base">
                  Parental controls and family sharing
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-primary hover:bg-primary/90 group-hover:shadow-lg transition-all duration-300">
                  Family Setup
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-gradient-card border-0 shadow-lg animate-fade-in" style={{animationDelay: '1s'}}>
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse-glow transition-all duration-300">
                  <HelpCircle className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  General Help
                </CardTitle>
                <CardDescription className="text-base">
                  Other questions and troubleshooting
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-primary hover:bg-primary/90 group-hover:shadow-lg transition-all duration-300">
                  Get Support
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Premium Contact Section */}
        <section className="relative">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Priority Support</h2>
            <p className="text-muted-foreground text-lg">Get instant help from our YouTube TV specialists</p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <Card className="relative overflow-hidden bg-gradient-hero border-0 shadow-2xl animate-pulse-glow">
              <div className="absolute inset-0 bg-black/20"></div>
              <CardHeader className="relative z-10 text-center text-white pb-6">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-6 animate-float">
                  <Phone className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold mb-2">
                  24/7 Expert Support Line
                </CardTitle>
                <CardDescription className="text-white/90 text-lg">
                  Connect with certified YouTube TV specialists instantly
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10 text-center text-white">
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 mb-6">
                  <div className="text-4xl font-bold mb-2 tracking-wider">+1-888-341-7651</div>
                  <div className="flex items-center justify-center gap-4 text-white/90">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>24/7 Available</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4" />
                      <span>Expert Support</span>
                    </div>
                  </div>
                </div>
              </CardContent>
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full blur-xl"></div>
            </Card>
          </div>
        </section>
      </main>

      {/* Enhanced Footer */}
      <footer className="relative bg-gradient-to-r from-youtube-dark via-foreground to-youtube-dark text-white mt-20">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 py-12 relative z-10">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center">
                  <Tv className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">YouTube TV Support</h3>
                  <p className="text-white/70">Premium streaming assistance</p>
                </div>
              </div>
              <p className="text-white/80 text-lg leading-relaxed max-w-md">
                Your dedicated partner for seamless YouTube TV streaming. We're here to ensure your entertainment never stops.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-6 text-white">Support Services</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-white/70 hover:text-white transition-all duration-300 hover:translate-x-2">Streaming Help</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-all duration-300 hover:translate-x-2">Device Setup</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-all duration-300 hover:translate-x-2">Account Management</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-all duration-300 hover:translate-x-2">Billing Support</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-6 text-white">24/7 Contact</h3>
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center gap-3 text-primary-foreground font-bold text-xl">
                    <Phone className="w-5 h-5" />
                    +1-888-341-7651
                  </div>
                  <p className="text-white/70 text-sm mt-1">Priority support line</p>
                </div>
                <div className="flex gap-3">
                  <Button variant="secondary" size="sm" className="bg-white/20 text-white border-white/30 hover:bg-white/30 flex-1">
                    <Mail className="w-4 h-4 mr-1" />
                    Email
                  </Button>
                  <Button variant="secondary" size="sm" className="bg-white/20 text-white border-white/30 hover:bg-white/30 flex-1">
                    <MessageCircle className="w-4 h-4 mr-1" />
                    Chat
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm">
              © 2024 YouTube TV Support Center. All rights reserved.
            </p>
            <div className="flex items-center gap-6 mt-4 md:mt-0">
              <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Terms of Service</a>
              <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Accessibility</a>
            </div>
          </div>
        </div>
        
        {/* Footer decorative elements */}
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
      </footer>
    </div>
  );
};

export default Index;
