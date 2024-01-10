import classNames from "classnames";
import { useRef, useState } from "react";
import arrowRight from "src/assets/arrow-right.svg";
import councilCornerArc from "src/assets/council-corner-arc.svg";
import councilLogo from "src/assets/council-logo.svg";
import elementBalls from "src/assets/element-balls.svg";
import elementCornerArc from "src/assets/element-corner-arc.svg";
import elementLogo from "src/assets/element-logo.svg";
import elfiverseCornerArc from "src/assets/elfiverse-corner-arc.svg";
import elfiverseLogo from "src/assets/elfiverse-logo.svg";
import hyperdriveCornerArc from "src/assets/hyperdrive-corner-arc.svg";
import hyperdriveLogo from "src/assets/hyperdrive-logo.svg";
import { CloseButton } from "src/components/CloseButton";
import { FlairDown } from "src/components/FlairDown";
import { FlairUp } from "src/components/FlairUp";
import councilGraphic from "/council-graphic.png";
import elfiverseGraphicBottomLeft from "/elfiverse-graphic-bottom-left.png";
import elfiverseGraphicTopRight from "/elfiverse-graphic-top-right.png";

export function Home() {
  const [openedDrawer, setOpenedDrawer] = useState<DrawerName | null>(null);

  const onKeyDown = useRef((e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setOpenedDrawer(null);
    }
  });

  function openDrawer(name: DrawerName) {
    setOpenedDrawer(name);
    window.addEventListener("keydown", onKeyDown.current);
  }

  function closeDrawer() {
    setOpenedDrawer(null);
    window.removeEventListener("keydown", onKeyDown.current);
  }

  return (
    <div className="overflow-hidden relative">
      {/* flair glows */}
      <FlairUp className="fixed top-0 left-1/2 -translate-x-1/2 z-[-1]" />
      <FlairDown className="fixed bottom-0 left-1/2 -translate-x-1/2 z-[-1]" />

      <div className="max-w-[1440px] mx-auto px-20 mt-32 flex gap-5">
        {/* Left (title + first 2 titles) */}
        <div className="flex flex-col justify-between">
          <h1 className="font-incise text-[82px] w-[600px] tracking-tight leading-none -mt-2">
            New Protocols for New Markets
          </h1>

          <div className="flex items-end gap-5">
            <ProjectCard
              className="h-[336px]"
              logoSrc={councilLogo}
              logoAltText="Council"
              description="Council represents the next evolution of on-chain governance, allowing anyone to build adaptable governance systems that meet both the practical needs of day-to-day activities and the required flexibility of long-term governance."
              arc={councilCornerArc}
              onClick={() => openDrawer("council")}
            />
            <ProjectCard
              className="h-[432px]"
              logoSrc={hyperdriveLogo}
              logoAltText="Hyperdrive"
              description="Hyperdrive is the next research leap from DELV on variable and fixed rate primitives. It is an advanced AMM featuring no preset expiration dates, no fragmented liquidity, and no LP rollovers — aka everlasting liquidity."
              arc={hyperdriveCornerArc}
              arcClassName="opacity-100"
              onClick={() => openDrawer("hyperdrive")}
            />
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col gap-5">
          <ProjectCard
            className="h-64"
            logoSrc={elementLogo}
            logoAltText="Element"
            description="Element is an an open-source protocol for fixed and variable yield markets."
            arc={elementCornerArc}
            onClick={() => openDrawer("element")}
          />
          <ProjectCard
            className="h-[348px]"
            logoSrc={elfiverseLogo}
            logoAltText="Elfiverse"
            description="The lore of the Element DAO was born with Elfiverse – an endeavor to intersect the DeFi and NFT worlds while catalyzing network effects and community building. Elfiverse pushes the boundaries of on-chain governance allowing communities to look beyond the 1-token-1-vote system, driving inclusive governance participation for all."
            arc={elfiverseCornerArc}
            onClick={() => openDrawer("elfiverse")}
          />
        </div>
      </div>

      {/* drawer overlay */}
      <div
        className={classNames(
          "fixed inset-0 bg-black bg-opacity-50 backdrop-blur-[3px] opacity-0 pointer-events-none transition-all duration-300 z-50",
          {
            "opacity-100 pointer-events-auto": openedDrawer,
          },
        )}
        onClick={closeDrawer}
      ></div>

      {/* council drawer */}
      <div
        className={classNames(
          "clip-drawer fixed h-screen bg-[#191E31] px-24 py-16 top-0 left-full w-2/3 transition-all duration-300 z-50",
          {
            "!left-1/3": openedDrawer === "council",
          },
        )}
      >
        {/* glow */}
        <div className="absolute w-[757.166px] h-[758.23px] left-[-251.67px] bottom-[-313.08px] bg-[#46516F] opacity-80 blur-[70px] rounded-full"></div>
        <img
          src={councilGraphic}
          className="absolute block left-[-192px] bottom-[-240px]"
        />

        {/* close button */}
        <CloseButton onClick={closeDrawer} />

        {/* logo */}
        <img
          src={councilLogo}
          alt="Council"
          className="mt-12 h-[60px] relative"
        />

        <div className="w-96 absolute right-24 top-1/3">
          <div className="flex flex-col gap-[1em] opacity-80 text-lg font-blanka leading-snug mb-8">
            <p>
              Council represents the next evolution of on-chain governance,
              allowing anyone to build adaptable governance systems that meet
              both the practical needs of day-to-day activities and the required
              flexibility of long-term governance.
            </p>
            <p>
              The Council Protocol and Council Kit enable builders to use the
              security of on-chain governance while allowing for unprecedented
              modularity and flexibility.
            </p>
            <p>
              Council is here to reinvigorate the standard model for DAO
              governance - keeping decentralization at the forefront and
              allowing DAOs to scale their decision-making.
            </p>
          </div>

          <VisitWebsiteButton href="https://council.delv.tech" />
        </div>
      </div>

      {/* hyperdrive drawer */}
      <div
        className={classNames(
          "clip-drawer fixed h-screen px-24 py-16 top-0 left-full w-2/3 transition-all duration-300 bg-[url(/public/hyperdrive-graphic.png)] bg-no-repeat bg-right-bottom bg-cover bg-[#191E31] shadow-[inset_-100px_5vh_9999px_100px_rgba(0,0,0,.75),inset_-400px_-200px_9999px_100px_rgba(0,0,0,.8)] z-50",
          {
            "!left-1/3": openedDrawer === "hyperdrive",
          },
        )}
      >
        {/* close button */}
        <CloseButton onClick={closeDrawer} />

        {/* logo */}
        <img
          src={hyperdriveLogo}
          alt="Hyperdrive"
          className="mt-10 h-[140px] relative"
        />

        <div className="w-96 absolute right-24 bottom-24">
          <p className="opacity-80 text-lg font-blanka leading-snug mb-8 [text-shadow:0_0_5px_black,1px_1px_black]">
            Hyperdrive is a protocol for trading interest-bearing assets at a
            discount, which can be redeemed for their face value at maturity. Go
            long to lock in a predictable rate of return, go short to maximize
            exposure to the variable rate, or market-make to profit from
            directional market shifts. Yield exposure at your control.
          </p>

          <VisitWebsiteButton href="#" />
        </div>
      </div>

      {/* element drawer */}
      <div
        className={classNames(
          "clip-drawer fixed h-screen bg-gradient-to-br from-[#2D59AF] to-[#466CB7] px-24 py-16 top-0 left-full w-2/3 transition-all duration-300 z-50",
          {
            "!left-1/3": openedDrawer === "element",
          },
        )}
      >
        {/* blur */}
        <div className="absolute w-[942px] h-[943px] top-[-245px] left-[-321px] bg-[#224BAD] blur-[100px] rounded-full"></div>
        <img
          src={elementBalls}
          className="absolute block w-[853px] h-[715px] top-[-193.18px] left-[-296.33px]"
        />

        {/* close button */}
        <CloseButton onClick={closeDrawer} />

        {/* logo */}
        <img
          src={elementLogo}
          alt="Element"
          className="mt-16 h-[76px] relative"
        />

        <div className="w-96 absolute right-28 top-1/3">
          <div className="flex flex-col gap-[1em] opacity-80 text-lg font-blanka leading-snug mb-8">
            <p>
              Our journey into DeFi started with the Element Protocol back in
              2020. Element enables users to access fixed income in the DeFi
              market. It does not require trusted intermediaries and allows for
              fast and efficient trading of fixed and variable yields.
            </p>
            <p>
              On March 31, 2022, the Company released control of the Element
              Protocol to the Community. DELV, along with other projects,
              continue to research and build on top of the Protocol (and other
              Protocols), but do not control, govern, or oversee it.
            </p>
          </div>

          <VisitWebsiteButton href="https://governance.element.fi/" />
        </div>
      </div>

      {/* elfiverse drawer */}
      <div
        className={classNames(
          "clip-drawer fixed h-screen bg-[#191E31] px-24 py-16 top-0 left-full w-2/3 transition-all duration-300 z-50",
          {
            "!left-1/3": openedDrawer === "elfiverse",
          },
        )}
      >
        <img
          src={elfiverseGraphicTopRight}
          className="absolute block top-[-115px] right-[-12px]"
        />
        <img
          src={elfiverseGraphicBottomLeft}
          className="absolute block left-[-15px] bottom-[-44px]"
        />

        {/* close button */}
        <CloseButton onClick={closeDrawer} />

        {/* logo */}
        <img
          src={elfiverseLogo}
          alt="Elfiverse"
          className="mt-12 h-[60px] relative"
        />

        <div className="w-96 absolute right-24 top-1/2">
          <p className="opacity-80 text-lg font-blanka leading-snug mb-8">
            The launch of the Elfiverse signifies our first series of generative
            portraits of Element elves gifted to the community to commemorate
            the launch of the Element DAO. Each ELF manifests as an array of
            regenerative pixels and is unique, with a non-fungible token (NFT)
            stored on the Ethereum mainnet that attests to that uniqueness. Each
            ELF falls into a faction, with different powers, capabilities and
            traits.
          </p>

          <VisitWebsiteButton href="https://elfiverse.delv.tech" />
        </div>
      </div>
    </div>
  );
}

