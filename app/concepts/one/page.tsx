import type { Metadata } from "next";
import { VerityLanding } from "../../page";

export const metadata: Metadata = {
  title: "Concept 01 — Direct Category Clarity",
  robots: { index: false, follow: false },
};

export default function DirectConcept() {
  return <VerityLanding version="direct" previewMode />;
}

