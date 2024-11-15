import { createLazyFileRoute } from "@tanstack/react-router";
import { Heading } from "../components/ui";

export const Route = createLazyFileRoute("/test")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Heading>Test</Heading>;
}
