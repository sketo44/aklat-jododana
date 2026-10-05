// Jododana site: language toggle, menu rendering, booking hand-off.
document.documentElement.classList.add("js");

const BOOKING_WHATSAPP = "966503844000"; // events line from the restaurant's Snapchat; confirm with owner.

const T = {
  ar: {
    "meta.title.home": "أكلات جدودنا | مطعم شعبي في بريدة",
    "meta.title.menu": "المنيو | أكلات جدودنا",
    "meta.title.book": "الحجز | أكلات جدودنا",
    "brand": "أكلات جدودنا",
    "nav.home": "الرئيسية", "nav.menu": "المنيو", "nav.book": "الحجز", "lang": "English",
    "hero.lead": "أكلات القصيم الشعبية في بيت طين نجدي ببريدة: جريش، قرصان، مندي، وصاجيات على الفحم.",
    "cta.book": "احجز طاولة", "cta.directions": "الاتجاهات", "cta.menu": "المنيو كامل",
    "dishes.title": "من سفرة جدودنا",
    "dishes.lead": "أطباق من المنيو بأسعارها الحالية.",
    "house.title": "بيت طين، وسفرة عامرة",
    "house.lead": "المكان مبني على طراز البيوت النجدية القديمة: جدران طين، وسقف خشب وجريد، ونقش المثلثات على الواجهة. تجي العايلة وتقعد على راحتها.",
    "house.f1": "فرعين في بريدة", "house.f1s": "الفايزية على طريق الملك سعود، وسلطانة على طريق الملك سلمان.",
    "house.f2": "مناسبات وبوفيهات", "house.f2s": "ولائم وبوفيه مفتوح للمناسبات، اتصل على خط المناسبات.",
    "house.f3": "طبخ على الفحم", "house.f3s": "المشاوي تنشوى على الفحم وتقدم في صواني نحاس.",
    "branches.title": "الفروع",
    "b.fayziah": "فرع الفايزية", "b.fayziah.addr": "طريق الملك سعود، حي الفايزية",
    "b.sultanah": "فرع سلطانة", "b.sultanah.addr": "طريق الملك سلمان، حي سلطانة",
    "b.addr": "العنوان", "b.phone": "الهاتف", "b.hours": "الدوام",
    "b.fayziah.hours": "يقفل ١٢ منتصف الليل", "b.sultanah.hours": "من بعد الفجر إلى ١ الفجر",
    "b.call": "اتصال",
    "callout.title": "عندك عزيمة أو طلعة عايلة؟",
    "callout.lead": "احجز طاولتك أو مناسبتك قبل لا تجي، ونجهز لك المكان.",
    "events.line": "خط المناسبات",
    "footer.about": "مطعم شعبي في بريدة يقدم أكلات القصيم ونجد.",
    "footer.visit": "زورونا", "footer.follow": "تابعونا", "footer.rights": "أكلات جدودنا، بريدة",
    "menu.title": "المنيو",
    "menu.lead": "أكلات شعبية ومشاوي وصاجيات وحلا. الأسعار بالريال السعودي حسب المنيو الحالي وقد تتغير.",
    "menu.note": "بعض الأصناف متوفرة في الفرع فقط. اسأل الموظف عن أصناف اليوم.",
    "menu.half": "نص", "menu.whole": "حبة", "menu.small": "صغير", "menu.large": "كبير",
    "sar": "ر.س",
    "book.title": "الحجز",
    "book.lead": "عبّ الطلب ونرسله لنا على واتساب. نأكد معك الحجز بأقرب وقت.",
    "f.name": "الاسم", "f.phone": "رقم الجوال", "f.phone.hint": "مثال: 05xxxxxxxx",
    "f.branch": "الفرع", "f.type": "نوع الحجز",
    "f.type.table": "طاولة", "f.type.table.s": "عايلة أو أصحاب",
    "f.type.event": "مناسبة", "f.type.event.s": "عزيمة أو بوفيه",
    "f.date": "التاريخ", "f.time": "الوقت", "f.guests": "عدد الأشخاص", "f.notes": "ملاحظات",
    "f.notes.ph": "مثال: نبي جلسة أرضية، أو عندنا طفل صغير",
    "f.minus": "إنقاص", "f.plus": "زيادة",
    "f.submit": "أرسل الطلب عبر واتساب",
    "f.small": "يفتح واتساب برسالة جاهزة. الحجز ما يتأكد إلا بعد ردنا عليك.",
    "e.name": "اكتب اسمك.", "e.phone": "اكتب رقم جوال سعودي يبدأ بـ 05 ومكون من ١٠ أرقام.",
    "e.date": "اختر تاريخ اليوم أو بعده.", "e.time": "اختر وقت الحجز.", "e.guests": "العدد من ١ إلى ٢٠٠.",
    "done.title": "فتحنا لك واتساب", "done.lead": "أرسل الرسالة الجاهزة، ونرد عليك نأكد الحجز. لو ما فتح واتساب، اتصل علينا مباشرة.",
    "done.again": "طلب حجز جديد",
    "aside.title": "تفضّل الاتصال؟",
    "d.jareesh": "جريش", "d.mandi": "لحم مندي", "d.mixed": "مشكل أكلات جدودنا", "d.qursan": "قرصان", "d.sajiya": "صاجية جدودنا", "d.kunafa": "كنافة قشطة",
    "order.add": "أضف", "order.bar": "طلبي", "order.items": "أصناف", "order.view": "عرض طلبي",
    "order.title": "طلبي", "order.lead": "قائمة لك تعرضها على الموظف وقت الطلب. ما تنرسل لأي أحد، وتبقى محفوظة في جوالك.",
    "order.total": "المجموع التقريبي", "order.clear": "مسح الكل", "order.close": "إغلاق", "order.empty": "ما أضفت شي للحين. اضغط أضف جنب أي طبق.",
    "order.less": "إنقاص", "order.more": "زيادة", "order.confirmClear": "متأكد تبي تمسح الطلب كامل؟",
    "wa.head": "طلب حجز من الموقع", "wa.name": "الاسم", "wa.phone": "الجوال", "wa.branch": "الفرع",
    "wa.type": "النوع", "wa.date": "التاريخ", "wa.time": "الوقت", "wa.guests": "عدد الأشخاص", "wa.notes": "ملاحظات"
  },
  en: {
    "meta.title.home": "Jododana | Traditional Restaurant in Buraydah",
    "meta.title.menu": "Menu | Jododana",
    "meta.title.book": "Reservations | Jododana",
    "brand": "Jododana",
    "nav.home": "Home", "nav.menu": "Menu", "nav.book": "Book", "lang": "العربية",
    "hero.lead": "Qassim home cooking in a Najdi mud-brick house in Buraydah: jareesh, qursan, mandi, and charcoal sajiya.",
    "cta.book": "Book a table", "cta.directions": "Directions", "cta.menu": "Full menu",
    "dishes.title": "From our grandparents' table",
    "dishes.lead": "Dishes from the menu at today's prices.",
    "house.title": "A mud house, a generous table",
    "house.lead": "The restaurant is built like the old Najdi houses: mud walls, a timber and palm-frond ceiling, and the triangle frieze on the facade. Families come and settle in.",
    "house.f1": "Two branches in Buraydah", "house.f1s": "Al-Fayziah on King Saud Road, and Sultanah on King Salman Road.",
    "house.f2": "Events and buffets", "house.f2s": "Feasts and open buffets for occasions. Call the events line.",
    "house.f3": "Cooked over charcoal", "house.f3s": "Grills are cooked over charcoal and served in brass trays.",
    "branches.title": "Branches",
    "b.fayziah": "Al-Fayziah branch", "b.fayziah.addr": "King Saud Road, Al-Fayziah",
    "b.sultanah": "Sultanah branch", "b.sultanah.addr": "King Salman Road, Sultanah",
    "b.addr": "Address", "b.phone": "Phone", "b.hours": "Hours",
    "b.fayziah.hours": "Closes at midnight", "b.sultanah.hours": "After Fajr until 1 AM",
    "b.call": "Call",
    "callout.title": "Planning a family outing or a feast?",
    "callout.lead": "Book your table or event before you come, and we will have the place ready.",
    "events.line": "Events line",
    "footer.about": "A traditional restaurant in Buraydah serving the food of Qassim and Najd.",
    "footer.visit": "Visit", "footer.follow": "Follow", "footer.rights": "Jododana, Buraydah",
    "menu.title": "Menu",
    "menu.lead": "Traditional dishes, grills, sajiya and sweets. Prices in Saudi riyals from the current menu and may change.",
    "menu.note": "Some items are available in the restaurant only. Ask the staff for today's dishes.",
    "menu.half": "Half", "menu.whole": "Whole", "menu.small": "Small", "menu.large": "Large",
    "sar": "SAR",
    "book.title": "Reservations",
    "book.lead": "Fill in the request and send it to us on WhatsApp. We will confirm your booking as soon as we can.",
    "f.name": "Name", "f.phone": "Mobile number", "f.phone.hint": "Example: 05xxxxxxxx",
    "f.branch": "Branch", "f.type": "Booking type",
    "f.type.table": "Table", "f.type.table.s": "Family or friends",
    "f.type.event": "Event", "f.type.event.s": "Feast or buffet",
    "f.date": "Date", "f.time": "Time", "f.guests": "Guests", "f.notes": "Notes",
    "f.notes.ph": "Example: floor seating, or we have a small child",
    "f.minus": "Decrease", "f.plus": "Increase",
    "f.submit": "Send request on WhatsApp",
    "f.small": "Opens WhatsApp with a ready message. Your booking is confirmed only after we reply.",
    "e.name": "Enter your name.", "e.phone": "Enter a Saudi mobile number: 10 digits starting with 05.",
    "e.date": "Choose today or a later date.", "e.time": "Choose a time.", "e.guests": "Guests must be 1 to 200.",
    "done.title": "WhatsApp is open", "done.lead": "Send the ready message and we will reply to confirm. If WhatsApp did not open, call us directly.",
    "done.again": "New booking request",
    "aside.title": "Prefer to call?",
    "d.jareesh": "Jareesh", "d.mandi": "Lamb mandi", "d.mixed": "Jododana mixed grill", "d.qursan": "Qursan", "d.sajiya": "Jododana sajiya", "d.kunafa": "Kunafa with cream",
    "order.add": "Add", "order.bar": "My order", "order.items": "items", "order.view": "View order",
    "order.title": "My order", "order.lead": "A list to show the staff when you order. It is not sent anywhere and stays saved on your phone.",
    "order.total": "Estimated total", "order.clear": "Clear all", "order.close": "Close", "order.empty": "Nothing added yet. Tap Add next to any dish.",
    "order.less": "Decrease", "order.more": "Increase", "order.confirmClear": "Clear the whole order?",
    "wa.head": "Booking request from the website", "wa.name": "Name", "wa.phone": "Mobile", "wa.branch": "Branch",
    "wa.type": "Type", "wa.date": "Date", "wa.time": "Time", "wa.guests": "Guests", "wa.notes": "Notes"
  }
};

