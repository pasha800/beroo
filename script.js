const galleryItems = [
  { src: "assets/img-01.png", title: "Beroo unboxing and five-year patina story", cat: "packaging" },
  { src: "assets/img-02.png", title: "Premium walnut and leather presentation box", cat: "packaging" },
  { src: "assets/img-03.png", title: "Walnut and leather full-size specification board", cat: "showcase" },
  { src: "assets/img-04.png", title: "Pure cherry wood full-size keyboard", cat: "showcase" },
  { src: "assets/img-05.png", title: "Beech wood natural finish keyboard", cat: "material" },
  { src: "assets/img-06.png", title: "Black walnut keyboard with detail panels", cat: "material" },
  { src: "assets/img-07.png", title: "Walnut compact keyboard with cream keycaps", cat: "showcase" },
  { src: "assets/img-08.png", title: "Walnut keyboard clean studio angle", cat: "showcase" },
  { src: "assets/img-09.png", title: "Walnut keyboard with black keycaps", cat: "showcase" },
  { src: "assets/img-10.png", title: "Dark keycap walnut keyboard", cat: "showcase" },
  { src: "assets/img-11.png", title: "Black keycap walnut case close view", cat: "showcase" },
  { src: "assets/img-12.png", title: "PCB, switch and keycap assembly guide", cat: "blueprint" },
  { src: "assets/img-13.png", title: "Leather application guide", cat: "blueprint" },
  { src: "assets/img-14.png", title: "Mitered corner joinery details", cat: "blueprint" },
  { src: "assets/img-15.png", title: "Screw and insert locations", cat: "blueprint" },
  { src: "assets/img-16.png", title: "Part fabrication drawings", cat: "blueprint" },
  { src: "assets/img-17.png", title: "Detailed case blueprint", cat: "blueprint" },
  { src: "assets/img-18.png", title: "Leather details and color options", cat: "material" },
  { src: "assets/img-19.png", title: "Top right side rail drawing", cat: "blueprint" },
  { src: "assets/img-20.png", title: "Top left side rail drawing", cat: "blueprint" },
  { src: "assets/img-21.png", title: "Top back rail drawing", cat: "blueprint" },
  { src: "assets/img-22.png", title: "Top front rail drawing", cat: "blueprint" },
  { src: "assets/img-23.png", title: "Bottom plate and base drawing", cat: "blueprint" },
  { src: "assets/img-24.png", title: "Five-piece top frame overview", cat: "blueprint" },
  { src: "assets/img-25.png", title: "Mechanical keyboard case assembly sheet", cat: "blueprint" },
  { src: "assets/img-26.png", title: "Optional center support drawing", cat: "blueprint" },
  { src: "assets/img-27.png", title: "Right side rail blueprint", cat: "blueprint" },
  { src: "assets/img-28.png", title: "Left side rail blueprint", cat: "blueprint" },
  { src: "assets/img-29.png", title: "Rear rail blueprint", cat: "blueprint" },
  { src: "assets/img-30.png", title: "Front top frame rail blueprint", cat: "blueprint" },
  { src: "assets/img-31.png", title: "Bottom base blueprint", cat: "blueprint" },
  { src: "assets/img-32.png", title: "Exploded case-only blueprint", cat: "blueprint" },
  { src: "assets/img-33.png", title: "Signature 65 walnut edition", cat: "showcase" },
  { src: "assets/img-34.png", title: "Monument TKL oak edition", cat: "showcase" },
  { src: "assets/img-35.png", title: "Studio 65 beech edition", cat: "showcase" },
  { src: "assets/img-36.png", title: "Heritage 75 cherry edition", cat: "showcase" },
  { src: "assets/img-37.png", title: "Walnut compact limited edition", cat: "showcase" },
  { src: "assets/img-38.png", title: "Wood types and layout examples", cat: "material" },
  { src: "assets/img-39.png", title: "Walnut, cherry, beech and oak comparison", cat: "material" },
  { src: "assets/img-40.png", title: "Classic 65 specification sheet", cat: "blueprint" },
  { src: "assets/img-41.png", title: "Walnut 65 keyboard case sheet", cat: "blueprint" }
];

const CONTACT = {
  whatsappNumber: "9647514705065",
  email: "sales@beroo.com"
};

const ORDER_CONFIG = {
  endpoint: "",
  provider: "netlify",
  localHosts: ["", "localhost", "127.0.0.1", "::1"]
};

function optimizedSrc(src, size = "thumb") {
  const match = src.match(/img-(\d+)\.png$/);
  return match ? `assets/optimized/img-${match[1]}-${size}.jpg` : src;
}

