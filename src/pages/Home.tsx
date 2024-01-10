import classNames from "classnames";
import { useRef, useState } from "react";
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
import { ProjectCard } from "src/components/ProjectCard";
import { VisitWebsiteButton } from "src/components/VisitWebsiteButton";
import { formatPath } from "src/utils/formatPath";

const drawerNames = ["council", "hyperdrive", "element", "elfiverse"] as const;
type DrawerName = (typeof drawerNames)[number];

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
    <>
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
          src={formatPath("/public/council-graphic.png")}
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
          src={formatPath("/public/elfiverse-graphic-top-right.png")}
          className="absolute block top-[-115px] right-[-12px]"
        />
        <img
          src={formatPath("/public/elfiverse-graphic-bottom-left.png")}
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
    </>
  );
}
