import { ImageWithFallback } from "./figma/ImageWithFallback";

export function KioskPreview() {
  return (
    <div className="w-full h-full pointer-events-none">
      <ImageWithFallback 
        src="https://images.unsplash.com/photo-1641567535859-c58187ac4954?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraW9zayUyMGludGVyZmFjZSUyMHNjcmVlbnxlbnwxfHx8fDE3NjMyODcwMDN8MA&ixlib=rb-4.1.0&q=80&w=1080"
        alt="SiO Kiosk Interface Preview"
        className="w-full h-full object-cover rounded-lg"
      />
    </div>
  );
}
