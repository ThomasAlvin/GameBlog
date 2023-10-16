"use client";
import Navbar from "./components/navbar";
import HomepageContent from "./components/homepage-content";
import Footer from "./components/footer";
export default function Home() {
  return (
    <main className="flex">
      <div>
        <Navbar />
        <div className="homepage-container d-flex flex-column">
          <div className="homepage-background-header"></div>
          <div className="d-flex justify-content-center homepage-title">
            My Gaming Blog&nbsp;
            <i class="bi bi-controller"></i>
          </div>
          <div className="d-flex justify-content-center homepage-title-desc">
            Last Updated on October 13th 2023 by
            <span className="homepage-title-descspan">
              &nbsp;Thomas Alvin Yeo
            </span>
          </div>
          <div className="d-flex justify-content-center homepage-title-desc">
            Video game blogs, Tier lists, Game strategies, Overall game
            Experience and opinions for me to share to y'all from different
            games i've played
          </div>
          <HomepageContent />
          <Footer />
        </div>
      </div>
    </main>
  );
}
