import Header from "@/components/Header";
import ClientFindingHeader from "@/components/ClientFindingHeader";
import ChatInterface from "@/components/ChatInterface";
import TreemapChart from "@/components/TreemapChart";

export default function Index() {
  return (
    <div className="min-h-screen bg-[#F5F5F7] font-['Open_Sans']">
      <Header />
      <ClientFindingHeader />

      {/* Main Content Area - Chat and Treemap */}
      <div className="max-w-[1512px] mx-auto mt-6 px-6 pb-8">
        <div className="flex gap-6 items-start">
          {/* Left Side - Chat Interface */}
          <div className="w-[590px] flex-shrink-0">
            <ChatInterface />
          </div>

          {/* Right Side - Treemap Chart */}
          <div className="flex-1">
            <TreemapChart />
          </div>
        </div>
      </div>
    </div>
  );
}
