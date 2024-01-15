import BasicHeader from "@/components/Header/BasicHeader";

export const metadata = {
  title:
    "Wholesale joblot pallets and clearance sales from all over the world | Merkandi B2B",
  description:
    "Merkandi is a tool for international wholesale traders, with many surplus and bankrupt stock offers, liquidation stocks and wholesale clearance deals.",
};

export default function RootLayout({ children }) {

  return (
    <>
      <BasicHeader />
      {children}
    </>
  );
}
