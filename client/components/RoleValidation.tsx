import { useState } from "react";

interface RoleMatch {
  id: string;
  clientRoleName: string;
  department: string;
  proposedRole: string;
  confidence: number;
  status: "pending" | "rejected" | "approved";
}

const MOCK_DATA: RoleMatch[] = [
  {
    id: "1",
    clientRoleName: "Recruiting Specialist",
    department: "Human Resources",
    proposedRole: "Talent & Culture Representative",
    confidence: 65,
    status: "pending",
  },
  {
    id: "2",
    clientRoleName: "Client Role Names",
    department: "Department",
    proposedRole: "Sales Representative",
    confidence: 65,
    status: "pending",
  },
  {
    id: "3",
    clientRoleName: "Client Role Names",
    department: "Department",
    proposedRole: "Sales Representative",
    confidence: 65,
    status: "pending",
  },
  {
    id: "4",
    clientRoleName: "Client Role Names",
    department: "Department",
    proposedRole: "Sales Representative",
    confidence: 65,
    status: "pending",
  },
  {
    id: "5",
    clientRoleName: "Client Role Names",
    department: "Department",
    proposedRole: "Sales Representative",
    confidence: 65,
    status: "pending",
  },
];

export default function RoleValidation() {
  const [activeTab, setActiveTab] = useState<"pending" | "rejected" | "approved">("pending");
  const [selectedRole, setSelectedRole] = useState<RoleMatch | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [matchType, setMatchType] = useState("All");
  const [sortBy, setSortBy] = useState("A-Z");

  const pendingCount = MOCK_DATA.filter((r) => r.status === "pending").length;
  const rejectedCount = MOCK_DATA.filter((r) => r.status === "rejected").length;
  const approvedCount = MOCK_DATA.filter((r) => r.status === "approved").length;

  const filteredData = MOCK_DATA.filter((role) => role.status === activeTab);

  return (
    <div className="w-full min-h-screen bg-[#F5F5FE] font-['Open_Sans']">
      {/* Header Section */}
      <div className="max-w-[1428px] mx-auto px-10 pt-10">
        <div className="flex flex-col items-start gap-4">
          <h1 className="self-stretch text-black font-['Open_Sans'] text-[28px] font-bold leading-[38px]">
            Role Validation
          </h1>
          <p className="self-stretch text-black font-['Open_Sans'] text-base font-normal leading-[22px]">
            Queue to review and approve low-confidence role matches
          </p>
        </div>

        {/* Divider */}
        <div className="w-full h-[2px] bg-[#E9EAFC] mt-4" />

        {/* Status Cards */}
        <div className="flex items-center gap-6 mt-4 shadow-[1px_1px_4px_0_rgba(0,0,0,0.15)]">
          {/* Pending Review Card */}
          <div className="flex w-[236px] px-4 py-2 flex-col justify-center items-start rounded-lg bg-[#FEFAE5]">
            <div className="flex justify-between items-center self-stretch">
              <div className="flex items-center gap-2">
                <div className="flex w-8 h-8 p-2 justify-center items-center gap-2 rounded bg-[#F2D01A]">
                  <svg width="16" height="17" viewBox="0 0 16 17" fill="none">
                    <path
                      d="M9.4553 16.0177C9.0853 16.0177 8.7553 15.7677 8.6753 15.3877C8.5753 14.9577 8.8453 14.5277 9.2853 14.4277C12.2553 13.7577 14.4053 11.0577 14.4053 8.00774C14.4053 4.95774 12.2553 2.25774 9.2853 1.58774C8.8553 1.48774 8.5853 1.06774 8.6753 0.627737C8.7653 0.187737 9.1953 -0.0722635 9.6353 0.0177365C13.3253 0.847737 16.0053 4.19774 16.0053 7.99774C16.0053 11.7977 13.3253 15.1477 9.6353 15.9777C9.5753 15.9877 9.5153 15.9977 9.4553 15.9977V16.0177ZM6.3053 15.8577C6.2553 15.8577 6.2053 15.8577 6.1453 15.8377C5.1653 15.6377 4.2653 15.2577 3.5553 14.7177C3.2053 14.4477 3.1253 13.9477 3.3953 13.5977C3.6653 13.2477 4.1653 13.1677 4.5153 13.4377C5.0253 13.8277 5.7153 14.1177 6.4553 14.2677C6.8853 14.3577 7.1653 14.7777 7.0853 15.2077C7.0053 15.5877 6.6753 15.8477 6.3053 15.8477V15.8577ZM1.7753 12.6177C1.4953 12.6177 1.2253 12.4677 1.0753 12.2077C0.6153 11.3777 0.285301 10.6077 0.0353012 9.78774C-0.0946987 9.36774 0.1453 8.91774 0.5753 8.78774C0.9953 8.65774 1.4453 8.89774 1.5753 9.32774C1.7853 10.0377 2.0753 10.7077 2.4753 11.4377C2.6853 11.8277 2.5553 12.3077 2.1653 12.5277C2.0453 12.5977 1.9053 12.6277 1.7753 12.6277V12.6177ZM10.2053 11.0177C10.0153 11.0177 9.8153 10.9477 9.6653 10.8077L7.2653 8.60774C7.0953 8.45774 7.0053 8.23774 7.0053 8.01774V3.81774C7.0053 3.37774 7.3653 3.01774 7.8053 3.01774C8.2453 3.01774 8.6053 3.37774 8.6053 3.81774V7.66774L10.7453 9.62774C11.0753 9.92774 11.0953 10.4277 10.7953 10.7577C10.6353 10.9277 10.4253 11.0177 10.2053 11.0177ZM0.805302 7.11774C0.725302 7.11774 0.6553 7.10774 0.5753 7.08774C0.1553 6.95774 -0.0846988 6.51774 0.0353012 6.08774C0.285301 5.26774 0.6153 4.49774 1.0753 3.66774C1.2853 3.27774 1.7753 3.13774 2.1653 3.35774C2.5553 3.56774 2.6953 4.05774 2.4753 4.44774C2.0753 5.17774 1.7853 5.84774 1.5753 6.55774C1.4753 6.90774 1.1553 7.12774 0.805302 7.12774V7.11774ZM4.0453 2.58774C3.8053 2.58774 3.5653 2.47774 3.4053 2.26774C3.1353 1.91774 3.2153 1.41774 3.5653 1.14774C4.2753 0.617737 5.1653 0.227737 6.1453 0.0377365C6.5753 -0.0522635 6.9953 0.227736 7.0853 0.667736C7.1753 1.09774 6.8953 1.51774 6.4553 1.60774C5.7153 1.75774 5.0253 2.04774 4.5153 2.43774C4.3753 2.54774 4.2053 2.59774 4.0353 2.59774L4.0453 2.58774Z"
                      fill="black"
                    />
                  </svg>
                </div>
                <span className="text-black font-['Open_Sans'] text-base font-normal leading-[22px]">
                  Pending Review
                </span>
              </div>
              <span className="text-black font-['Open_Sans'] text-2xl font-bold leading-8">
                {pendingCount}
              </span>
            </div>
          </div>

          {/* Rejected Card */}
          <div className="flex w-[236px] px-4 py-2 flex-col justify-center items-start rounded-lg bg-[#FFCEDF]">
            <div className="flex justify-between items-center self-stretch">
              <div className="flex w-[142px] items-center gap-2">
                <div className="flex w-8 h-8 p-2 justify-center items-center gap-2 flex-shrink-0 rounded bg-[#B60243]">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM11.71 10.29C12.1 10.68 12.1 11.31 11.71 11.7C11.51 11.9 11.26 11.99 11 11.99C10.74 11.99 10.49 11.89 10.29 11.7L8 9.41L5.71 11.7C5.32 12.09 4.69 12.09 4.3 11.7C3.91 11.31 3.91 10.68 4.3 10.29L6.59 8L4.3 5.71C3.91 5.32 3.91 4.69 4.3 4.3C4.69 3.91 5.32 3.91 5.71 4.3L8 6.59L10.29 4.3C10.68 3.91 11.31 3.91 11.7 4.3C12.09 4.69 12.09 5.32 11.7 5.71L9.41 8L11.7 10.29H11.71Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <span className="text-black font-['Open_Sans'] text-base font-normal leading-[22px]">
                  Rejected
                </span>
              </div>
              <span className="text-black font-['Open_Sans'] text-2xl font-bold leading-8">
                {rejectedCount}
              </span>
            </div>
          </div>

          {/* Approved Card */}
          <div className="flex w-[236px] px-4 py-2 flex-col justify-center items-start rounded-lg bg-[#CDE3DC]">
            <div className="flex justify-between items-center self-stretch">
              <div className="flex w-[142px] items-center gap-2">
                <div className="flex w-8 h-8 p-2 justify-center items-center gap-2 flex-shrink-0 rounded bg-[#0A7253]">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M6.68 11.74C6.83 11.91 7.05 12 7.27 12V12.01H7.28C7.5 12 7.72 11.9 7.87 11.73L10.8 8.33004C11.09 7.99004 11.05 7.49004 10.72 7.20004C10.38 6.91004 9.88 6.95004 9.59 7.28004L7.25 10L6.39 9.06004C6.09 8.73004 5.59 8.71004 5.26 9.01004C4.93 9.31004 4.91 9.81004 5.21 10.14L6.68 11.74Z"
                      fill="white"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3.8 16H12.2C13.19 16 14 15.19 14 14.2V3.8C14 2.81 13.19 2 12.2 2H11V1.8C11 0.81 10.19 0 9.2 0H6.8C5.81 0 5 0.81 5 1.8V2H3.8C2.81 2 2 2.81 2 3.8V14.2C2 15.19 2.81 16 3.8 16ZM3.6 3.8C3.6 3.69 3.69 3.6 3.8 3.6H5.04C5.23 4.4 5.94 5 6.8 5H9.2C10.06 5 10.78 4.4 10.96 3.6H12.2C12.31 3.6 12.4 3.69 12.4 3.8V14.2C12.4 14.31 12.31 14.4 12.2 14.4H3.8C3.69 14.4 3.6 14.31 3.6 14.2V3.8ZM6.6 1.8C6.6 1.69 6.69 1.6 6.8 1.6H9.2C9.31 1.6 9.4 1.69 9.4 1.8V3.2C9.4 3.31 9.31 3.4 9.2 3.4H6.8C6.69 3.4 6.6 3.31 6.6 3.2V1.8Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <span className="text-black font-['Open_Sans'] text-base font-normal leading-[22px]">
                  Approved
                </span>
              </div>
              <span className="text-black font-['Open_Sans'] text-2xl font-bold leading-8">
                {approvedCount}
              </span>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="inline-flex items-center mt-6 gap-0">
          <button
            onClick={() => setActiveTab("pending")}
            className={`flex px-[18px] pr-3 py-2 justify-center items-center gap-2 rounded-full ${
              activeTab === "pending" ? "bg-[#E9EAFC]" : ""
            }`}
          >
            <span className="text-[#454554] font-['Open_Sans'] text-sm font-normal leading-5">
              Pending Items
            </span>
            <div
              className={`flex h-[25px] px-2 items-center rounded-full ${
                activeTab === "pending" ? "bg-[#1E49E2]" : "bg-[#E3E3E8]"
              }`}
            >
              <span
                className={`text-center font-['Open_Sans'] text-sm font-normal leading-5 ${
                  activeTab === "pending" ? "text-white" : "text-[#454554]"
                }`}
              >
                {pendingCount}
              </span>
            </div>
          </button>

          <button
            onClick={() => setActiveTab("rejected")}
            className={`flex px-[18px] pr-3 py-2 justify-center items-center gap-2 rounded-full ${
              activeTab === "rejected" ? "bg-[#E9EAFC]" : ""
            }`}
          >
            <span className="text-[#454554] font-['Open_Sans'] text-sm font-normal leading-5">
              Rejected
            </span>
            <div
              className={`flex h-[25px] px-2 items-center rounded-full ${
                activeTab === "rejected" ? "bg-[#1E49E2]" : "bg-[#E3E3E8]"
              }`}
            >
              <span
                className={`text-center font-['Open_Sans'] text-sm font-normal leading-5 ${
                  activeTab === "rejected" ? "text-white" : "text-[#454554]"
                }`}
              >
                {rejectedCount}
              </span>
            </div>
          </button>

          <button
            onClick={() => setActiveTab("approved")}
            className={`flex px-[18px] pr-3 py-2 justify-center items-center gap-2 rounded-full ${
              activeTab === "approved" ? "bg-[#E9EAFC]" : ""
            }`}
          >
            <span className="text-[#454554] font-['Open_Sans'] text-sm font-normal leading-5">
              Approved
            </span>
            <div
              className={`flex h-[25px] px-2 items-center rounded-full ${
                activeTab === "approved" ? "bg-[#1E49E2]" : "bg-[#E3E3E8]"
              }`}
            >
              <span
                className={`text-center font-['Open_Sans'] text-sm font-normal leading-5 ${
                  activeTab === "approved" ? "text-white" : "text-[#454554]"
                }`}
              >
                {approvedCount}
              </span>
            </div>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex gap-6 mt-8 px-0">
        {/* Left Panel - Role List */}
        <div className="flex w-[740px] px-10 py-8 flex-col items-start gap-6 flex-shrink-0 bg-[#F5F5FE]">
          {/* Search and Filters */}
          <div className="flex items-center gap-6 self-stretch">
            {/* Search */}
            <div className="flex items-start gap-3 flex-1">
              <div className="flex flex-col justify-center items-start gap-1 flex-1">
                <div className="flex px-2 py-2 justify-between items-center self-stretch rounded-full bg-[#D7D9FA]">
                  <div className="flex h-6 items-center gap-0 flex-1">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search"
                      className="flex h-6 px-3 py-[10px] items-center gap-[10px] flex-1 rounded-none bg-transparent border-none outline-none text-[#1A28C1] font-['Open_Sans'] text-sm font-normal leading-5 placeholder:text-[#1A28C1]"
                    />
                  </div>
                  <button className="flex h-6 px-1 py-1 justify-center items-center gap-[10px] rounded-full bg-[#E9EAFC]">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M7.5 13.5C7.5 13.7761 7.72386 14 8 14C8.27614 14 8.5 13.7761 8.5 13.5V3.80298L12.1283 7.83448C12.3131 8.03974 12.6292 8.05638 12.8345 7.87165C13.0397 7.68692 13.0564 7.37077 12.8716 7.16552L8.37165 2.16552C8.27683 2.06016 8.14174 2 8 2C7.85826 2 7.72317 2.06016 7.62835 2.16552L3.12836 7.16552C2.94363 7.37077 2.96027 7.68692 3.16552 7.87165C3.37078 8.05638 3.68692 8.03974 3.87165 7.83448L7.5 3.80298V13.5Z"
                        fill="#1A28C1"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Match Type Dropdown */}
            <div className="flex w-40 h-10 px-4 pr-1 justify-between items-center rounded border border-[#D5D5DC] bg-white">
              <span className="text-[#333] font-['Open_Sans'] text-sm leading-5">
                Match Type: <span className="font-bold">{matchType}</span>
              </span>
              <button className="flex h-10 px-2 py-[10px] justify-center items-center gap-[10px] rounded-full">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M7.14645 9.64645C7.34171 9.45118 7.65829 9.45118 7.85355 9.64645L12 13.7929L16.1464 9.64645C16.3417 9.45118 16.6583 9.45118 16.8536 9.64645C17.0488 9.84171 17.0488 10.1583 16.8536 10.3536L12.3536 14.8536C12.1583 15.0488 11.8417 15.0488 11.6464 14.8536L7.14645 10.3536C6.95118 10.1583 6.95118 9.84171 7.14645 9.64645Z"
                    fill="#454554"
                  />
                </svg>
              </button>
            </div>

            {/* Sort Dropdown */}
            <div className="flex w-40 h-10 px-4 pr-1 justify-between items-center rounded border border-[#D5D5DC] bg-white">
              <span className="text-[#333] font-['Open_Sans'] text-sm leading-5">
                Sort: <span className="font-bold">{sortBy}</span>
              </span>
              <button className="flex h-10 px-2 py-[10px] justify-center items-center gap-[10px] rounded-full">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M7.14645 9.64645C7.34171 9.45118 7.65829 9.45118 7.85355 9.64645L12 13.7929L16.1464 9.64645C16.3417 9.45118 16.6583 9.45118 16.8536 9.64645C17.0488 9.84171 17.0488 10.1583 16.8536 10.3536L12.3536 14.8536C12.1583 15.0488 11.8417 15.0488 11.6464 14.8536L7.14645 10.3536C6.95118 10.1583 6.95118 9.84171 7.14645 9.64645Z"
                    fill="#454554"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Role Cards List */}
          <div className="flex flex-col items-start gap-4 self-stretch">
            {filteredData.map((role) => (
              <div
                key={role.id}
                className="flex pt-4 flex-col items-start gap-4 self-stretch rounded-xl border border-[#818AEE] bg-white shadow-[1px_1px_4px_0_rgba(0,0,0,0.15)] cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => setSelectedRole(role)}
              >
                <div className="flex px-4 justify-between items-start self-stretch">
                  <div className="flex w-[149px] flex-col items-start">
                    <h3 className="text-black font-['Open_Sans'] text-[22px] font-bold leading-[30px]">
                      {role.clientRoleName}
                    </h3>
                    <p className="self-stretch text-black font-['Open_Sans'] text-base font-normal leading-[22px]">
                      {role.department}
                    </p>
                  </div>
                  <button className="flex h-10 px-2 py-[10px] justify-center items-center gap-[10px] rounded-full bg-[#E9EAFC] hover:bg-[#D7D9FA] transition-colors">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M13.2673 4.20926C12.9674 3.92357 12.4926 3.93511 12.2069 4.23504C11.9212 4.53497 11.9328 5.0097 12.2327 5.29539L18.4841 11.25H3.75C3.33579 11.25 3 11.5858 3 12C3 12.4142 3.33579 12.75 3.75 12.75H18.4842L12.2327 18.7047C11.9328 18.9904 11.9212 19.4651 12.2069 19.7651C12.4926 20.065 12.9674 20.0765 13.2673 19.7908L20.6862 12.7241C20.8551 12.5632 20.9551 12.358 20.9861 12.1446C20.9952 12.0978 21 12.0495 21 12C21 11.9504 20.9952 11.902 20.986 11.8551C20.955 11.6419 20.855 11.4368 20.6862 11.276L13.2673 4.20926Z"
                        fill="#1E49E2"
                      />
                    </svg>
                  </button>
                </div>

                <div className="flex items-center gap-2 self-stretch border-t border-[#818AEE]">
                  <div className="flex px-4 py-3 flex-col justify-center items-start flex-1 border-r border-[#818AEE]">
                    <span className="text-[#454554] font-['Open_Sans'] text-xs font-normal">
                      Proposed Mapped Role:
                    </span>
                    <span className="text-[#1A28C1] font-['Open_Sans'] text-sm font-bold leading-5">
                      {role.proposedRole}
                    </span>
                  </div>
                  <div className="flex px-4 py-3 flex-col justify-center items-start flex-1">
                    <div className="flex h-8 px-4 flex-col justify-center items-start gap-[14px] rounded-full border border-[#F2D01A] bg-[#FCF5CC]">
                      <span className="text-black font-['Open_Sans'] text-sm font-normal leading-5">
                        {role.confidence}% confidence
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Panel - Details */}
        <div className="flex-1 flex flex-col items-center justify-center gap-5 px-10 py-20">
          <h2 className="text-black font-['Open_Sans'] text-[22px] font-bold leading-[30px] mb-8">
            Review Details
          </h2>

          {selectedRole ? (
            <div className="w-full max-w-md p-6 bg-white rounded-xl border border-[#818AEE] shadow-lg">
              <h3 className="text-2xl font-bold mb-4">{selectedRole.clientRoleName}</h3>
              <p className="text-gray-600 mb-4">{selectedRole.department}</p>
              <div className="mb-4">
                <p className="text-sm text-gray-500">Proposed Mapped Role:</p>
                <p className="text-lg font-bold text-[#1A28C1]">{selectedRole.proposedRole}</p>
              </div>
              <div className="inline-block px-4 py-2 rounded-full border border-[#F2D01A] bg-[#FCF5CC]">
                {selectedRole.confidence}% confidence
              </div>
            </div>
          ) : (
            <>
              <p className="self-stretch text-black text-center font-['Open_Sans'] text-2xl font-normal leading-8">
                Select an item from the list to review
              </p>
              <div className="flex w-[197px] h-[197px] p-[18px] justify-center items-center gap-2 rounded-full bg-[#F5F5FE]">
                <svg width="161" height="161" viewBox="0 0 161 161" fill="none">
                  <path
                    d="M143.783 152.125L106.246 114.588C103.267 116.971 99.8406 118.858 95.9677 120.248C92.0948 121.638 87.9736 122.333 83.6042 122.333C72.7799 122.333 63.6189 118.585 56.1214 111.087C48.6238 103.589 44.875 94.4285 44.875 83.6042C44.875 72.7799 48.6238 63.6189 56.1214 56.1214C63.6189 48.6238 72.7799 44.875 83.6042 44.875C94.4285 44.875 103.589 48.6238 111.087 56.1214C118.585 63.6189 122.333 72.7799 122.333 83.6042C122.333 87.9736 121.638 92.0948 120.248 95.9677C118.858 99.8406 116.971 103.267 114.588 106.246L152.125 143.783L143.783 152.125ZM83.6042 110.417C91.0521 110.417 97.3828 107.81 102.596 102.596C107.81 97.3828 110.417 91.0521 110.417 83.6042C110.417 76.1563 107.81 69.8255 102.596 64.612C97.3828 59.3984 91.0521 56.7917 83.6042 56.7917C76.1563 56.7917 69.8255 59.3984 64.612 64.612C59.3984 69.8255 56.7917 76.1563 56.7917 83.6042C56.7917 91.0521 59.3984 97.3828 64.612 102.596C69.8255 107.81 76.1563 110.417 83.6042 110.417Z"
                    fill="#1C1B1F"
                  />
                </svg>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