const drawerNames = ["council", "hyperdrive", "element", "elfiverse"] as const;
type DrawerName = (typeof drawerNames)[number];

function ProjectCard({
  logoSrc,
  logoAltText,
  description,
  onClick,
  className,
  arc,
  arcClassName,
}: {
  logoSrc: string;
  logoAltText?: string;
  description: string;
  onClick: () => void;
  className?: string;
  arc?: string;
  arcClassName?: string;
}) {
  return (
    <div
      className={classNames(
        "clip-corners bg-gradient-to-br from-white via-[#14D7D9] via-20% to-[#1A1F31] flex p-[1px] max-w-[415px] group hover:via-[#13F3F3] hover:via-40% hover:to-[#0D9999]",
        className,
      )}
    >
      <button
        onClick={onClick}
        className="clip-corners bg-[#053E3E] px-10 pt-10 pb-8 flex flex-col gap-2 bg-blend-soft-light bg-texture relative group-hover:bg-[#0A0B0B] transition-all duration-300"
      >
        <img
          src={logoSrc}
          alt={logoAltText}
          className="group-hover:scale-75 origin-top-left transition-all duration-300"
        />
        <p className="mt-2 mb-0 text-left opacity-0 group-hover:opacity-100 transition-all duration-300">
          {description}
        </p>

        {/* arrow */}
        <svg
          className="mt-auto ml-auto block mix-blend-soft-light opacity-60 group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-300 w-10 h-10 group-hover:scale-[200%] origin-bottom-right stroke-white group-hover:stroke-[.5px]"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 12H20M20 12L13.5 5.5M20 12L13.5 18.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {/* flare glows */}
        <FlairDown className="absolute top-0 left-[40%] -translate-x-1/2 z-[-1] opacity-0 group-hover:opacity-50 transition-all duration-300" />
        <FlairUp className="absolute bottom-0 left-[40%] -translate-x-1/2 z-[-1] opacity-0 group-hover:opacity-50 transition-all duration-300" />

        {/* bottom-right arc graphic */}
        {arc && (
          <img
            src={arc}
            className={classNames(
              "absolute bottom-0 right-0 mix-blend-soft-light opacity-60 group-hover:!opacity-0 transition-all duration-300",
              arcClassName,
            )}
          />
        )}
      </button>
    </div>
  );
}

export function VisitWebsiteButton({ href }: { href: string }) {
  return (
    <a
      className="backdrop-blur-lg bg-gradient-to-b from-white/30 to-white/15 hover:from-white/20 hover:to-white/10 rounded-full h-12 pl-6 pr-4 gap-2 inline-flex items-center transition-all"
      href={href}
    >
      Visit Website
      <img src={arrowRight} />
    </a>
  );
}
