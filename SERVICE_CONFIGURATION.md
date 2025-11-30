# Service Configuration - Accurate Car Care

## Service Catalog Structure

This document outlines the complete service catalog for Accurate Car Care, including metadata, pricing models, and implementation details.

---

## Service Categories

### 1. Body Work & Restoration
- Painting
- Dent Removal
- Plastic Welding

### 2. Mechanical & Repair
- Tinkering (General Repairs)
- Expert Mechanical Work

---

## Detailed Service Specifications

### Service 1: Painting

**Service Identifier:** `SVC-PAINT-001`

**Customer-Facing Description:**
"Professional automotive painting services with factory-quality finish. Includes surface preparation, primer application, color matching, and clear coat protection."

**Pricing Model:**
- **Type:** Quote-based (requires assessment)
- **Base Price Range:** ₹5,000 - ₹25,000
- **Factors:** Panel size, paint type, color complexity, prep work required

**Estimated Completion Time:**
- **Minimum:** 2 days
- **Average:** 3-4 days
- **Maximum:** 7 days (for full vehicle)

**Prerequisites:**
- Vehicle inspection required
- Dent removal may be needed before painting
- Surface rust treatment if applicable

**Service Details:**
- Color matching with original paint
- Multi-layer application (primer, base, clear coat)
- Wet sanding and polishing
- Quality inspection before delivery

---

### Service 2: Tinkering (General Repairs)

**Service Identifier:** `SVC-TINK-002`

**Customer-Facing Description:**
"General automotive repair and maintenance services. Expert diagnosis and fixing of mechanical, electrical, and minor body issues."

**Pricing Model:**
- **Type:** Hourly rate + parts
- **Labor Rate:** ₹500 per hour
- **Minimum Charge:** ₹1,500 (3 hours)
- **Parts:** Actual cost + 10% handling

**Estimated Completion Time:**
- **Minimum:** 2 hours
- **Average:** 4-6 hours
- **Maximum:** 2 days (for complex issues)

**Prerequisites:**
- Initial diagnostic assessment (free)
- Customer approval for repairs exceeding ₹5,000

**Service Details:**
- Comprehensive vehicle inspection
- Problem diagnosis and troubleshooting
- Repair or replacement of faulty components
- Post-repair testing and verification

---

### Service 3: Plastic Welding

**Service Identifier:** `SVC-PLWELD-003`

**Customer-Facing Description:**
"Specialized plastic welding and repair for bumpers, interior panels, and plastic components. Cost-effective alternative to replacement."

**Pricing Model:**
- **Type:** Per repair + complexity
- **Small Repair:** ₹800 - ₹1,500 (cracks, small breaks)
- **Medium Repair:** ₹1,500 - ₹3,000 (bumper damage)
- **Large Repair:** ₹3,000 - ₹6,000 (extensive damage)

**Estimated Completion Time:**
- **Small Repair:** 2-3 hours
- **Medium Repair:** 4-6 hours
- **Large Repair:** 1-2 days

**Prerequisites:**
- Physical inspection of damaged part
- Assessment of weldability (some plastics cannot be welded)
- May require painting after welding

**Service Details:**
- Plastic type identification
- Professional welding with reinforcement
- Surface smoothing and preparation
- Optional painting to match original color

---

### Service 4: Dent Removal

**Service Identifier:** `SVC-DENT-004`

**Customer-Facing Description:**
"Expert dent removal using paintless dent repair (PDR) and traditional methods. Restores your vehicle's body to original condition."

**Pricing Model:**
- **Type:** Per dent + size
- **Small Dent:** ₹500 - ₹1,200 (< 2 inches, PDR)
- **Medium Dent:** ₹1,200 - ₹3,000 (2-6 inches)
- **Large Dent:** ₹3,000 - ₹8,000 (> 6 inches, body work)
- **Hail Damage:** Quote-based (multiple dents)

