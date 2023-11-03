import { Box, Button, Container, Flex, Heading } from "@radix-ui/themes";
import { MdPets } from "react-icons/md";
import React from "react";
import Link from "next/link";

const Links = [
  { label: "Home", link: "/" },
  { label: "About", link: "/about" },
  { label: "Contact", link: "/contact" },
  { label: "Search", link: "/search" },
];

const NavBar = () => {
  return (
    <Flex className="h-16 border-b">
      <Container>
        <Flex className="h-16">
          <Flex className="w-1/6" align={"center"} justify={"start"}>
            <MdPets className="text-2xl mr-2 text-[var(--violet-a11)]" />
          </Flex>
          <Flex className="w-2/3" gap={"7"} align={"center"} justify={"center"}>
            {Links.map(({ label, link }) => (
              <Link
                href={link}
                key={link}
                className="hover:text-[var(--violet-a11)] transition-all"
              >
                {label}
              </Link>
            ))}
          </Flex>
          <Flex className="w-1/6" align={"center"} justify={"end"} gap={"2"}>
            <Link href={"/login"}>
              <Button>Login</Button>
            </Link>
            <Link href={"/register"}>
              <Button>Register</Button>
            </Link>
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
};

export default NavBar;
