/**
 * HASAN & CO. REAL ESTATE - PROPERTY DATA & FILTERING ENGINE
 * Pure Vanilla JavaScript implementation
 */

const propertiesData = [
  {
    id: "dha-7-modern-villa",
    title: "500 Sq. Yd. Luxury Modern Villa",
    type: "House",
    purpose: "Buy",
    location: "DHA Phase 7, Karachi",
    locationKey: "dha",
    price: 225000000,
    priceLabel: "Rs 22.5 Crore",
    bedrooms: 5,
    bathrooms: 6,
    area: 500,
    areaUnit: "Sq. Yd.",
    parking: "3 Cars",
    dateAdded: "2026-09-15",
    featured: true,
    description: "A breathtaking contemporary villa built for refined family living, situated on a quiet wide corner plot in DHA Phase 7. Features double-height living spaces with floor-to-ceiling glass, Italian porcelain tiling, a landscaped courtyard lawn, designer kitchen, basement entertainment hall, and a separate servant wing.",
    features: [
      "Corner Plot with Dual Access",
      "Double-Height Ceiling Lounge",
      "Landscaped Lawn & Courtyard",
      "Dedicated Servant Quarters",
      "Basement Home Theater / Gym",
      "Solar Ready 15KW Setup",
      "Imported German Sanitary Ware",
      "24/7 CCTV & Security System"
    ],
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=1200&q=80"
    ]
  },
  {
    id: "clifton-sea-facing-apartment",
    title: "3 Bed Sea-Facing Executive Apartment",
    type: "Apartment",
    purpose: "Buy",
    location: "Clifton Block 4, Karachi",
    locationKey: "clifton",
    price: 49000000,
    priceLabel: "Rs 4.9 Crore",
    bedrooms: 3,
    bathrooms: 3,
    area: 2500,
    areaUnit: "Sq. Ft.",
    parking: "2 Covered Cars",
    dateAdded: "2026-09-20",
    featured: true,
    description: "Panoramic unobstructed sea views from every room in this prestigious Clifton high-rise. Offers a sunlit open-plan layout, custom hardwood cabinetry, expansive balcony overlooking the Arabian Sea, 24/7 high-tech security, dedicated standby generator, and high-speed elevators.",
    features: [
      "Unobstructed Arabian Sea Views",
      "24/7 Monitored Building Security",
      "100% Standby Power Generator",
      "Reserved Covered Parking",
      "High-Speed Passenger & Cargo Elevators",
      "Private Balcony Terrace",
      "Built-in Storage & Closets"
    ],
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80",
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80"
    ]
  },
  {
    id: "dha-6-commercial-shop",
    title: "Ground Floor Main Boulevard Showroom",
    type: "Commercial",
    purpose: "Rent",
    location: "DHA Phase 6, Karachi",
    locationKey: "dha",
    price: 350000,
    priceLabel: "Rs 3.5 Lac / mo",
    bedrooms: null,
    bathrooms: 1,
    area: 650,
    areaUnit: "Sq. Ft.",
    parking: "Front Customer Parking",
    dateAdded: "2026-09-28",
    featured: true,
    description: "High-visibility prime ground floor commercial showroom located along the bustling main commercial boulevard of DHA Phase 6. Perfect for boutique retail brands, corporate financial services, medical aesthetics clinic, or flagship customer service centers.",
    features: [
      "Main Boulevard Commercial Frontage",
      "Double Toughened Glass Front",
      "Attached Private Washroom & Storage",
      "Dedicated High-Footfall Zone",
      "Commercial Electric Connection",
      "Ample Customer Parking"
    ],
    images: [
      "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1200&q=80",
      "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=1200&q=80",
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80"
    ]
  },
  {
    id: "dha-8-residential-plot",
    title: "300 Sq. Yd. Prime Residential Plot",
    type: "Plot",
    purpose: "Buy",
    location: "DHA Phase 8, Karachi",
    locationKey: "dha",
    price: 67500000,
    priceLabel: "Rs 6.75 Crore",
    bedrooms: null,
    bathrooms: null,
    area: 300,
    areaUnit: "Sq. Yd.",
    parking: null,
    dateAdded: "2026-08-30",
    featured: true,
    description: "Clear-title, level residential plot situated on an open 40-foot wide road in DHA Phase 8 Zone B. Immediate construction permitted with water, electricity, and gas utilities directly accessible at the boundary. Perfect investment with tremendous capital appreciation potential.",
    features: [
      "Clean Title & DHA Allotment Letter",
      "40-Foot Wide Tree-Lined Road",
      "Direct Utilities at Boundary",
      "West Open / Excellent Ventilation",
      "Walking Distance to Parks & Mosque",
      "Gated & Monitored Neighborhood"
    ],
    images: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=80",
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80"
    ]
  },
  {
    id: "dha-6-bungalow-rent",
    title: "400 Sq. Yd. Elegant Family Bungalow",
    type: "House",
    purpose: "Rent",
    location: "DHA Phase 6, Karachi",
    locationKey: "dha",
    price: 950000,
    priceLabel: "Rs 9.5 Lac / mo",
    bedrooms: 4,
    bathrooms: 5,
    area: 400,
    areaUnit: "Sq. Yd.",
    parking: "2 Covered Cars",
    dateAdded: "2026-09-18",
    featured: true,
    description: "An immaculate single-story family residence with a mature landscaped garden, available on long-term corporate or expatriate lease. Located in a tranquil, prestigious sector of DHA Phase 6 with round-the-clock patrol security and seamless access to prime commercial centers.",
    features: [
      "Single-Story Practical Layout",
      "Mature Private Front & Rear Garden",
      "Separate Servant Quarter with Bath",
      "Solid Teak Wood Doors & Cabinetry",
      "Generator Connection Ready",
      "Secure Gated Residential Sector"
    ],
    images: [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80"
    ]
  },
  {
    id: "clifton-furnished-penthouse",
    title: "Ultra-Luxury Furnished Sky Penthouse",
    type: "Apartment",
    purpose: "Buy",
    location: "Clifton Block 2, Karachi",
    locationKey: "clifton",
    price: 82000000,
    priceLabel: "Rs 8.2 Crore",
    bedrooms: 4,
    bathrooms: 5,
    area: 4000,
    areaUnit: "Sq. Ft.",
    parking: "3 Reserved Bays",
    dateAdded: "2026-09-25",
    featured: true,
    description: "Occupying the entire top level, this designer duplex penthouse boasts an expansive private sky terrace, infinity jacuzzi, bespoke designer furnishings, and sweeping 270-degree vistas across the city and coastline. Equipped with automated smart home systems.",
    features: [
      "Private Rooftop Sky Terrace",
      "Fully Furnished with Imported Pieces",
      "Complete Smart-Home Automation",
      "Panoramic Coastal & Skyline Views",
      "Private Keycard Elevator Access",
      "3 Dedicated Basement Car Bays",
      "State-of-the-Art Chef Kitchen"
    ],
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=1200&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80"
    ]
  },
  {
    id: "bahria-town-corner-house",
    title: "250 Sq. Yd. Designer Corner House",
    type: "House",
    purpose: "Buy",
    location: "Bahria Town, Karachi",
    locationKey: "bahria",
    price: 42000000,
    priceLabel: "Rs 4.2 Crore",
    bedrooms: 4,
    bathrooms: 4,
    area: 250,
    areaUnit: "Sq. Yd.",
    parking: "2 Cars",
    dateAdded: "2026-09-02",
    featured: false,
    description: "Brand newly constructed corner home located in an exclusive gated precinct in Bahria Town Karachi. Thoughtfully engineered architecture providing abundant natural illumination, high ceilings, stylish false ceilings with LED cove lighting, and immediate proximity to community parks and schools.",
    features: [
      "Corner Plot facing Community Green",
      "100% Brand New Unoccupied Condition",
      "Gated Precinct with 24/7 Security",
      "Underground Electrification",
      "Close to Grand Mosque & Theme Park",
      "Modern Open Kitchen Layout"
    ],
    images: [
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1200&q=80",
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=1200&q=80",
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=1200&q=80",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&q=80"
    ]
  },
  {
    id: "pechs-furnished-office",
    title: "Fitted Executive Corporate Office",
    type: "Office",
    purpose: "Rent",
    location: "PECHS Block 6, Karachi",
    locationKey: "pechs",
    price: 220000,
    priceLabel: "Rs 2.2 Lac / mo",
    bedrooms: null,
    bathrooms: 2,
    area: 1200,
    areaUnit: "Sq. Ft.",
    parking: "4 Reserved Cars",
    dateAdded: "2026-08-15",
    featured: false,
    description: "Turnkey executive office space positioned on a prominent commercial artery in PECHS. Ready for immediate business occupancy with glass director cabins, conference room, 16 workstation pods, dedicated pantry, and dedicated server room with high-speed fiber connection.",
    features: [
      "Fully Furnished & Ready to Occupy",
      "Executive Boardroom with Projector",
      "4 Reserved Parking Spots",
      "Dual Dedicated Fiber Internet Lines",
      "Commercial Generator Backup",
      "Access Control & Reception Lobby"
    ],
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1200&q=80",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200&q=80",
      "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1200&q=80"
    ]
  },
  {
    id: "dha-5-luxury-residence",
    title: "1000 Sq. Yd. Architectural Masterpiece",
    type: "House",
    purpose: "Buy",
    location: "DHA Phase 5, Karachi",
    locationKey: "dha",
    price: 360000000,
    priceLabel: "Rs 36.0 Crore",
    bedrooms: 6,
    bathrooms: 7,
    area: 1000,
    areaUnit: "Sq. Yd.",
    parking: "5 Covered Cars",
    dateAdded: "2026-09-29",
    featured: false,
    description: "An extraordinary trophy mansion set on a prime 1000 square yard estate in DHA Phase 5. Built to world-class standards featuring temperature-controlled private swimming pool, private elevator, wine/juice cellar, Finnish sauna, double servant quarters, and imported Italian marble flooring throughout.",
    features: [
      "Private Heated Swimming Pool & Deck",
      "Otis 4-Person Indoor Elevator",
      "Full Smart Home Automation",
      "Imported Italian Botticino Marble",
      "Dual Heavy Generator Integration",
      "Guard Room & Double Servant Quarters",
      "Landscaped Japanese Zen Garden"
    ],
    images: [
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80"
    ]
  },
  {
    id: "emaar-crescent-seaview",
    title: "2 Bed Luxury Waterfront Residence",
    type: "Apartment",
    purpose: "Rent",
    location: "Emaar Crescent Bay, DHA Phase 8",
    locationKey: "dha",
    price: 450000,
    priceLabel: "Rs 4.5 Lac / mo",
    bedrooms: 2,
    bathrooms: 2,
    area: 1650,
    areaUnit: "Sq. Ft.",
    parking: "1 Reserved Bay",
    dateAdded: "2026-09-22",
    featured: false,
    description: "Experience true resort-style beachfront living in Karachi's premier master-planned waterfront community. Direct sea-facing balcony, infinity swimming pool access, world-class gymnasium, seaside promenade, 3-tier security, and concierge services.",
    features: [
      "Direct Beachfront & Ocean View",
      "Community Infinity Pool & Club",
      "Fully Equipped Fitness Gym",
      "5-Star Concierge & Valet Service",
      "Crescent Bay Private Promenade",
      "24/7 Redundant Power Backup"
    ],
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80"
    ]
  }
];

