import Flowchart from "./Flowchart";

const FeatureSection = () => {
  return (
    <div id="flowchart" className="flex flex-col items-center mt-20">
      <h2 className="text-xl sm:text-2xl lg:text-3xl text-center tracking-wide font-bold mb-4">
        Command & <br />Control Centre<br />(CCCC)
      </h2>
      <div className="text-center text-neutral-400 text-lg max-w-3xl mb-10" style={{lineHeight:1.5}}>
        Executive Security Intelligence Briefings, Monitoring/Correlation Rule Design, OPCO Regulatory Security Oversight,<br />
        Consolidated Monitoring/Security Metrics, Governance, Local/Regulatory Intel. Briefings
      </div>
      <Flowchart />
    </div>
  );
};

export default FeatureSection;