// Menu: real items and regular prices from the restaurant's delivery menu.
const MENU = [
  { id: "qassim", ar: "قصيميات", en: "Qassim classics", items: [
    { img: "jareesh", wide: true, ar: ["جريش", "قمح لقيمي مجروش مع مرقة الدجاج والكمون واللبن، يقدم ساخن مع الزبدة أو السمن البري."], en: ["Jareesh", "Cracked Luqaimi wheat with chicken broth, cumin and laban, served hot with butter or wild ghee."], p: [10] },
    { img: "qursan", ar: ["قرصان", "رقائق الخبز مع مرقة الخضار."], en: ["Qursan", "Thin bread leaves in a vegetable broth."], p: [10] }
  ]},
  { id: "meat", ar: "اللحوم", en: "Meat", items: [
    { img: "lamb-mandi", wide: true, ar: ["لحم مندي", "لحم تيس محلي طازج مع الأرز."], en: ["Lamb mandi", "Fresh local goat with rice."], p: [99] },
    { img: "lamb-hashi", ar: ["لحم حاشي", "لحم حاشي طازج مع الأرز."], en: ["Camel (hashi)", "Fresh young camel with rice."], p: [70] }
  ]},
  { id: "chicken", ar: "دجاج", en: "Chicken", items: [
    { img: "chicken-mandi", ar: ["دجاج مندي", "دجاج المندي المميز مع الأرز."], en: ["Chicken mandi", "Our mandi chicken with rice."], p: [36, 64], v: "hw" },
    { img: "chicken-shawaya", ar: ["دجاج شواية", "دجاج بالتتبيلة المميزة مطهو على الشواء."], en: ["Grilled chicken", "Chicken in our marinade, cooked on the grill."], p: [36, 64], v: "hw" },
    { img: "musahhab", ar: ["دجاج مسحب حراق", "دجاج حار متبل بدون عظم."], en: ["Spicy boneless chicken", "Hot marinated chicken, boneless."], p: [36, 64], v: "sl" }
  ]},
  { id: "grills", ar: "المشاوي", en: "Grills", items: [
    { img: "jododana-mixed", wide: true, ar: ["مشكل أكلات جدودنا", "تشكيلة من الدجاج واللحم بتتبيلة جدودنا، مطهية على الفحم."], en: ["Jododana mixed grill", "Chicken and lamb in our house marinade, cooked over charcoal."], p: [69] },
    { img: "mixed-grill", ar: ["مشاوي مشكلة", "تشكيلة من المشاوي المتبلة."], en: ["Mixed grill", "A selection of marinated grills."], p: [36] },
    { img: "lamb-awsal", ar: ["أوصال لحم", "أسياخ لحم متبلة مع خضار مشوية."], en: ["Lamb tikka", "Marinated lamb skewers with grilled vegetables."], p: [38] },
    { img: "shish-tawook", ar: ["شيش طاووق", "قطع دجاج الطاووق المشوي."], en: ["Shish tawook", "Grilled chicken tawook pieces."], p: [33] },
    { img: "lamb-kebab", ar: ["كباب لحم", "لحم مفروم متبل ومشوي بالطريقة التقليدية."], en: ["Lamb kebab", "Minced lamb, seasoned and grilled the traditional way."], p: [33] },
    { img: "chicken-kebab", ar: ["كباب دجاج", "أسياخ دجاج مفروم متبلة ومشوية على الفحم."], en: ["Chicken kebab", "Minced chicken skewers grilled over charcoal."], p: [30] }
  ]},
  { id: "sajiya", ar: "صاجيات", en: "Sajiya", items: [
    { img: "sajiya-jododana", wide: true, ar: ["صاجية جدودنا", "وصفة تراثية أصيلة."], en: ["Jododana sajiya", "Our heritage recipe on the saj."], p: [85] },
    { img: "sajiya-lamb", ar: ["صاجية لحم", "لحم طازج مليء بالنكهات."], en: ["Lamb sajiya", "Fresh lamb, full of flavour."], p: [66] },
    { img: "sajiya-chicken", ar: ["صاجية دجاج", ""], en: ["Chicken sajiya", ""], p: [54] }
  ]},
  { id: "stews", ar: "إيدامات وشوربة", en: "Stews and soup", items: [
    { img: "bamia", ar: ["بامية", "بامية طازجة مطهية مع صلصة الطماطم."], en: ["Okra stew", "Fresh okra cooked in tomato sauce."], p: [10] },
    { img: "lentil-soup", ar: ["شوربة عدس", "عدس مطبوخ مع الأعشاب والبهارات."], en: ["Lentil soup", "Lentils cooked with herbs and spices."], p: [10] },
    { img: "macaroni", ar: ["مكرونة بالباشميل", "مكرونة مطبوخة بصلصة الباشميل والجبن."], en: ["Macaroni béchamel", "Pasta baked in béchamel and cheese."], p: [20] }
  ]},
  { id: "salads", ar: "السلطات", en: "Salads", items: [
    { img: "fattoush", ar: ["فتوش", "خضار مشكلة مع قطع الخبز المقلية."], en: ["Fattoush", "Mixed vegetables with fried bread."], p: [12] },
    { img: "tabbouleh", ar: ["تبولة", "بقدونس مفروم وطماطم ونعناع وبصل وبرغل منقوع."], en: ["Tabbouleh", "Chopped parsley, tomato, mint, onion and soaked bulgur."], p: [12] },
    { img: "green-salad", ar: ["سلطة خضراء", "سلطة خضراء متنوعة."], en: ["Green salad", "Mixed green salad."], p: [10] },
    { img: "masqaa", ar: ["مسقعة", "باذنجان مع اللحم المبهّر وصوص الطماطم."], en: ["Musaqa'a", "Aubergine with spiced meat and tomato sauce."], p: [10] }
  ]},
  { id: "sweets", ar: "الحلويات", en: "Sweets", items: [
    { img: "kunafa", ar: ["كنافة قشطة", "خيوط عجين بالسمن والسكر، محشوة بالقشطة."], en: ["Kunafa with cream", "Pastry threads with ghee and sugar, filled with qishta."], p: [12] },
    { img: "muhallabia", ar: ["مهلبية", "مهلبية جدودنا المميزة."], en: ["Muhallabia", "Our house milk pudding."], p: [8] },
    { img: "creme-caramel", ar: ["كريم كراميل", "كاسترد مع طبقة صلصة الكراميل."], en: ["Crème caramel", "Custard under a clear caramel layer."], p: [8] }
  ]},
  { id: "drinks", ar: "المشروبات والألبان", en: "Drinks and dairy", plain: true, items: [
    { ar: ["لبن"], en: ["Laban"], p: [3.5] },
    { ar: ["زبادي"], en: ["Yoghurt"], p: [2] },
    { ar: ["ببسي"], en: ["Pepsi"], p: [4] },
    { ar: ["سفن أب"], en: ["7UP"], p: [4] },
    { ar: ["ديو"], en: ["Mountain Dew"], p: [4] },
    { ar: ["حمضيات"], en: ["Mirinda Citrus"], p: [4] },
    { ar: ["ماء صغير"], en: ["Small water"], p: [1] }
  ]}
];

