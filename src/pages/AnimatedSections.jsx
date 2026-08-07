import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Observer } from "gsap/Observer";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(Observer, SplitText);

// const sections = [
//   {
//     label: "first",
//     heading: "Scroll down",
//     bg: "https://assets.codepen.io/16327/site-landscape-1.jpg",
//   },
//   {
//     label: "second",
//     heading: "Animated with GSAP",
//     bg: "https://assets.codepen.io/16327/site-landscape-2.jpg",
//   },
//   {
//     label: "third",
//     heading: "GreenSock",
//     bg: "https://assets.codepen.io/16327/site-landscape-3.jpg",
//   },
//   {
//     label: "fourth",
//     heading: "Animation platform",
//     bg: "https://assets.codepen.io/16327/site-landscape-4.jpg",
//   },
//   {
//     label: "fifth",
//     heading: "Keep scrolling",
//     bg: "https://assets.codepen.io/16327/site-landscape-5.jpg",
//     bgPosition: "50% 45%",
//   },
// ];

export default function AnimatedSections() {
  const sectionRefs = useRef([]);
  const outerRefs = useRef([]);
  const innerRefs = useRef([]);
  const bgRefs = useRef([]);
  const headingRefs = useRef([]);

  const currentIndex = useRef(-1);
  const animating = useRef(false);

  useEffect(() => {
    const wrap = gsap.utils.wrap(0, sections.length);

    // Split headings for char animation
    const splitHeadings = headingRefs.current.map(
      (el) => new SplitText(el, { type: "chars,words,lines", linesClass: "overflow-hidden" })
    );

    gsap.set(outerRefs.current, { yPercent: 100 });
    gsap.set(innerRefs.current, { yPercent: -100 });

    function gotoSection(index, direction) {
      index = wrap(index);
      animating.current = true;

      const fromTop = direction === -1;
      const dFactor = fromTop ? -1 : 1;

      const tl = gsap.timeline({
        defaults: { duration: 1.25, ease: "power1.inOut" },
        onComplete: () => { animating.current = false; },
      });

      if (currentIndex.current >= 0) {
        gsap.set(sectionRefs.current[currentIndex.current], { zIndex: 0 });
        tl.to(bgRefs.current[currentIndex.current], { yPercent: -15 * dFactor })
          .set(sectionRefs.current[currentIndex.current], { autoAlpha: 0 });
      }

      gsap.set(sectionRefs.current[index], { autoAlpha: 1, zIndex: 1 });

      tl.fromTo(
        [outerRefs.current[index], innerRefs.current[index]],
        { yPercent: (i) => (i ? -100 * dFactor : 100 * dFactor) },
        { yPercent: 0 },
        0
      )
        .fromTo(bgRefs.current[index], { yPercent: 15 * dFactor }, { yPercent: 0 }, 0)
        .fromTo(
          splitHeadings[index].chars,
          { autoAlpha: 0, yPercent: 150 * dFactor },
          {
            autoAlpha: 1,
            yPercent: 0,
            duration: 1,
            ease: "power2",
            stagger: { each: 0.02, from: "random" },
          },
          0.2
        );

      currentIndex.current = index;
    }

    const observer = Observer.create({
      type: "wheel,touch,pointer",
      wheelSpeed: -1,
      onDown: () => !animating.current && gotoSection(currentIndex.current - 1, -1),
      onUp: () => !animating.current && gotoSection(currentIndex.current + 1, 1),
      tolerance: 10,
      preventDefault: true,
    });

    gotoSection(0, 1);

    return () => {
      observer.kill();
      splitHeadings.forEach((s) => s.revert());
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-[3] flex items-center justify-between px-[5%] h-[7em] text-[clamp(0.66rem,2vw,1rem)] tracking-[0.5em] uppercase">
        <div>Amartya Architects</div>
        <a
          href="https://codepen.io/BrianCross/pen/PoWapLP"
          className="text-white no-underline hover:underline"
        >
          Original Inspiration
        </a>
      </header>

      {/* Sections */}
      {sections.map((section, i) => (
        <section
          key={section.label}
          ref={(el) => (sectionRefs.current[i] = el)}
          className="fixed top-0 left-0 w-full h-full invisible"
          style={{ zIndex: 0 }}
        >
          <div
            ref={(el) => (outerRefs.current[i] = el)}
            className="w-full h-full overflow-y-hidden"
          >
            <div
              ref={(el) => (innerRefs.current[i] = el)}
              className="w-full h-full overflow-y-hidden"
            >
              <div
                ref={(el) => (bgRefs.current[i] = el)}
                className="absolute inset-0 flex items-center justify-center bg-cover bg-center"
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.1) 100%), url("${section.bg}")`,
                  backgroundPosition: section.bgPosition ?? "center",
                }}
              >
                <h2
                  ref={(el) => (headingRefs.current[i] = el)}
                  className="z-[999] text-center font-semibold leading-snug w-[90vw] max-w-[1200px]"
                  style={{ fontSize: "clamp(1rem, 6vw, 10rem)" }}
                >
                  {section.heading}
                </h2>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}