// Curated video tours shown in the details page gallery
const propertyVideoTours = {
  "dha-7-modern-villa": "https://videos.pexels.com/video-files/7578024/7578024-hd_1920_1080_30fps.mp4",
  "clifton-sea-facing-apartment": "https://videos.pexels.com/video-files/7578011/7578011-hd_1920_1080_30fps.mp4",
  "dha-6-commercial-shop": "https://videos.pexels.com/video-files/7578014/7578014-hd_1920_1080_30fps.mp4",
  "dha-8-residential-plot": "https://videos.pexels.com/video-files/7577726/7577726-hd_1920_1080_30fps.mp4",
  "dha-6-bungalow-rent": "https://videos.pexels.com/video-files/7577934/7577934-hd_1920_1080_30fps.mp4",
  "clifton-furnished-penthouse": "https://videos.pexels.com/video-files/7578113/7578113-hd_1920_1080_30fps.mp4",
  "bahria-town-corner-house": "https://videos.pexels.com/video-files/7577936/7577936-hd_1920_1080_30fps.mp4",
  "pechs-furnished-office": "https://videos.pexels.com/video-files/7578012/7578012-hd_1920_1080_30fps.mp4",
  "dha-5-luxury-residence": "https://videos.pexels.com/video-files/7687709/7687709-hd_1920_1080_30fps.mp4",
  "emaar-crescent-seaview": "https://videos.pexels.com/video-files/7578114/7578114-hd_1920_1080_30fps.mp4"
};