const getLang = () => { try { return localStorage.getItem("lang") || "ar"; } catch { return "ar"; } };
const setStoredLang = (l) => { try { localStorage.setItem("lang", l); } catch {} };
const toArabicDigits = (s) => String(s).replace(/\d/g, (d) => "٠١٢٣٤٥٦٧٨٩"[d]).replace(".", "٫");
const fmtNum = (n, lang) => (lang === "ar" ? toArabicDigits(n) : String(n));
const priceHTML = (n, lang) => `<span class="price num">${fmtNum(n, lang)}<small> ${T[lang].sar}</small></span>`;

function applyLang(lang) {
  const html = document.documentElement;
  html.lang = lang; html.dir = lang === "ar" ? "rtl" : "ltr";
  document.querySelectorAll("[data-i18n]").forEach((el) => { const v = T[lang][el.dataset.i18n]; if (v != null) el.textContent = v; });
  document.querySelectorAll("[data-i18n-ph]").forEach((el) => { el.placeholder = T[lang][el.dataset.i18nPh] || ""; });
  document.querySelectorAll("[data-i18n-label]").forEach((el) => { el.setAttribute("aria-label", T[lang][el.dataset.i18nLabel] || ""); });
  const t = document.body.dataset.title; if (t) document.title = T[lang][t];
  document.querySelectorAll("[data-price]").forEach((el) => { el.innerHTML = priceHTML(el.dataset.price, lang); });
  renderMenu(lang);
}

