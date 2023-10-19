import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from "../assets/icons";
import {
  bigShoe1,
  bigShoe2,
  bigShoe3,
  customer1,
  customer2,
  shoe4,
  shoe5,
  shoe6,
  shoe7,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3,
} from "../assets/images";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about-us", label: "About Us" },
  { href: "#products", label: "Products" },
  { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
  {
    thumbnail: thumbnailShoe1,
    bigShoe: bigShoe1,
  },
  {
    thumbnail: thumbnailShoe2,
    bigShoe: bigShoe2,
  },
  {
    thumbnail: thumbnailShoe3,
    bigShoe: bigShoe3,
  },
];

export const statistics = [
  { value: "1k+", label: "Brands" },
  { value: "500+", label: "Shops" },
  { value: "250k+", label: "Customers" },
];

export const products = [
  {
    imgURL: shoe4,
    name: "Fast-R Nitro Elite",
    price: "230 €",
    rating: 4.6,
  },
  {
    imgURL: shoe5,
    name: "Disperse XT-3",
    price: "39 €",
    rating: 4.9,
  },
  {
    imgURL: shoe6,
    name: "Delphin",
    price: "90 €",
    rating: 4.3,
  },
  {
    imgURL: shoe7,
    name: "RS X-Efekt Perforated",
    price: "130 €",
    rating: 5.0,
  },
];

export const services = [
  {
    imgURL: truckFast,
    label: "Kostenloser Versand",
    subtext:
      "Genießen Sie nahtloses Einkaufen mit unserem kostenlosen Versandservice.",
  },
  {
    imgURL: shieldTick,
    label: "Sichere Zahlung",
    subtext:
      "Erleben Sie sorgenfreie Transaktionen mit unseren sicheren Zahlungsoptionen.",
  },
  {
    imgURL: support,
    label: "Wir helfen Ihnen gerne",
    subtext:
      "Unser engagiertes Team steht Ihnen auf jedem Schritt des Weges zur Verfügung.",
  },
];

export const reviews = [
  {
    imgURL: customer1,
    customerName: "Morich Brown",
    rating: 4.6,
    feedback:
      "Die Liebe zum Detail und die Qualität des Produkts haben meine Erwartungen übertroffen. Sehr empfehlenswert!",
  },
  {
    imgURL: customer2,
    customerName: "Lota Mongeskar",
    rating: 4.2,
    feedback:
      "Das Produkt hat nicht nur meine Erwartungen erfüllt, sondern sie auch übertroffen. ",
  },
];

export const footerLinks = [
  {
    title: "Produkte",
    links: [
      { name: "Sneakers", link: "/" },
      { name: "Terrace", link: "/" },
      { name: "Laufen", link: "/" },
      { name: "Fußball", link: "/" },
      { name: "Training", link: "/" },
      { name: "Basketball", link: "/" },
      { name: "Hallenschuhe", link: "/" },
      { name: "Sicherheitsschuhe", link: "/" },
      { name: "Winterschuhe", link: "/" },
    ],
  },
  {
    title: "Hilfe",
    links: [
      { name: "Über uns", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "Wie es funktioniert", link: "/" },
      { name: "Datenschutzrichtlinie", link: "/" },
      { name: "Zahlungsrichtlinie", link: "/" },
    ],
  },
  {
    title: "Kontakt",
    links: [
      { name: "service@puma.com", link: "mailto:service@puma.com" },
      { name: "tel: 09132741720", link: "tel:09132741720" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];
