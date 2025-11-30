# Accurate Car Care Professional Website Requirements Document

## 1. Website Name
Accurate Car Care Official Website

## 2. Website Description
A professional automotive service website for Accurate Car Care, specializing in expert repairs, premium painting, dent removal, comprehensive mechanical work, and full-service automotive maintenance. The website enables customers to explore services, view high-quality work samples, book appointments online through an interactive map interface, and contact directly through WhatsApp with pre-filled booking details.

## 3. Website Features

### 3.1 Company Identity & Overview
- Company Name: Accurate Car Care
- Tagline: Expert Car Care You Can Trust - Specializing in Tinkering, Painting & Mechanical Excellence
- Value Proposition: Delivering high-quality, reliable car service with skilled technicians, honest pricing, and timely delivery

### 3.2 Service Showcase
\n#### 3.2.1 Core Services
- Expert Repairs: Professional diagnosis and repair services\n- Premium-Quality Painting & Dent Removal: Flawless finish matching factory quality
- Mechanical Work: Complete car care solutions including engine diagnostics, brake services, suspension repairs, and scheduled maintenance

#### 3.2.2 Specialized Repair & Restoration Services

**Service 1: Painting**
- Service Code: SRV-PAINT-001
- Description: Professional automotive painting service delivering factory-quality finish with color matching, surface preparation, and protective coating
- Pricing Model: Quote-based (depends on vehicle size, paint type, and coverage area)
- Estimated Completion Time: 3-5 business days
- Prerequisites: Vehicle assessment required; Dent Removal recommended if body damage exists

**Service 2: Tinkering**
- Service Code: SRV-TINK-002
- Description: Precision repair and adjustment of minor mechanical and body components, including trim fixes, panel alignment, and small part replacements
- Pricing Model: Hourly rate at ₹800/hour or flat fee based on specific task
- Estimated Completion Time: 2-4 hours (varies by complexity)\n- Prerequisites: Initial diagnostic assessment\n
**Service 3: Plastic Welding**
- Service Code: SRV-PWELD-003
- Description: Expert plastic component repair using specialized welding techniques for bumpers, interior panels, and plastic body parts
- Pricing Model: Flat fee starting at ₹1,500 per component (complex repairs quoted separately)
- Estimated Completion Time: 1-2 business days
- Prerequisites: Component inspection to determine weldability; may require Painting service for final finish
\n**Service 4: Dent Removal**
- Service Code: SRV-DENT-004
- Description: Professional dent removal using paintless dent repair (PDR) or traditional methods to restore original body contours\n- Pricing Model: Per dent pricing starting at ₹2,000 (size and location dependent)
- Estimated Completion Time: Same day to 2 business days
- Prerequisites: Damage assessment required; Painting service may be needed for severe dents
\n**Service 5: Mechanical Work**
- Service Code: SRV-MECH-005
- Description: Comprehensive mechanical services including engine diagnostics and repairs, brake system services (pad replacement, rotor resurfacing, fluid flush), suspension repairs (shock absorbers, struts, alignment), scheduled maintenance (oil changes, filter replacements, fluid checks), transmission services, and electrical system diagnostics
- Service Scope:\n  - Engine diagnostics and repair
  - Brake services (pads, rotors, calipers, fluid)\n  - Suspension repairs and alignment
  - Scheduled maintenance and tune-ups
  - Transmission services
  - Electrical system diagnostics