function renderMenu(lang) {
  const root = document.getElementById("menu");
  const rail = document.getElementById("cats");
  if (!root || !rail) return;
  const vLabel = { hw: ["menu.half", "menu.whole"], sl: ["menu.small", "menu.large"] };
  rail.innerHTML = MENU.map((c) => `<li><a href="#${c.id}">${c[lang]}</a></li>`).join("");
  const addBtn = (key, label) => {
    const q = order[key] || 0;
    return `<button type="button" class="add${q ? " has" : ""}" data-key="${key}" aria-label="${T[lang]["order.add"]}: ${label}"><i class="ph ph-plus" aria-hidden="true"></i><span>${q ? fmtNum(q, lang) : T[lang]["order.add"]}</span></button>`;
  };
  root.innerHTML = MENU.map((c) => {
    const body = c.plain
      ? `<ul class="plain-list">${c.items.map((i, n) => `<li><strong>${i[lang][0]}</strong><span class="pl-right">${priceHTML(i.p[0], lang)}${addBtn(`${c.id}:${n}:0`, i[lang][0])}</span></li>`).join("")}</ul>`
      : `<div class="menu-grid">${c.items.map((i, n) => {
          const prices = i.p.map((p, k) => {
            const lbl = i.v ? T[lang][vLabel[i.v][k]] : "";
            return `<span class="pv">${lbl ? `<em>${lbl}</em>` : ""}${priceHTML(p, lang)}${addBtn(`${c.id}:${n}:${k}`, `${i[lang][0]}${lbl ? " " + lbl : ""}`)}</span>`;
          }).join("");
          return `<article class="item${i.wide ? " item--wide" : ""}">
            <div class="item__img"><img src="assets/dishes/${i.img}.jpg" alt="${i[lang][0]}" loading="lazy" width="591" height="334"></div>
            <div class="item__body"><h3>${i[lang][0]}</h3>${i[lang][1] ? `<p>${i[lang][1]}</p>` : ""}<div class="item__prices">${prices}</div></div>
          </article>`;
        }).join("")}</div>`;
    return `<section class="menu-cat" id="${c.id}" aria-labelledby="h-${c.id}"><div class="menu-cat__head"><h2 id="h-${c.id}">${c[lang]}</h2></div>${body}</section>`;
  }).join("") + `<p class="menu-note">${T[lang]["menu.note"]}</p>`;
  trackCats();
  renderOrder(lang);
}

