import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Chip } from "@/components/ui/chip";
import { Container } from "@/components/ui/container";
import { Input } from "@/components/ui/input";

export default function DesignPage() {
  return (
    <Container className="space-y-8 py-10">
      <h1 className="text-3xl font-bold">Design preview</h1>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Buttons</h2>
        <div className="flex flex-wrap gap-3">
          <Button variant="primary">Primary</Button>
          <Button>Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="primary" disabled>Disabled</Button>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Chips</h2>
        <div className="flex flex-wrap gap-3">
          <Chip>Graduate</Chip>
          <Chip tone="success">Eligible</Chip>
          <Chip tone="warning">5 days left</Chip>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Card and input</h2>
        <Card className="max-w-md space-y-3">
          <h3 className="text-lg font-semibold">Search jobs</h3>
          <p className="text-muted">Muted helper text sits here.</p>
          <Input placeholder="Search SSC, Railway, Police..." aria-label="Search jobs" />
        </Card>
      </section>
    </Container>
  );
}