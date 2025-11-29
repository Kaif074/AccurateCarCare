# Calendar Component Visual Mockup

## Visual Design Specification

This document provides a detailed visual description of the enhanced calendar component design.

---

## 1. Overall Layout

### Booking Dialog
```
┌─────────────────────────────────────────────────────────┐
│  Book Your Service                                  [×] │
│  Select your preferred date, time, and service          │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  ┌──────────────────┐  ┌──────────────────┐           │
│  │ Full Name *      │  │ Phone Number *   │           │
│  │ [John Doe      ] │  │ [+91 98455...  ] │           │
│  └──────────────────┘  └──────────────────┘           │
│                                                         │
│  ┌─────────────────────────────────────────┐           │
│  │ Select Service *                        │           │
│  │ [Choose a service              ▼]       │           │
│  └─────────────────────────────────────────┘           │
│                                                         │
│  Select Date *                                          │
│  ┌─────────────────────────────────────────┐           │
│  │         [<]  December 2025  [>]         │           │
│  │                                         │           │
│  │  Su  Mo  Tu  We  Th  Fr  Sa            │           │
│  │   1   2   3   4   5   6   7            │           │
│  │   8   9  10  11  12  13  14            │           │
│  │  15  16 [17] 18  19  20  21            │  ← Selected
│  │  22  23  24  25  26  27  28            │           │
│  │  29  30  31                             │           │
│  └─────────────────────────────────────────┘           │
│                                                         │
│  Select Time Slot *                                     │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐  │
│  │ 09:00 AM │ │ 10:00 AM │ │ 11:00 AM │ │ 12:00 PM │  │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘  │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐  │
│  │ 02:00 PM │ │ 03:00 PM │ │ 04:00 PM │ │ 05:00 PM │  │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘  │
│                                                         │
│  ┌─────────────────────────────────────────┐           │
│  │ Additional Notes (Optional)             │           │
│  │ [                                     ] │           │
│  └─────────────────────────────────────────┘           │
│                                                         │
│  ┌─────────────────────────────────────────┐           │
│  │         Confirm Booking                 │           │
│  └─────────────────────────────────────────┘           │
└─────────────────────────────────────────────────────────┘
```

---

## 2. Calendar Component Detail

### Month View
```
┌─────────────────────────────────────────────┐
│                                             │
│    [<]      December 2025        [>]        │  ← Navigation
│                                             │
│   Su   Mo   Tu   We   Th   Fr   Sa         │  ← Day Headers
│  ────────────────────────────────────       │
│   1    2    3    4    5    6    7          │
│                                             │
│   8    9   10   11   12   13   14          │
│                                             │
│  15   16  [17]  18   19   20   21          │  ← Selected (17)
│                                             │
│  22   23   24   25   26   27   28          │
│                                             │
│  29   30   31                               │
│                                             │
└─────────────────────────────────────────────┘
```

### Date Cell States

#### Default Date
```
┌────────┐
│   15   │  ← White background
└────────┘    Transparent border
              Dark text
```

#### Hover State
```
┌────────┐
│   16   │  ← Light orange tint (accent/10%)
└────────┘    Orange border (accent/30%)
              Slightly scaled (1.05)
              Smooth transition
```

#### Selected Date
```
┌────────┐
│   17   │  ← Vibrant orange background
└────────┘    White text
              Orange border
              Subtle shadow glow
              Font weight: 600
```

#### Today's Date
```
┌────────┐
│   18   │  ← Light blue tint (primary/10%)
└────────┘    Blue border
              Font weight: 600
              Dark text
```

#### Disabled Date (Sunday)
```
┌────────┐
│  ̶2̶1̶   │  ← Very light gray text
└────────┘    Line-through decoration
              Not clickable
```

---

## 3. Time Slot Component Detail

