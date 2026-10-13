# Hasaan Real Estate - Premium Web Platform

A complete, modern, premium real estate website inspired by [hasaanrealestate.vercel.app](https://hasaanrealestate.vercel.app/). Built with pure HTML5, CSS3, Vanilla JavaScript, Bootstrap 5, and GSAP + ScrollTrigger animations.

## 🌟 Overview & Highlights

- **Aesthetic Inspiration**: Closely aligns with the design language, color palette, spacing, and typographic hierarchy of the reference website.
- **Brand Palette**:
  - **Primary**: Royal Blue (`#1d4ed8`, hover `#1e40af`, subtle tint `#eff6ff`)
  - **Secondary / Contrast**: Deep Navy (`#0f172a`, `#050b14`)
  - **Neutral**: White (`#ffffff`), Soft Slate (`#f8fafc`, `#e2e8f0`)
  - **Action Accents**: Emerald Green WhatsApp CTA (`#25D366`), Amber Gold Star Ratings (`#f59e0b`)
- **Typography Hierarchy**:
  - **Display / Editorial Headings**: `Fraunces` (Luxury serif display typeface)
  - **Body / Interface**: `Inter` (Modern clean sans-serif)

---

## 📁 Project Structure

```
Real_Estate/
│
├── index.html               # Homepage (Hero, Floating Search Box, Featured Properties, Services, About, Why Choose Us, CTA, Footer)
├── properties.html          # Dynamic property catalog with multi-filter, price range, bedrooms, bathrooms, sorting
├── property-details.html    # Dynamic single property template (gallery switcher, specs, amenities, agent card, inquiry form)
├── services.html            # In-depth advisory services with alternating layouts and benefits checklists
├── about.html               # Firm background, mission, vision, 4-step approach, leadership, and animated stats
├── contact.html             # Direct contact channels, interactive contact form with validation, and Google Map
├── consultation.html        # Premium strategy booking experience with appointment scheduler and WhatsApp confirmation
│
├── css/
│   └── style.css            # Complete custom CSS design system, balanced navbar grid, cinematic hero, cards & responsive queries
│
├── js/
│   ├── main.js              # Navbar scroll/shrink, GSAP entrance timeline, ScrollTrigger reveals, animated counters, hero search redirect
│   ├── properties.js        # Comprehensive dataset (10+ properties), dynamic filter engine, URL query parser, details loader
│   └── consultation.js      # Appointment datepicker constraints, client-side validation, confirmation summary
│
├── images/
│   ├── hero/
│   ├── properties/
│   ├── services/
│   ├── about/
│   └── team/
│
└── README.md
```

---

## 🚀 Key Functional Features

1. **Balanced 3-Column Sticky Navbar**:
   - `[ LOGO ]        Home  Properties  Services  About  Contact        [ Book a Consultation ]`
   - Mathematically centered navigation links.
   - Smooth GSAP scroll height reduction and subtle shadow transition.
   - Clean mobile drawer with slide-down animation.
2. **Cinematic Hero Section**:
   - Background image scaling from 1.08 → 1.0 on page load.
   - ScrollTrigger subtle parallax effect.
   - Dominant display heading with line-by-line staggered reveal.
   - 5.0 Google Rating badge and quick Call / WhatsApp actions.
3. **Floating Search / Filter Box**:
   - Tab switching (`Buy`, `Rent`, `Sell`).
   - Single horizontal row on desktop, intelligent wrap on tablet, stacked on mobile.
   - Submits query parameters cleanly to `properties.html?purpose=Buy&type=House&location=dha...`.
4. **Dynamic Client-Side Filter Engine**:
   - Filters in real-time by purpose, property type, location query, price bounds, bedrooms, and bathrooms.
   - Dynamic sorting: *Newest First*, *Price: Low to High*, *Price: High to Low*.
   - Live result count updating (`Showing X properties`).
   - Handles zero-result fallback with one-click filter reset.
5. **Dynamic Property Details Page**:
   - Reads `?id=...` parameter and populates title, price, badges, photo gallery, specs, amenities, and agent info.
   - Interactive photo thumbnail switcher with hover and active states.
   - Direct pre-filled inquiry form and one-click WhatsApp message generator.
6. **GSAP + ScrollTrigger Animations**:
   - Hero entrance timeline (heading, subtext, action buttons, Google reviews, search box).
   - Animated number counters for company statistics.
   - Card reveals and subtle hover lifts across all pages.
7. **Responsive Design**:
   - Tested across Desktop (1920px, 1440px, 1366px, 1200px), Laptop (1024px), Tablet (768px), and Mobile (576px, 375px, 320px).
   - Zero horizontal overflow and clean fluid typography.

---

## 🛠️ Technology Stack

- **HTML5** (Semantic structure)
- **CSS3** (Custom design tokens, Grid, Flexbox, Media Queries)
- **Vanilla JavaScript (ES6+)** (No frameworks)
- **Bootstrap 5.3.3** (Responsive layout grid and form controls)
- **Bootstrap Icons 1.11.3** (Icons)
- **GSAP 3.12.5 & ScrollTrigger 3.12.5** (Fast, subtle, professional animations)

---

## 💻 How to Run Locally

You can open any HTML file directly in any modern web browser or serve via any static HTTP server:

```bash
# Using Node (npx)
npx serve .

# Using Python
python -m http.server 8000
```
Then visit `http://localhost:8000/index.html` in your browser.
