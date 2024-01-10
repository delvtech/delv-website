export function About() {
  return (
    <>
      {/* hero */}
      <div className="flex justify-center mx-auto flex gap-5 px-20 pb-16 overflow-y-hidden relative w-full">
        {/* glows */}
        <div className="absolute w-[1002px] h-[1240px] rounded-full bg-[#9F79FF] blur-[80px] left-1/2 -translate-x-1/2 top-[-40px]"></div>
        <div className="absolute w-[1002px] h-[1100px] rounded-full bg-[#10F9B1] blur-[80px] left-1/2 -translate-x-1/2 top-2"></div>
        <div className="absolute w-[1190px] h-[1010px] rounded-full bg-white/60 blur-xl left-1/2 -translate-x-1/2 top-[90px]"></div>

        {/* black circle */}
        <div className="absolute w-[1104px] h-[1104px] rounded-full bg-black left-1/2 -translate-x-1/2 top-10"></div>

        {/* bottom shadow */}
        <div className="absolute w-full h-[440px] bg-gradient-to-b from-transparent to-black bottom-0"></div>

        <div className="w-[630px] text-center mt-72 relative">
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
      <div className="py-56 overflow-y-hidden relative">
        {/* glows */}
        <div className="absolute w-[1240px] h-[414px] rounded-full bg-[#9F79FF] blur-[100px] left-1/2 -translate-x-1/2 top-full -translate-y-6 opacity-55"></div>
        <div className="absolute w-[1240px] h-[482px] rounded-full bg-[#10F9B1] blur-[100px] left-1/2 -translate-x-1/2 top-full translate-y-.5 opacity-55"></div>
        <div className="absolute w-[1240px] h-[524px] rounded-full bg-white/60 blur-xl left-1/2 -translate-x-1/2 top-full translate-y-6 opacity-55"></div>

        <div className="max-w-5xl flex items-end justify-between mx-auto">
          <div className="flex flex-col gap-4 justify-between max-w-72">
            <p className="text-3xl leading-none">01</p>
            <h2 className="text-[82px] font-incise tracking-tight leading-none">
              Mission
            </h2>
          </div>
          <p className="max-w-[440px] font-blanka">
            Our Mission is to advance the safe adoption of decentralized
            financial systems by building a suite of novel, research-backed, and
            open source infrastructure.
          </p>
        </div>
      </div>

      {/* values */}
      <div className="py-36 overflow-y-hidden relative">
        <div className="max-w-5xl flex items-start justify-between mx-auto">
          <div className="flex flex-col gap-4 justify-between max-w-72">
            <p className="text-3xl leading-none">02</p>
            <h2 className="text-[82px] font-incise tracking-tight leading-none">
              Values
            </h2>
          </div>
          <div className="max-w-[440px] flex flex-col gap-8 mt-14 font-blanka">
            <p>
              Core values guide our interactions with one another and the
              community at large. They are deeply ingrained beliefs about who we
              are as a collective and anchor our company culture. Values are the
              moral code of our organization.
            </p>
            <div>
              <h3 className="font-bold mb-2 font-incise text-2xl">
                Building For People
              </h3>
              <p>
                We believe in the creation, promotion, and advancement of
                decentralized system for benefit of present and future
                generations.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2 font-incise text-2xl">
                (Appropriate) Openness
              </h3>
              <p>
                We believe power of transparency and feedback, from how we work
                across our teams to contributing open source software for the
                benefit of all, while also recognizing time is a scarce
                resource.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2 font-incise text-2xl">
                Principles Over Hype
              </h3>
              <p>
                We believe in unpacking the fundamental concepts and assumptions
                on which theories, systems, or methods are based, we don’t chase
                trends.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2 font-incise text-2xl">Integrity</h3>
              <p>
                We believe in working capably, reliably, honestly, and
                benevolently towards our mission, even when no one is looking.
                We take responsibility for our actions and admit our mistakes.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* values */}
      <div className="pt-80 pb-32 overflow-y-hidden relative">
        <div className="max-w-5xl flex items-start justify-between mx-auto">
          <div className="flex flex-col gap-4 justify-between max-w-72">
            <p className="text-3xl leading-none">03</p>
            <h2 className="text-[82px] font-incise tracking-tight leading-none">
              Guiding Principles
            </h2>
          </div>
          <div className="max-w-[440px] flex flex-col gap-8 mt-14 font-blanka">
            <p>
              Guiding Principles are mission focused and help to steer our
              priorities. They are the guideposts that ensure we stay true to
              the ideals we have set out for ourselves. They underpin every
              action, decision, or move the team makes.
            </p>
            <div>
              <h3 className="font-bold mb-2 font-incise text-2xl">
                Results Over Everything
              </h3>
              <p>
                <span className="font-bold font-incise text-lg">
                  Extraordinary claims require extraordinary proof.
                </span>{" "}
                We are committed to research, develop, and ship our work with
                clear and convincing results. We ruthlessly prioritize towards
                producing these results.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2 font-incise text-2xl">
                Make It safe and approachable
              </h3>
              <p>
                <span className="font-bold font-incise text-lg">
                  Safety is a precondition to usability and adoption.
                </span>{" "}
                We go the extra mile to build our product in ways that make them
                as safe and easy as possible for everyone.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2 font-incise text-2xl">
                Lead by Example
              </h3>
              <p>
                <span className="font-bold font-incise text-lg">
                  Our behaviors model what we expect of one other.
                </span>{" "}
                This includes taking pride in our work, setting standards of
                excellence, anticipating needs, being proactive, thinking
                long-term, and uplifting our teammates.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2 font-incise text-2xl">
                Cultivate Curiosity and Continuous Learning
              </h3>
              <p>
                <span className="font-bold font-incise text-lg">
                  There is always more to learn (especially in new markets).
                </span>{" "}
                We stay inquisitive and ask &lsquo;why&rsquo; to build new
                perspectives. We encourage sharing knowledge and resources, both
                1-on-1 and in groups, for our ongoing professional development.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2 font-incise text-2xl">
                Foster Clear Communication and active Collaboration
              </h3>
              <p>
                <span className="font-bold font-incise text-lg">
                  We engage each other with context, clear expectations, and
                  tools to collaborate well, both within and across our teams.
                </span>{" "}
                This includes creating channels and spaces for both open
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