propertiesData.forEach(p => { p.video = propertyVideoTours[p.id] || ""; });

// Helper to get property by id
function getPropertyById(id) {
  return propertiesData.find(item => item.id === id) || propertiesData[0];
}

// Generate Property Card HTML
function createPropertyCardHTML(property) {
  const isBuy = property.purpose.toLowerCase() === 'buy';
  const badgeClass = isBuy ? 'badge-buy' : 'badge-rent';
  const badgeLabel = isBuy ? 'For Sale' : 'For Rent';

  let specsHTML = '';
  if (property.bedrooms) {
    specsHTML += `
      <div class="feature-item">
        <i class="bi bi-door-open"></i>
        <span>${property.bedrooms} Beds</span>
      </div>
    `;
  }
  if (property.bathrooms) {
    specsHTML += `
      <div class="feature-item">
        <i class="bi bi-droplet"></i>
        <span>${property.bathrooms} Baths</span>
      </div>
    `;
  }
  if (property.area) {
    specsHTML += `
      <div class="feature-item">
        <i class="bi bi-aspect-ratio"></i>
        <span>${property.area} ${property.areaUnit}</span>
      </div>
    `;
  }

  return `
    <div class="col-lg-4 col-md-6 mb-4 property-grid-item" data-id="${property.id}">
      <article class="property-card">
        <a class="property-img-wrap" href="property-details.html?id=${property.id}" aria-label="View details for ${property.title}">
          <img src="${property.images[0]}" alt="${property.title}" loading="lazy" />
          <div class="badge-tag-wrap">
            <span class="prop-badge ${badgeClass}">${badgeLabel}</span>
            ${property.featured ? '<span class="prop-badge badge-featured">Featured</span>' : ''}
          </div>
          <div class="property-price-floating">
            ${property.priceLabel}
          </div>
        </a>
        <div class="property-body">
          <div class="property-type-label">${property.type}</div>
          <h3 class="property-title">
            <a href="property-details.html?id=${property.id}">${property.title}</a>
          </h3>
          <div class="property-location">
            <i class="bi bi-geo-alt text-primary-custom"></i>
            <span>${property.location}</span>
          </div>
          <div class="property-features-list">
            ${specsHTML}
          </div>
          <div class="property-footer">
            <div class="price-main">${property.priceLabel}</div>
            <a href="property-details.html?id=${property.id}" class="btn-outline-custom py-2 px-3 text-sm">
              View Details <i class="bi bi-arrow-right ms-1"></i>
            </a>
          </div>
        </div>
      </article>
    </div>
  `;
}

