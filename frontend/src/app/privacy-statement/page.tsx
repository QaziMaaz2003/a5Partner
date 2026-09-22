import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { privacyBlocks } from "@/content/legal";

export const metadata: Metadata = {
  title: "Privacy Statement",
  description:
    "The Privacy Statement and Policy for A5 Partners LLC and its affiliates.",
};

export default function PrivacyStatementPage() {
  return (
    <LegalPage kicker="Legal" title="PRIVACY STATEMENT" blocks={privacyBlocks} />
  );
}
