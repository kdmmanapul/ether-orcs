import { Faq } from '../components/faq'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";

export default function Home() {
  const teams = [
    {
      img: `/team1.png`,
      name: `WRANGLER`,
      role: `Co-Founder`,
      job: `Game Developer`,
      twitter: {
        name: `@0xWrangler`,
        link: `https://www.google.com`
      },
      discord: {
        name: `Wrangler#5955`,
        link: `https://www.google.com`
      }
    },
    {
      img: `/team2.png`,
      name: `POOF`,
      role: `Co-Founder`,
      job: `Game Developer`,
      twitter: {
        name: `@0xWrangler`,
        link: `https://www.google.com`
      },
      discord: {
        name: `Wrangler#5955`,
        link: `https://www.google.com`
      }
    },
    {
      img: `/team3.png`,
      name: `VIRTUALJOHN`,
      role: `Co-Founder`,
      job: `Game Developer`,
      twitter: {
        name: `@0xWrangler`,
        link: `https://www.google.com`
      },
      discord: {
        name: `Wrangler#5955`,
        link: `https://www.google.com`
      }
    },
    {
      img: `/team4.png`,
      name: `0XBASSET`,
      role: `Lead`,
      job: `Solidity Developer`,
      twitter: {
        name: `@0xWrangler`,
        link: `https://www.google.com`
      },
      discord: {
        name: `Wrangler#5955`,
        link: `https://www.google.com`
      }
    },
    {
      img: `/team5.png`,
      name: `JAKERS`,
      role: `Lead`,
      job: `Front End Developer`,
      twitter: {
        name: `@0xWrangler`,
        link: `https://www.google.com`
      },
      discord: {
        name: `Wrangler#5955`,
        link: `https://www.google.com`
      }
    },
    {
      img: `/team6.png`,
      name: `SPY`,
      role: `Lead`,
      job: `Technical Project Manager`,
      twitter: {
        name: `@0xWrangler`,
        link: `https://www.google.com`
      },
      discord: {
        name: `Wrangler#5955`,
        link: `https://www.google.com`
      }
    },
    {
      img: `/team7.png`,
      name: `PAN`,
      role: `Lead`,
      job: `Secret Project V`,
      twitter: {
        name: `@0xWrangler`,
        link: `https://www.google.com`
      },
      discord: {
        name: `Wrangler#5955`,
        link: `https://www.google.com`
      }
    },
    {
      img: `/team8.png`,
      name: `PAN`,
      role: `Lead`,
      job: `Marketing`,
      twitter: {
        name: `@0xWrangler`,
        link: `https://www.google.com`
      },
      discord: {
        name: `Wrangler#5955`,
        link: `https://www.google.com`
      }
    }
  ];
  const faq = [
    {
      ques: `Where can I find out more information about the EtherOrcs?`,
      answar: `Imaginary Ones is the brainchild of an award-winning creative director, Clement (Cmttat). We have positioned our brand and design to appeal to people of all ages.
            Holders can expect more collections with excellent quality and long-term utility in the Imaginary World ecosystem. Imaginary Ones is the brainchild of an award-winning creative director, Clement (Cmttat). We have positioned our brand and design to appeal to people of all ages.
            Holders can expect more collections with excellent quality and long-term utility in the Imaginary World ecosystem. Imaginary Ones is the brainchild of an award-winning creative director, Clement (Cmttat). We have positioned our brand and design to appeal to people of all ages.
            Holders can expect more collections with excellent quality and long-term utility in the Imaginary World ecosystem. Imaginary Ones is the brainchild of an award-winning creative director, Clement (Cmttat). We have positioned our brand and design to appeal to people of all ages.
            Holders can expect more collections with excellent quality and long-term utility in the Imaginary World ecosystem.`
    },
    {
      ques: `How much is 1 ZUG worth?`,
      answar: `Imaginary Ones is the brainchild of an award-winning creative director, Clement (Cmttat). We have positioned our brand and design to appeal to people of all ages.
            Holders can expect more collections with excellent quality and long-term utility in the Imaginary World ecosystem.`
    },
    {
      ques: `What makes imaginary ones so unique?`,
      answar: `Imaginary Ones is the brainchild of an award-winning creative director, Clement (Cmttat). We have positioned our brand and design to appeal to people of all ages.
            Holders can expect more collections with excellent quality and long-term utility in the Imaginary World ecosystem.`
    }
  ];
  return (
    <div>
      <section className="home" id="home">
        <div className="content-home">
          <img src="/logo-4.png" className="logo" alt="logo" />
          <p>The First 100% On-Chain NFT Game</p>
          <div className="buttons">
            <button
              className="btn"
            >
              <span>PlAY GAME</span>
            </button>
            <button
              className="btn btn-primary"
            >
              <span>LitePaper</span>
            </button>
          </div>
        </div>
      </section>
      <section className="introduction" id="introduction">
        <div className="container">
          <div className="title"> INTRODUCTION </div>
          <p>EtherOrcs is a 100% on-chain game and eco-system. Orcs and their Allies go on raids, pillages, journeys, and more.</p>
          <p>Each collection within the EtherOrcs world has a unique utility that gives it access to in game tokens that drive most actions and rewards.</p>
          <p>Through interactive and strategic gameplay, players earn better gear, more NFTs, and compete in an immersive eco-system built on the bedrock of the Ethereum blockchain.</p>
          <p>With a robust development pipeline and a track record of overdelivering industry changing innovation, there are always new adventures and treasures awaiting Orcs just over the horizon.</p>
          <div className="row mt-4">
            <div className="col-md-3 col-all-6">
              <img src="/introduction1.png" alt="introduction" />
            </div>
            <div className="col-md-3 col-all-6">
              <img src="/introduction2.png" alt="introduction" />
            </div>
            <div className="col-md-3 col-all-6">
              <img src="/introduction3.png" alt="introduction" />
            </div>
            <div className="col-md-3 col-all-6">
              <img src="/introduction4.png" alt="introduction" />
            </div>
          </div>
        </div>
      </section>
      <section className="allies" id="allies">
        <div className="container">
          <div className="title"> ALLIES </div>
          <div className="row">
            <div className="col-md-6">
              <div className="card-allies">
                <img src="/allies1.png" alt="allies" />
                <div>
                  <div className="title-card">Shaman</div>
                  <div className="desc-card">Shaman act as the spiritual guides and healers to their Orc brethren. Using their knowledge and expertise in herbalism, they aid the horde by crafting potions which help any Orc or Ally during a raid.</div>
                  <div className="social">
                    <svg viewBox="0 0 90 90">
                      <path d="M45 0C20.151 0 0 20.151 0 45C0 69.849 20.151 90 45 90C69.849 90 90 69.849 90 45C90 20.151 69.858 0 45 0ZM22.203 46.512L22.392 46.206L34.101 27.891C34.272 27.63 34.677 27.657 34.803 27.945C36.756 32.328 38.448 37.782 37.656 41.175C37.323 42.57 36.396 44.46 35.352 46.206C35.217 46.458 35.073 46.71 34.911 46.953C34.839 47.061 34.713 47.124 34.578 47.124H22.545C22.221 47.124 22.032 46.773 22.203 46.512ZM74.376 52.812C74.376 52.983 74.277 53.127 74.133 53.19C73.224 53.577 70.119 55.008 68.832 56.799C65.538 61.38 63.027 67.932 57.402 67.932H33.948C25.632 67.932 18.9 61.173 18.9 52.83V52.56C18.9 52.344 19.08 52.164 19.305 52.164H32.373C32.634 52.164 32.823 52.398 32.805 52.659C32.706 53.505 32.868 54.378 33.273 55.17C34.047 56.745 35.658 57.726 37.395 57.726H43.866V52.677H37.467C37.143 52.677 36.945 52.299 37.134 52.029C37.206 51.921 37.278 51.813 37.368 51.687C37.971 50.823 38.835 49.491 39.699 47.97C40.284 46.944 40.851 45.846 41.31 44.748C41.4 44.55 41.472 44.343 41.553 44.145C41.679 43.794 41.805 43.461 41.895 43.137C41.985 42.858 42.066 42.57 42.138 42.3C42.354 41.364 42.444 40.374 42.444 39.348C42.444 38.943 42.426 38.52 42.39 38.124C42.372 37.683 42.318 37.242 42.264 36.801C42.228 36.414 42.156 36.027 42.084 35.631C41.985 35.046 41.859 34.461 41.715 33.876L41.661 33.651C41.553 33.246 41.454 32.868 41.328 32.463C40.959 31.203 40.545 29.97 40.095 28.818C39.933 28.359 39.753 27.918 39.564 27.486C39.294 26.82 39.015 26.217 38.763 25.65C38.628 25.389 38.52 25.155 38.412 24.912C38.286 24.642 38.16 24.372 38.025 24.111C37.935 23.913 37.827 23.724 37.755 23.544L36.963 22.086C36.855 21.888 37.035 21.645 37.251 21.708L42.201 23.049H42.219C42.228 23.049 42.228 23.049 42.237 23.049L42.885 23.238L43.605 23.436L43.866 23.508V20.574C43.866 19.152 45 18 46.413 18C47.115 18 47.754 18.288 48.204 18.756C48.663 19.224 48.951 19.863 48.951 20.574V24.939L49.482 25.083C49.518 25.101 49.563 25.119 49.599 25.146C49.725 25.236 49.914 25.38 50.148 25.56C50.337 25.704 50.535 25.884 50.769 26.073C51.246 26.46 51.822 26.955 52.443 27.522C52.605 27.666 52.767 27.81 52.92 27.963C53.721 28.71 54.621 29.583 55.485 30.555C55.728 30.834 55.962 31.104 56.205 31.401C56.439 31.698 56.7 31.986 56.916 32.274C57.213 32.661 57.519 33.066 57.798 33.489C57.924 33.687 58.077 33.894 58.194 34.092C58.554 34.623 58.86 35.172 59.157 35.721C59.283 35.973 59.409 36.252 59.517 36.522C59.85 37.26 60.111 38.007 60.273 38.763C60.327 38.925 60.363 39.096 60.381 39.258V39.294C60.435 39.51 60.453 39.744 60.471 39.987C60.543 40.752 60.507 41.526 60.345 42.3C60.273 42.624 60.183 42.93 60.075 43.263C59.958 43.578 59.85 43.902 59.706 44.217C59.427 44.856 59.103 45.504 58.716 46.098C58.59 46.323 58.437 46.557 58.293 46.782C58.131 47.016 57.96 47.241 57.816 47.457C57.609 47.736 57.393 48.024 57.168 48.285C56.97 48.555 56.772 48.825 56.547 49.068C56.241 49.437 55.944 49.779 55.629 50.112C55.449 50.328 55.251 50.553 55.044 50.751C54.846 50.976 54.639 51.174 54.459 51.354C54.144 51.669 53.892 51.903 53.676 52.11L53.163 52.569C53.091 52.641 52.992 52.677 52.893 52.677H48.951V57.726H53.91C55.017 57.726 56.07 57.339 56.925 56.61C57.213 56.358 58.482 55.26 59.985 53.604C60.039 53.541 60.102 53.505 60.174 53.487L73.863 49.527C74.124 49.455 74.376 49.644 74.376 49.914V52.812V52.812Z"></path>
                    </svg>
                    <svg x="0px" y="0px" viewBox="0 0 416.979 416.979">
                      <g>
                        <path d="M356.004,61.156c-81.37-81.47-213.377-81.551-294.848-0.182c-81.47,81.371-81.552,213.379-0.181,294.85
		c81.369,81.47,213.378,81.551,294.849,0.181C437.293,274.636,437.375,142.626,356.004,61.156z M237.6,340.786
		c0,3.217-2.607,5.822-5.822,5.822h-46.576c-3.215,0-5.822-2.605-5.822-5.822V167.885c0-3.217,2.607-5.822,5.822-5.822h46.576
		c3.215,0,5.822,2.604,5.822,5.822V340.786z M208.49,137.901c-18.618,0-33.766-15.146-33.766-33.765
		c0-18.617,15.147-33.766,33.766-33.766c18.619,0,33.766,15.148,33.766,33.766C242.256,122.755,227.107,137.901,208.49,137.901z"/>
                      </g>
                    </svg>

                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card-allies">
                <img src="/allies2.png" alt="allies" />
                <div>
                  <div className="title-card">Shaman</div>
                  <div className="desc-card">Shaman act as the spiritual guides and healers to their Orc brethren. Using their knowledge and expertise in herbalism, they aid the horde by crafting potions which help any Orc or Ally during a raid.</div>
                  <div className="social">
                    <svg viewBox="0 0 90 90">
                      <path d="M45 0C20.151 0 0 20.151 0 45C0 69.849 20.151 90 45 90C69.849 90 90 69.849 90 45C90 20.151 69.858 0 45 0ZM22.203 46.512L22.392 46.206L34.101 27.891C34.272 27.63 34.677 27.657 34.803 27.945C36.756 32.328 38.448 37.782 37.656 41.175C37.323 42.57 36.396 44.46 35.352 46.206C35.217 46.458 35.073 46.71 34.911 46.953C34.839 47.061 34.713 47.124 34.578 47.124H22.545C22.221 47.124 22.032 46.773 22.203 46.512ZM74.376 52.812C74.376 52.983 74.277 53.127 74.133 53.19C73.224 53.577 70.119 55.008 68.832 56.799C65.538 61.38 63.027 67.932 57.402 67.932H33.948C25.632 67.932 18.9 61.173 18.9 52.83V52.56C18.9 52.344 19.08 52.164 19.305 52.164H32.373C32.634 52.164 32.823 52.398 32.805 52.659C32.706 53.505 32.868 54.378 33.273 55.17C34.047 56.745 35.658 57.726 37.395 57.726H43.866V52.677H37.467C37.143 52.677 36.945 52.299 37.134 52.029C37.206 51.921 37.278 51.813 37.368 51.687C37.971 50.823 38.835 49.491 39.699 47.97C40.284 46.944 40.851 45.846 41.31 44.748C41.4 44.55 41.472 44.343 41.553 44.145C41.679 43.794 41.805 43.461 41.895 43.137C41.985 42.858 42.066 42.57 42.138 42.3C42.354 41.364 42.444 40.374 42.444 39.348C42.444 38.943 42.426 38.52 42.39 38.124C42.372 37.683 42.318 37.242 42.264 36.801C42.228 36.414 42.156 36.027 42.084 35.631C41.985 35.046 41.859 34.461 41.715 33.876L41.661 33.651C41.553 33.246 41.454 32.868 41.328 32.463C40.959 31.203 40.545 29.97 40.095 28.818C39.933 28.359 39.753 27.918 39.564 27.486C39.294 26.82 39.015 26.217 38.763 25.65C38.628 25.389 38.52 25.155 38.412 24.912C38.286 24.642 38.16 24.372 38.025 24.111C37.935 23.913 37.827 23.724 37.755 23.544L36.963 22.086C36.855 21.888 37.035 21.645 37.251 21.708L42.201 23.049H42.219C42.228 23.049 42.228 23.049 42.237 23.049L42.885 23.238L43.605 23.436L43.866 23.508V20.574C43.866 19.152 45 18 46.413 18C47.115 18 47.754 18.288 48.204 18.756C48.663 19.224 48.951 19.863 48.951 20.574V24.939L49.482 25.083C49.518 25.101 49.563 25.119 49.599 25.146C49.725 25.236 49.914 25.38 50.148 25.56C50.337 25.704 50.535 25.884 50.769 26.073C51.246 26.46 51.822 26.955 52.443 27.522C52.605 27.666 52.767 27.81 52.92 27.963C53.721 28.71 54.621 29.583 55.485 30.555C55.728 30.834 55.962 31.104 56.205 31.401C56.439 31.698 56.7 31.986 56.916 32.274C57.213 32.661 57.519 33.066 57.798 33.489C57.924 33.687 58.077 33.894 58.194 34.092C58.554 34.623 58.86 35.172 59.157 35.721C59.283 35.973 59.409 36.252 59.517 36.522C59.85 37.26 60.111 38.007 60.273 38.763C60.327 38.925 60.363 39.096 60.381 39.258V39.294C60.435 39.51 60.453 39.744 60.471 39.987C60.543 40.752 60.507 41.526 60.345 42.3C60.273 42.624 60.183 42.93 60.075 43.263C59.958 43.578 59.85 43.902 59.706 44.217C59.427 44.856 59.103 45.504 58.716 46.098C58.59 46.323 58.437 46.557 58.293 46.782C58.131 47.016 57.96 47.241 57.816 47.457C57.609 47.736 57.393 48.024 57.168 48.285C56.97 48.555 56.772 48.825 56.547 49.068C56.241 49.437 55.944 49.779 55.629 50.112C55.449 50.328 55.251 50.553 55.044 50.751C54.846 50.976 54.639 51.174 54.459 51.354C54.144 51.669 53.892 51.903 53.676 52.11L53.163 52.569C53.091 52.641 52.992 52.677 52.893 52.677H48.951V57.726H53.91C55.017 57.726 56.07 57.339 56.925 56.61C57.213 56.358 58.482 55.26 59.985 53.604C60.039 53.541 60.102 53.505 60.174 53.487L73.863 49.527C74.124 49.455 74.376 49.644 74.376 49.914V52.812V52.812Z"></path>
                    </svg>
                    <svg x="0px" y="0px" viewBox="0 0 416.979 416.979">
                      <g>
                        <path d="M356.004,61.156c-81.37-81.47-213.377-81.551-294.848-0.182c-81.47,81.371-81.552,213.379-0.181,294.85
		c81.369,81.47,213.378,81.551,294.849,0.181C437.293,274.636,437.375,142.626,356.004,61.156z M237.6,340.786
		c0,3.217-2.607,5.822-5.822,5.822h-46.576c-3.215,0-5.822-2.605-5.822-5.822V167.885c0-3.217,2.607-5.822,5.822-5.822h46.576
		c3.215,0,5.822,2.604,5.822,5.822V340.786z M208.49,137.901c-18.618,0-33.766-15.146-33.766-33.765
		c0-18.617,15.147-33.766,33.766-33.766c18.619,0,33.766,15.148,33.766,33.766C242.256,122.755,227.107,137.901,208.49,137.901z"/>
                      </g>
                    </svg>

                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card-allies">
                <img src="/allies3.png" alt="allies" />
                <div>
                  <div className="title-card">Shaman</div>
                  <div className="desc-card">Shaman act as the spiritual guides and healers to their Orc brethren. Using their knowledge and expertise in herbalism, they aid the horde by crafting potions which help any Orc or Ally during a raid.</div>
                  <div className="social">
                    <svg viewBox="0 0 90 90">
                      <path d="M45 0C20.151 0 0 20.151 0 45C0 69.849 20.151 90 45 90C69.849 90 90 69.849 90 45C90 20.151 69.858 0 45 0ZM22.203 46.512L22.392 46.206L34.101 27.891C34.272 27.63 34.677 27.657 34.803 27.945C36.756 32.328 38.448 37.782 37.656 41.175C37.323 42.57 36.396 44.46 35.352 46.206C35.217 46.458 35.073 46.71 34.911 46.953C34.839 47.061 34.713 47.124 34.578 47.124H22.545C22.221 47.124 22.032 46.773 22.203 46.512ZM74.376 52.812C74.376 52.983 74.277 53.127 74.133 53.19C73.224 53.577 70.119 55.008 68.832 56.799C65.538 61.38 63.027 67.932 57.402 67.932H33.948C25.632 67.932 18.9 61.173 18.9 52.83V52.56C18.9 52.344 19.08 52.164 19.305 52.164H32.373C32.634 52.164 32.823 52.398 32.805 52.659C32.706 53.505 32.868 54.378 33.273 55.17C34.047 56.745 35.658 57.726 37.395 57.726H43.866V52.677H37.467C37.143 52.677 36.945 52.299 37.134 52.029C37.206 51.921 37.278 51.813 37.368 51.687C37.971 50.823 38.835 49.491 39.699 47.97C40.284 46.944 40.851 45.846 41.31 44.748C41.4 44.55 41.472 44.343 41.553 44.145C41.679 43.794 41.805 43.461 41.895 43.137C41.985 42.858 42.066 42.57 42.138 42.3C42.354 41.364 42.444 40.374 42.444 39.348C42.444 38.943 42.426 38.52 42.39 38.124C42.372 37.683 42.318 37.242 42.264 36.801C42.228 36.414 42.156 36.027 42.084 35.631C41.985 35.046 41.859 34.461 41.715 33.876L41.661 33.651C41.553 33.246 41.454 32.868 41.328 32.463C40.959 31.203 40.545 29.97 40.095 28.818C39.933 28.359 39.753 27.918 39.564 27.486C39.294 26.82 39.015 26.217 38.763 25.65C38.628 25.389 38.52 25.155 38.412 24.912C38.286 24.642 38.16 24.372 38.025 24.111C37.935 23.913 37.827 23.724 37.755 23.544L36.963 22.086C36.855 21.888 37.035 21.645 37.251 21.708L42.201 23.049H42.219C42.228 23.049 42.228 23.049 42.237 23.049L42.885 23.238L43.605 23.436L43.866 23.508V20.574C43.866 19.152 45 18 46.413 18C47.115 18 47.754 18.288 48.204 18.756C48.663 19.224 48.951 19.863 48.951 20.574V24.939L49.482 25.083C49.518 25.101 49.563 25.119 49.599 25.146C49.725 25.236 49.914 25.38 50.148 25.56C50.337 25.704 50.535 25.884 50.769 26.073C51.246 26.46 51.822 26.955 52.443 27.522C52.605 27.666 52.767 27.81 52.92 27.963C53.721 28.71 54.621 29.583 55.485 30.555C55.728 30.834 55.962 31.104 56.205 31.401C56.439 31.698 56.7 31.986 56.916 32.274C57.213 32.661 57.519 33.066 57.798 33.489C57.924 33.687 58.077 33.894 58.194 34.092C58.554 34.623 58.86 35.172 59.157 35.721C59.283 35.973 59.409 36.252 59.517 36.522C59.85 37.26 60.111 38.007 60.273 38.763C60.327 38.925 60.363 39.096 60.381 39.258V39.294C60.435 39.51 60.453 39.744 60.471 39.987C60.543 40.752 60.507 41.526 60.345 42.3C60.273 42.624 60.183 42.93 60.075 43.263C59.958 43.578 59.85 43.902 59.706 44.217C59.427 44.856 59.103 45.504 58.716 46.098C58.59 46.323 58.437 46.557 58.293 46.782C58.131 47.016 57.96 47.241 57.816 47.457C57.609 47.736 57.393 48.024 57.168 48.285C56.97 48.555 56.772 48.825 56.547 49.068C56.241 49.437 55.944 49.779 55.629 50.112C55.449 50.328 55.251 50.553 55.044 50.751C54.846 50.976 54.639 51.174 54.459 51.354C54.144 51.669 53.892 51.903 53.676 52.11L53.163 52.569C53.091 52.641 52.992 52.677 52.893 52.677H48.951V57.726H53.91C55.017 57.726 56.07 57.339 56.925 56.61C57.213 56.358 58.482 55.26 59.985 53.604C60.039 53.541 60.102 53.505 60.174 53.487L73.863 49.527C74.124 49.455 74.376 49.644 74.376 49.914V52.812V52.812Z"></path>
                    </svg>
                    <svg x="0px" y="0px" viewBox="0 0 416.979 416.979">
                      <g>
                        <path d="M356.004,61.156c-81.37-81.47-213.377-81.551-294.848-0.182c-81.47,81.371-81.552,213.379-0.181,294.85
		c81.369,81.47,213.378,81.551,294.849,0.181C437.293,274.636,437.375,142.626,356.004,61.156z M237.6,340.786
		c0,3.217-2.607,5.822-5.822,5.822h-46.576c-3.215,0-5.822-2.605-5.822-5.822V167.885c0-3.217,2.607-5.822,5.822-5.822h46.576
		c3.215,0,5.822,2.604,5.822,5.822V340.786z M208.49,137.901c-18.618,0-33.766-15.146-33.766-33.765
		c0-18.617,15.147-33.766,33.766-33.766c18.619,0,33.766,15.148,33.766,33.766C242.256,122.755,227.107,137.901,208.49,137.901z"/>
                      </g>
                    </svg>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="train" id="train">
        <div className="container">
          <div className="title"> TRAIN </div>
          <p>Train with your Orcs to gain experience and level up.</p>
          <p>Higher level Orcs have access to higher tier loot pools and more raid locations.</p>
          <img src="/train.gif" alt="train" />
        </div>
      </section>
      <section className="pillage" id="pillage">
        <div className="container">
          <div className="title"> PILLAGE </div>
          <p>Pillage with your Orcs in one of our three loot pools to upgrade their gear.</p>
          <p>After pillaging your Orcs image and metadata will be upgraded and the better gear increases their daily ZUG production while farming.</p>
          <div className="row">
            <div className="col-md-4">
              <div className="card-pillage">
                <img src="/pillage1.png" alt="pillage" />
                <div className="content">
                  <div className="title-card">Town</div>
                  <div className="desc-card">Orc must be Level 1+ to Pillage.</div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card-pillage">
                <img src="/pillage2.png" alt="pillage" />
                <div className="content">
                  <div className="title-card">Dungeon</div>
                  <div className="desc-card">Orc must be Level 3+ to Pillage</div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card-pillage">
                <img src="/pillage3.png" alt="pillage" />
                <div className="content">
                  <div className="title-card">The Cavern</div>
                  <div className="desc-card">Orc must be Level 10+ to Pillage</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="farm" id="farm">
        <div className="container">
          <div className="title"> FARM </div>
          <p>Train with your Orcs to gain experience and level up.Send your Orcs out farming to earn our erc20 utility token ZUG.</p>
          <img src="/farm.jpg" alt="train" />
        </div>
      </section>
      <section className="raid" id="raid">
        <div className="container">
          <div className="title"> RAID </div>
          <p>Now that your orc is all geared up for battle, its time to send him on raids.</p>
          <p>Rewards for raids include Bone Shards which you can use to summon a new collection of warriors that have a unique utility you can use in gameplay as well as trade on the secondary market.</p>
          <img src="/raid.png" alt="train" />
        </div>
      </section>
      <section className='roadmap' id="roadmap">
        <div className='container'>
          <div className='title'>readmap</div>
          <div className="phase-1">
            <div className='container'>
              <div className='grid'>
                <div className="phase__side--left">
                  <img src="/introduction1.png" alt="ball" />
                </div>
                <div className='phase__content'>
                  <div className="title__phase">Phase 01</div>
                  <div className='sub-title text-green'>GENESIS ORC MINT</div>
                  <div className='desc'>Established the first 100% on-chain NFT Game.
                    5050 Genesis Orcs were minted with their rarity determined during interactive on-chain gameplay.
                    Each Orc produces the $ZUG utility token that is the foundation of the EtherOrcs Economy.</div>
                  <div className="progress">
                    <div className="progress__content">
                      <div className="progress__bar" style={{ width: '75%' }}>
                        <span className="progress__label">75%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="phase__video">
                  <div className="videos">
                    {/* <img src="/coin.gif" alt="ball" />
                    <img src="/coin.gif" alt="ball" />
                    <img src="/coin.gif" alt="ball" /> */}
                    <img src="/raid.png" alt="ball" />
                    <img src="/raid.png" alt="ball" />
                    <img src="/raid.png" alt="ball" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="phase-2">
            <div className='container'>
              <div className='grid'>
                <div className='phase__content'>
                  <div className="title__phase">Phase 02</div>
                  <div className='text-purple sub-title'>RAIDS</div>
                  <div className='desc'>
                    Raid various locations that yield rewards of $BONESHARDS Raid various locations
                    that yield rewards.
                  </div>
                  <div className="progress">
                    <div className="progress__content">
                      <div className="progress__bar" style={{ width: '40%' }}>
                        <span className="progress__label">40%</span>
                      </div>
                    </div>
                  </div>
                  <div className='desc mt-3'>
                    Raid various locations that yield rewards of
                    $BONESHARDS Raid various locations that yield rewards of $BONESHARDS Raid various
                    locations
                  </div>
                  <div className="progress">
                    <div className="progress__content">
                      <div className="progress__bar" style={{ width: '85%' }}>
                        <span className="progress__label">85%</span>
                      </div>
                    </div>
                  </div>
                  <div className='desc mt-3'>
                    that yield rewards of $BONESHARDS Raid various locations that yield
                    rewards of $BONESHARDS
                  </div>
                  <div className="progress">
                    <div className="progress__content">
                      <div className="progress__bar" style={{ width: '55%' }}>
                        <span className="progress__label">55%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="phase__side--right">
                  <img src="/introduction3.png" alt="ball" />
                  {/* <img src="/readmap1.png" alt="ball" /> */}
                  {/* <img src="/coin.gif" alt="ball" /> */}
                </div>
              </div>
            </div>
          </div>
          <div className="phase-3">
            <div className='container'>
              <div className='grid'>
                <div className="phase__video">
                  <div className="videos">
                    <img src="/coin.gif" alt="ball" />
                    <img src="/coin.gif" alt="ball" />
                    <img src="/coin.gif" alt="ball" />
                  </div>
                </div>
                <div className="phase__side--left">
                  <img src="/introduction2.png" alt="ball" />
                </div>
                <div className='phase__content'>
                  <div className="title__phase">Phase 03</div>
                  <div className='sub-title text-blue'>ALLIES</div>
                  <div className='desc mb-6'>12,000 EtherOrc Allies to be minted with $BONESHARDS.
                    Each Ally will have unique consumables as their entry point into the EtherOrcs economy.</div>
                </div>

              </div>
            </div>
          </div>
          <div className="phase-4">
            <div className='container'>
              <div className='grid'>
                <div className="phase__side--top">
                  <img src="/raid.png" alt="ball" />
                </div>
                <div className="phase__side--right">
                  <img src="/introduction4.png" alt="ball" />
                  <img src="/coin.gif" alt="ball" />
                </div>
                <div className='phase__content'>
                  <div className="title__phase">Phase 04</div>
                  <div className='text-green sub-title'>DUNGEON CRAWLS</div>
                  <div className='desc'>
                    Interactive gameplay with parties of Orcs exploring dungeons,
                    battling monsters, solving puzzles, and finding treasure.
                  </div>
                  <div className="progress">
                    <div className="progress__content">
                      <div className="progress__bar" style={{ width: '85%' }}>
                        <span className="progress__label">85%</span>
                      </div>
                    </div>
                  </div>
                  <div className='desc mt-3'>
                    Interactive
                    gameplay with parties of Orcs exploring dungeons, battling monsters,
                    solving puzzles, and finding treasure.
                  </div>
                  <div className="progress">
                    <div className="progress__content">
                      <div className="progress__bar" style={{ width: '65%' }}>
                        <span className="progress__label">65%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='faq' id="faq">
        <div className="title">FAQ</div>
        <div className='container'>
          {faq.map((e, i) => (
            <Faq key={i} data={e} />
          ))}
        </div>
      </section>
      <section className="team" id="team">
        <div className="container">
          <div className="title"> TEAM </div>
          <Swiper
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            slidesPerView={1}
            spaceBetween={20}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="mySwiper"
          >
            {teams.map((e, i) => (
              <SwiperSlide key={i}>
                <div className="card-team">
                  <img src={e.img} alt={e.name} />
                  <div className="content">
                    <div className="name">{e.name}</div>
                    <div className="meta">
                      <span>{e.role}</span>
                      <span>{e.job}</span>
                    </div>
                    <ul className="social">
                      <li>
                        <a href={e.twitter.link} target="_blank">
                          <svg viewBox="0 0 16 16">
                            <path d="M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z"></path>
                          </svg>
                          <span>{e.twitter.name}</span></a>
                      </li>
                      <li>
                        <a href={e.discord.link} target="_blank">
                          <svg viewBox="0 0 71 55"><g>
                            <path d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z"></path></g><defs><clipPath id="clip0"><rect width="71" height="55" fill="white"></rect></clipPath></defs>
                          </svg> <span>{e.discord.name}</span></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </SwiperSlide>))}
          </Swiper>
        </div>
      </section>
    </div>
  )
}
