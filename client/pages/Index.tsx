import Header from "@/components/Header";
import ClientFindingHeader from "@/components/ClientFindingHeader";

export default function Index() {
  return (
    <div className="min-h-screen bg-[#F5F5F7] font-['Open_Sans']">
      <Header />
      <ClientFindingHeader />
      
      {/* Main Content Area */}
      <div className="max-w-[1464px] mx-auto mt-6 px-6">
        <div className="bg-white rounded-xl p-8 shadow-sm">
          <div className="flex flex-col items-center justify-center py-12">
            <svg
              width="64"
              height="64"
              viewBox="0 0 24 24"
              fill="none"
              className="mb-4"
            >
              <path
                d="M0.899999 18.0338C0.787499 18.0338 0.675 18.0113 0.57375 17.9663C0.225 17.8313 0 17.4938 0 17.1338V2.73378C0 1.23753 1.215 0.033783 2.7 0.033783H15.3C16.785 0.033783 18 1.24878 18 2.73378V11.4638C18 12.9488 16.785 14.1638 15.3 14.1638H4.89375L1.56375 17.7413C1.395 17.9325 1.1475 18.0225 0.899999 18.0225V18.0338ZM2.7 1.83378C2.205 1.83378 1.8 2.23878 1.8 2.73378V14.85L3.83625 12.6563C4.005 12.4763 4.24125 12.375 4.5 12.375H15.3C15.795 12.375 16.2 11.97 16.2 11.475V2.73378C16.2 2.23878 15.795 1.83378 15.3 1.83378H2.7ZM13.5 5.43378C13.5 4.93878 13.095 4.53378 12.6 4.53378H5.4C4.905 4.53378 4.5 4.93878 4.5 5.43378C4.5 5.92878 4.905 6.33378 5.4 6.33378H12.6C13.095 6.33378 13.5 5.92878 13.5 5.43378ZM10.8 8.82003C10.8 8.32503 10.395 7.92003 9.9 7.92003H5.4C4.905 7.92003 4.5 8.32503 4.5 8.82003C4.5 9.31503 4.905 9.72003 5.4 9.72003H9.9C10.395 9.72003 10.8 9.31503 10.8 8.82003Z"
                fill="#1A28C1"
              />
            </svg>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Welcome to KPMG Mystro
            </h3>
            <p className="text-gray-600 text-center max-w-md">
              Start a conversation with the AI Opportunity Identification
              Specialist to explore and validate AI opportunities for your
              organization.
            </p>
            <button className="mt-6 flex h-12 px-8 justify-center items-center gap-2 rounded-full bg-[#1A28C1] text-white font-semibold hover:bg-[#131E90] transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M11.7498 3C12.1295 3 12.4434 3.28201 12.4931 3.64808L12.5 3.74985L12.5012 11H19.7543C20.1685 11 20.5043 11.3358 20.5043 11.75C20.5043 12.1297 20.2221 12.4435 19.8561 12.4932L19.7543 12.5H12.5012L12.5032 19.7491C12.5033 20.1633 12.1676 20.4993 11.7534 20.4993C11.3737 20.4993 11.0598 20.2173 11.0101 19.8512L11.0032 19.7494L11.0012 12.5H3.7522C3.33798 12.5 3.0022 12.1642 3.0022 11.75C3.0022 11.3703 3.28435 11.0565 3.65043 11.0068L3.7522 11H11.0012L11 3.75015C10.9999 3.33594 11.3356 3 11.7498 3Z"
                  fill="white"
                />
              </svg>
              Start New Conversation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