const woodImageMap = {
  "Walnut / گوێز": "assets/optimized/img-07-large.jpg",
  "Cherry / چێری": "assets/optimized/img-36-large.jpg",
  "Beech / زان": "assets/optimized/img-35-large.jpg",
  "Oak / White Oak": "assets/optimized/img-34-large.jpg"
};

const woodProfiles = {
  walnut: {
    image: "assets/optimized/img-39-large.jpg",
    kicker: "Black Walnut",
    title: "قووڵ، ئارام و پڕ لە کەسایەتی",
    text: "گوێز باشترین هەڵبژاردنە بۆ ئەو کەسانەی ڕەنگی تۆخ، هێڵی دارێکی قووڵ و هەستی پریمیم دەوێت.",
    metrics: { warmth: 82, grain: 88, formality: 92 }
  },
  cherry: {
    image: "assets/optimized/img-36-large.jpg",
    kicker: "Black Cherry",
    title: "گەرم، کلاسیک و جوانتر بە کات",
    text: "چێری ڕەنگی سووراو-قاوەیی هەیە و بە بەکارهێنان قووڵتر دەبێت، بۆ ستایلێکی کلاسیکی نەرم.",
    metrics: { warmth: 94, grain: 74, formality: 78 }
  },
  beech: {
    image: "assets/optimized/img-35-large.jpg",
    kicker: "Beech Wood",
    title: "ڕوون، پاک و مینیمال",
    text: "زان بۆ ئەوە باشە کە ڕووکارێکی ڕوون، کەمترین شلوغی و grain ـێکی نەرم دەوێت.",
    metrics: { warmth: 58, grain: 52, formality: 66 }
  },
  oak: {
    image: "assets/optimized/img-34-large.jpg",
    kicker: "White Oak",
    title: "هێزدار، دیار و جیاواز",
    text: "White Oak grain ـی بەهێز و ڕووکارێکی سروشتی دیار هەیە، بۆ ئەوانەی دەیانەوێت کیبۆردەکە زۆر کەسایەتی هەبێت.",
    metrics: { warmth: 70, grain: 96, formality: 72 }
  }
};

const estimateRules = {
  layout: { "65%": 420, "75%": 470, TKL: 510, "100%": 560 },
  wood: { "Walnut / گوێز": 80, "Cherry / چێری": 60, "Beech / زان": 25, "Oak / White Oak": 45 },
  leather: { "Dark Brown": 0, Tan: 0, Cognac: 15, Black: 10 },
  switchType: { "Premium Linear": 0, "Tactile Soft": 20, "Silent Linear": 30 },
  keycapColor: { "Cream PBT": 0, "Black PBT": 20, "Coffee & Cream": 25 },
  plateMaterial: { FR4: 0, Polycarbonate: 25, Brass: 75 },
  scentProfile: {
    "Woody Leather": 18,
    "Amber Leather": 18,
    "Sandalwood Amber": 22,
    "Oud Wood Soft": 24,
    "No Scent": 0
  },
  extras: {
    "Premium wooden box": 70,
    "Detachable leather wrist rest": 55,
    "Personal serial badge": 35,
    "Brass bottom plate": 90,
    "Hot-swappable PCB": 35,
    "Beroo Aroma Chamber": 45,
    "Gift / Collector Finish": 40
  }
};

const galleryGrid = document.querySelector("#galleryGrid");
const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector("#lightboxImage");
const lightboxCaption = document.querySelector("#lightboxCaption");
const galleryMeta = document.querySelector("#galleryMeta");
const builderSteps = document.querySelectorAll(".builder-step");
const builderStepTabs = document.querySelectorAll(".builder-step-tab");
const builderPrev = document.querySelector("#builderPrev");
const builderNext = document.querySelector("#builderNext");
const patinaRange = document.querySelector("#patinaRange");
let visibleItems = [...galleryItems];
let activeIndex = 0;
let activeBuilderStep = 1;
let lastFocusedElement = null;
let audioContext = null;
const SAVED_BUILD_KEY = "beroo-saved-build";

const soundFiles = {
  warm: "assets/sounds/warm-deep.mp3",
  muted: "assets/sounds/soft-muted.mp3",
  clack: "assets/sounds/clean-clack.mp3"
};

let activeSound = null;

function saveConfiguration() {
  const values = getFormValues();
  localStorage.setItem(SAVED_BUILD_KEY, JSON.stringify(values));
  const status = document.querySelector('#formStatus');
  if (status) status.textContent = "هەڵبژاردنەکانت پاشەکەوت کران.";
}

