export function About() {
  return (
    <>
      {/* hero */}
      <div className="relative mx-auto flex w-full justify-center gap-5 overflow-hidden px-[5vw] pb-16">
        {/* glows */}
        <div className="absolute left-1/2 top-[-40px] h-[1240px] w-[1002px] -translate-x-1/2 rounded-[100%] bg-[#9F79FF] blur-[80px] max-md:scale-75 max-md:blur-2xl"></div>
        <div className="absolute left-1/2 top-2 h-[1100px] w-[1002px] -translate-x-1/2 rounded-[100%] bg-[#10F9B1] blur-[80px] max-md:scale-75 max-md:blur-2xl"></div>
        <div className="absolute left-1/2 top-[90px] h-[1010px] w-[1190px] -translate-x-1/2 rounded-[100%] bg-white/60 blur-xl max-md:scale-75 max-md:blur"></div>

        {/* black circle */}
        <div className="absolute left-1/2 top-10 h-[1104px] w-[1104px] -translate-x-1/2 rounded-full bg-black max-md:scale-75"></div>
        <div className="absolute h-full w-full bg-grid [clip-path:circle(552px_at_50%_592px)]"></div>

        {/* bottom shadow */}
        <div className="absolute bottom-0 h-[440px] w-full bg-gradient-to-b from-transparent to-black"></div>

        <div className="relative mt-72 w-[630px] text-center max-md:mt-64">
          <h1 className="mb-9 font-incise text-[82px] leading-none tracking-tight">
            About
          </h1>
          <p className="text-2xl leading-8">
            We believe in a world where global economic systems will operate on
            highly accessible decentralized infrastructure.
          </p>
        </div>
      </div>

      {/* mission */}
      <div className="relative overflow-hidden py-56 max-md:pb-40 max-md:pt-32">
        {/* glows */}
        <div className="absolute left-1/2 top-full h-[414px] w-[1240px] -translate-x-1/2 -translate-y-6 rounded-[100%] bg-[#9F79FF] opacity-55 blur-[100px]"></div>
        <div className="translate-y-.5 absolute left-1/2 top-full h-[482px] w-[1240px] -translate-x-1/2 rounded-[100%] bg-[#10F9B1] opacity-55 blur-[100px]"></div>
        <div className="absolute left-1/2 top-full h-[524px] w-[1240px] -translate-x-1/2 translate-y-6 rounded-[100%] bg-white/60 opacity-55 blur-xl"></div>

        <div className="mx-auto box-content flex max-w-5xl items-end justify-between px-[5vw] max-md:flex-col max-md:items-start">
          <div className="flex max-w-72 flex-col justify-between gap-4">
            <p className="gradient-text text-3xl leading-none">01</p>
            <h2 className="font-incise text-[82px] leading-none tracking-tight">
              Mission
            </h2>
          </div>
          <p className="max-w-[440px] max-md:mt-10 max-md:max-w-full max-md:text-lg">
            Our Mission is to advance the safe adoption of decentralized
            financial systems by building novel, research-backed, and open
            source infrastructure.
          </p>
        </div>
      </div>

      {/* values */}
      <div className="relative overflow-y-hidden pt-36 max-md:pt-28 max-md:text-lg">
        <div className="mx-auto box-content flex max-w-5xl items-start justify-between px-[5vw]">
          <div className="mx-lg:flex-col items flex flex-wrap justify-between gap-16 max-xl:gap-12 [&_p]:opacity-75">
            <div className="flex max-w-72 flex-col justify-between gap-4">
              <p className="gradient-text text-3xl leading-none !opacity-100">
                02
              </p>
              <h2 className="font-incise text-[82px] leading-none tracking-tight">
                Values
              </h2>
            </div>

            <p className="mt-6 basis-[440px] max-lg:mt-0 max-lg:basis-auto">
              Core values guide our interactions with one another and the
              community at large. They are deeply ingrained beliefs about who we
              are as a collective and anchor our company culture. Values are the
              moral code of our organization.
            </p>
            <div className="basis-[440px] max-lg:basis-auto">
              <h3 className="mb-2 font-incise text-4xl">Building For People</h3>
              <p>
                We believe in the creation, promotion, and advancement of
                decentralized systems for benefit of present and future
                generations.
              </p>
            </div>
            <div className="basis-[440px] max-lg:basis-auto">
              <h3 className="mb-2 font-incise text-4xl">
                Principles Over Hype
              </h3>
              <p>
                We believe in unpacking the fundamental concepts and assumptions
                on which theories, systems, or methods are based, we don't chase
                trends.
              </p>
            </div>
            <div className="basis-[440px] max-lg:basis-auto">
              <h3 className="mb-2 font-incise text-4xl">
                (Appropriate) Openness
              </h3>
              <p>
                We believe in the power of transparency and feedback, from how
                we work across our teams to contributing open source software
                for the benefit of all, while also recognizing time is a scarce
                resource.
              </p>
            </div>
            <div className="basis-[440px] max-lg:basis-auto">
              <h3 className="mb-2 font-incise text-4xl">Integrity</h3>
              <p>
                We believe in working capably, reliably, honestly, and
                benevolently towards our mission, even when no one is looking.
                We take responsibility for our actions and admit our mistakes.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* glow */}
      <div className="relative mb-14 h-96 overflow-hidden max-md:-mb-10 max-md:-mt-10">
        <div className="absolute left-1/2 top-[224px] h-[933px] w-[1700px] origin-top -translate-x-1/2 rounded-[100%] bg-[#10F9B1] blur-[100px] max-md:scale-50"></div>
        <div className="absolute left-1/2 top-[255px] h-[879px] w-[1310px] origin-top -translate-x-1/2 rounded-[100%] bg-[#9F79FF] blur-[100px] max-md:scale-50"></div>
        <div className="absolute left-1/2 top-[222px] h-[980px] w-[1440px] origin-top -translate-x-1/2 rounded-[100%] bg-white blur-xl max-md:scale-50"></div>
        <div className="absolute left-1/2 top-[237px] h-[980px] w-[2022px] origin-top -translate-x-1/2 rounded-[100%] bg-black max-md:scale-50"></div>
        <div className="absolute h-full w-full bg-grid bg-[0_86px] [clip-path:ellipse(1011px_490px_at_50%_727px)]"></div>
      </div>

      {/* guiding principles */}
      <div className="relative overflow-y-hidden pb-32 max-md:text-lg">
        <div className="mx-auto box-content flex max-w-5xl items-start justify-between px-[5vw]">
          <div className="mx-lg:flex-col items flex flex-wrap justify-between gap-16 max-xl:gap-12 [&_p]:opacity-75">
            <div className="flex max-w-72 flex-col justify-between gap-4">
              <p className="gradient-text text-3xl leading-none !opacity-100">
                03
              </p>
              <h2 className="font-incise text-[82px] leading-none tracking-tight">
                Guiding Principles
              </h2>
            </div>
            <p className="mt-24 basis-[440px] max-lg:mt-0 max-lg:basis-auto">
              Guiding Principles are mission focused and help to steer our
              priorities. They are the guideposts that ensure we stay true to
              the ideals we have set out for ourselves. They underpin every
              action, decision, or move the team makes.
            </p>
            <div className="basis-[440px] max-lg:basis-auto">
              <h3 className="mb-2 font-incise text-4xl">
                Results Over Everything
              </h3>
              <p>
                Extraordinary claims require extraordinary proof. We are
                committed to research, develop, and ship our work with clear and
                convincing results. We ruthlessly prioritize towards producing
                these results.
              </p>
            </div>
            <div className="basis-[440px] max-lg:basis-auto">
              <h3 className="mb-2 font-incise text-4xl">Lead by Example</h3>
              <p>
                Our behaviors model what we expect of one other. This includes
                taking pride in our work, setting standards of excellence,
                anticipating needs, being proactive, thinking long-term, and
                uplifting our teammates.
              </p>
            </div>
            <div className="basis-[440px] max-lg:basis-auto">
              <h3 className="mb-2 font-incise text-4xl">
                Make It Safe and Approachable
              </h3>
              <p>
                Safety is a precondition to usability and adoption. We go the
                extra mile to build our product in ways that make them as safe
                and easy as possible for everyone.
              </p>
            </div>
            <div className="basis-[440px] max-lg:basis-auto">
              <h3 className="mb-2 font-incise text-4xl">
                Cultivate Curiosity and Continuous Learning
              </h3>
              <p>
                There is always more to learn (especially in new markets). We
                stay inquisitive and ask &lsquo;why&rsquo; to build new
                perspectives. We encourage sharing knowledge and resources, both
                1-on-1 and in groups, for our ongoing professional development.
              </p>
            </div>
            <div className="basis-[440px] max-lg:basis-auto">
              <h3 className="mb-2 font-incise text-4xl">
                Foster Clear Communication and Active Collaboration
              </h3>
              <p>
                We engage each other with context, clear expectations, and tools
                to collaborate well, both within and across our teams. This
                includes creating channels and spaces for both open
                communication and cross-team cooperation to improve our
                productivity and work quality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
