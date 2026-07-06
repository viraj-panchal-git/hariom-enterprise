export function cn(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(" ");
}

export function getWhatsAppUrl(message: string) {
  return `https://wa.me/919428116410?text=${encodeURIComponent(message)}`;
}

export function getTelUrl(phone: string) {
  return `tel:${phone.replace(/\s/g, "")}`;
}

export function getDirectionsUrl(lat: number, lng: number) {
  return `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
}

export function getMapEmbedUrl(lat: number, lng: number) {
  return `https://maps.google.com/maps?q=${lat},${lng}&z=16&output=embed`;
}