function restoreConfiguration() {
  const saved = localStorage.getItem(SAVED_BUILD_KEY);
  if (!saved) return false;

  let values;
  try {
    values = JSON.parse(saved);
  } catch {
    localStorage.removeItem(SAVED_BUILD_KEY);
    return false;
  }
  const form = document.querySelector('#orderForm');
  if (!form) return false;

  Object.entries(values).forEach(([key, value]) => {
    if (key === 'extras' && Array.isArray(value)) {
      form.querySelectorAll('input[name="extras"]').forEach((input) => {
        input.checked = value.includes(input.value);
      });
      return;
    }

    if (Array.isArray(value)) return;

    const inputs = form.querySelectorAll(`[name="${CSS.escape(key)}"]`);
    if (inputs && inputs.length) {
      inputs.forEach((input) => {
        if (input.type === 'radio' || input.type === 'checkbox') {
          input.checked = String(value) === input.value || (Array.isArray(value) && value.includes(input.value));
        } else {
          input.value = value;
        }
      });
    } else {
      const field = form.querySelector(`[name="${CSS.escape(key)}"]`);
      if (field && typeof value === 'string') field.value = value;
    }
  });

  updateSummary();
  updateHandoffLinks();
  syncSoundCardsFromForm();
  return true;
}

const hotspotDetails = {
  case: {
    title: "Solid walnut case",
    text: "دارەکە بە دەست sand دەکرێت، بە natural oil wax دەپارێزرێت و grain ـی هەر دانەیەک جیاوازە."
  },
  wrist: {
    title: "Leather wrist rest",
    text: "پێستی ڕاستەقینە بە قەراغی دوورکراوە و stitching ـی پاک، بۆ هەستی نەرمی دەست لە نووسینی درێژ."
  },
  keycaps: {
    title: "PBT keycaps",
    text: "PBT keycaps بە profile ـی Cherry، بۆ هەستی typing ـی جێگیر و ڕەنگی مانەوەدار."
  },
  brass: {
    title: "Brass badge and knob",
    text: "وردەکارییە برنجییەکان کێشی لوکس، control ـی خۆش و هەستی limited edition زیاد دەکەن."
  },
  aroma: {
    title: "Beroo Aroma Chamber",
    text: "خانەیەکی شاراوە بۆ oil pad ـی alcohol-free، replaceable و دانراو لە ژێر leather wrist rest."
  }
};

function renderGallery(filter = "all") {
  visibleItems = filter === "all" ? [...galleryItems] : galleryItems.filter((item) => item.cat === filter);
  galleryGrid.innerHTML = "";

  visibleItems.forEach((item, index) => {
    const button = document.createElement("button");
    button.className = "gallery-card reveal";
    button.type = "button";
    button.dataset.index = index;
    
    const img = document.createElement("img");
    img.src = optimizedSrc(item.src, "thumb");
    img.dataset.large = optimizedSrc(item.src, "large");
    img.alt = item.title;
    img.loading = "lazy";
    img.decoding = "async";
    img.width = "512";
    img.height = "430";
    img.srcset = `${optimizedSrc(item.src, "thumb")} 512w, ${optimizedSrc(item.src, "large")} 1024w`;
    img.sizes = "(max-width: 760px) 100vw, (max-width: 1180px) 33vw, 300px";
    
    button.appendChild(img);
    
    const span = document.createElement("span");
    span.textContent = item.title;
    button.appendChild(span);
    
    galleryGrid.append(button);
  });

  if (galleryMeta) {
    galleryMeta.textContent = `${visibleItems.length} وێنەی پڕۆژە`;
  }

  observeReveals();
}

function openLightbox(index) {
  if (!visibleItems.length) return;
  activeIndex = index;
  const item = visibleItems[activeIndex];
  const wasOpen = lightbox.open;
  if (!wasOpen) {
    lastFocusedElement = document.activeElement instanceof HTMLElement ? document.activeElement : null;
  }
  lightboxImage.src = optimizedSrc(item.src, "large");
  lightboxImage.alt = item.title;
  lightboxCaption.textContent = item.title;
  if (!wasOpen) {
    lightbox.showModal();
    document.querySelector(".close-lightbox")?.focus();
  }
}

function moveLightbox(step) {
  activeIndex = (activeIndex + step + visibleItems.length) % visibleItems.length;
  openLightbox(activeIndex);
}

function trapLightboxFocus(event) {
  const focusable = [...lightbox.querySelectorAll("button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])")]
    .filter((element) => !element.disabled && element.offsetParent !== null);
  if (!focusable.length) return;

  const first = focusable[0];
  const last = focusable[focusable.length - 1];

  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}