**Estimated Completion Time:**
- **Small Dent (PDR):** 1-2 hours
- **Medium Dent:** 3-5 hours
- **Large Dent:** 1-2 days
- **Multiple Dents:** 2-5 days

**Prerequisites:**
- Visual inspection to determine repair method
- Paint condition assessment
- May require painting if paint is damaged

**Service Details:**
- Paintless Dent Repair (PDR) for minor dents
- Traditional body work for major damage
- Panel beating and reshaping
- Surface preparation for painting (if needed)

---

## Service Relationships & Dependencies

### Typical Service Workflows:

#### Workflow 1: Accident Damage Repair
```
1. Initial Assessment (Tinkering)
   ↓
2. Dent Removal
   ↓
3. Plastic Welding (if needed)
   ↓
4. Painting
```

#### Workflow 2: Minor Collision
```
1. Dent Removal
   ↓
2. Painting (if paint damaged)
```

#### Workflow 3: Bumper Repair
```
1. Plastic Welding
   ↓
2. Painting
```

---

## Pricing Summary Table

| Service | Code | Pricing Model | Starting Price | Avg. Time |
|---------|------|---------------|----------------|-----------|
| Painting | SVC-PAINT-001 | Quote-based | ₹5,000 | 3-4 days |
| Tinkering | SVC-TINK-002 | Hourly + Parts | ₹1,500 | 4-6 hours |
| Plastic Welding | SVC-PLWELD-003 | Per Repair | ₹800 | 2-3 hours |
| Dent Removal | SVC-DENT-004 | Per Dent | ₹500 | 1-2 hours |

---

## Implementation in Code

### Service Object Structure

```typescript
interface Service {
  id: string;                    // Unique identifier
  code: string;                  // Service code (e.g., SVC-PAINT-001)
  title: string;                 // Display name
  description: string;           // Customer-facing description
  icon: LucideIcon;             // Icon component
  category: string;              // Service category
  pricingModel: string;          // Pricing type
  priceRange: {
    min: number;
    max: number;
    currency: string;
  };
  estimatedTime: {
    min: string;
    max: string;
    unit: string;
  };
  prerequisites: string[];       // Required conditions
  details: string[];             // Service details
}
```

### Updated Services Array

```typescript
const services = [
  {
    id: '1',
    code: 'SVC-PAINT-001',
    title: 'Painting',
    description: 'Professional automotive painting with factory-quality finish',
    icon: Paintbrush,
    category: 'Body Work & Restoration',
    pricingModel: 'Quote-based',
    priceRange: { min: 5000, max: 25000, currency: '₹' },
    estimatedTime: { min: '2', max: '7', unit: 'days' },
    prerequisites: ['Vehicle inspection required', 'May require dent removal first'],
    details: [
      'Color matching with original paint',
      'Multi-layer application',
      'Wet sanding and polishing',
      'Quality inspection'
    ]
  },
  {
    id: '2',
    code: 'SVC-TINK-002',
    title: 'Tinkering',
    description: 'General automotive repair and maintenance services',
    icon: Wrench,
    category: 'Mechanical & Repair',
    pricingModel: 'Hourly + Parts',
    priceRange: { min: 1500, max: 10000, currency: '₹' },
    estimatedTime: { min: '2', max: '48', unit: 'hours' },
    prerequisites: ['Free diagnostic assessment', 'Approval for repairs > ₹5,000'],
    details: [
      'Comprehensive vehicle inspection',
      'Problem diagnosis',
      'Component repair/replacement',
      'Post-repair testing'
    ]
  },
  {
    id: '3',
    code: 'SVC-PLWELD-003',
    title: 'Plastic Welding',
    description: 'Specialized plastic welding for bumpers and interior panels',
    icon: Zap,
    category: 'Body Work & Restoration',
    pricingModel: 'Per Repair',
    priceRange: { min: 800, max: 6000, currency: '₹' },
    estimatedTime: { min: '2', max: '48', unit: 'hours' },
    prerequisites: ['Physical inspection required', 'Weldability assessment'],
    details: [
      'Plastic type identification',
      'Professional welding with reinforcement',
      'Surface smoothing',
      'Optional color matching'
    ]
  },
  {
    id: '4',
    code: 'SVC-DENT-004',
    title: 'Dent Removal',
    description: 'Expert dent removal using PDR and traditional methods',
    icon: Hammer,
    category: 'Body Work & Restoration',
    pricingModel: 'Per Dent',
    priceRange: { min: 500, max: 8000, currency: '₹' },
    estimatedTime: { min: '1', max: '5', unit: 'hours/days' },
    prerequisites: ['Visual inspection', 'Paint condition assessment'],
    details: [
      'Paintless Dent Repair (PDR)',
      'Traditional body work',
      'Panel beating and reshaping',
      'Surface preparation'
    ]
  }
];
```

