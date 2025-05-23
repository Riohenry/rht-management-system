import Container from "@/components/container";
import { TopNav } from "@/components/nav";

export default function TicketLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <TopNav title="appointments" />
      <main>
        <Container>{children}</Container>
      </main>
    </>
  );
}