function setBuilderStep(step) {
  const maxStep = builderSteps.length || 4;
  activeBuilderStep = Math.min(maxStep, Math.max(1, Number(step) || 1));

  builderSteps.forEach((panel) => {
    const isActive = Number(panel.dataset.builderStep) === activeBuilderStep;
    panel.hidden = !isActive;
    panel.classList.toggle("active", isActive);
    panel.setAttribute("aria-hidden", String(!isActive));
  });

  builderStepTabs.forEach((tab) => {
    const isActive = Number(tab.dataset.stepTarget) === activeBuilderStep;
    tab.classList.toggle("active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
    tab.tabIndex = isActive ? 0 : -1;
  });

  if (builderPrev) builderPrev.disabled = activeBuilderStep === 1;
  if (builderNext) {
    builderNext.hidden = activeBuilderStep === maxStep;
    builderNext.disabled = activeBuilderStep === maxStep;
  }

  // Announce step change to screen readers
  const stepPanel = document.querySelector(`[data-builder-step="${activeBuilderStep}"]`);
  if (stepPanel && stepPanel.offsetParent !== null) {
    const heading = stepPanel.querySelector("legend, h3, .section-heading h3");
    if (heading) {
      const announcement = `Step ${activeBuilderStep} of ${maxStep}: ${heading.textContent}`;
      const announce = document.createElement("div");
      announce.setAttribute("role", "status");
      announce.setAttribute("aria-live", "polite");
      announce.className = "sr-only";
      announce.textContent = announcement;
      document.body.appendChild(announce);
      setTimeout(() => announce.remove(), 1000);
    }
  }
}

function getFormValues() {
  const form = document.querySelector("#orderForm");
  const data = new FormData(form);
  return {
    wood: data.get("wood"),
    layout: data.get("layout"),
    leather: data.get("leather"),
    switchType: data.get("switchType"),
    keycapColor: data.get("keycapColor"),
    plateMaterial: data.get("plateMaterial"),
    soundProfile: data.get("soundProfile"),
    scentProfile: data.get("scentProfile"),
    extras: data.getAll("extras"),
    name: data.get("name")?.trim(),
    contact: data.get("contact")?.trim(),
    note: data.get("note")?.trim()
  };
}

function syncSoundCardsFromForm() {
  const profileMap = {
    warm: "Warm & deep",
    muted: "Soft muted",
    clack: "Clean clack"
  };
  
  document.querySelectorAll(".sound-card").forEach((card) => {
    const profile = card.dataset.soundProfile;
    const radioValue = profileMap[profile];
    const radio = document.querySelector(`input[name="soundProfile"][value="${radioValue}"]`);
    
    if (radio && radio.checked) {
      card.setAttribute("aria-pressed", "true");
    } else {
      card.setAttribute("aria-pressed", "false");
    }
  });
}

function updateSummary() {
  const values = getFormValues();
  const summaryImage = document.querySelector("#summaryImage");
  const summaryTitle = document.querySelector("#summaryTitle");
  const summaryList = document.querySelector("#summaryList");
  const priceEstimate = document.querySelector("#priceEstimate");
  const leadEstimate = document.querySelector("#leadEstimate");
  const cleanWood = values.wood.split(" / ")[0];
  const estimate = calculateEstimate(values);
  const hasGiftCollector = values.extras.includes("Gift / Collector Finish");

  summaryImage.src = woodImageMap[values.wood] || "assets/img-07.png";
  
  let titleText = `${cleanWood} ${values.layout} Signature`;
  if (hasGiftCollector) {
    titleText += " · Gift / Collector";
  }
  summaryTitle.textContent = titleText;
  
  // Build extras display with chip-style rendering
  const extrasContainer = document.createElement("div");
  extrasContainer.className = "extras-display";
  
  if (values.extras.length) {
    values.extras.forEach(e => {
      const badge = document.createElement("span");
      if (e === "Gift / Collector Finish") {
        badge.className = "extra-badge gift-collector";
        badge.textContent = "Gift / Collector";
      } else {
        badge.className = "extra-badge";
        badge.textContent = e;
      }
      extrasContainer.appendChild(badge);
    });
  } else {
    extrasContainer.textContent = "Standard build";
  }
  
  // Clear and rebuild summary list
  summaryList.innerHTML = "";
  
  const summaryItems = [
    ["دار", values.wood],
    ["قەبارە / Layout", values.layout],
    ["پێست", values.leather],
    ["Switch", values.switchType],
    ["Keycap", values.keycapColor],
    ["Plate", values.plateMaterial],
    ["Sound", values.soundProfile],
    ["Beroo Scent", values.scentProfile]
  ];
  
  summaryItems.forEach(([label, value]) => {
    const li = document.createElement("li");
    const labelSpan = document.createElement("span");
    labelSpan.textContent = label;
    const valueStrong = document.createElement("strong");
    valueStrong.textContent = value;
    li.appendChild(labelSpan);
    li.appendChild(valueStrong);
    summaryList.appendChild(li);
  });
  
  const extrasLi = document.createElement("li");
  const extrasLabel = document.createElement("span");
  extrasLabel.textContent = "زیادکراوە";
  extrasLi.appendChild(extrasLabel);
  extrasLi.appendChild(extrasContainer);
  summaryList.appendChild(extrasLi);

  // Live preview badges (layout, leather, sound, gift)
  const badgesContainer = document.querySelector('#summaryBadges');
  if (badgesContainer) {
    badgesContainer.innerHTML = '';
    const badgeItems = [
      { label: 'Layout', value: values.layout },
      { label: 'Leather', value: values.leather },
      { label: 'Sound', value: values.soundProfile }
    ];
    badgeItems.forEach((b) => {
      const span = document.createElement('span');
      span.className = 'summary-badge';
      span.textContent = b.value;
      badgesContainer.appendChild(span);
    });
    if (hasGiftCollector) {
      const g = document.createElement('span');
      g.className = 'summary-badge gift-collector';
      g.textContent = 'Gift / Collector';
      badgesContainer.appendChild(g);
    }
  }

  if (priceEstimate && leadEstimate) {
    priceEstimate.textContent = `$${estimate.low} - $${estimate.high} starting`;
    leadEstimate.textContent = `Lead time: ${estimate.weeksLow}-${estimate.weeksHigh} weeks`;
  }
}

function calculateEstimate(values) {
  const base = estimateRules.layout[values.layout] || 440;
  const wood = estimateRules.wood[values.wood] || 0;
  const leather = estimateRules.leather[values.leather] || 0;
  const switchCost = estimateRules.switchType[values.switchType] || 0;
  const keycap = estimateRules.keycapColor[values.keycapColor] || 0;
  const plate = estimateRules.plateMaterial[values.plateMaterial] || 0;
  const scent = estimateRules.scentProfile[values.scentProfile] || 0;
  const extras = values.extras.reduce((sum, item) => sum + (estimateRules.extras[item] || 0), 0);
  const low = base + wood + leather + switchCost + keycap + plate + scent + extras;
  const high = low + 120;
  const weeksLow = values.extras.includes("Brass bottom plate") || values.layout === "100%" || values.plateMaterial === "Brass" ? 5 : 3;
  const weeksHigh = weeksLow + 2;
  return { low, high, weeksLow, weeksHigh };
}

function updateWoodStage(key) {
  const profile = woodProfiles[key];
  if (!profile) return;

  document.querySelector("#woodStageImage").src = profile.image;
  document.querySelector("#woodStageImage").alt = profile.title;
  document.querySelector("#woodStageKicker").textContent = profile.kicker;
  document.querySelector("#woodStageTitle").textContent = profile.title;
  document.querySelector("#woodStageText").textContent = profile.text;
  document.querySelector("#woodMetrics").innerHTML = [
    ["Warmth", profile.metrics.warmth],
    ["Grain", profile.metrics.grain],
    ["Premium", profile.metrics.formality]
  ]
    .map(
      ([label, value]) => `
        <div class="wood-meter">
          <span>${label}</span>
          <span style="--value:${value}%"></span>
          <span>${value}</span>
        </div>
      `
    )
    .join("");
}

function updateScrollProgress() {
  const progress = document.querySelector("#scrollProgress");
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const width = maxScroll <= 0 ? 0 : (window.scrollY / maxScroll) * 100;
  progress.style.width = `${Math.min(100, Math.max(0, width))}%`;
}

function orderText() {
  const values = getFormValues();
  const estimate = calculateEstimate(values);
  return [
    "Beroo custom keyboard request",
    `Name: ${values.name || "-"}`,
    `Contact: ${values.contact || "-"}`,
    `Wood: ${values.wood}`,
    `Layout: ${values.layout}`,
    `Leather: ${values.leather}`,
    `Switch: ${values.switchType}`,
    `Keycap color: ${values.keycapColor}`,
    `Plate material: ${values.plateMaterial}`,
    `Sound profile: ${values.soundProfile}`,
    `Beroo Scent: ${values.scentProfile}`,
    `Extras: ${values.extras.length ? values.extras.join(", ") : "Standard build"}`,
    `Estimated starting range (not final): $${estimate.low} - $${estimate.high}`,
    `Lead time: ${estimate.weeksLow}-${estimate.weeksHigh} weeks`,
    `Note: ${values.note || "-"}`
  ].join("\n");
}

function whatsappUrl(message) {
  const encoded = encodeURIComponent(message);
  return CONTACT.whatsappNumber
    ? `https://wa.me/${CONTACT.whatsappNumber}?text=${encoded}`
    : `https://wa.me/?text=${encoded}`;
}

function emailUrl(message) {
  const subject = encodeURIComponent("Beroo custom keyboard request");
  const body = encodeURIComponent(message);
  return CONTACT.email
    ? `mailto:${CONTACT.email}?subject=${subject}&body=${body}`
    : `mailto:?subject=${subject}&body=${body}`;
}

function updateHandoffLinks() {
  const emailOrder = document.querySelector("#emailOrder");
  if (emailOrder) {
    emailOrder.href = emailUrl(orderText());
  }

  const stickyWhatsapp = document.querySelector("#stickyWhatsapp");
  if (stickyWhatsapp) {
    stickyWhatsapp.href = whatsappUrl(orderText());
  }
}

function whatsappFallbackLink(url, label = "WhatsApp بکەرەوە") {
  const link = document.createElement("a");
  link.href = url;
  link.textContent = label;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  return link;
}

function canPostNetlifyForm() {
  return (
    ORDER_CONFIG.provider === "netlify" &&
    location.protocol.startsWith("http") &&
    !ORDER_CONFIG.localHosts.includes(location.hostname)
  );
}

function copyOrderDetails() {
  const status = document.querySelector("#formStatus");
  const text = orderText();

  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => {
      status.textContent = "وردەکارییەکان کۆپی کران.";
    });
    return;
  }

  status.textContent = text;
}