// Render Featured Properties on Homepage
function renderFeaturedProperties() {
  const container = document.getElementById('featured-properties-container');
  if (!container) return;

  const featured = propertiesData.filter(p => p.featured).slice(0, 6);
  container.innerHTML = featured.map(p => createPropertyCardHTML(p)).join('');

  // Reveals are handled by the global IntersectionObserver system in main.js
  if (window.revealScan) window.revealScan();
}

// Properties Listing Page Filter & Sorting Engine
function initPropertiesPage() {
  const gridContainer = document.getElementById('all-properties-grid');
  if (!gridContainer) return;

  const countBadge = document.getElementById('properties-count-badge');
  const sortSelect = document.getElementById('properties-sort-select');
  const filterForm = document.getElementById('properties-filter-form');
  const purposeTabs = document.querySelectorAll('.purpose-filter-tab');
  const resetBtn = document.getElementById('reset-filters-btn');

  // Read URL query params
  const urlParams = new URLSearchParams(window.location.search);
  let activePurpose = urlParams.get('purpose') || 'All';
  let activeType = urlParams.get('type') || 'All';
  let activeLocation = urlParams.get('location') || '';
  let activeMinPrice = urlParams.get('minPrice') || '';
  let activeMaxPrice = urlParams.get('maxPrice') || '';
  let activeBeds = urlParams.get('bedrooms') || 'All';
  let activeBaths = urlParams.get('bathrooms') || 'All';
  let activeSort = 'newest';

  // Populate inputs from query params
  if (filterForm) {
    if (filterForm.type) filterForm.type.value = activeType;
    if (filterForm.location) filterForm.location.value = activeLocation;
    if (filterForm.minPrice) filterForm.minPrice.value = activeMinPrice;
    if (filterForm.maxPrice) filterForm.maxPrice.value = activeMaxPrice;
    if (filterForm.bedrooms) filterForm.bedrooms.value = activeBeds;
    if (filterForm.bathrooms) filterForm.bathrooms.value = activeBaths;
  }

  // Set active purpose tab UI
  purposeTabs.forEach(tab => {
    if (tab.getAttribute('data-purpose').toLowerCase() === activePurpose.toLowerCase()) {
      tab.classList.add('active');
    } else {
      tab.classList.remove('active');
    }
    tab.addEventListener('click', (e) => {
      e.preventDefault();
      purposeTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activePurpose = tab.getAttribute('data-purpose');
      applyFilters();
    });
  });

  // Main filter execution
  function applyFilters() {
    let filtered = [...propertiesData];

    // Filter by purpose
    if (activePurpose && activePurpose !== 'All') {
      filtered = filtered.filter(p => p.purpose.toLowerCase() === activePurpose.toLowerCase());
    }

    // Filter by type
    if (activeType && activeType !== 'All' && activeType !== 'All Types') {
      filtered = filtered.filter(p => p.type.toLowerCase() === activeType.toLowerCase());
    }

    // Filter by location
    if (activeLocation && activeLocation.trim() !== '') {
      const q = activeLocation.toLowerCase().trim();
      filtered = filtered.filter(p => 
        p.location.toLowerCase().includes(q) || 
        p.locationKey.toLowerCase().includes(q)
      );
    }

    // Filter by min price
    if (activeMinPrice && !isNaN(Number(activeMinPrice))) {
      filtered = filtered.filter(p => p.price >= Number(activeMinPrice));
    }

    // Filter by max price
    if (activeMaxPrice && !isNaN(Number(activeMaxPrice))) {
      filtered = filtered.filter(p => p.price <= Number(activeMaxPrice));
    }

    // Filter by bedrooms
    if (activeBeds && activeBeds !== 'All') {
      const minB = parseInt(activeBeds, 10);
      filtered = filtered.filter(p => p.bedrooms !== null && p.bedrooms >= minB);
    }

    // Filter by bathrooms
    if (activeBaths && activeBaths !== 'All') {
      const minBa = parseInt(activeBaths, 10);
      filtered = filtered.filter(p => p.bathrooms !== null && p.bathrooms >= minBa);
    }

    // Apply Sorting
    if (activeSort === 'price-low') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (activeSort === 'price-high') {
      filtered.sort((a, b) => b.price - a.price);
    } else {
      // Newest default
      filtered.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
    }

    // Update count label
    if (countBadge) {
      countBadge.textContent = `Showing ${filtered.length} properties`;
    }

    // Render results
    if (filtered.length === 0) {
      gridContainer.innerHTML = `
        <div class="col-12 py-5 text-center">
          <div class="p-5 bg-white rounded-4 border border-custom shadow-sm mx-auto" style="max-width: 580px;">
            <div class="mb-3 text-primary-custom" style="font-size: 3rem;">
              <i class="bi bi-search"></i>
            </div>
            <h3 class="font-display h4 mb-2">No Properties Found</h3>
            <p class="text-secondary-custom mb-4">No listings matched your selected criteria. Try adjusting your price range or location filters.</p>
            <button id="reset-inner-btn" class="btn-primary-custom">Reset All Filters</button>
          </div>
        </div>
      `;
      const innerReset = document.getElementById('reset-inner-btn');
      if (innerReset) {
        innerReset.addEventListener('click', resetAll);
      }
    } else {
      gridContainer.innerHTML = filtered.map(p => createPropertyCardHTML(p)).join('');

      // Re-scan dynamically rendered cards for reveal animations.
      if (window.revealScan) {
        window.revealScan();
      } else {
        gridContainer.querySelectorAll('.property-grid-item').forEach(c => c.classList.add('revealed'));
      }
    }
  }

  // Handle form submission / live change
  if (filterForm) {
    filterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      readFormValues();
      applyFilters();
    });

    filterForm.addEventListener('change', () => {
      readFormValues();
      applyFilters();
    });

    filterForm.addEventListener('input', (e) => {
      if (e.target.name === 'location' || e.target.name === 'minPrice' || e.target.name === 'maxPrice') {
        readFormValues();
        applyFilters();
      }
    });
  }

  function readFormValues() {
    if (!filterForm) return;
    activeType = filterForm.type ? filterForm.type.value : 'All';
    activeLocation = filterForm.location ? filterForm.location.value : '';
    activeMinPrice = filterForm.minPrice ? filterForm.minPrice.value : '';
    activeMaxPrice = filterForm.maxPrice ? filterForm.maxPrice.value : '';
    activeBeds = filterForm.bedrooms ? filterForm.bedrooms.value : 'All';
    activeBaths = filterForm.bathrooms ? filterForm.bathrooms.value : 'All';
  }

  // Handle sort select change
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      activeSort = e.target.value;
      applyFilters();
    });
  }

  // Reset button handler
  function resetAll() {
    if (filterForm) filterForm.reset();
    activePurpose = 'All';
    activeType = 'All';
    activeLocation = '';
    activeMinPrice = '';
    activeMaxPrice = '';
    activeBeds = 'All';
    activeBaths = 'All';
    activeSort = 'newest';
    if (sortSelect) sortSelect.value = 'newest';
    purposeTabs.forEach(t => {
      if (t.getAttribute('data-purpose') === 'All') t.classList.add('active');
      else t.classList.remove('active');
    });
    // clear query string from url smoothly
    window.history.replaceState({}, document.title, window.location.pathname);
    applyFilters();
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', resetAll);
  }

  // Initial trigger
  applyFilters();
}

