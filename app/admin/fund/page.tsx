import AddFundControl from "../components/fund/AddFundControl";
import FundSummaryCard from "../components/fund/FundSummaryCard";
import FundHistory from "../components/fund/FundHistory";
import FundReport from "../components/fund/FundReport";
import FundSecurityAudit from "../components/fund/FundSecurityAudit";
import ManagerFundRequestApproval from "../components/fund/ManagerFundRequestApproval";
import FundSettings from "../components/fund/FundSettings";



export default function FundPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">
        Fund Management
      </h1>

      <div className="mt-6">
        <AddFundControl />
        <FundSummaryCard />
        <FundHistory />
        <FundReport />
        <FundSecurityAudit />
         <ManagerFundRequestApproval />
          <FundSettings/>


      </div>

    </div>
  );
}