async function handleOrderSubmit(event) {
  event.preventDefault();
  const values = getFormValues();
  const status = document.querySelector("#formStatus");
  const submitButton = document.querySelector("#orderForm button[type='submit']");

  // Form validation (accessible)
  const nameField = document.querySelector('#buyerName') || document.querySelector('input[name="name"]');
  const contactField = document.querySelector('#buyerContact') || document.querySelector('input[name="contact"]');
  const nameError = document.getElementById('nameError');
  const contactError = document.getElementById('contactError');

  // Clear previous error states
  [nameField, contactField].forEach((f) => {
    if (!f) return;
    f.removeAttribute('aria-invalid');
  });
  if (nameError) { nameError.hidden = true; nameError.textContent = ''; }
  if (contactError) { contactError.hidden = true; contactError.textContent = ''; }

  if (!values.name || !values.contact) {
    setBuilderStep(4);
    status.innerHTML = "";

    let firstInvalid = null;

    if (!values.name && nameField) {
      nameField.setAttribute('aria-invalid', 'true');
      if (nameError) { nameError.textContent = 'تکایە ناوت بنووسە.'; nameError.hidden = false; }
      firstInvalid = nameField;
    }

    if (!values.contact && contactField) {
      contactField.setAttribute('aria-invalid', 'true');
      if (contactError) { contactError.textContent = 'تکایە ئیمەیڵ یان ژمارەی WhatsApp بنووسە.'; contactError.hidden = false; }
      if (!firstInvalid) firstInvalid = contactField;
    }

    if (firstInvalid) firstInvalid.focus();
    return;
  }

  // Disable submit button during submission
  if (submitButton) {
    submitButton.disabled = true;
    submitButton.setAttribute("aria-busy", "true");
  }

  const message = orderText();
  const whatsappLink = whatsappUrl(message);
  const popup = window.open("", "_blank");
  if (popup) popup.opener = null;

  localStorage.setItem("beroo-last-order", message);
  status.textContent = "داواکارییەکەت ئامادە کرا؛ ناردنی فۆرم دەکرێت.";
  let storedRemotely = false;

  const form = document.querySelector("#orderForm");
  const formData = new FormData(form);
  formData.set("order-message", message);
  formData.set("form-provider", ORDER_CONFIG.provider);

  try {
    if (ORDER_CONFIG.endpoint) {
      const response = await fetch(ORDER_CONFIG.endpoint, {
        method: "POST",
        body: formData
      });
      if (!response.ok) throw new Error("Custom form endpoint unavailable");
      storedRemotely = true;
    } else if (canPostNetlifyForm()) {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString()
      });
      if (!response.ok) throw new Error("Form endpoint unavailable");
      storedRemotely = true;
    }
  } catch {
    storedRemotely = false;
  }

  // Clear status and rebuild with DOM-safe method
  status.innerHTML = "";

  const successMessage = storedRemotely
    ? "داواکارییەکەت وەرگیرا. لە ماوەی 24 کاتژمێردا پەیوەندیت پێوە دەکەین."
    : "داواکاری لە ڕێی WhatsApp/email ئامادەیە. وتووێژ بۆ ڕێکخستنی orders."; 

  status.textContent = successMessage;

  // Add WhatsApp link if popup blocked
  if (!popup) {
    status.textContent = successMessage + " ";
    const fallbackLink = whatsappFallbackLink(whatsappLink);
    status.appendChild(fallbackLink);
  } else {
    popup.location.href = whatsappLink;
  }

  // Re-enable submit button after a delay
  setTimeout(() => {
    if (submitButton) {
      submitButton.disabled = false;
      submitButton.removeAttribute("aria-busy");
    }
  }, 2000);
}

