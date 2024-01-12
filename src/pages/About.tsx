export function About() {
  return (
    <>
      {/* hero */}
      <div className="flex justify-center mx-auto flex gap-5 px-[5vw] pb-16 overflow-hidden relative w-full">
        {/* glows */}
        <div className="absolute w-[1002px] h-[1240px] rounded-[100%] bg-[#9F79FF] blur-[80px] max-md:blur-2xl left-1/2 -translate-x-1/2 top-[-40px] max-md:scale-75"></div>
        <div className="absolute w-[1002px] h-[1100px] rounded-[100%] bg-[#10F9B1] blur-[80px] max-md:blur-2xl left-1/2 -translate-x-1/2 top-2 max-md:scale-75"></div>
        <div className="absolute w-[1190px] h-[1010px] rounded-[100%] bg-white/60 blur-xl max-md:blur left-1/2 -translate-x-1/2 top-[90px] max-md:scale-75"></div>

        {/* black circle */}
        <div className="absolute w-[1104px] h-[1104px] rounded-full bg-black left-1/2 -translate-x-1/2 top-10 max-md:scale-75"></div>
        <div className="absolute bg-grid w-full h-full [clip-path:circle(552px_at_50%_592px)] max-md:scale-75"></div>

        {/* bottom shadow */}
        <div className="absolute w-full h-[440px] bg-gradient-to-b from-transparent to-black bottom-0"></div>

        <div className="w-[630px] text-center mt-72 max-md:mt-64 relative">
          <h1 className="font-incise text-[82px] tracking-tight leading-none mb-9">
            About
          </h1>
          <p className="font-blanka text-2xl leading-8">
            We research, build, and open source novel protocols and
            infrastructure to propel the global adoption of decentralized
            finance.
          </p>
        </div>
      </div>

      {/* mission */}
      <div className="py-56 max-md:pt-32 max-md:pb-40 overflow-hidden relative">
        {/* glows */}
        <div className="absolute w-[1240px] h-[414px] rounded-[100%] bg-[#9F79FF] blur-[100px] left-1/2 -translate-x-1/2 top-full -translate-y-6 opacity-55"></div>
        <div className="absolute w-[1240px] h-[482px] rounded-[100%] bg-[#10F9B1] blur-[100px] left-1/2 -translate-x-1/2 top-full translate-y-.5 opacity-55"></div>
        <div className="absolute w-[1240px] h-[524px] rounded-[100%] bg-white/60 blur-xl left-1/2 -translate-x-1/2 top-full translate-y-6 opacity-55"></div>

        <div className="max-w-5xl px-[5vw] box-content flex max-md:flex-col items-end max-md:items-start justify-between mx-auto">
          <div className="flex flex-col gap-4 justify-between max-w-72">
            <p className="text-3xl leading-none bg-gradient-to-br from-[#71F8F8] to-[#c5edff] bg-clip-text text-transparent">
              01
            </p>
            <h2 className="text-[82px] font-incise tracking-tight leading-none">
              Mission
            </h2>
          </div>
          <p className="max-w-[440px] max-md:max-w-full max-md:mt-10 max-md:text-lg font-blanka">
            Our Mission is to advance the safe adoption of decentralized
            financial systems by building a suite of novel, research-backed, and
            open source infrastructure.
          </p>
        </div>
      </div>

      {/* values */}
      <div className="pt-36 max-md:pt-28 overflow-y-hidden relative max-md:text-lg">
        <div className="max-w-5xl px-[5vw] box-content flex items-start justify-between mx-auto">
          <div className="flex flex-wrap mx-lg:flex-col items justify-between gap-16 max-xl:gap-12 font-blanka [&_p]:opacity-75">
            <div className="flex flex-col gap-4 justify-between max-w-72">
              <p className="text-3xl leading-none bg-gradient-to-br from-[#71F8F8] to-[#c5edff] bg-clip-text text-transparent !opacity-100">
                02
              </p>
              <h2 className="text-[82px] font-incise tracking-tight leading-none">
                Values
              </h2>
            </div>

            <p className="basis-[440px] max-lg:basis-auto mt-6 max-lg:mt-0">
              Core values guide our interactions with one another and the
              community at large. They are deeply ingrained beliefs about who we
              are as a collective and anchor our company culture. Values are the
              moral code of our organization.
            </p>
            <div className="basis-[440px] max-lg:basis-auto">
              <h3 className="mb-2 font-incise text-4xl">Building For People</h3>
              <p>
                We believe in the creation, promotion, and advancement of
                decentralized system for benefit of present and future
                generations.
              </p>
            </div>
            <div className="basis-[440px] max-lg:basis-auto">
              <h3 className="mb-2 font-incise text-4xl">
                Principles Over Hype
              </h3>
              <p>
                We believe in unpacking the fundamental concepts and assumptions
                on which theories, systems, or methods are based, we don’t chase
                trends.
              </p>
            </div>
            <div className="basis-[440px] max-lg:basis-auto">
              <h3 className="mb-2 font-incise text-4xl">
                (Appropriate) Openness
              </h3>
              <p>
                We believe power of transparency and feedback, from how we work
                across our teams to contributing open source software for the
                benefit of all, while also recognizing time is a scarce
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
      <div className="relative h-96 max-md:scale-50 max-md:-translate-x-1/4 max-md:w-[200%] overflow-hidden max-md:-mt-10 mb-14 max-md:-mb-10">
        <div className="absolute rounded-[100%] left-1/2 -translate-x-1/2 bg-[#10F9B1] w-[1700px] h-[933px] top-[224px] blur-[100px]"></div>
        <div className="absolute rounded-[100%] left-1/2 -translate-x-1/2 bg-[#9F79FF] w-[1310px] h-[879px] top-[255px] blur-[100px]"></div>
        <div className="absolute rounded-[100%] left-1/2 -translate-x-1/2 bg-white w-[1440px] h-[980px] top-[222px] blur-xl"></div>
        <div className="absolute rounded-[100%] left-1/2 -translate-x-1/2 bg-black w-[2022px] h-[980px] top-[237px]"></div>
        <div className="absolute bg-grid w-full h-full [clip-path:ellipse(1011px_490px_at_50%_727px)] bg-[0_86px] max-md:scale-[200%] max-md:bg-[0_96px]"></div>
      </div>

      {/* guiding principles */}
      <div className="pb-32 overflow-y-hidden relative max-md:text-lg">
        <div className="max-w-5xl px-[5vw] box-content flex items-start justify-between mx-auto">
          <div className="flex flex-wrap mx-lg:flex-col items justify-between gap-16 max-xl:gap-12 font-blanka [&_p]:opacity-75">
            <div className="flex flex-col gap-4 justify-between max-w-72">
              <p className="text-3xl leading-none bg-gradient-to-br from-[#71F8F8] to-[#c5edff] bg-clip-text text-transparent !opacity-100">
                03
              </p>
              <h2 className="text-[82px] font-incise tracking-tight leading-none">
                Guiding Principles
              </h2>
            </div>
            <p className="basis-[440px] max-lg:basis-auto mt-24 max-lg:mt-0">
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
                Make It safe and approachable
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
                Foster Clear Communication and active Collaboration
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