- Excluded Services: Major engine rebuilds requiring specialized equipment, hybrid/electric vehicle high-voltage systems, custom performance modifications\n- Pricing Model: Service-specific pricing - Oil change from ₹1,200, Brake pad replacement from ₹3,500, Diagnostic assessment₹800, Full service packages quoted based on vehicle type and requirements
- Estimated Completion Time: 2 hours to 3 business days (varies by service complexity)
- Prerequisites: Initial diagnostic assessment for complex repairs; vehicle service history recommended
- Warranty Policy: 6-month/10,000 km warranty on parts and labor for mechanical work (whichever comes first); genuine/OEM parts carry manufacturer warranty
- Required Equipment: Diagnostic scan tools, hydraulic lifts, brake service equipment, suspension alignment system, torque wrenches, specialized hand tools
- Technician Qualifications: Certified automotive technicians with minimum 5 years experience, ASE certification or equivalent preferred, ongoing training in modern vehicle systems
- Safety & Quality Protocols: Pre-service vehicle inspection checklist, torque specifications adherence, post-service test drive, quality control sign-off by senior technician

### 3.3 Unique Selling Points Display
- Skilled and trusted technicians with proven expertise and certifications
- Honest, fair pricing with complete transparency - no hidden costs
- Timely service delivery with commitment to deadlines
- Best-in-class care for your vehicle
- Comprehensive warranty coverage on all mechanical work

### 3.4 High-Quality Photo Gallery
- Multiple professional photographs showcasing:
  - Before & After transformations: Vehicledents/paint damage before and flawless finish after repair
  - Technicians at Work: Skilled professionals using advanced tools in clean, organized workshop\n  - Mechanical Services: Engine diagnostics, brake repairs, suspension work in progress
  - Quality Assurance: Close-up shots of paint jobs under bright light highlighting smooth, glossy finish
  - Exterior angles: Front, side, rear views of serviced vehicles
  - Interior details: Dashboard, seats, and cabin restoration work
  - Engine bay: Mechanical work and maintenance services\n  - Final Results: Satisfied customers receiving perfectly restored vehicles
- Gallery with swipe/scroll functionality for easy browsing

### 3.5 Interactive Map-Based Booking System
- Dynamic, interactive map (Google Maps API or Mapbox) as the primary booking interface
- Map Features:
  - Prominently displayed map showing Accurate Car Care's precise location\n  - Clear location marker for the service center
  - Zoom and pan controls for user navigation
  - Full Address: Bus Stop, 27th Cross Rd, behind Yedur, 7th Block, Jayanagar, Bengaluru, Karnataka 560070
  - Google Maps Link: https://maps.app.goo.gl/9YwJKcVu72xLdG4T8
- Booking Workflow:
  - Prominent'Book Service' call-to-action button positioned intuitively near the map
  - Clicking the button opens a simple, user-friendly booking form
  - Form Fields:
    - Customer's Full Name
    - Contact Phone Number\n    - Desired Date for Service (calendar picker)
    - Desired Time Slot for Service (dropdown or time picker)
    - Specific Service Requested (dropdown: Oil Change, Brake Inspection, Painting, Tinkering, Plastic Welding, Dent Removal, Mechanical Work - Engine Diagnostics, Mechanical Work - Brake Service, Mechanical Work - Suspension Repair, Mechanical Work - Scheduled Maintenance, etc.)
    - Vehicle Make, Model, and Year
  - Upon form submission, user's WhatsApp application opens automatically with pre-filled message containing all booking details
- Technical Implementation:
  - WhatsApp Click-to-Chat API integration: https://wa.me/919845552372?text=[URL-Encoded-Message]
  - Form data dynamically inserted into WhatsApp message template
  - Message Format: 'Hi, I would like to book a service at Accurate Car Care. Name: [Name], Phone: [Phone], Date: [Date], Time: [Time], Service: [Service], Vehicle: [Make Model Year]'
  - Fully functional on both mobile (opens WhatsApp app) and desktop (opens web.whatsapp.com)\n- Real-time availability updates\n
### 3.6 WhatsApp Contact Integration
- Direct WhatsApp chat feature accessible throughout the website
- WhatsApp Contact: +91 98455 52372
- Fixed bottom WhatsApp contact button for instant access
- Pre-formatted Message for general inquiries: 'Hi, I need a quotation for my car.'
- WhatsApp Link: https://wa.me/919845552372?text=Hi%2C%20I%20need%20a%20quotation%20for%20my%20car
- Prominent call-to-action: 'Get Your Free Quotation on WhatsApp Now'
- Functions seamlessly on both mobile and desktop devices

