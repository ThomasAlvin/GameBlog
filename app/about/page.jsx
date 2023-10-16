import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Image from "next/image";
import CardImg1 from "../../public/images/Foto-diri-jpg-Cropped.jpg";
import CardImg2 from "../../public/images/Dota-2-Background.jpg";

export default function AboutPage() {
  return (
    <div>
      <Navbar />
      <div className="d-flex justify-content-center flex-column mx-100">
        <div className="d-flex align-items-center justify-content-center about-heading px-10">
          <div>
            <div className="profile-picture-ring">
              <Image className="profile-picture" src={CardImg1.src}></Image>
            </div>
            <div className="profile-picture-ring">
              <Image className="profile-picture" src={CardImg2.src}></Image>
            </div>
          </div>
          <div className="about-title-container">
            <div className="about-title">I'm Thomas Alvin Yeo</div>
            <div className="about-title-desc">
              Just another Junior Web Developer who's main interest is
              programming, gaming, and maybe Game Developing
            </div>
          </div>
        </div>
        <div className="d-flex about-content-container">
          <div className="d-flex flex-column" style={{ gap: "50px" }}>
            <div className="d-flex flex-column about-content-section flex-column gap-2">
              <div className="about-content-title">About This Website</div>
              <div className="about-content-desc">
                Welcome to my little corner of the gaming universe! This blog is
                the result of a passion of mine for all things gaming, a hobby
                that brings us immense joy and excitement.
              </div>
            </div>
            <div className="d-flex flex-column about-content-section flex-column gap-2">
              <div className="about-content-title">Why We're Here</div>
              <div className="about-content-desc">
                Gaming is more than a pastime for us; it's a way of life. I
                created this blog as a space to share my thoughts and
                experiences in some of the game i've played. From exploring the
                latest titles to diving into classic gems, we're here to take
                you on a journey through the gaming multiverse.
              </div>
            </div>
            <div className="d-flex flex-column about-content-section flex-column gap-2">
              <div className="about-content-title">What to Expect</div>
              <div className="about-content-desc">
                Expect a small variety of content, from in-depth game reviews
                and insightful analysis to tips, tricks, and news from the games
                i've played. We'll also dive into the culture, the industry, and
                the community that makes gaming so unique.
              </div>
            </div>
            <div className="d-flex flex-column about-content-section flex-column gap-2">
              <div className="about-content-title">My Goal</div>
              <div className="about-content-desc">
                My Goal is simple: to bring you engaging, informative, and
                entertaining content in gaming. We aim to share a few thoughts
                for gamers of all levels and backgrounds, from newcomers to
                seasoned pros.
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
