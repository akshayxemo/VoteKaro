import AdminDashNav from "../../components/AdminDashNav";
import CurrentElection from "../../components/CurrentElection";
import CandidateForm from "../../components/CandidateForm";
import CandidateShow from "../../components/CandidateShow";
const dashboard = () => {
  return (
    <div>
      <AdminDashNav />
      <div className="max-w-[1200px] mx-auto">
        <CurrentElection />
        <div className="flex flex-wrap gap-5 justify-between mt-6">
          <div className="p-2">
            <CandidateForm />
          </div>
          <div className="p-2">
            <CandidateShow />
          </div>
        </div>
      </div>
    </div>
  );
};

export default dashboard;
