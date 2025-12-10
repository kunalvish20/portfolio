import { Timeline } from "../components/Timeline";
import { experiences } from "../constants";
const Experiences = () => {
  return (
    <div className="w-full -mt-40 md:-mt-50">
      <Timeline data={experiences} />
    </div>
  );
};

export default Experiences;
