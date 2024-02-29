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
import { FlairDown } from "src/components/FlairDown";
import { FlairUp } from "src/components/FlairUp";
import { ProjectCard } from "src/components/ProjectCard";
import { ProjectDrawer } from "src/components/ProjectDrawer";
import { region } from "src/region";
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

      <main className="max-w-[1440px] px-20 max-xl:px-[5vw] mt-32 flex justify-center mx-auto gap-5 max-xl:flex-col max-xl:max-w-[850px] box-content">
        {/* Left (title + first 2 titles) */}
        <div className="flex flex-col justify-between max-xl:items-center">
          <h1 className="font-incise text-[82px] max-xl:text-[60px] max-xs:text-5xl max-xs:text-center w-[600px] max-xl:w-full tracking-tight leading-none -mt-2 max-xl:mt-5 mb-10 max-xl:mb-16">
            New Protocols for{" "}
            <span className="whitespace-nowrap">New Markets</span>
          </h1>

          <div className="flex items-end gap-5 max-xl:flex-row-reverse max-md:flex-col-reverse">
            <ProjectCard
              className="h-[336px] flex-1 max-md:h-auto max-md:min-h-[280px] max-md:max-w-full"
              logoSrc={councilLogo}
              logoAltText="Council"
              description="Council is an adaptable governance system and suite of tools that allow a community to create and manage a DAO."
              arc={councilCornerArc}
              onClick={() => openDrawer("council")}
            />
            <ProjectCard
              className="h-[432px] flex-1 max-md:h-auto max-md:min-h-[280px] max-md:max-w-full"
              logoSrc={hyperdriveLogo}
              logoAltText="Hyperdrive"
              logoClassName="-mb-10 max-w-[280px]"
              description={
                region === "uk"
                  ? "Hyperdrive is an automated market maker for fixed and variable yields."
                  : "Hyperdrive is a new Automated Market Maker (AMM) for fixed and variable yields featuring terms on demand and single-sided liquidity provisioning that no longer requires capital to be rolled over — it's everlasting."
              }
              arc={hyperdriveCornerArc}
              arcClassName="opacity-100"
              onClick={() => openDrawer("hyperdrive")}
            />
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col sm:max-xl:flex-row max-xl:justify-center gap-5">
          <ProjectCard
            className="h-64 flex-1 max-sm:h-auto max-sm:min-h-[280px] max-md:max-w-full"
            logoSrc={elementLogo}
            logoAltText="Element"
            description="Element is an open-source protocol for fixed and variable yield markets."
            arc={elementCornerArc}
            onClick={() => openDrawer("element")}
          />
          <ProjectCard
            className="h-[348px] flex-1 max-sm:h-auto max-sm:min-h-[280px] max-md:max-w-full"
            logoSrc={elfiverseLogo}
            logoAltText="Elfiverse"
            description="Elfiverse is an endeavor to intersect the DeFi and NFT worlds for community building, introducing new possibilities for governance."
            arc={elfiverseCornerArc}
            onClick={() => openDrawer("elfiverse")}
          />
        </div>
      </main>

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
      <ProjectDrawer
        className="bg-[#191E31]"
        insideClassName="!min-h-[800px] max-md:!min-h-full h-screen max-md:h-auto"
        isOpen={openedDrawer === "council"}
        onClose={closeDrawer}
      >
        {/* glow */}
        <div className="absolute w-[757.166px] h-[758.23px] left-[-251.67px] bottom-[-313.08px] bg-[#46516F] opacity-80 blur-[70px] rounded-full"></div>
        <img
          src={councilGraphic}
          className="absolute block left-[-192px] bottom-[-240px] max-xl:opacity-50 transition-all"
        />

        <img
          src={councilLogo}
          alt="Council"
          className="mt-20 max-md:mt-14 ml-[2vw] max-lg:ml-0 h-[60px] relative"
        />

        <div className="w-96 max-lg:w-full absolute right-[7vw] bottom-[10vh] max-lg:static mt-10">
          <div className="flex flex-col gap-[1em] opacity-80 text-lg font-blanka leading-snug mb-8 [text-shadow:0_0_5px_#191E31,1px_1px_#191E31]">
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
      </ProjectDrawer>

      {/* hyperdrive drawer */}
      <ProjectDrawer
        className="bg-[url(/public/hyperdrive-graphic.png)] bg-no-repeat bg-right-bottom bg-cover bg-[#191E31] shadow-[inset_-100px_5vh_9999px_100px_rgba(0,0,0,.75),inset_-400px_-200px_9999px_100px_rgba(0,0,0,.8)] max-md:!bg-center max-md:shadow-[inset_-100px_5vh_9999px_100px_rgba(0,0,0,.5),inset_-400px_-200px_9999px_100px_rgba(0,0,0,.6)]"
        insideClassName="!min-h-[620px] max-md:!min-h-full h-screen max-md:h-auto"
        isOpen={openedDrawer === "hyperdrive"}
        onClose={closeDrawer}
      >
        <img
          src={hyperdriveLogo}
          alt="Hyperdrive"
          className="mt-24 ml-[3vw] max-xl:ml-0 h-[90px] relative"
        />

        <div
          className={classNames(
            " max-lg:w-full absolute right-[10vw] max-lg:static mt-6 opacity-80 text-lg font-blanka leading-snug mb-8 [text-shadow:0_0_5px_black,1px_1px_black]",
            region === "uk" ? "w-96 top-1/2" : "w-[440px] bottom-[10vw]",
          )}
        >
          {region === "uk" ? (
            <p className="mb-8">
              Hyperdrive is an automated market maker for fixed and variable
              yields.
            </p>
          ) : (
            <p className="mb-8">
              Hyperdrive is a new AMM for fixed and variable yield positions
              underpinned by a novel pricing mechanism. It enables terms
              on-demand and removes the need for liquidity providers to roll
              over their capital allocations. Additionally, its mechanism design
              enables a more efficient, symmetrical yield market and is open
              source for others to build on.
            </p>
          )}

          <VisitWebsiteButton />
        </div>
      </ProjectDrawer>

      {/* element drawer */}
      <ProjectDrawer
        className="bg-gradient-to-br from-[#2D59AF] to-[#466CB7]"
        insideClassName="!min-h-[740px] max-md:!min-h-full h-screen max-md:h-auto"
        isOpen={openedDrawer === "element"}
        onClose={closeDrawer}
      >
        {/* blur */}
        <div className="absolute w-[942px] h-[943px] top-[-245px] left-[-321px] bg-[#224BAD] blur-[100px] rounded-full"></div>
        <img
          src={elementBalls}
          className="absolute block w-[853px] h-[715px] top-[-193.18px] left-[-296.33px] max-2xl:opacity-50 transition-all"
        />

        <img
          src={elementLogo}
          alt="Element"
          className="mt-16 max-md:mt-14 h-[92px] relative"
        />

        <div className="w-96 max-lg:w-full absolute right-[10vw] bottom-[15vh] max-lg:static mt-10">
          <div className="flex flex-col gap-[1em] opacity-80 text-lg font-blanka leading-snug mb-8 [text-shadow:0_0_5px_#2D59AF,1px_1px_#2D59AF]">
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

          {region !== "uk" && (
            <VisitWebsiteButton href="https://docs.element.fi/" />
          )}
        </div>
      </ProjectDrawer>

      {/* elfiverse drawer */}
      <ProjectDrawer
        className="bg-[#191E31]"
        insideClassName="!min-h-[640px] max-md:!min-h-full h-screen max-md:h-auto"
        closeButtonClassName="!bg-[#191E31]/75 backdrop-blur-sm"
        isOpen={openedDrawer === "elfiverse"}
        onClose={closeDrawer}
      >
        <img
          src={elfiverseGraphicTopRight}
          className="absolute block top-[-115px] right-[-12px] md:max-lg:opacity-50 transition-all max-md:scale-75 origin-top-right"
        />
        <img
          src={elfiverseGraphicBottomLeft}
          className="absolute block left-[-15px] bottom-[-44px] md:max-lg:opacity-50 transition-all max-md:scale-75 origin-bottom-left"
        />

        <img
          src={elfiverseLogo}
          alt="Elfiverse"
          className="mt-12 h-[72px] relative max-lg:mt-20"
        />

        <div className="w-96 max-lg:w-full absolute right-[10vw] bottom-[16vh] max-lg:static mt-10">
          <p className="opacity-80 text-lg font-blanka leading-snug mb-8 [text-shadow:0_0_5px_#191E31,1px_1px_#191E31]">
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
      </ProjectDrawer>
    </div>
  );
}

const drawerNames = ["council", "hyperdrive", "element", "elfiverse"] as const;
type DrawerName = (typeof drawerNames)[number];

function VisitWebsiteButton({
  href,
  children = href ? "Visit Website" : "Coming Soon",
}: {
  href?: string;
  children?: React.ReactNode;
}) {
  return href ? (
    <a
      className="backdrop-blur-lg bg-gradient-to-b from-white/30 to-white/15 hover:from-white/20 hover:to-white/10 rounded-full h-12 pl-6 pr-4 gap-2 inline-flex items-center transition-all max-md:w-full justify-center max-md:h-[60px] max-md:text-xl [text-shadow:0_0_5px_rgba(0,0,0,.5)]"
      href={href}
    >
      {children}
      <img src={arrowRight} />
    </a>
  ) : (
    <div className="backdrop-blur-lg bg-gradient-to-b from-white/30 to-white/15 rounded-full h-12 px-6 inline-flex items-center max-md:w-full justify-center max-md:h-[60px] max-md:text-xl [text-shadow:0_0_5px_rgba(0,0,0,.5)] opacity-80">
      {children}
    </div>
  );
}
