import { Box, Center, Flex } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <>
      <div className="background-secondary footer-container">
        <div className=" p-80 d-flex gap-80">
          <div className="row">
            <div className=" col-md-3 px-15">
              <Flex
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
              <div className="fs-3 fw-bold my-10" style={{ color: "#d8d2d2" }}>
                "Level up your life one game at a time."
              </div>
            </div>
            <div className="col-md-3 fs-2 fw-bold px-15">
              <div className="primary-font footer-link d-flex ">Contact</div>
              <div className="footer-link fs-1rem  gap-10">
                <div className="link-hover footer-link d-flex align-items-center gap-10">
                  <div style={{ fontSize: "2.4rem" }}>
                    <i class="bi bi-github"></i>{" "}
                  </div>
                  <a
                    style={{ wordBreak: "break-all" }}
                    target="_blank"
                    href="https://github.com/ThomasAlvin"
                  >
                    https://github.com/ThomasAlvin
                  </a>
                </div>
                <div className="link-hover footer-link d-flex align-items-center gap-10">
                  <div style={{ fontSize: "2.4rem" }}>
                    <i class="bi bi-envelope-open"></i>
                  </div>
                  <a style={{ wordBreak: "break-all" }}>
                    thomasalvinyeo@gmail.com
                  </a>
                </div>
                <div className="link-hover footer-link d-flex align-items-center gap-10">
                  <div style={{ fontSize: "2.4rem" }}>
                    <i class="bi bi-linkedin"></i>
                  </div>
                  <a
                    href="https://www.linkedin.com/in/thomas-alvin-yeo-4b1189251/"
                    target="_blank"
                    style={{ wordBreak: "break-all" }}
                  >
                    https://www.linkedin.com/in/thomas-alvin-yeo-4b1189251/
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 fs-2 fw-bold px-15">
              <div className="primary-font footer-link d-flex">
                Games i've covered
              </div>
              <div className="footer-link fs-1rem  gap-10">
                <div className="link-hover footer-link d-flex align-items-center gap-10 ">
                  <Link href="/games/blog/mobile-legends">Mobile Legends</Link>
                </div>
                <div className="link-hover footer-link d-flex align-items-center gap-10">
                  <Link href="/games/blog/dota-2">Dota 2</Link>
                </div>
                <div className="link-hover footer-link d-flex align-items-center gap-10">
                  <Link href="/games/blog/mindustry">Mindustry</Link>
                </div>
                <div className="link-hover footer-link d-flex align-items-center gap-10">
                  <Link href="/games/blog/clash-of-clans">Clash Of Clans</Link>
                </div>
                <div className="link-hover footer-link d-flex align-items-center gap-10">
                  <Link href="/games/blog/hearthstone">Hearthstone</Link>
                </div>
              </div>
            </div>
            <div className="col-md-3 fs-2 fw-bold px-15 ">
              <div className="primary-font footer-link d-flex">About Me</div>
              <Link href="/about">
                <div className="link-hover footer-link d-flex">About</div>
              </Link>
            </div>
          </div>
        </div>
        <Center justifyContent={"space-evenly"} borderTop={"1px solid white"}>
          <div className="align-items-center gap-10 d-none d-md-flex">
            <div className="d-md-flex">
              <div style={{ fontSize: "1.6rem" }}>Fun & Entertaining</div>
              <div style={{ marginTop: "-3px" }}>
                <i class="bi bi-star"></i>
              </div>
            </div>
            <div style={{ fontSize: "3.2rem" }}>
              <i class="bi bi-controller"></i>
            </div>
          </div>
          <Center
            px={{ base: "20px", sm: "0px" }}
            pb={"10px"}
            alignItems={"center"}
            gap={"10px"}
            pt={"10px"}
          >
            <i class="bi bi-c-circle"></i>
            <Box id="contact" fontSize={"1.6rem"} fontWeight={500}>
              CopyRight 2023. Thomas Alvin Yeo. All Right Reserved
            </Box>
          </Center>
        </Center>
      </div>
    </>
  );
}
