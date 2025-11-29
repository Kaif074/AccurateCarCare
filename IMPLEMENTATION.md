# Accurate Car Care - Professional Automotive Service Booking Website

## Project Overview

A modern, responsive automotive service booking website built with React, TypeScript, Tailwind CSS, and shadcn/ui components. The website features an intuitive booking system, interactive photo gallery, embedded Google Maps, and WhatsApp integration.

## Core Features Implemented

### 1. **Interactive Booking System**
- **Calendar Widget**: Full-featured date picker with:
  - Disabled past dates and Sundays (closed day)
  - Visual date selection interface
  - Mobile-optimized touch interactions
- **Time Slot Selection**: 8 available time slots from 9:00 AM to 5:00 PM
- **Service Selection**: Dropdown with pricing and duration information
- **Customer Information Form**: Name, phone, service type, and optional notes
- **Real-time Validation**: Ensures all required fields are completed
- **Toast Notifications**: User-friendly confirmation messages

### 2. **High-Quality Visual Content**
- **6 Professional Car Photos** showcasing:
  - Luxury vehicle exterior (showroom quality)
  - Premium interior detailing
  - Engine bay maintenance
  - Expert technicians at work
  - Modern service facility
  - Professional detailing services
- **Interactive Gallery**:
  - Manual navigation with prev/next buttons
  - Dot indicators for quick navigation
  - Smooth fade transitions
  - Descriptive overlays on each image

### 3. **Google Maps Integration**
- **Embedded Interactive Map**:
  - Fully functional within the page (zoom, pan, street view)
  - No external redirects required
  - Responsive iframe implementation
  - Proper accessibility attributes
- **Location Details**:
  - Complete address display
  - Working hours information
  - Direct contact information

### 4. **WhatsApp Integration**
- **Direct App Launch**: Opens user's WhatsApp application (mobile) or web client (desktop)
- **Pre-filled Message**: "Hi, I need a quotation for my car"
- **Multiple Access Points**:
  - Fixed bottom bar on mobile (dual CTA)
  - Location section button
  - Prominent throughout the user journey

### 5. **Service Showcase**
- **3 Main Services**:
  - Expert Repairs (₹2,000+, 2-4 hours)
  - Premium Painting & Dent Removal (₹5,000+, 1-3 days)
  - Mechanical Work (₹3,000+, 3-6 hours)
- **Service Cards** with:
  - Icon representation
  - Detailed descriptions
  - Duration and pricing information
  - Hover effects for engagement

### 6. **Trust Indicators**
- **4 Key USPs**:
  - Skilled Technicians
  - Honest Pricing
  - Timely Delivery
  - Best-in-Class Care
- Visual icons and clear descriptions

## Technical Implementation

### Design System
- **Color Scheme**:
  - Primary: Deep Blue (HSL 205 60% 20%) - Professional, trustworthy
  - Accent: Vibrant Orange (HSL 16 100% 60%) - Energy, action
  - Monochromatic approach for cohesion
- **Typography**: Responsive scaling with mobile-first approach
- **Spacing**: Consistent 8px grid system
- **Shadows**: Elegant depth with custom shadow utilities

### Responsive Design
- **Mobile-First Approach**:
  - Default styles optimized for <500px viewports
  - XL breakpoint (1280px+) for desktop layouts
  - Touch-friendly 48px minimum tap targets
- **Adaptive Layouts**:
  - Single column on mobile
  - Multi-column grids on desktop
  - Flexible card-based design

### Component Architecture
- **Reusable UI Components**: shadcn/ui library
- **State Management**: React hooks (useState)
- **Form Handling**: Native form with validation
- **Toast System**: Integrated notification system

### Third-Party Integrations

#### Google Maps
```html
<iframe
  src="https://www.google.com/maps/embed?pb=..."
  width="100%"
  height="100%"
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
```
- Embedded using Google Maps Embed API
- Fully interactive within the page
- Lazy loading for performance

#### WhatsApp
```javascript
window.open('https://wa.me/919845552372?text=Hi%2C%20I%20need%20a%20quotation%20for%20my%20car', '_blank');
```
- Uses WhatsApp Click to Chat API
- Opens in user's WhatsApp app/web client
- Pre-filled message for convenience

## User Flow

1. **Landing**: Hero section with company branding and primary CTA
2. **Browse**: Scroll through gallery, services, and trust indicators
3. **Book**: Click "Book Your Service Now" button
4. **Select**: Choose date, time, and service in modal dialog
5. **Submit**: Fill customer details and confirm booking
6. **Confirm**: Receive toast notification with booking details
7. **Contact**: Alternative WhatsApp contact for immediate queries

## Mobile Experience

### Fixed Bottom Bar (Mobile Only)
- Dual CTA buttons:
  - "Book Service" - Opens booking modal
  - "WhatsApp" - Direct chat access
- Always accessible during scroll
- Hidden on desktop (XL+ screens)

### Touch Optimizations
- 48px minimum button heights
- Large tap targets for gallery navigation
- Swipe-friendly calendar interface
- Optimized form inputs for mobile keyboards

## Performance Optimizations

- **Lazy Loading**: Images load as needed
- **Optimized Images**: Compressed, high-quality photos
- **Minimal JavaScript**: Efficient React implementation
- **CSS-based Animations**: GPU-accelerated transitions
- **Code Splitting**: Component-level optimization

## Accessibility Features

- **Semantic HTML**: Proper heading hierarchy
- **ARIA Labels**: Screen reader support
- **Keyboard Navigation**: Full keyboard accessibility
- **Color Contrast**: WCAG AA compliant
- **Focus Indicators**: Clear focus states

## Browser Compatibility

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Future Enhancement Opportunities

1. **Backend Integration**: Connect booking system to database
2. **Email Notifications**: Automated booking confirmations
3. **Payment Gateway**: Online payment processing
4. **Customer Portal**: Booking history and management
5. **Review System**: Customer testimonials and ratings
6. **Live Chat**: Real-time customer support
7. **Multi-language Support**: Localization for different regions

## Maintenance Notes

- Update service prices in `services` array
- Modify time slots in `timeSlots` array
- Replace gallery images by updating `galleryImages` array
- Adjust Google Maps coordinates in iframe src
- Update WhatsApp number in `handleWhatsAppClick` function

## Contact Information

- **Phone**: +91 98455 52372
- **Address**: Bus Stop, 27th Cross Rd, behind Yedur, 7th Block, Jayanagar, Bengaluru, Karnataka 560070
- **Hours**: Monday-Saturday 9:00 AM - 6:00 PM (Closed Sundays)