### Time Slot Grid (Mobile)
```
┌──────────────────┐  ┌──────────────────┐
│    09:00 AM      │  │    10:00 AM      │
└──────────────────┘  └──────────────────┘

┌──────────────────┐  ┌──────────────────┐
│    11:00 AM      │  │    12:00 PM      │
└──────────────────┘  └──────────────────┘

┌──────────────────┐  ┌──────────────────┐
│    02:00 PM      │  │    03:00 PM      │
└──────────────────┘  └──────────────────┘

┌──────────────────┐  ┌──────────────────┐
│    04:00 PM      │  │    05:00 PM      │
└──────────────────┘  └──────────────────┘
```

### Time Slot States

#### Default (Unselected)
```
┌──────────────────┐
│    09:00 AM      │  ← White background
└──────────────────┘    Border outline
                        48px height
                        Medium font weight
```

#### Selected
```
┌──────────────────┐
│    10:00 AM      │  ← Deep blue background
└──────────────────┘    White text
                        48px height
                        Medium font weight
                        Solid appearance
```

---

## 4. Service Card Component

### Before Optimization
```
┌─────────────────────────────────────┐
│           ╭───────╮                 │
│           │  🔧   │                 │
│           ╰───────╯                 │
│                                     │
│        Expert Repairs               │
│                                     │
│  Professional diagnosis and repair  │
│  services for all vehicle issues    │
│                                     │
│ ─────────────────────────────────── │
│  Duration        │  Price           │
│  2-4 hours       │  From ₹2,000     │  ← REMOVED
└─────────────────────────────────────┘
```

### After Optimization
```
┌─────────────────────────────────────┐
│           ╭───────╮                 │
│           │  🔧   │  ← Larger icon  │
│           ╰───────╯     (64px)      │
│                                     │
│        Expert Repairs               │  ← Larger title
│                                     │     (text-xl)
│  Professional diagnosis and repair  │
│  services for all vehicle issues    │
│                                     │
│                                     │  ← Clean, spacious
└─────────────────────────────────────┘
```

---

## 5. Color Palette Visualization

### Primary Colors

#### Accent Orange (Action Color)
```
████████  hsl(16 100% 60%)  #FF6B35
  ↓
Used for:
- Selected calendar dates
- Active time slots
- Primary CTA buttons
- Icon backgrounds (10% opacity)
```

#### Primary Blue (Brand Color)
```
████████  hsl(205 60% 20%)  #1A3A52
  ↓
Used for:
- Today's date indicator
- Navigation elements
- Header backgrounds
- Primary text
```

### Neutral Colors

#### Background & Surfaces
```
████████  hsl(0 0% 100%)     #FFFFFF  (Background)
████████  hsl(205 20% 96%)   #F5F7F9  (Muted)
████████  hsl(205 20% 90%)   #E1E6EB  (Border)
████████  hsl(205 15% 45%)   #6B7A8A  (Muted Text)
████████  hsl(205 60% 15%)   #0F2A3D  (Foreground)
```

---

## 6. Spacing & Sizing System

### Calendar Measurements
```
Cell Size:        44px × 44px  (Optimal touch target)
Cell Spacing:     4px           (Between dates)
Border Radius:    8px           (Rounded corners)
Container Padding: 16px         (Breathing room)
Icon Size:        32px × 32px   (In date cells)
```

### Time Slot Measurements
```
Button Height:    48px          (Touch-friendly)
Button Width:     100%          (Responsive)
Gap:              12px          (Between buttons)
Border Radius:    8px           (Consistent rounding)
Font Size:        14px          (Readable)
```

### Service Card Measurements
```
Icon Container:   64px × 64px   (Increased from 56px)
Icon Size:        32px × 32px   (Increased from 28px)
Title Size:       20px          (Increased from 18px)
Description:      14px          (Maintained)
Padding:          24px          (Generous spacing)
```

---

## 7. Interactive State Transitions

### Hover Animation Sequence
```
State 1: Default
┌────────┐
│   15   │  Background: transparent
└────────┘  Border: transparent
            Scale: 1.0

       ↓  (0.2s transition)

State 2: Hover
┌────────┐
│   15   │  Background: accent/10%
└────────┘  Border: accent/30%
            Scale: 1.05
            Cursor: pointer
```