function scheduleKeyClick(startTime, options) {
  const ctx = audioContext;
  const tone = ctx.createOscillator();
  const toneGain = ctx.createGain();
  const noise = ctx.createBufferSource();
  const noiseGain = ctx.createGain();
  const filter = ctx.createBiquadFilter();
  const length = Math.max(1, Math.floor(ctx.sampleRate * options.decay));
  const buffer = ctx.createBuffer(1, length, ctx.sampleRate);
  const samples = buffer.getChannelData(0);

  for (let i = 0; i < length; i += 1) {
    samples[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / length, 2);
  }

  tone.type = "sine";
  tone.frequency.setValueAtTime(options.frequency, startTime);
  tone.frequency.exponentialRampToValueAtTime(options.frequency * 0.56, startTime + options.decay);
  toneGain.gain.setValueAtTime(options.toneGain, startTime);
  toneGain.gain.exponentialRampToValueAtTime(0.001, startTime + options.decay);

  filter.type = "bandpass";
  filter.frequency.setValueAtTime(options.noiseFrequency, startTime);
  filter.Q.setValueAtTime(options.q, startTime);
  noise.buffer = buffer;
  noiseGain.gain.setValueAtTime(options.noiseGain, startTime);
  noiseGain.gain.exponentialRampToValueAtTime(0.001, startTime + options.decay * 0.8);

  tone.connect(toneGain).connect(ctx.destination);
  noise.connect(filter).connect(noiseGain).connect(ctx.destination);
  tone.start(startTime);
  noise.start(startTime);
  tone.stop(startTime + options.decay + 0.02);
  noise.stop(startTime + options.decay + 0.02);
}

