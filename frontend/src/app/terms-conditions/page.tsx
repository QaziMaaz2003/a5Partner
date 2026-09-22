import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { termsBlocks } from "@/content/legal";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and Conditions of Use for the A5 Partners website.",
};

export default function TermsConditionsPage() {
  return (
    <LegalPage kicker="Legal" title="TERMS & CONDITIONS" blocks={termsBlocks} />
  );
}
