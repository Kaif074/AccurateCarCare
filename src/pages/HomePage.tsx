import { useState, useEffect } from 'react';
import { MessageCircle, Wrench, Paintbrush, Settings, CheckCircle, MapPin, Phone, Clock, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const HomePage = () => {
  const [activeImage, setActiveImage] = useState(0);

  const galleryImages = [
    {
      url: 'https://miaoda-site-img.s3cdn.medo.dev/images/fb7d4a59-83b4-45f1-a682-5d7d4b4b491a.jpg',
      title: 'Before & After',
      description: 'Flawless dent removal and restoration'
    },
    {
      url: 'https://miaoda-site-img.s3cdn.medo.dev/images/2a07d436-832a-4631-a77d-bfa30c485ec2.jpg',
      title: 'Premium Painting',
      description: 'Professional spray painting service'
    },
    {
      url: 'https://miaoda-site-img.s3cdn.medo.dev/images/07affb09-b651-452d-9e07-d6a5e3ed4777.jpg',
      title: 'Expert Repairs',
      description: 'Skilled technicians at work'
    },
    {
      url: 'https://miaoda-site-img.s3cdn.medo.dev/images/f836b92c-91f7-4603-b1d0-84dd4805a5a8.jpg',
      title: 'Quality Results',
      description: 'Satisfied customers every time'
    }
  ];

  const services = [
    {
      icon: Wrench,
      title: 'Expert Repairs',
      description: 'Professional diagnosis and repair services for all vehicle issues'
    },
    {
      icon: Paintbrush,
      title: 'Premium Painting & Dent Removal',
      description: 'Flawless finish matching factory quality with advanced techniques'
    },
    {
      icon: Settings,
      title: 'Mechanical Work',
      description: 'Complete car care solutions for all your mechanical needs'
    }
  ];

  const usps = [
    {
      icon: Star,
      title: 'Skilled Technicians',
      description: 'Trusted experts with proven expertise'
    },
    {
      icon: CheckCircle,
      title: 'Honest Pricing',
      description: 'Fair, transparent pricing with no hidden costs'
    },
    {
      icon: Clock,
      title: 'Timely Delivery',
      description: 'Commitment to deadlines and punctual service'
    },
    {
      icon: Star,
      title: 'Best-in-Class Care',
      description: 'Premium quality service for your vehicle'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % galleryImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919845552372?text=Hi%2C%20I%20need%20a%20quotation%20for%20my%20car', '_blank');
  };

  const handleLocationClick = () => {
    window.open('https://maps.app.goo.gl/9YwJKcVu72xLdG4T8', '_blank');
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      <section className="relative bg-primary text-primary-foreground py-12 px-4 xl:py-20">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-3 xl:text-5xl xl:mb-4">
            Accurate Car Care
          </h1>
          <p className="text-base opacity-95 max-w-2xl mx-auto leading-relaxed xl:text-xl">
            Expert Car Care You Can Trust - Specializing in Tinkering, Painting & Mechanical Excellence
          </p>
        </div>
      </section>

      <section className="py-8 px-4 xl:py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6 text-foreground xl:text-3xl xl:mb-10">
            Our Services
          </h2>
          <div className="grid gap-4 xl:grid-cols-3 xl:gap-6">
            {services.map((service, index) => (
              <Card key={index} className="shadow-elegant transition-smooth hover:shadow-glow border-border">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                      <service.icon className="w-7 h-7 text-accent" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-card-foreground">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 px-4 bg-secondary/30 xl:py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6 text-foreground xl:text-3xl xl:mb-10">
            Why Choose Us
          </h2>
          <div className="grid gap-4 xl:grid-cols-2 xl:gap-6">
            {usps.map((usp, index) => (
              <Card key={index} className="shadow-elegant border-border">
                <CardContent className="p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <usp.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold mb-1 text-card-foreground">
                        {usp.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {usp.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 px-4 xl:py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6 text-foreground xl:text-3xl xl:mb-10">
            Our Work
          </h2>
          <div className="relative overflow-hidden rounded-xl shadow-elegant">
            <div className="relative aspect-video bg-muted">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === activeImage ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/90 to-transparent p-4 xl:p-6">
                    <h3 className="text-lg font-semibold text-primary-foreground mb-1">
                      {image.title}
                    </h3>
                    <p className="text-sm text-primary-foreground/90">
                      {image.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex gap-2 xl:bottom-24">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`w-2 h-2 rounded-full transition-smooth ${
                    index === activeImage ? 'bg-accent w-6' : 'bg-primary-foreground/50'
                  }`}
                  aria-label={`View image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 px-4 bg-secondary/30 xl:py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6 text-foreground xl:text-3xl xl:mb-10">
            Visit Us
          </h2>
          <Card className="shadow-elegant border-border">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-card-foreground mb-1">Location</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Bus Stop, 27th Cross Rd, behind Yedur, 7th Block, Jayanagar, Bengaluru, Karnataka 560070
                    </p>
                    <Button
                      onClick={handleLocationClick}
                      variant="outline"
                      size="sm"
                      className="mt-3"
                    >
                      <MapPin className="w-4 h-4 mr-2" />
                      Open in Google Maps
                    </Button>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-card-foreground mb-1">Contact</h3>
                    <p className="text-sm text-muted-foreground">
                      +91 98455 52372
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur-sm border-t border-border shadow-elegant z-50">
        <div className="max-w-6xl mx-auto">
          <Button
            onClick={handleWhatsAppClick}
            size="lg"
            className="w-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow transition-smooth min-h-[48px]"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Get Your Free Quotation on WhatsApp Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
