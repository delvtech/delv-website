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
import { ProjectCard } from "src/pages/home/ProjectCard";
import { ProjectDrawer } from "src/pages/home/ProjectDrawer";
import { region } from "src/region";
import councilGraphic from "/council-graphic.png";
import elfiverseGraphicBottomLeft from "/elfiverse-graphic-bottom-left.png";
import elfiverseGraphicTopRight from "/elfiverse-graphic-top-right.png";

export function Home() {
  const [openedDrawer, setOpenedDrawer] = useState<DrawerName | null>(null);

  const { current: closeDrawer } = useRef(() => {
    setOpenedDrawer(null);
    window.removeEventListener("keydown", onKeyDown);
  });

  const { current: onKeyDown } = useRef((e: KeyboardEvent) => {
    if (e.key === "Escape") {
      closeDrawer();
    }
  });

  function openDrawer(name: DrawerName) {
    setOpenedDrawer(name);
    window.addEventListener("keydown", onKeyDown);
  }

  return (
    <div className="relative overflow-hidden">
      {/* flair glows */}
      <FlairUp className="fixed left-1/2 top-0 z-[-1] -translate-x-1/2" />
      <FlairDown className="fixed bottom-0 left-1/2 z-[-1] -translate-x-1/2" />

      <main className="mx-auto mt-32 box-content flex max-w-[1440px] justify-center gap-5 px-20 max-xl:max-w-[850px] max-xl:flex-col max-xl:px-[5vw]">
        {/* Left (title + first 2 titles) */}
        <div className="flex flex-col justify-between max-xl:items-center">
          <h1 className="-mt-2 mb-10 w-[600px] font-incise text-[82px] leading-none tracking-tight max-xl:mb-16 max-xl:mt-5 max-xl:w-full max-xl:text-[60px] max-xs:text-center max-xs:text-5xl">
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
        <div className="flex flex-col gap-5 max-xl:justify-center sm:max-xl:flex-row">
          <ProjectCard
            className="h-64 flex-1 max-md:max-w-full max-sm:h-auto max-sm:min-h-[280px]"
            logoSrc={elementLogo}
            logoAltText="Element"
            description="Element is an open-source protocol for fixed and variable yield markets."
            arc={elementCornerArc}
            onClick={() => openDrawer("element")}
          />
          <ProjectCard
            className="h-[348px] flex-1 max-md:max-w-full max-sm:h-auto max-sm:min-h-[280px]"
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
          "pointer-events-none fixed inset-0 z-50 bg-black bg-opacity-50 opacity-0 backdrop-blur-[3px] transition-all duration-300",
          {
            "pointer-events-auto opacity-100": openedDrawer,
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
        <div className="absolute bottom-[-313.08px] left-[-251.67px] h-[758.23px] w-[757.166px] rounded-full bg-[#46516F] opacity-80 blur-[70px]"></div>
        <img
          src={councilGraphic}
          className="absolute bottom-[-240px] left-[-192px] block transition-all max-xl:opacity-50"
        />

        <img
          src={councilLogo}
          alt="Council"
          className="relative ml-[2vw] mt-20 h-[60px] max-lg:ml-0 max-md:mt-14"
        />

        <div className="absolute bottom-[10vh] right-[7vw] mt-10 w-96 max-lg:static max-lg:w-full">
          <div className="mb-8 flex flex-col gap-[1em] text-lg leading-snug opacity-80 [text-shadow:0_0_5px_#191E31,1px_1px_#191E31]">
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
        className="bg-[#191E31] bg-[url(/hyperdrive-graphic.jpg)] bg-cover bg-right-bottom bg-no-repeat shadow-[inset_-100px_5vh_9999px_100px_rgba(0,0,0,.25),inset_-400px_-200px_9999px_100px_rgba(0,0,0,.4)] max-md:!bg-center max-md:shadow-[inset_-1200px_-200px_9999px_100px_rgba(0,0,0,.6)]"
        insideClassName="!min-h-[620px] max-md:!min-h-full h-screen max-md:h-auto"
        isOpen={openedDrawer === "hyperdrive"}
        onClose={closeDrawer}
      >
        <img
          src={hyperdriveLogo}
          alt="Hyperdrive"
          className="relative ml-[3vw] mt-24 h-[90px] max-xl:ml-0"
        />

        <div
          className={classNames(
            "absolute right-[10vw] mb-8 mt-6 text-lg leading-snug opacity-80 [text-shadow:0_0_5px_black,1px_1px_black] max-lg:static max-lg:w-full",
            region === "uk" ? "top-1/2 w-96" : "bottom-[10vw] w-[440px]",
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

          <VisitWebsiteButton href="https://hyperdrive.delv.tech/" />
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
        <div className="absolute left-[-321px] top-[-245px] h-[943px] w-[942px] rounded-full bg-[#224BAD] blur-[100px]"></div>
        <img
          src={elementBalls}
          className="absolute left-[-296.33px] top-[-193.18px] block h-[715px] w-[853px] transition-all max-2xl:opacity-50"
        />

        <img
          src={elementLogo}
          alt="Element"
          className="relative mt-16 h-[92px] max-md:mt-14"
        />

        <div className="absolute bottom-[15vh] right-[10vw] mt-10 w-96 max-lg:static max-lg:w-full">
          <div className="mb-8 flex flex-col gap-[1em] text-lg leading-snug opacity-80 [text-shadow:0_0_5px_#2D59AF,1px_1px_#2D59AF]">
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
            <VisitWebsiteButton href="https://docs-delv.gitbook.io/element-developer-docs/" />
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
          className="absolute right-[-12px] top-[-115px] block origin-top-right transition-all max-md:scale-75 md:max-lg:opacity-50"
        />
        <img
          src={elfiverseGraphicBottomLeft}
          className="absolute bottom-[-44px] left-[-15px] block origin-bottom-left transition-all max-md:scale-75 md:max-lg:opacity-50"
        />

        <img
          src={elfiverseLogo}
          alt="Elfiverse"
          className="relative mt-12 h-[72px] max-lg:mt-20"
        />

        <div className="absolute bottom-[16vh] right-[10vw] mt-10 w-96 max-lg:static max-lg:w-full">
          <p className="mb-8 text-lg leading-snug opacity-80 [text-shadow:0_0_5px_#191E31,1px_1px_#191E31]">
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
      className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-b from-white/30 to-white/15 pl-6 pr-4 backdrop-blur-lg transition-all [text-shadow:0_0_5px_rgba(0,0,0,.5)] hover:from-white/20 hover:to-white/10 max-md:h-[60px] max-md:w-full max-md:text-xl"
      href={href}
    >
      {children}
      <img src={arrowRight} />
    </a>
  ) : (
    <div className="inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-b from-white/30 to-white/15 px-6 opacity-80 backdrop-blur-lg [text-shadow:0_0_5px_rgba(0,0,0,.5)] max-md:h-[60px] max-md:w-full max-md:text-xl">
      {children}
    </div>
  );
}