// Property Details Page Renderer
function initPropertyDetailsPage() {
  const detailsContainer = document.getElementById('property-details-container');
  if (!detailsContainer) return;

  const params = new URLSearchParams(window.location.search);
  const propertyId = params.get('id') || 'dha-7-modern-villa';
  const property = getPropertyById(propertyId);

  // Set document title
  document.title = `${property.title} | Hasaan Real Estate`;

  // Breadcrumb Title
  const breadcrumbEl = document.getElementById('property-breadcrumb-title');
  if (breadcrumbEl) breadcrumbEl.textContent = property.title;

  // Header Elements
  const titleEl = document.getElementById('details-title');
  if (titleEl) titleEl.textContent = property.title;

  const locationEl = document.getElementById('details-location');
  if (locationEl) locationEl.innerHTML = `<i class="bi bi-geo-alt text-primary-custom me-2"></i>${property.location}`;

  const priceEl = document.getElementById('details-price');
  if (priceEl) priceEl.textContent = property.priceLabel;

  const purposeBadgeEl = document.getElementById('details-purpose-badge');
  if (purposeBadgeEl) {
    purposeBadgeEl.textContent = property.purpose === 'Buy' ? 'For Sale' : 'For Rent';
    purposeBadgeEl.className = `prop-badge ${property.purpose === 'Buy' ? 'badge-buy' : 'badge-rent'} fs-6 px-3 py-2`;
  }

  const typeBadgeEl = document.getElementById('details-type-badge');
  if (typeBadgeEl) typeBadgeEl.textContent = property.type;

  // Gallery
  const mainMediaEl = document.getElementById('gallery-main-media');
  const mainImageEl = document.getElementById('gallery-main-image');
  const thumbContainer = document.getElementById('gallery-thumbs-row');
  let mainVideoEl = null;

  const showGalleryImage = (src) => {
    if (mainVideoEl) {
      mainVideoEl.pause();
      mainVideoEl.remove();
      mainVideoEl = null;
    }
    if (mainImageEl) {
      if (src) mainImageEl.src = src;
      mainImageEl.style.display = '';
    }
  };

  const showGalleryVideo = (src) => {
    if (!mainMediaEl || !src) return;
    if (mainImageEl) mainImageEl.style.display = 'none';
    if (mainVideoEl) {
      mainVideoEl.pause();
      mainVideoEl.remove();
      mainVideoEl = null;
    }
    mainVideoEl = document.createElement('video');
    mainVideoEl.className = 'gallery-main-video';
    mainVideoEl.src = src;
    mainVideoEl.controls = true;
    mainVideoEl.autoplay = true;
    mainVideoEl.muted = true;
    mainVideoEl.loop = true;
    mainVideoEl.playsInline = true;
    mainVideoEl.setAttribute('playsinline', '');
    mainMediaEl.appendChild(mainVideoEl);
    const playPromise = mainVideoEl.play();
    if (playPromise && playPromise.catch) playPromise.catch(() => {});
  };

  if (mainImageEl && property.images.length > 0) {
    mainImageEl.src = property.images[0];
    mainImageEl.alt = property.title;
  }

  if (thumbContainer && property.images.length > 0) {
    const videoThumbHTML = property.video ? `
      <button type="button" class="gallery-thumb-video" data-video="${property.video}" aria-label="Play video tour of ${property.title}">
        <img src="${property.images[0]}" alt="${property.title} video tour" />
        <span class="gallery-thumb-play"><i class="bi bi-play-fill"></i></span>
        <span class="gallery-thumb-tag">Video</span>
      </button>
    ` : '';

    const imageThumbsHTML = property.images.map((img, idx) => `
      <img src="${img}" alt="${property.title} thumbnail ${idx + 1}" class="gallery-thumb ${idx === 0 ? 'active' : ''}" data-index="${idx}" />
    `).join('');

    thumbContainer.innerHTML = videoThumbHTML + imageThumbsHTML;

    const videoThumb = thumbContainer.querySelector('.gallery-thumb-video');
    const thumbs = thumbContainer.querySelectorAll('.gallery-thumb');

    if (videoThumb) {
      videoThumb.addEventListener('click', () => {
        thumbs.forEach(t => t.classList.remove('active'));
        videoThumb.classList.add('active');
        showGalleryVideo(videoThumb.getAttribute('data-video'));
      });
    }

    thumbs.forEach(thumb => {
      thumb.addEventListener('click', () => {
        if (videoThumb) videoThumb.classList.remove('active');
        thumbs.forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
        showGalleryImage(property.images[thumb.getAttribute('data-index')]);
      });
    });
  }

  // Specs Pills
  const specsRow = document.getElementById('details-specs-row');
  if (specsRow) {
    specsRow.innerHTML = `
      <div class="col-6 col-md-3 mb-3">
        <div class="property-spec-pill">
          <div class="icon"><i class="bi bi-door-open"></i></div>
          <div class="label">Bedrooms</div>
          <div class="value">${property.bedrooms ? property.bedrooms : 'N/A'}</div>
        </div>
      </div>
      <div class="col-6 col-md-3 mb-3">
        <div class="property-spec-pill">
          <div class="icon"><i class="bi bi-droplet"></i></div>
          <div class="label">Bathrooms</div>
          <div class="value">${property.bathrooms ? property.bathrooms : 'N/A'}</div>
        </div>
      </div>
      <div class="col-6 col-md-3 mb-3">
        <div class="property-spec-pill">
          <div class="icon"><i class="bi bi-aspect-ratio"></i></div>
          <div class="label">Area</div>
          <div class="value">${property.area} ${property.areaUnit}</div>
        </div>
      </div>
      <div class="col-6 col-md-3 mb-3">
        <div class="property-spec-pill">
          <div class="icon"><i class="bi bi-car-front"></i></div>
          <div class="label">Parking</div>
          <div class="value">${property.parking ? property.parking : 'Available'}</div>
        </div>
      </div>
    `;
  }

  // Description
  const descEl = document.getElementById('details-description');
  if (descEl) descEl.textContent = property.description;

  // Features list
  const featuresList = document.getElementById('details-features-list');
  if (featuresList && property.features) {
    featuresList.innerHTML = property.features.map(f => `
      <div class="col-md-6 mb-2">
        <div class="amenity-badge w-100">
          <i class="bi bi-check2-circle text-primary-custom fs-5"></i>
          <span>${f}</span>
        </div>
      </div>
    `).join('');
  }

  // Inquiry Form pre-fill
  const inquirySubject = document.getElementById('inquiry-property-subject');
  if (inquirySubject) {
    inquirySubject.value = `Inquiry for ${property.title} (ID: ${property.id})`;
  }

  // Handle direct inquiry form
  const inquiryForm = document.getElementById('property-inquiry-form');
  const inquirySuccess = document.getElementById('inquiry-success-message');
  if (inquiryForm) {
    inquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = inquiryForm.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Sending...';
      }
      setTimeout(() => {
        inquiryForm.style.display = 'none';
        if (inquirySuccess) {
          inquirySuccess.style.display = 'block';
        }
      }, 700);
    });
  }

  // WhatsApp quick link
  const waBtn = document.getElementById('details-whatsapp-btn');
  if (waBtn) {
    const textMsg = encodeURIComponent(`Hello Hasaan Real Estate, I am interested in viewing this property: ${property.title} (${window.location.href})`);
    waBtn.href = `https://wa.me/923003084176?text=${textMsg}`;
  }

  // Similar Properties
  const similarContainer = document.getElementById('similar-properties-grid');
  if (similarContainer) {
    const similar = propertiesData
      .filter(p => p.id !== property.id && (p.type === property.type || p.purpose === property.purpose))
      .slice(0, 3);
    similarContainer.innerHTML = similar.map(p => createPropertyCardHTML(p)).join('');
  }
}

// Global DOM Loaded Handler
document.addEventListener('DOMContentLoaded', () => {
  renderFeaturedProperties();
  initPropertiesPage();
  initPropertyDetailsPage();
});
