import { RideDetailClient } from "./RideDetailClient";

export function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }, { id: "5" }];
}

export default function RideDetailPage({ params }: { params: { id: string } }) {
  return <RideDetailClient id={params.id} />;
}
