import { createLazyFileRoute } from "@tanstack/react-router";
import { Heading } from "../components/ui";

export const Route = createLazyFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Heading>Home</Heading>;
}
