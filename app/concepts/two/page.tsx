import type { Metadata } from "next";
import { VerityLanding } from "../../page";

export const metadata: Metadata = {
  title: "Concept 02 — Human Relief",
  robots: { index: false, follow: false },
};

export default function ReliefConcept() {
  return <VerityLanding version="relief" previewMode />;
}

