import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { SecondaryMarket } from "@/components/Layouts/SecondaryMarket";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mercado Secundário",
};

export default function SecondaryMarketPage() {
  return (
    <DefaultLayout>
      <SecondaryMarket />
    </DefaultLayout>
  );
}