async function playSoundProfile(profile, activeButton) {
  const src = soundFiles[profile];
  if (!src) return;

  document.querySelectorAll(".sound-card").forEach((button) => {
    button.classList.remove("playing");
  });

  if (activeSound) {
    activeSound.pause();
    activeSound.currentTime = 0;
  }

  activeSound = new Audio(src);
  activeSound.preload = "auto";
  activeSound.volume = 0.82;

  activeButton?.classList.add("playing");

  try {
    await activeSound.play();
  } catch {
    activeButton?.classList.remove("playing");
    return;
  }

  activeSound.addEventListener(
    "ended",
    () => {
      activeButton?.classList.remove("playing");
    },
    { once: true }
  );
}

function updatePatinaSlider() {
  if (!patinaRange) return;
  const slider = patinaRange.closest(".patina-slider");
  slider?.style.setProperty("--after", `${patinaRange.value}%`);
}

function observeReveals() {
  const revealItems = document.querySelectorAll(".reveal:not(.visible)");

  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, activeObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          activeObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );

  revealItems.forEach((item) => observer.observe(item));
}

document.querySelector("#year").textContent = new Date().getFullYear();
renderGallery();
updateSummary();
updateHandoffLinks();
updateWoodStage("walnut");
updateScrollProgress();
observeReveals();
setBuilderStep(1);
updatePatinaSlider();

window.addEventListener("scroll", updateScrollProgress, { passive: true });
window.addEventListener("resize", updateScrollProgress);

document.querySelector(".nav-menu-button").addEventListener("click", (event) => {
  const menu = document.querySelector("#siteMenu");
  const expanded = event.currentTarget.getAttribute("aria-expanded") === "true";
  event.currentTarget.setAttribute("aria-expanded", String(!expanded));
  menu.classList.toggle("open");
  if (!expanded) menu.querySelector("a")?.focus();
});

document.querySelectorAll(".site-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelector("#siteMenu").classList.remove("open");
    document.querySelector(".nav-menu-button").setAttribute("aria-expanded", "false");
  });
});

document.querySelectorAll(".filter-button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter-button").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderGallery(button.dataset.filter);
  });
});

document.querySelectorAll(".wood-tab").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".wood-tab").forEach((item) => {
      item.classList.remove("active");
      item.setAttribute("aria-selected", "false");
    });
    button.classList.add("active");
    button.setAttribute("aria-selected", "true");
    updateWoodStage(button.dataset.wood);
  });
});

document.querySelectorAll(".hotspot-dot").forEach((button) => {
  button.addEventListener("click", () => {
    const detail = hotspotDetails[button.dataset.hotspot];
    if (!detail) return;

    document.querySelectorAll(".hotspot-dot").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    document.querySelector("#hotspotTitle").textContent = detail.title;
    document.querySelector("#hotspotText").textContent = detail.text;
  });
});

galleryGrid.addEventListener("click", (event) => {
  const card = event.target.closest(".gallery-card");
  if (!card) return;
  openLightbox(Number(card.dataset.index));
});

