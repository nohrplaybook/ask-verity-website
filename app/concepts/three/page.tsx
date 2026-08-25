import type { Metadata } from "next";
import { VerityLanding } from "../../page";

export const metadata: Metadata = {
  title: "Concept 03 — Operational Leverage",
  robots: { index: false, follow: false },
};

export default function LeverageConcept() {
  return <VerityLanding version="leverage" previewMode />;
}