---

## Customer Communication

### Service Selection Dropdown Options

```
Choose a service:
├─ Painting (₹5,000+)
├─ Tinkering (₹1,500+)
├─ Plastic Welding (₹800+)
└─ Dent Removal (₹500+)
```

### WhatsApp Message Format

When a customer books a service, the WhatsApp message will include:

```
🚗 *SERVICE BOOKING REQUEST*

*Customer Details:*
Name: [Customer Name]
Phone: [Phone Number]

*Service Details:*
Service: [Selected Service]
Service Code: [Service Code]
Date: [Preferred Date]
Time: [Preferred Time]

*Additional Notes:*
[Customer Notes]

---
Please confirm availability and provide a quote for this service.
```

---

## Service Display Cards

### Homepage Service Showcase

Each service will be displayed as a card with:
- Service icon
- Service title
- Brief description
- Starting price indicator
- Estimated time range

Example:
```
┌─────────────────────────────┐
│         🎨                  │
│      Painting               │
│                             │
│  Professional automotive    │
│  painting with factory-     │
│  quality finish             │
│                             │
│  From ₹5,000 | 2-7 days     │
└─────────────────────────────┘
```

---

## Quality Assurance

### Service Standards

All services must meet:
- ✅ Professional workmanship
- ✅ Quality materials and equipment
- ✅ Timely completion
- ✅ Customer satisfaction guarantee
- ✅ Post-service inspection

### Documentation

For each service completion:
- Before photos
- Work-in-progress documentation
- After photos
- Quality checklist
- Customer sign-off

---

## Pricing Transparency

### Quote Process

1. **Initial Contact**: Customer books via WhatsApp
2. **Assessment**: Vehicle inspection at service center
3. **Quote**: Detailed breakdown provided
4. **Approval**: Customer approves quote
5. **Service**: Work begins after approval
6. **Completion**: Final inspection and delivery

### Price Factors

Prices vary based on:
- Vehicle make and model
- Extent of damage/work required
- Parts and materials needed
- Complexity of repair
- Time required

---

## Implementation Checklist

- ✅ Define service metadata
- ✅ Create service object structure
- ✅ Update services array in code
- ✅ Add service icons
- ✅ Update booking form dropdown
- ✅ Update WhatsApp message template
- ✅ Update service display cards
- ✅ Test service selection flow
- ✅ Verify pricing display
- ✅ Validate time estimates

---

## Summary

The service catalog has been expanded to include four specialized services:

1. **Painting** - Professional automotive painting (₹5,000+, 2-7 days)
2. **Tinkering** - General repairs and maintenance (₹1,500+, 2-48 hours)
3. **Plastic Welding** - Bumper and panel repair (₹800+, 2-48 hours)
4. **Dent Removal** - PDR and body work (₹500+, 1-5 hours/days)

Each service includes:
- Unique identifier and code
- Clear customer-facing description
- Transparent pricing model
- Realistic time estimates
- Prerequisite requirements
- Detailed service specifications

This structured approach ensures customers understand exactly what they're booking and helps set proper expectations for pricing and completion time.
