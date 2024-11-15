"use client";

import { IconSearch } from "justd-icons";
import { Button, Navbar } from "./ui";

export function AppNavbar({
  children,
  ...props
}: React.ComponentProps<typeof Navbar>) {
  return (
    <Navbar intent="floating" isSticky {...props}>
      <Navbar.Nav>
        <Navbar.Logo href="/">
          <img
            src="https://www.octacom.fr/images/logo.svg"
            alt="Octacom"
            width={150}
          />
        </Navbar.Logo>
        <Navbar.Section>
          <Navbar.Item href="/">Home</Navbar.Item>
          <Navbar.Item href="/test">Test</Navbar.Item>
        </Navbar.Section>
      </Navbar.Nav>
      <Navbar.Compact>
        <Navbar.Flex className="w-full justify-between">
          <Navbar.Flex>
            <Button
              appearance="plain"
              aria-label="Search for products"
              size="square-petite"
            >
              <IconSearch />
            </Button>
          </Navbar.Flex>
          <Navbar.Flex>
            <Navbar.Trigger />
          </Navbar.Flex>
        </Navbar.Flex>
      </Navbar.Compact>
      <Navbar.Inset>{children}</Navbar.Inset>
    </Navbar>
  );
}
