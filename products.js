
const products = [
  {
    id: 1,
    name: "Fighter Jet S24 RC Drone",
    category: "খেলনা ও RC",
    price: null,
    image: "",
    supplierUrl: "https://badhonsworld.com/",
    description: "দাম ও স্টক জানতে WhatsApp-এ যোগাযোগ করুন।"
  },
  {
    id: 2,
    name: "Good Cool D301 Power Bank",
    category: "পাওয়ার ও চার্জিং",
    price: null,
    image: "",
    supplierUrl: "https://badhonsworld.com/",
    description: "দাম ও স্টক জানতে WhatsApp-এ যোগাযোগ করুন।"
  }
];

function getWhatsAppOrderLink(product) {
  const message = `আমি ${product.name} অর্ডার করতে চাই। বর্তমান দাম ও স্টক জানাবেন?`;
  return `https://wa.me/8801929863092?text=${encodeURIComponent(message)}`;
}