// Order notes: a personal list shown to the waiter, saved on this device only.
const VLABEL = { hw: ["menu.half", "menu.whole"], sl: ["menu.small", "menu.large"] };
let order = (() => { try { return JSON.parse(localStorage.getItem("order") || "{}") || {}; } catch { return {}; } })();
const saveOrder = () => { try { localStorage.setItem("order", JSON.stringify(order)); } catch {} };

function lookup(key, lang) {
  const [cid, n, k] = key.split(":");
  const cat = MENU.find((x) => x.id === cid); const it = cat && cat.items[+n];
  if (!it || it.p[+k] == null) return null;
  const lbl = it.v ? T[lang][VLABEL[it.v][+k]] : "";
  return { name: it[lang][0], variant: lbl, price: it.p[+k] };
}
function setQty(key, q) {
  if (q <= 0) delete order[key]; else order[key] = Math.min(q, 99);
  saveOrder();
  const lang = getLang();
  document.querySelectorAll(`.add[data-key="${key}"]`).forEach((b) => {
    const v = order[key] || 0;
    b.classList.toggle("has", !!v);
    b.querySelector("span").textContent = v ? fmtNum(v, lang) : T[lang]["order.add"];
    if (v) { b.classList.remove("bump"); void b.offsetWidth; b.classList.add("bump"); }
  });
  renderOrder(lang);
}
function renderOrder(lang) {
  const bar = document.getElementById("orderbar");
  if (!bar) return;
  const lines = Object.entries(order).map(([k, q]) => ({ k, q, ...lookup(k, lang) })).filter((l) => l.name);
  const count = lines.reduce((s, l) => s + l.q, 0);
  bar.hidden = !count;
  document.body.classList.toggle("has-orderbar", !!count);
  bar.querySelector("[data-count]").textContent = `${fmtNum(count, lang)} ${T[lang]["order.items"]}`;
  const list = document.getElementById("order-list");
  list.innerHTML = lines.length ? lines.map((l) => `<li>
      <div class="ol-name"><b>${l.name}</b>${l.variant ? `<span>${l.variant}</span>` : ""}</div>
      <div class="ol-qty">
        <button type="button" data-q="${l.k}" data-d="-1" aria-label="${T[lang]["order.less"]}: ${l.name}"><i class="ph ${l.q === 1 ? "ph-trash" : "ph-minus"}" aria-hidden="true"></i></button>
        <output class="num">${fmtNum(l.q, lang)}</output>
        <button type="button" data-q="${l.k}" data-d="1" aria-label="${T[lang]["order.more"]}: ${l.name}"><i class="ph ph-plus" aria-hidden="true"></i></button>
      </div>
      ${priceHTML(l.price, lang)}
    </li>`).join("") : `<li class="ol-empty">${T[lang]["order.empty"]}</li>`;
}
function initOrder() {
  const bar = document.getElementById("orderbar");
  const sheet = document.getElementById("order-sheet");
  if (!bar || !sheet) return;
  document.getElementById("menu").addEventListener("click", (e) => {
    const b = e.target.closest(".add"); if (!b) return;
    setQty(b.dataset.key, (order[b.dataset.key] || 0) + 1);
  });
  // Non-modal panel: the page keeps scrolling and the add buttons keep working while it is open.
  // Plain element, not <dialog>, so it opens the same on every phone browser.
  const openSheet = () => { sheet.hidden = false; document.body.classList.add("has-sheet"); bar.classList.add("is-under"); sheet.querySelector("#order-close").focus({ preventScroll: true }); };
  const closeSheet = () => { sheet.hidden = true; document.body.classList.remove("has-sheet"); bar.classList.remove("is-under"); };
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !sheet.hidden) closeSheet(); });
  bar.querySelector("button").addEventListener("click", openSheet);
  sheet.addEventListener("click", (e) => {
    const q = e.target.closest("[data-q]");
    if (q) setQty(q.dataset.q, (order[q.dataset.q] || 0) + Number(q.dataset.d));
  });
  document.getElementById("order-close").addEventListener("click", closeSheet);
  document.getElementById("order-clear").addEventListener("click", () => {
    Object.keys(order).forEach((k) => delete order[k]); saveOrder(); renderMenu(getLang());
    closeSheet();
  });
  window.addEventListener("storage", (e) => { if (e.key === "order") { try { order = JSON.parse(e.newValue || "{}"); } catch { order = {}; } renderMenu(getLang()); } });
}


