const Experience = () => {
  return (
    <section id="experience" className="lg:my-14 pt-16">
      <h2 className="text-center text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-[44px] font-bold text-white">
        Experience
      </h2>
      <div className="grid grid-cols-4 gap-3 my-7 md:my-16 lg:my-20">
        <h3 className="col-span-1 text-base md:text-lg lg:text-xl font-semibold text-slate-400">
          Backend Developer:
        </h3>
        <div className="col-span-3 lg:flex-1 space-y-1 font-medium">
          <p className="text-base md:text-lg lg:text-xl font-medium text-white">
            Works as a Backend Developer at <strong>Nexifer Labs</strong>
          </p>
          <p className="text-sm md:text-base lg:text-lg text-slate-400">
            Work to raise student awareness through the title{" "}
            <strong>'Let's Code Your Career through Programming'</strong>
          </p>
          <p className="text-sm md:text-base lg:text-lg font-semibold text-white">
            <strong> July 2025 - Present</strong>
          </p>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-3 my-7 md:my-16 lg:my-20">
        <h3 className="col-span-1 text-base md:text-lg lg:text-xl font-semibold text-slate-400">
          Junior Frontend Developer:
        </h3>
        <div className="col-span-3 lg:flex-1 space-y-1 font-medium">
          <p className="text-base md:text-lg lg:text-xl font-medium text-white">
            Works as a Junior Frontend Developer at{" "}
            <strong>Advanced Robotic System</strong>
          </p>
          <p className="text-sm md:text-base lg:text-lg text-slate-400">
            Work to raise student awareness through the title{" "}
            <strong>'Let's Code Your Career through Programming'</strong>
          </p>
          <p className="text-sm md:text-base lg:text-lg font-semibold text-white">
            <strong> December 2024 - May 2025</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
