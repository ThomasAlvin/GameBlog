import React, { useState } from "react";
import CardImg1 from "../../public/images/mobileLegend-background.jpg";
import CardImg2 from "../../public/images/Dota-2-Background.jpg";
import CardImg3 from "../../public/images/Mindustry-Background.jpeg";
import CardImg4 from "../../public/images/ClashOfClans-Background.jpg";
import CardImg5 from "../../public/images/Hearthstone-Background.jpg";
import Image from "next/image";
import Link from "next/link";
export default function HomepageContent() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const cards = [
    {
      title: "Mobile Legends",
      description:
        "Mobile Legends: Bang Bang is a mobile multiplayer online battle arena game developed and published by Moonton, a subsidiary of ByteDance. Released in 2016, the game grew in popularity; most prominently in Southeast Asia.",
      img: CardImg1,
      link: "games/blog/mobile-legends",
    },
    {
      title: "Dota 2",
      description:
        "Dota 2 is a 2013 multiplayer online battle arena video game by Valve. The game is a sequel to Defense of the Ancients, a community-created mod for Blizzard Entertainment's Warcraft III: Reign of Chaos.",
      img: CardImg2,
      link: "games/blog/dota-2",
    },
    {
      title: "Mindustry",
      description:
        "Mindustry is a factory-building game with tower defense and RTS elements. Create elaborate supply chains to feed ammo into your turrets, produce materials to use for building, and construct units. Command units to capture enemy bases, and expand your production.",
      img: CardImg3,
      link: "games/blog/mindustry",
    },
    {
      title: "Clash of Clans",
      description:
        "Clash of Clans is an online multiplayer game in which each player is a village chief. Every player builds their village by using resources and trains troops to attack other player villages to gain resources and trophies. Players can (and usually do) form communities called clans, which are groups of upto 50 people.",
      img: CardImg4,
      link: "games/blog/clash-of-clans",
    },
    {
      title: "Hearthstone",
      description:
        "Hearthstone is a free-to-play online digital collectible card game developed and published by Blizzard Entertainment. Originally subtitled Heroes of Warcraft, Hearthstone builds upon the existing lore of the Warcraft series by using the same elements, characters, and relics",
      img: CardImg5,
      link: "games/blog/hearthstone",
    },
  ];
  return (
    <div className="d-flex homepage-card-container">
      <div class="row p-5 ">
        {cards.map((val) => (
          <div class="col-md-4 d-flex justify-content-center mb-5">
            <div class="card homepage-card1" style={{ width: "18rem" }}>
              <div className="loading-placeholder">
                <div
                  style={{
                    visibility: imageLoaded ? "visible" : "hidden",
                  }}
                >
                  <Image
                    src={val.img}
                    onLoad={() => setImageLoaded(true)}
                    class="card-img-top"
                  />
                </div>
              </div>
              <div class="card-body">
                <h5 class="card-title">{val.title}</h5>
                <p class="card-text height-80">{val.description}</p>
                <Link href={val.link} class="btn background-primary">
                  More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
