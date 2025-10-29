import Header from "@/components/Header";
import ClientFindingHeader from "@/components/ClientFindingHeader";
import RoleValidation from "@/components/RoleValidation";

export default function Index() {
  return (
    <div className="min-h-screen bg-[#F5F5F7] font-['Open_Sans']">
      <Header />
      <ClientFindingHeader />
      <RoleValidation />
    </div>
  );
}
