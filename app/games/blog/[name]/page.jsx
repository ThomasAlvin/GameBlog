"use client";
import Footer from "@/app/components/footer";
import Navbar from "@/app/components/navbar";
import React from "react";
import CardImg1 from "../../../../public/images/mobileLegend-background.jpg";
import CardImg2 from "../../../../public/images/Dota-2-Background.jpg";
import CardImg3 from "../../../../public/images/Mindustry-Background.jpeg";
import CardImg4 from "../../../../public/images/ClashOfClans-Background.jpg";
import CardImg5 from "../../../../public/images/Hearthstone-Background.jpg";
import { usePathname } from "next/navigation";
export default function BlogPage() {
  const pathName = usePathname();
  const cards = [
    {
      id: "mobile-legends",
      title: "Mobile Legends",
      description:
        "Mobile Legends: Bang Bang is a mobile multiplayer online battle arena game developed and published by Moonton, a subsidiary of ByteDance. Released in 2016, the game grew in popularity; most prominently in Southeast Asia.",
      img: CardImg1,
      link: "games/blog/mobile-legends",
      heading: "A Mobile MOBA strategy game",
      opinion:
        "For a mobile MOBA game this is probably my favourite, this game has so much different heroes with unique skills, although some heroes are quite similar in some aspect, the current state of this game is actually really balanced so props to the devs they did a good job balancing the game.",
      community:
        "i found that the community for this game is pretty toxic (almost league of legends toxic) especially in ranked, but in lower ranks its not as toxic as in higher ranks. i also find that the game doesn't have as much smurfs in lower rank as before so that's good too",
      rating: [1, 2, 3, 4],
      halfStar: false,
    },
    {
      id: "dota-2",
      title: "Dota 2",
      description:
        "Dota 2 is a 2013 multiplayer online battle arena video game by Valve. The game is a sequel to Defense of the Ancients, a community-created mod for Blizzard Entertainment's Warcraft III: Reign of Chaos.",
      img: CardImg2,
      link: "games/blog/dota-2",
      heading:
        "A really REALLY complicated moba that would take thousands of hours to even be a veteran",
      opinion:
        "I love this game because of how complicated it is as a moba game with items that are able to be casted for unique effects to heroes with very unique set of skills and how impactful they can be according to the players of course. i also love how heavy this game relies on teamwork because i think that is the most fun aspect of the game, and i won't forget that this game also has an everchanging meta on every balance patch (which i love) the balance patches usually comes with changes to some hero's skills ehich can even turn a mostly known carry heroes into support heroes and vice versa which is unlike every other moba i've played which is really cool",
      community:
        "i found that the community for this game can be somewhat toxic but they're mostly tamed (excluding ranked ofc) they're actually pretty chill and some are very forgiving to beginners too",
      rating: [1, 2, 3, 4],
      halfStar: false,
    },
    {
      id: "mindustry",
      title: "Mindustry",
      description:
        "Mindustry is a factory-building game with tower defense and RTS elements. Create elaborate supply chains to feed ammo into your turrets, produce materials to use for building, and construct units. Command units to capture enemy bases, and expand your production.",
      img: CardImg3,
      link: "games/blog/mindustry",
      heading:
        "A factory-building game combined with resource-management and tower-defense",
      opinion:
        "i love this game probably would give it a 9/10 just by the amount of content and challenges the devs provide. this game also supports both singleplayer and multiplayer, so if you want you can battle your friends or play campaign with your friends. also this game is somewhat a sandbox game if you have all the resources so its always fun to see your massive lancer spam just obliterating any enemy that comes in sight",
      community:
        "i haven't been around the community that much so i don't really know what to say here, the community always find some new ways to create a factory-designs and concepts",
      rating: [1, 2, 3, 4],
      halfStar: true,
    },
    {
      id: "clash-of-clans",
      title: "Clash of Clans",
      description:
        "Clash of Clans is an online multiplayer game in which each player is a village chief. Every player builds their village by using resources and trains troops to attack other player villages to gain resources and trophies. Players can (and usually do) form communities called clans, which are groups of upto 50 people.",
      img: CardImg4,
      link: "games/blog/clash-of-clans",
      heading:
        "A real time strategy game that has been around for more than a century",
      opinion:
        "i like strategy games overall and this is one of them, the fact that you can attack with so many different strategies on many different bases is somewhat amusing to me, but i can admit that the longer you play it can be pretty repetitive and it almost feels like a chore to play this daily to collect your resources and do some attacks to keep your builder upgrading your town. i also want to say that the experience i have while starting the game was much more fun than the experience i have in the longer game",
      community:
        "i haven't been interacting with the community that much so i don't really have a good idea on what's happening in there since i have been tapering with this game",
      rating: [1, 2, 3],
      halfStar: true,
    },
    {
      id: "hearthstone",
      title: "Hearthstone",
      description:
        "Hearthstone is a free-to-play online digital collectible card game developed and published by Blizzard Entertainment. Originally subtitled Heroes of Warcraft, Hearthstone builds upon the existing lore of the Warcraft series by using the same elements, characters, and relics",
      img: CardImg5,
      link: "games/blog/hearthstone",
      heading: "An online card game that combines strategy and deck-building",
      opinion:
        "i love this game just like how i love every other card games, this game have tons of different cards with lots of unique effects i've never seen in any other card games, but since this game is quite old some of the old cards really fell flat when it comes to the meta since the game kinda power creep the new cards so that it will always be in the meta leaving the older cards to rot, but beside that the game actually has some different game modes like battlegrounds which is an Auto-chess game that i enjoy more than the regular mode",
      community:
        "this is also a game i have not interacted with its community often but i always enjoy seeing other people using wacky deck ideas and using them in pubs",
      rating: [1, 2, 3, 4],
      halfStar: false,
    },
  ];
  const index = cards.findIndex((item) => item.id === pathName.split("/")[3]);
  let emptyStars = cards[index].halfStar ? 4 : 5;
  return (
    <div>
      <Navbar />
      <div className="blog-container">
        <div
          className="homepage-background-header"
          style={{
            backgroundImage: `url(${cards[index].img.src})`,
            width: "100vw",
            height: "300px",
          }}
        ></div>
        <div className="d-flex justify-content-center homepage-title">
          {cards[index].title} Blog
        </div>
        <div className="d-flex justify-content-center homepage-title-desc">
          Last Updated on October 13th 2023 by
          <span className="homepage-title-descspan">
            &nbsp;Thomas Alvin Yeo
          </span>
        </div>
        <div className="blog-content-container">
          <div className="d-flex flex-column gap-80">
            <div className="d-flex justify-content-center">
              <div className="blog-content-heading2">
                "{cards[index].heading}"
              </div>
            </div>
            <div className="d-flex justify-content-center flex-column mx-100">
              <div className="d-flex justify-content-center">
                <div className="blog-content-heading">
                  What is {cards[index].title}?
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <div className="blog-content-body ">
                  {cards[index].description}
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center flex-column mx-100">
              <div className="d-flex justify-content-center">
                <div className="blog-content-heading">My Opinion</div>
              </div>
              <div className="d-flex justify-content-center">
                <div className="blog-content-body">{cards[index].opinion}</div>
              </div>
            </div>
            <div className="d-flex justify-content-center flex-column mx-100">
              <div className="d-flex justify-content-center">
                <div className="blog-content-heading">The Community</div>
              </div>
              <div className="d-flex justify-content-center">
                <div className="blog-content-body ">
                  {cards[index].community}
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center flex-column mx-100">
              <div className="d-flex justify-content-center">
                <div className="blog-content-heading">My Rating</div>
              </div>
              <div className="d-flex justify-content-center">
                <div className="blog-content-body ">
                  <div className="d-flex">
                    {cards[index].rating.map((val) => {
                      emptyStars -= 1;
                      return <i key={val} class="bi bi-star-fill"></i>;
                    })}
                    <i
                      class={`bi bi-star-half ${
                        cards[index].halfStar ? "d-block" : "d-none"
                      }`}
                    ></i>
                    <div>
                      {Array.from({ length: emptyStars }, (_, index) => (
                        <div key={index}>
                          <i class="bi bi-star"></i>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="d-flex justify-content-center blog-content-heading">
                    <div>{cards[index].rating.length}</div>
                    <div
                      class={`${cards[index].halfStar ? "d-block" : "d-none"}`}
                    >
                      .5
                    </div>
                    <div>/5</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