let catObserver;
function trackCats() {
  if (catObserver) catObserver.disconnect();
  const links = [...document.querySelectorAll("#cats a")];
  const byId = Object.fromEntries(links.map((a) => [a.hash.slice(1), a]));
  catObserver = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      links.forEach((a) => a.classList.remove("is-active"));
      const a = byId[e.target.id];
      if (a) { a.classList.add("is-active"); a.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" }); }
    });
  }, { rootMargin: "-150px 0px -60% 0px" });
  document.querySelectorAll(".menu-cat").forEach((s) => catObserver.observe(s));
}

function initReveal() {
  const els = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) { els.forEach((e) => e.classList.add("is-in")); return; }
  const io = new IntersectionObserver((entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); } }), { rootMargin: "0px 0px -8% 0px" });
  els.forEach((e) => io.observe(e));
}

function initBooking() {
  const form = document.getElementById("book-form");
  if (!form) return;
  const date = form.elements.date;
  const today = new Date(); today.setMinutes(today.getMinutes() - today.getTimezoneOffset());
  date.min = today.toISOString().slice(0, 10);
  const guests = form.elements.guests;
  form.querySelectorAll("[data-step]").forEach((b) => b.addEventListener("click", () => {
    const n = Math.min(200, Math.max(1, (parseInt(guests.value, 10) || 0) + Number(b.dataset.step)));
    guests.value = n;
  }));

  const rules = {
    name: (v) => v.trim().length >= 2,
    phone: (v) => /^05\d{8}$/.test(v.replace(/[\s-]/g, "").replace(/[٠-٩]/g, (d) => "٠١٢٣٤٥٦٧٨٩".indexOf(d))),
    date: (v) => !!v && v >= date.min,
    time: (v) => !!v,
    guests: (v) => +v >= 1 && +v <= 200
  };
  const check = (name) => {
    const field = form.elements[name].closest(".field");
    const ok = rules[name](form.elements[name].value);
    field.classList.toggle("is-invalid", !ok);
    form.elements[name].setAttribute("aria-invalid", String(!ok));
    return ok;
  };
  Object.keys(rules).forEach((n) => form.elements[n].addEventListener("blur", () => { if (form.elements[n].value) check(n); }));

  form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    const bad = Object.keys(rules).filter((n) => !check(n));
    if (bad.length) { form.elements[bad[0]].focus(); return; }
    const lang = getLang(), t = T[lang], f = form.elements;
    const branchKey = f.branch.value, typeKey = f.type.value;
    const lines = [
      t["wa.head"],
      `${t["wa.name"]}: ${f.name.value.trim()}`,
      `${t["wa.phone"]}: ${f.phone.value.trim()}`,
      `${t["wa.branch"]}: ${t[branchKey]}`,
      `${t["wa.type"]}: ${t[typeKey]}`,
      `${t["wa.date"]}: ${f.date.value}`,
      `${t["wa.time"]}: ${f.time.value}`,
      `${t["wa.guests"]}: ${f.guests.value}`
    ];
    if (f.notes.value.trim()) lines.push(`${t["wa.notes"]}: ${f.notes.value.trim()}`);
    window.open(`https://wa.me/${BOOKING_WHATSAPP}?text=${encodeURIComponent(lines.join("\n"))}`, "_blank", "noopener");
    form.querySelectorAll(".field, .form__submit").forEach((el) => (el.hidden = true));
    const done = document.getElementById("book-done");
    done.classList.add("is-shown"); done.focus();
  });

  document.getElementById("book-again")?.addEventListener("click", () => {
    form.reset();
    form.querySelectorAll(".field, .form__submit").forEach((el) => (el.hidden = false));
    document.getElementById("book-done").classList.remove("is-shown");
    form.elements.name.focus();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const lang = getLang();
  applyLang(lang);
  document.querySelectorAll(".lang").forEach((b) => b.addEventListener("click", () => {
    const next = document.documentElement.lang === "ar" ? "en" : "ar";
    setStoredLang(next); applyLang(next);
  }));
  initReveal();
  initBooking();
  initOrder();
});
