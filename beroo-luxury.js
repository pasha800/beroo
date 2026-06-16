const root = document.documentElement;
const progress = document.querySelector('#scrollProgress');
const menuButton = document.querySelector('.nav-menu-button');
const menu = document.querySelector('#siteMenu');
const year = document.querySelector('#year');
const orderForm = document.querySelector('#orderForm');
const formStatus = document.querySelector('#formStatus');
const copyOrder = document.querySelector('#copyOrder');
const summaryTitle = document.querySelector('#summaryTitle');
const priceEstimate = document.querySelector('#priceEstimate');
const summaryList = document.querySelector('#summaryList');
const summaryImage = document.querySelector('#summaryImage');
const stickyWhatsapp = document.querySelector('#stickyWhatsapp');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const CONTACT = {
  whatsappNumber: '9647514705065',
  email: 'sales@beroo.com'
};

const imageMap = {
  walnut: 'assets/optimized/img-07-large.jpg',
  cherry: 'assets/optimized/img-36-large.jpg',
  oak: 'assets/optimized/img-34-large.jpg',
  beech: 'assets/optimized/img-35-large.jpg'
};

const prices = {
  layout: { '65%': 420, '75%': 470, TKL: 510, '100%': 560 },
  wood: { walnut: 80, cherry: 60, oak: 45, beech: 25 },
  finish: { signature: 0, collector: 140, executive: 220 }
};

function updateProgress() {
  if (!progress) return;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const width = max > 0 ? (window.scrollY / max) * 100 : 0;
  progress.style.width = `${Math.min(100, Math.max(0, width))}%`;
}

function closeMenu() {
  if (!menu || !menuButton) return;
  menu.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}

function getValues() {
  const data = new FormData(orderForm);
  return {
    wood: data.get('wood') || 'walnut',
    layout: data.get('layout') || '65%',
    finish: data.get('finish') || 'signature',
    name: String(data.get('name') || '').trim(),
    contact: String(data.get('contact') || '').trim(),
    note: String(data.get('note') || '').trim()
  };
}

function calculate(values) {
  const low = (prices.layout[values.layout] || 420) + (prices.wood[values.wood] || 0) + (prices.finish[values.finish] || 0);
  return { low, high: low + 160 };
}

function labels(values) {
  const wood = { walnut: 'Walnut / گوێز', cherry: 'Cherry / چێری', oak: 'White Oak', beech: 'Beech / زان' }[values.wood];
  const finish = { signature: 'Signature Build', collector: 'Collector Finish', executive: 'Executive Gift Set' }[values.finish];
  return { wood, finish };
}

function orderText() {
  const values = getValues();
  const estimate = calculate(values);
  const label = labels(values);
  return [
    'Beroo custom keyboard request',
    `Name: ${values.name || '-'}`,
    `Contact: ${values.contact || '-'}`,
    `Wood: ${label.wood}`,
    `Layout: ${values.layout}`,
    `Finish: ${label.finish}`,
    `Estimated range: $${estimate.low} - $${estimate.high}`,
    `Note: ${values.note || '-'}`
  ].join('\n');
}

function whatsappUrl() {
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(orderText())}`;
}

function updateSummary() {
  if (!orderForm) return;
  const values = getValues();
  const label = labels(values);
  const estimate = calculate(values);
  if (summaryTitle) summaryTitle.textContent = `${label.wood} · ${values.layout}`;
  if (priceEstimate) priceEstimate.textContent = `$${estimate.low} - $${estimate.high}`;
  if (summaryImage) {
    summaryImage.src = imageMap[values.wood] || imageMap.walnut;
    summaryImage.alt = `${label.wood} Beroo keyboard preview`;
  }
  if (summaryList) {
    summaryList.innerHTML = '';
    [
      ['دار', label.wood],
      ['Layout', values.layout],
      ['Finish', label.finish],
      ['Lead time', values.finish === 'executive' ? '5-8 weeks' : '3-7 weeks']
    ].forEach(([key, value]) => {
      const li = document.createElement('li');
      li.innerHTML = `<span>${key}</span><strong>${value}</strong>`;
      summaryList.append(li);
    });
  }
  if (stickyWhatsapp) stickyWhatsapp.href = whatsappUrl();
}

function validateForm() {
  const values = getValues();
  const name = orderForm.querySelector('[name="name"]');
  const contact = orderForm.querySelector('[name="contact"]');
  [name, contact].forEach((field) => field?.removeAttribute('aria-invalid'));
  if (!values.name) {
    name?.setAttribute('aria-invalid', 'true');
    name?.focus();
    formStatus.textContent = 'تکایە ناوت بنووسە.';
    return false;
  }
  if (!values.contact) {
    contact?.setAttribute('aria-invalid', 'true');
    contact?.focus();
    formStatus.textContent = 'تکایە ژمارە یان ئیمەیڵ بنووسە.';
    return false;
  }
  return true;
}

if (year) year.textContent = new Date().getFullYear();
updateProgress();
window.addEventListener('scroll', updateProgress, { passive: true });
window.addEventListener('resize', updateProgress);

menuButton?.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menu?.classList.toggle('open', !isOpen);
});

document.querySelectorAll('.site-menu a').forEach((link) => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeMenu(); });

if ('IntersectionObserver' in window && !reducedMotion) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });
  document.querySelectorAll('.reveal').forEach((item) => observer.observe(item));
} else {
  document.querySelectorAll('.reveal').forEach((item) => item.classList.add('visible'));
}

orderForm?.addEventListener('input', updateSummary);
orderForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!validateForm()) return;
  formStatus.textContent = 'داواکارییەکەت ئامادەیە؛ WhatsApp دەکرێتەوە.';
  window.open(whatsappUrl(), '_blank', 'noopener,noreferrer');
});
copyOrder?.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(orderText());
    formStatus.textContent = 'وردەکارییەکان کۆپی کران.';
  } catch {
    formStatus.textContent = orderText();
  }
});

updateSummary();
