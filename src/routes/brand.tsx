import { createFileRoute } from "@tanstack/react-router";
import SyneBrandGuide from "../SyneBrandGuide";

export const Route = createFileRoute("/brand")({
  head: () => ({
    meta: [{ title: "Syne Brand Guideline" }],
  }),
  component: BrandPage,
});

function BrandPage() {
  return <SyneBrandGuide />;
}
