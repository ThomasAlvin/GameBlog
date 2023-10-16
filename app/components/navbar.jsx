import { Box, Flex } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav
      class="navbar navbar-expand-lg pos-sticky"
      style={{
        backgroundColor: "white",
      }}
    >
      <div class="container-fluid mx-100">
        <Link class="navbar-brand" href="/">
          <Flex
            justifyContent={"center"}
            textAlign={"center"}
            alignItems={"center"}
            color={"black"}
            fontWeight={"900"}
            fontSize={{ base: "14px", lg: "16px", xl: "16px" }}
          >
            {" "}
            <Box
              mt={"-6px"}
              fontFamily={"times new roman"}
              fontSize={{ base: "28px", lg: "32px", xl: "32px" }}
              color={"#0030cc"}
            >
              T
            </Box>
            homson
          </Flex>
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarNavDropdown">
          <ul class="navbar-nav d-flex gap-5 justify-content-end w-100 mr-100">
            <li class="nav-item font-md">
              <Link class="nav-link active " aria-current="page" href="/">
                Home
              </Link>
            </li>
            <li class="nav-item font-md">
              <Link href="/about" class="nav-link">
                About
              </Link>
            </li>
            <li class="nav-item font-md">
              <a class="nav-link" href="#">
                Tier list
              </a>
            </li>
            <li class="nav-item dropdown font-md">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Game Blogs
              </a>
              <ul class="dropdown-menu font-sm">
                <li>
                  <Link class="dropdown-item" href="/games/blog/mobile-legends">
                    Mobile Legends
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" href="/games/blog/dota-2">
                    Dota 2
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" href="/games/blog/mindustry">
                    Mindustry
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" href="/games/blog/clash-of-clans">
                    Clash Of Clans
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" href="/games/blog/hearthstone">
                    Hearthstone
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