document.querySelector(".close-lightbox").addEventListener("click", () => lightbox.close());
document.querySelector(".lightbox-prev").addEventListener("click", () => moveLightbox(-1));
document.querySelector(".lightbox-next").addEventListener("click", () => moveLightbox(1));

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) lightbox.close();
});

lightbox.addEventListener("close", () => {
  lastFocusedElement?.focus();
});

document.addEventListener("keydown", (event) => {
  const menu = document.querySelector("#siteMenu");
  const menuButton = document.querySelector(".nav-menu-button");

  if (event.key === "Escape" && menu.classList.contains("open")) {
    menu.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.focus();
    return;
  }

  if (!lightbox.open) return;
  if (event.key === "Escape") {
    event.preventDefault();
    lightbox.close();
  }
  if (event.key === "Tab") trapLightboxFocus(event);
  if (event.key === "ArrowLeft") moveLightbox(1);
  if (event.key === "ArrowRight") moveLightbox(-1);
});

builderStepTabs.forEach((button) => {
  button.addEventListener("click", () => setBuilderStep(button.dataset.stepTarget));
});

builderPrev?.addEventListener("click", () => setBuilderStep(activeBuilderStep - 1));
builderNext?.addEventListener("click", () => setBuilderStep(activeBuilderStep + 1));
patinaRange?.addEventListener("input", updatePatinaSlider);

document.querySelectorAll(".sound-card").forEach((button) => {
  const profile = button.dataset.soundProfile;
  const profileMap = {
    warm: "Warm & deep",
    muted: "Soft muted",
    clack: "Clean clack"
  };
  
  button.setAttribute("aria-pressed", "false");
  button.setAttribute("aria-label", `Play ${profileMap[profile]} sound`);
  
  button.addEventListener("click", () => {
    // Update radio button in configurator
    const radioValue = profileMap[profile];
    const radio = document.querySelector(`input[name="soundProfile"][value="${radioValue}"]`);
    if (radio) {
      radio.checked = true;
      updateSummary();
      updateHandoffLinks();
    }
    
    // Play sound and update state
    playSoundProfile(profile, button);
    
    // Update aria-pressed for all sound cards
    document.querySelectorAll(".sound-card").forEach((card) => {
      card.setAttribute("aria-pressed", card === button ? "true" : "false");
    });
  });
});

// Restore saved build (if present) then sync sound card UI
restoreConfiguration();
syncSoundCardsFromForm();

document.querySelector("#orderForm").addEventListener("input", () => {
  updateSummary();
  updateHandoffLinks();
  syncSoundCardsFromForm();
});
// Clear field-specific errors when user types
const buyerName = document.querySelector('#buyerName');
const buyerContact = document.querySelector('#buyerContact');
if (buyerName) {
  buyerName.addEventListener('input', () => {
    buyerName.removeAttribute('aria-invalid');
    const err = document.getElementById('nameError'); if (err) { err.hidden = true; err.textContent = ''; }
  });
}
if (buyerContact) {
  buyerContact.addEventListener('input', () => {
    buyerContact.removeAttribute('aria-invalid');
    const err = document.getElementById('contactError'); if (err) { err.hidden = true; err.textContent = ''; }
  });
}
document.querySelector("#orderForm").addEventListener("submit", handleOrderSubmit);
document.querySelector("#copyOrder").addEventListener("click", copyOrderDetails);
document.querySelector('#saveBuild')?.addEventListener('click', saveConfiguration);
document.querySelector('#clearBuild')?.addEventListener('click', () => {
  localStorage.removeItem(SAVED_BUILD_KEY);
  
  const form = document.querySelector('#orderForm');
  if (form) form.reset();
  
  updateSummary();
  updateHandoffLinks();
  syncSoundCardsFromForm();
  setBuilderStep(1);
  
  const status = document.querySelector('#formStatus');
  if (status) status.textContent = 'هەڵبژاردنەکان گەڕێندرانەوە بۆ دۆخی بنەڕەتی.';
});

document.querySelectorAll("[data-pick-layout]").forEach((button) => {
  button.addEventListener("click", () => {
    const target = button.dataset.pickLayout;
    const radio = document.querySelector(`input[name="layout"][value="${target}"]`);
    if (radio) {
      radio.checked = true;
      updateSummary();
      updateHandoffLinks();
      setBuilderStep(1);
    }
    document.querySelector("#order").scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

// Batch strip CTA
document.querySelector("#batchStripCta")?.addEventListener("click", () => {
  const orderSection = document.querySelector("#order");
  if (orderSection) {
    orderSection.scrollIntoView({ behavior: "smooth", block: "start" });
    // Go to step 4 after scroll
    setTimeout(() => {
      setBuilderStep(4);
      document.querySelector('input[name="name"]')?.focus();
    }, 500);
  }
});
