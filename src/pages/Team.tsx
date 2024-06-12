import { PersonCard } from "src/components/team/PersonCard";

export function Team() {
  return (
    <>
      {/* hero */}
      <div className="relative mx-auto flex w-full justify-center gap-5 overflow-hidden pb-16 max-2xl:px-[5vw]">
        {/* glows */}
        <div className="absolute left-1/2 top-[-40px] h-[1240px] w-[1002px] -translate-x-1/2 rounded-[100%] bg-[#9F79FF] blur-[80px] max-md:scale-75 max-md:blur-2xl"></div>
        <div className="absolute left-1/2 top-2 h-[1100px] w-[1002px] -translate-x-1/2 rounded-[100%] bg-[#10F9B1] blur-[80px] max-md:scale-75 max-md:blur-2xl"></div>
        <div className="absolute left-1/2 top-[90px] h-[1010px] w-[1190px] -translate-x-1/2 rounded-[100%] bg-white/60 blur-xl max-md:scale-75 max-md:blur"></div>

        {/* black circle */}
        <div className="absolute left-1/2 top-10 h-[1104px] w-[1104px] -translate-x-1/2 rounded-full bg-black max-md:scale-75"></div>
        <div className="absolute h-full w-full bg-grid [clip-path:circle(552px_at_50%_592px)]"></div>

        {/* bottom shadow */}
        <div className="absolute bottom-0 h-[440px] w-full bg-gradient-to-b from-transparent to-black"></div>

        <div className="relative mt-72 w-[720px] text-center max-md:mt-64">
          <h1 className="mb-9 font-incise text-[82px] leading-none tracking-tight">
            Our Team
          </h1>
          <p className="font-blanka text-2xl leading-8">
            We are a group united by a shared passion for decentralized finance
            (DeFi) with respective expertise across a variety of domains.
            Together, we are committed to transforming the financial landscape
            to empower individuals with secure, accessible, and impactful DeFi
            solutions. Meet the minds behind our mission and join us in shaping
            the future of finance.
          </p>
        </div>
      </div>

      {/* Team grid */}
      <div className="relative mx-auto flex justify-center gap-5 px-[5vw] pt-10">
        <div className="inline-grid grid-cols-4 gap-5 max-lg:grid-cols-3 max-sm:grid-cols-2">
          <PersonCard
            name="Charles St. Louis"
            title="CEO"
            portraitSrc="/portraits/charles.png"
            href="https://www.linkedin.com/in/charlesstlouis"
            xUrl="https://x.com/CharlieStLouis"
          />
          <PersonCard
            name="Mihai Cosma"
            title="DeFi Strategist"
            portraitSrc="/portraits/mihai.png"
            href="https://mihaicosma.com"
            xUrl="https://x.com/mihai673"
          />
          <PersonCard
            name="Adelina Ruffolo"
            title="Operations"
            portraitSrc="/portraits/adelina.png"
            href="https://www.linkedin.com/in/adelinaruffolo"
            xUrl="https://x.com/adelina_ruffolo"
          />
          <PersonCard
            name="Jack Burrus"
            title="Product Engineer"
            portraitSrc="/portraits/jack.png"
            href="https://www.linkedin.com/in/jamesburrus"
            xUrl="https://x.com/jackburrus"
          />
          <PersonCard
            name="Shant Marootian"
            title="Operations"
            portraitSrc="/portraits/shant.png"
            href="https://www.linkedin.com/in/smaroo"
            xUrl="https://x.com/smaroo"
          />
          <PersonCard
            name="Danny Delott"
            title="Product Engineer"
            portraitSrc="/portraits/danny.png"
            href="http://github.com/dannydelott"
            xUrl="https://x.com/DannyDelott"
          />
          <PersonCard
            name="Andrea DiSandro"
            title="Legal"
            portraitSrc="/portraits/andrea.png"
            href="https://www.linkedin.com/in/andrea-disandro-b726386a"
            xUrl="https://x.com/AndreaDisandro"
          />
          <PersonCard
            name="Cash DeLeon"
            title="Integrations Engineer"
            portraitSrc="/portraits/cash.png"
            href="https://x.com/0xashd"
            xUrl="https://x.com/0xashd"
          />
          <PersonCard
            name="Alex Towle"
            title="Core Engineer"
            portraitSrc="/portraits/alex.png"
            href="https://github.com/jalextowle"
            xUrl="https://x.com/jalex_towle"
          />
          <PersonCard
            name="Gregory Lisa"
            title="CLO"
            portraitSrc="/portraits/greg.png"
            href="https://www.linkedin.com/in/gregory-lisa-9391785a"
            xUrl="https://x.com/gregoryclisa"
          />
          <PersonCard
            name="Matt Brown"
            title="Integrations Engineer"
            portraitSrc="/portraits/matt.png"
            href="https://www.linkedin.com/in/mattfdbrown"
            xUrl="https://x.com/sentilesdal"
          />
          <PersonCard
            name="Alim Khamisa"
            title="Product"
            portraitSrc="/portraits/alim.png"
            href="https://ca.linkedin.com/in/alimkhamisa"
            xUrl="https://x.com/AlimKhamisa"
          />
          <PersonCard
            name="Giovanni Effio"
            title="Product"
            portraitSrc="/portraits/mazy.png"
            href="https://x.com/MazyGio"
            xUrl="https://x.com/MazyGio"
          />
          <PersonCard
            name="Dylan Paiton"
            title="Core Engineer"
            portraitSrc="/portraits/dylan.png"
            href="https://github.com/dpaiton"
            xUrl="https://x.com/PaitonDylan"
          />
          <PersonCard
            name="Jonny Rhea"
            title="Co-Founder & CTO"
            portraitSrc="/portraits/jonny.png"
            href="https://x.com/JonnyRhea"
            xUrl="https://x.com/JonnyRhea"
          />
          <PersonCard
            name="John McClure"
            title="Core Engineer"
            portraitSrc="/portraits/john.png"
            href="https://github.com/mcclurejt"
            xUrl="https://x.com/0xpickleback"
          />
          <PersonCard
            name="Sheng Lundquist"
            title="Core Engineer"
            portraitSrc="/portraits/sheng.png"
            href="https://www.linkedin.com/in/shenglundquist"
            xUrl="https://x.com/lundquistsheng"
          />
          <PersonCard
            name="Ryan Goree"
            title="Product Engineer"
            portraitSrc="/portraits/ryan.png"
            href="https://github.com/ryangoree"
            xUrl="https://x.com/ryegoree"
          />
        </div>
      </div>

      {/* glow */}
      <div className="relative z-[-1] -mt-24 mb-14 h-96 overflow-hidden max-md:-mb-10 max-md:-mt-32">
        <div className="absolute left-1/2 top-[224px] h-[933px] w-[1700px] origin-top -translate-x-1/2 rounded-[100%] bg-[#10F9B1] blur-[100px] max-md:scale-50"></div>
        <div className="absolute left-1/2 top-[255px] h-[879px] w-[1310px] origin-top -translate-x-1/2 rounded-[100%] bg-[#9F79FF] blur-[100px] max-md:scale-50"></div>
        <div className="absolute left-1/2 top-[222px] h-[980px] w-[1440px] origin-top -translate-x-1/2 rounded-[100%] bg-white blur-xl max-md:scale-50"></div>
        <div className="absolute left-1/2 top-[237px] h-[980px] w-[2022px] origin-top -translate-x-1/2 rounded-[100%] bg-black max-md:scale-50"></div>
        <div className="absolute h-full w-full bg-grid bg-[0_86px] [clip-path:ellipse(1011px_490px_at_50%_727px)]"></div>
      </div>

      {/* investors */}
      <div className="relative mx-auto max-w-7xl pb-32 max-2xl:px-[5vw] max-md:text-lg">
        <h2 className="text-center font-incise text-[82px] leading-none tracking-tight">
          Our Investors
        </h2>
        <div className="mx-auto mt-20 flex flex-wrap items-center justify-center gap-x-28 gap-y-24 max-2xl:gap-x-24 max-xl:gap-x-16">
          <InvestorLogo
            href="https://www.placeholder.vc/"
            src="/investor-logos/placeholder.png"
            alt="placeholder"
          />
          <InvestorLogo
            href="https://a16zcrypto.com/"
            src="/investor-logos/a16z.svg"
            alt="a16z"
          />
          <InvestorLogo
            href="https://polychain.capital/"
            src="/investor-logos/polychain-capital.png"
            alt="Polychain Capital"
          />
          <InvestorLogo
            src="/investor-logos/hack-vc.svg"
            alt="Hack VC"
            href="https://www.hack.vc/"
          />
          <InvestorLogo
            src="/investor-logos/standard-crypto.png"
            alt="Standard Crypto"
            href="https://www.standardcrypto.vc/"
          />
          <InvestorLogo
            href="https://www.etherealventures.com/"
            src="/investor-logos/ethereal-ventures.svg"
            alt="Ethereal Ventures"
          />
          <InvestorLogo
            href="https://acapital.com/"
            src="/investor-logos/a_capital.svg"
            alt="a_capital"
          />
          <InvestorLogo
            href="https://svangel.com/"
            src="/investor-logos/sva.svg"
            alt="SVA"
          />
          <InvestorLogo
            href="https://robvc.com/"
            src="/investor-logos/robot-ventures.png"
            alt="Robot Ventures"
          />
        </div>
      </div>
    </>
  );
}

function InvestorLogo({
  src,
  alt,
  href,
}: {
  src: string;
  alt: string;
  href: string;
}) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <img src={src} alt={alt} />
    </a>
  );
}
