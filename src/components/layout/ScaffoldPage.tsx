import type { ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";

type ScaffoldPageProps = {
  title: string;
  description: string;
  children?: ReactNode;
};

export function ScaffoldPage({
  title,
  description,
  children,
}: ScaffoldPageProps) {
  return (
    <main id="main-content" className="flex-1 bg-cloud">
      <Container className="py-16 sm:py-20">
        <Heading level={1} eyebrow="Coming into focus">
          {title}
        </Heading>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-navy-muted">
          {description}
        </p>
        {children}
        <div className="mt-10 flex flex-wrap gap-3">
          <Button href="/quote">Get a Free Quote</Button>
          <Button href="/" variant="secondary">
            Back to home
          </Button>
        </div>
      </Container>
    </main>
  );
}
