import AddFundControl from "../components/fund/AddFundControl";
import FundSummaryCard from "../components/fund/FundSummaryCard";
import AddFundForm from "../components/fund/AddFundForm";

export default function FundPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">
        Fund Management
      </h1>

      <div className="mt-6">
        <AddFundControl />
        <FundSummaryCard />
        <AddFundForm />
      </div>

    </div>
  );
}