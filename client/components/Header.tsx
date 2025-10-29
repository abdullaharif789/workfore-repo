export default function Header() {
  return (
    <div className="flex w-full flex-col items-center bg-white">
      {/* Top App Bar */}
      <div className="flex w-full px-6 py-3 justify-between items-center bg-white">
        {/* Left Section */}
        <div className="flex items-center gap-[18px]">
          {/* Logo Dropdown */}
          <div className="flex items-start">
            <div className="flex px-3 py-2 items-center gap-[18px] rounded-full bg-[#1E49E2]">
              <div className="flex items-center gap-2">
                <div className="flex w-[52px] h-6 px-[3px] py-[2.5px] justify-center items-center">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/b4e54c4c2b9580edccce89634ae6c0b0b2f1baa8?width=92"
                    alt="KPMG Logo"
                    className="w-[46px] h-[19px] flex-shrink-0"
                  />
                </div>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3.14645 5.64645C3.34171 5.45118 3.65829 5.45118 3.85355 5.64645L8 9.79289L12.1464 5.64645C12.3417 5.45118 12.6583 5.45118 12.8536 5.64645C13.0488 5.84171 13.0488 6.15829 12.8536 6.35355L8.35355 10.8536C8.15829 11.0488 7.84171 11.0488 7.64645 10.8536L3.14645 6.35355C2.95118 6.15829 2.95118 5.84171 3.14645 5.64645Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Breadcrumbs */}
          <div className="flex items-center">
            <div className="flex items-center">
              <div className="flex px-0 justify-center items-center gap-[10px]">
                <span className="text-[#9090A2] font-['Open_Sans'] text-sm font-normal leading-5">
                  Agent List
                </span>
              </div>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M12.6581 2.02566C12.9201 2.11298 13.0617 2.39614 12.9743 2.65811L7.97434 17.6581C7.88702 17.9201 7.60386 18.0617 7.34188 17.9743C7.07991 17.887 6.93833 17.6039 7.02566 17.3419L12.0257 2.34189C12.113 2.07991 12.3961 1.93833 12.6581 2.02566Z"
                  fill="#2F2F39"
                />
              </svg>
            </div>
            <div className="flex items-center">
              <div className="flex px-0 justify-center items-center gap-[10px]">
                <span className="text-[#1A28C1] font-['Open_Sans'] text-sm font-normal leading-5">
                  AI Opportunity Identification Specialist​
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-6">
          {/* Chat Name Dropdown */}
          <div className="flex h-10 px-4 pr-1 items-center rounded border border-[#D5D5DC] bg-white">
            <span className="text-[#333] font-['Open_Sans'] text-sm font-normal leading-5">
              Chat Name (<span className="font-bold">1</span>)
            </span>
            <div className="flex h-10 px-2 py-[10px] justify-center items-center gap-[10px] rounded-full">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M7.14645 9.64645C7.34171 9.45118 7.65829 9.45118 7.85355 9.64645L12 13.7929L16.1464 9.64645C16.3417 9.45118 16.6583 9.45118 16.8536 9.64645C17.0488 9.84171 17.0488 10.1583 16.8536 10.3536L12.3536 14.8536C12.1583 15.0488 11.8417 15.0488 11.6464 14.8536L7.14645 10.3536C6.95118 10.1583 6.95118 9.84171 7.14645 9.64645Z"
                  fill="#454554"
                />
              </svg>
            </div>
          </div>

          {/* New Chat Button */}
          <button className="flex h-10 px-[18px] pr-6 justify-center items-center gap-[10px] rounded-full bg-white shadow-[2px_2px_8px_0_rgba(0,0,0,0.30)]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M11.7498 3C12.1295 3 12.4434 3.28201 12.4931 3.64808L12.5 3.74985L12.5012 11H19.7543C20.1685 11 20.5043 11.3358 20.5043 11.75C20.5043 12.1297 20.2221 12.4435 19.8561 12.4932L19.7543 12.5H12.5012L12.5032 19.7491C12.5033 20.1633 12.1676 20.4993 11.7534 20.4993C11.3737 20.4993 11.0598 20.2173 11.0101 19.8512L11.0032 19.7494L11.0012 12.5H3.7522C3.33798 12.5 3.0022 12.1642 3.0022 11.75C3.0022 11.3703 3.28435 11.0565 3.65043 11.0068L3.7522 11H11.0012L11 3.75015C10.9999 3.33594 11.3356 3 11.7498 3Z"
                fill="#1A28C1"
              />
            </svg>
            <span className="text-[#1A28C1] font-['Open_Sans'] text-sm font-normal leading-5">
              New Chat
            </span>
          </button>

          {/* User Avatar */}
          <div className="flex w-10 h-10 justify-center items-center gap-2">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path
                d="M16 2C8.26801 2 2 8.26801 2 16C2 23.732 8.26801 30 16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2ZM16 24.5C12.134 24.5 9 22.0714 9 18.4286C9 17.0873 10.0873 16 11.4286 16H20.5714C21.9127 16 23 17.0873 23 18.4286C23 22.0714 19.866 24.5 16 24.5ZM16 14.5C13.9289 14.5 12.25 12.8211 12.25 10.75C12.25 8.67893 13.9289 7 16 7C18.0711 7 19.75 8.67893 19.75 10.75C19.75 12.8211 18.0711 14.5 16 14.5Z"
                fill="#1E49E2"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Blue Bar with KPMG Mystro and Search */}
      <div className="flex w-full max-w-[1464px] px-6 py-3 justify-between items-center rounded-xl bg-gradient-to-br from-[#131E90] to-[#0D145E]">
        <div className="flex items-center gap-[18px] flex-1">
          <div className="flex items-center gap-6">
            <h1 className="text-white font-['Open_Sans'] text-[22px] font-bold leading-[30px]">
              KPMG Mystro
            </h1>
          </div>
        </div>

        {/* Search Input */}
        <div className="flex w-[400px] items-start gap-3 flex-shrink-0">
          <div className="flex flex-col justify-center items-start gap-1 flex-1">
            <div className="flex px-2 py-2 justify-between items-center self-stretch rounded-full bg-[#D7D9FA]">
              <div className="flex h-6 items-center gap-0 flex-1">
                <div className="flex h-6 px-3 py-[10px] items-center gap-[10px] flex-1 rounded-none">
                  <span className="text-[#1A28C1] font-['Open_Sans'] text-sm font-normal leading-5">
                    Chat with Mystro
                  </span>
                </div>
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
      </div>
    </div>
  );
}
