import { useState } from 'react';
import { MessageCircle, Wrench, Paintbrush, Settings, CheckCircle, MapPin, Phone, Clock, Star, Calendar as CalendarIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Calendar } from '@/components/ui/calendar';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const HomePage = () => {
  const [activeImage, setActiveImage] = useState(0);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [bookingOpen, setBookingOpen] = useState(false);
  const { toast } = useToast();

  const galleryImages = [
    {
      url: 'https://miaoda-site-img.s3cdn.medo.dev/images/0d88eedc-46ce-4df9-8eef-5dc8fe64935d.jpg',
      title: 'Premium Vehicles',
      description: 'Expert care for luxury and premium automobiles'
    },
    {
      url: 'https://miaoda-site-img.s3cdn.medo.dev/images/a2da789c-1a9c-488e-8846-238555e756cb.jpg',
      title: 'Interior Detailing',
      description: 'Meticulous attention to every detail'
    },
    {
      url: 'https://miaoda-site-img.s3cdn.medo.dev/images/1e5a073f-abfa-4871-978c-21248b45e40e.jpg',
      title: 'Engine Care',
      description: 'Professional mechanical services'
    },
    {
      url: 'https://miaoda-site-img.s3cdn.medo.dev/images/ea38bd57-35eb-4353-974c-267ecde0c29c.jpg',
      title: 'Expert Technicians',
      description: 'Skilled professionals at your service'
    },
    {
      url: 'https://miaoda-site-img.s3cdn.medo.dev/images/c254f1ff-7a98-469c-979e-581199050ded.jpg',
      title: 'Modern Facility',
      description: 'State-of-the-art service center'
    },
    {
      url: 'https://miaoda-site-img.s3cdn.medo.dev/images/bbc28f4e-e92c-410b-998f-20cdf023f6e7.jpg',
      title: 'Detailing Services',
      description: 'Professional cleaning and restoration'
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

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
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

  const handlePrevImage = () => {
    setActiveImage((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setActiveImage((prev) => (prev + 1) % galleryImages.length);
  };

  const handleBookingSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const phone = formData.get('phone');
    const service = formData.get('service');

    if (!selectedDate || !selectedTime) {
      toast({
        title: 'Missing Information',
        description: 'Please select both date and time for your appointment.',
        variant: 'destructive'
      });
      return;
    }

    toast({
      title: 'Booking Request Received!',
      description: `Thank you ${name}! We'll confirm your appointment for ${selectedDate.toLocaleDateString()} at ${selectedTime} shortly.`
    });

    setBookingOpen(false);
    setSelectedDate(undefined);
    setSelectedTime('');
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919845552372?text=Hi%2C%20I%20need%20a%20quotation%20for%20my%20car', '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <section className="relative bg-primary text-primary-foreground py-12 px-4 xl:py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-3 xl:text-5xl xl:mb-4">
            Accurate Car Care
          </h1>
          <p className="text-base opacity-95 max-w-2xl mx-auto leading-relaxed mb-6 xl:text-xl xl:mb-8">
            Expert Car Care You Can Trust - Specializing in Tinkering, Painting & Mechanical Excellence
          </p>
          <Dialog open={bookingOpen} onOpenChange={setBookingOpen}>
            <DialogTrigger asChild>
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow min-h-[48px]">
                <CalendarIcon className="w-5 h-5 mr-2" />
                Book Your Service Now
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-2xl">Book Your Service</DialogTitle>
                <DialogDescription>
                  Select your preferred date, time, and service. We'll confirm your appointment shortly.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleBookingSubmit} className="space-y-6 mt-4">
                <div className="grid gap-4 xl:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" name="name" placeholder="John Doe" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" name="phone" type="tel" placeholder="+91 98455 52372" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="service">Select Service *</Label>
                  <select
                    id="service"
                    name="service"
                    required
                    className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground"
                  >
                    <option value="">Choose a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service.title}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <Label>Select Date *</Label>
                  <div className="border border-border rounded-lg p-4 bg-card">
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      disabled={(date) => date < new Date() || date.getDay() === 0}
                      className="rounded-md mx-auto"
                      fromDate={new Date()}
                      toDate={new Date(new Date().setMonth(new Date().getMonth() + 6))}
                      numberOfMonths={1}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Select Time Slot *</Label>
                  <div className="grid grid-cols-2 gap-3 xl:grid-cols-4">
                    {timeSlots.map((time) => (
                      <Button
                        key={time}
                        type="button"
                        variant={selectedTime === time ? 'default' : 'outline'}
                        className="w-full h-12 text-sm font-medium transition-smooth"
                        onClick={() => setSelectedTime(time)}
                      >
                        {time}
                      </Button>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="notes">Additional Notes (Optional)</Label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows={3}
                    placeholder="Any specific requirements or concerns..."
                    className="w-full px-3 py-2 rounded-md border border-input bg-background text-foreground"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  Confirm Booking
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </section>

      <section className="py-8 px-4 xl:py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6 text-foreground xl:text-3xl xl:mb-10">
            Our Gallery
          </h2>
          <div className="relative overflow-hidden rounded-xl shadow-elegant">
            <div className="relative aspect-video bg-muted">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-700 ${
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
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background"
              onClick={handlePrevImage}
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background"
              onClick={handleNextImage}
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
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
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6 text-foreground xl:text-3xl xl:mb-10">
            Our Services
          </h2>
          <div className="grid gap-4 xl:grid-cols-3 xl:gap-6">
            {services.map((service, index) => (
              <Card key={index} className="shadow-elegant transition-smooth hover:shadow-glow border-border">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                      <service.icon className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-card-foreground">
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

      <section className="py-8 px-4 xl:py-16">
        <div className="max-w-7xl mx-auto">
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

      <section className="py-8 px-4 bg-secondary/30 xl:py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6 text-foreground xl:text-3xl xl:mb-10">
            Visit Our Location
          </h2>
          <Card className="shadow-elegant border-border overflow-hidden">
            <CardContent className="p-0">
              <div className="grid xl:grid-cols-2">
                <div className="p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-card-foreground mb-1">Address</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Bus Stop, 27th Cross Rd, behind Yedur,<br />
                        7th Block, Jayanagar,<br />
                        Bengaluru, Karnataka 560070
                      </p>
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
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-card-foreground mb-1">Working Hours</h3>
                      <p className="text-sm text-muted-foreground">
                        Monday - Saturday: 9:00 AM - 6:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                  <Button
                    onClick={handleWhatsAppClick}
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground mt-4"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Chat on WhatsApp
                  </Button>
                </div>
                <div className="h-80 xl:h-auto">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.9876543210123!2d77.5833333!3d12.9166667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU1JzAwLjAiTiA3N8KwMzUnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Accurate Car Care Location"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur-sm border-t border-border shadow-elegant z-50 xl:hidden">
        <div className="max-w-7xl mx-auto flex gap-2">
          <Button
            onClick={() => setBookingOpen(true)}
            size="lg"
            className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground min-h-[48px]"
          >
            <CalendarIcon className="w-5 h-5 mr-2" />
            Book Service
          </Button>
          <Button
            onClick={handleWhatsAppClick}
            size="lg"
            className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow min-h-[48px]"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            WhatsApp
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