### Selection Animation
```
State 1: Unselected
┌────────┐
│   17   │  Background: transparent
└────────┘  Border: transparent

       ↓  (Click event)

State 2: Selected
┌────────┐
│   17   │  Background: accent (orange)
└────────┘  Text: white
            Border: accent
            Shadow: 0 2px 8px accent/30%
            Font-weight: 600
```

---

## 8. Typography Scale

### Calendar Typography
```
Month/Year:     16px  Semi-bold  (600)
Day Headers:    14px  Semi-bold  (600)
Date Numbers:   14px  Medium     (500)
Selected Date:  14px  Semi-bold  (600)
```

### Form Typography
```
Section Labels: 14px  Medium     (500)
Input Text:     14px  Regular    (400)
Button Text:    14px  Medium     (500)
Helper Text:    12px  Regular    (400)
```

### Service Card Typography
```
Title:          20px  Semi-bold  (600)
Description:    14px  Regular    (400)
```

---

## 9. Shadow System

### Elevation Levels

#### Level 1: Subtle (Cards)
```
box-shadow: 0 10px 30px -10px rgba(26, 58, 82, 0.2);
↓
Soft, professional depth
Non-intrusive
Suitable for containers
```

#### Level 2: Glow (Selected)
```
box-shadow: 0 2px 8px rgba(255, 107, 53, 0.3);
↓
Highlights selection
Draws attention
Maintains hierarchy
```

#### Level 3: Hover (Interactive)
```
box-shadow: 0 0 40px rgba(255, 107, 53, 0.15);
↓
Feedback on interaction
Smooth transition
Engaging experience
```

---

## 10. Responsive Breakpoints

### Mobile View (< 1280px)
```
┌─────────────────────────┐
│  [Calendar - Full Width]│
│                         │
│  Time Slots:            │
│  ┌──────┐  ┌──────┐    │  ← 2 columns
│  │09:00 │  │10:00 │    │
│  └──────┘  └──────┘    │
│  ┌──────┐  ┌──────┐    │
│  │11:00 │  │12:00 │    │
│  └──────┘  └──────┘    │
└─────────────────────────┘
```

### Desktop View (≥ 1280px)
```
┌───────────────────────────────────────┐
│    [Calendar - Centered, Max-width]   │
│                                       │
│  Time Slots:                          │
│  ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐    │  ← 4 columns
│  │09:00│ │10:00│ │11:00│ │12:00│    │
│  └─────┘ └─────┘ └─────┘ └─────┘    │
│  ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐    │
│  │02:00│ │03:00│ │04:00│ │05:00│    │
│  └─────┘ └─────┘ └─────┘ └─────┘    │
└───────────────────────────────────────┘
```

---

## 11. Accessibility Indicators

### Focus State
```
┌────────┐
│   15   │  ← 2px solid outline
└────────┘    Accent color
              High contrast
              Keyboard visible
```

### Disabled State
```
┌────────┐
│  ̶2̶1̶   │  ← Strikethrough text
└────────┘    Low opacity (40%)
              Cursor: not-allowed
              Clear visual distinction
```

---

## Summary

The enhanced calendar component features:

✅ **Clean Layout**: Removed pricing/duration clutter
✅ **Clear Hierarchy**: Distinct visual levels
✅ **Generous Spacing**: 44px cells, 12px gaps
✅ **Harmonious Colors**: Orange accent + Blue primary
✅ **Smooth Interactions**: 0.2s transitions, scale effects
✅ **Professional Shadows**: Subtle depth and glow
✅ **Touch-Friendly**: 48px minimum targets
✅ **Accessible**: High contrast, clear focus states
✅ **Responsive**: Optimized for mobile and desktop

The result is a modern, intuitive calendar that provides an excellent user experience while maintaining professional aesthetics.
