import Kiosk from "../imports/Kiosk";

export function KioskPreview() {
  return (
    <div className="w-full h-full pointer-events-none">
      <Kiosk />
    </div>
  );
}