### 3.7 Responsive Design
- Fully responsive layout optimized for desktop, tablet, and mobile devices
- Smooth navigation across all screen sizes
- Touch-friendly interface for mobile users
- Map and booking form adapt seamlessly to different screen sizes

## 4. Service Configuration Summary\n
| Service Code | Service Name | Pricing Model | Avg. Completion Time | Prerequisites |\n|--------------|--------------|---------------|---------------------|---------------|
| SRV-PAINT-001 | Painting | Quote-based | 3-5 business days | Assessment required; Dent Removal recommended |
| SRV-TINK-002 | Tinkering | ₹800/hour or flat fee | 2-4 hours | Diagnostic assessment |
| SRV-PWELD-003 | Plastic Welding | From ₹1,500/component | 1-2 business days | Component inspection; may need Painting |
| SRV-DENT-004 | Dent Removal | From ₹2,000/dent | Same day to 2 days | Damage assessment; may need Painting |
| SRV-MECH-005 | Mechanical Work | Service-specific (from ₹1,200) | 2 hours to 3 days | Diagnostic assessment for complex repairs |

## 5. Mechanical Work Implementation Plan

### 5.1 Service Menu Integration
- Update master service list on website homepage and services page
- Add dedicated 'Mechanical Work' section with expandable sub-services
- Integrate into booking system dropdown with specific mechanical service options
- Update internal service database and CRM system

### 5.2 Operational Setup
- Equipment Inventory: Diagnostic scan tools, hydraulic lifts, brake lathes, alignment machines, torque wrenches, specialty tools
- Parts Inventory: Common brake pads/rotors, oil filters, air filters, spark plugs, fluids (engine oil, brake fluid, coolant)\n- Technician Requirements: ASE-certified or equivalent, minimum 5 years experience, ongoing training programs
- Standard Operating Procedures: Pre-service inspection checklist, torque specification charts, post-service quality control, test drive protocols

### 5.3 Marketing Materials
- Promotional Announcement: 'New Service Alert: Complete Mechanical Work Now Available at Accurate Car Care - From Engine Diagnostics to Brake Services, We've Got You Covered!'
- Website Banner: Highlight mechanical work launch with special introductory offers
- Social Media Posts: Before/after photos of mechanical repairs, technician spotlights, service explainer videos
- Customer Q&A Document: Address common questions about mechanical services, pricing, warranty, turnaround time

### 5.4 Pricing Structure
- Oil Change: ₹1,200 -₹2,500 (based on oil type and quantity)
- Brake Pad Replacement: ₹3,500 - ₹8,000 (per axle, parts included)
- Diagnostic Assessment: ₹800 (waived if repair performed)\n- Suspension Repair: Quote-based after inspection
- Scheduled Maintenance Packages: ₹4,500 - ₹12,000 (based on vehicle type)\n\n### 5.5 Warranty Policy
- 6-month or 10,000 km warranty on all mechanical work (whichever comes first)
- Genuine/OEM parts carry manufacturer warranty
- Warranty covers parts and labor for defects or workmanship issues
- Excludes wear-and-tear items and damage from misuse

## 6. Website Design Style
- Color Scheme: Deep blue primary color (#1a3a52) conveying professionalism and trust, paired with vibrant orange accents (#ff6b35) for call-to-action buttons and highlights
- Visual Details: Smooth rounded corners (8-12px radius) on cards and buttons, subtle drop shadows for depth and hierarchy, clean1px borders separating sections, modern flat icons representing each service category including wrench icon for mechanical work
- Layout: Hero section with company name, tagline, and primary CTA; service cards in responsive grid format with mechanical work prominently featured; before/after photo gallery with lightbox view including mechanical service images; prominent interactive map section with integrated booking form; testimonials area; fixed bottom WhatsApp contact button for instant access