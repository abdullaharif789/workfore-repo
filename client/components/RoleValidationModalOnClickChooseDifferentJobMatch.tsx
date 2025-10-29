import { useState } from "react";

interface RoleValidationModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentJobMatch: string;
  proposedMappedRole: string;
  onApplyCustomMatch?: (selectedRole: string) => void;
}

export default function RoleValidationModalOnClickChooseDifferentJobMatch({
  isOpen,
  onClose,
  currentJobMatch,
  proposedMappedRole,
  onApplyCustomMatch,
}: RoleValidationModalProps) {
  const [selectedRole, setSelectedRole] = useState("");

  if (!isOpen) return null;

  const handleApply = () => {
    if (onApplyCustomMatch && selectedRole) {
      onApplyCustomMatch(selectedRole);
    }
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 flex w-[644px] px-6 py-6 flex-col items-end gap-[18px] rounded-xl border border-[#9090A2] bg-white shadow-[2px_2px_12px_0_rgba(0,0,0,0.15)]">
        {/* Header */}
        <div className="flex flex-col items-start gap-3 self-stretch">
          <div className="flex pl-2 justify-between items-center self-stretch">
            <h2 className="w-[477px] text-[#2F2F39] font-['Open_Sans'] text-[22px] font-normal leading-[30px] overflow-hidden text-ellipsis line-clamp-1">
              Select a different job match:
            </h2>
            <button
              onClick={onClose}
              className="flex h-10 px-2 py-[10px] justify-center items-center gap-[10px] rounded-full hover:bg-[#F5F5FE] transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M4.39705 4.55379L4.46967 4.46967C4.73594 4.2034 5.1526 4.1792 5.44621 4.39705L5.53033 4.46967L12 10.939L18.4697 4.46967C18.7626 4.17678 19.2374 4.17678 19.5303 4.46967C19.8232 4.76256 19.8232 5.23744 19.5303 5.53033L13.061 12L19.5303 18.4697C19.7966 18.7359 19.8208 19.1526 19.6029 19.4462L19.5303 19.5303C19.2641 19.7966 18.8474 19.8208 18.5538 19.6029L18.4697 19.5303L12 13.061L5.53033 19.5303C5.23744 19.8232 4.76256 19.8232 4.46967 19.5303C4.17678 19.2374 4.17678 18.7626 4.46967 18.4697L10.939 12L4.46967 5.53033C4.2034 5.26406 4.1792 4.8474 4.39705 4.55379L4.46967 4.46967L4.39705 4.55379Z"
                  fill="#454554"
                />
              </svg>
            </button>
          </div>

          {/* Divider */}
          <div className="flex py-2 flex-col items-start self-stretch">
            <div className="h-[1px] self-stretch bg-[#454554]" />
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col items-start gap-8 self-stretch">
          {/* Job Match Details */}
          <div className="flex flex-col items-start gap-[-1px] self-stretch rounded-lg border border-[#9090A2] bg-white">
            {/* Current Job Match */}
            <div className="flex h-[84px] px-4 pt-[18px] pb-4 flex-col justify-center items-start gap-1 self-stretch border border-[#9090A2]">
              <span className="text-[#454554] font-['Open_Sans'] text-xs font-bold">
                Current Job Match
              </span>
              <h3 className="text-black font-['Open_Sans'] text-[22px] font-bold leading-[30px]">
                {currentJobMatch}
              </h3>
            </div>

            {/* Proposed Mapped Role */}
            <div className="flex w-full h-[84px] px-4 py-4 flex-col items-start gap-1 border-r border-[#9090A2]">
              <span className="text-[#454554] font-['Open_Sans'] text-xs font-bold">
                Proposed Mapped Role
              </span>
              <h3 className="text-black font-['Open_Sans'] text-[22px] font-bold leading-[30px]">
                {proposedMappedRole}
              </h3>
            </div>
          </div>

          {/* Dropdown and Actions */}
          <div className="flex flex-col items-end gap-[18px] self-stretch">
            <div className="flex flex-col items-start gap-[18px] self-stretch">
              {/* Dropdown */}
              <div className="flex h-10 px-4 pr-1 justify-between items-center self-stretch rounded border border-[#9090A2]">
                <select
                  value={selectedRole}
                  onChange={(e) => setSelectedRole(e.target.value)}
                  className="flex-1 bg-transparent border-none outline-none text-[#2F2F39] font-['Open_Sans'] text-sm font-normal leading-5 cursor-pointer"
                >
                  <option value="">Select a role...</option>
                  <option value="Sales Representative">
                    Sales Representative
                  </option>
                  <option value="Account Manager">Account Manager</option>
                  <option value="Business Development Manager">
                    Business Development Manager
                  </option>
                  <option value="HR Specialist">HR Specialist</option>
                  <option value="Talent Acquisition Specialist">
                    Talent Acquisition Specialist
                  </option>
                </select>
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

            {/* Action Buttons */}
            <div className="flex items-center gap-[18px]">
              {/* Cancel Button */}
              <button
                onClick={onClose}
                className="flex h-10 px-6 py-[10px] justify-center items-center gap-[10px] rounded-full border border-[#1A28C1] bg-white hover:bg-[#F5F5FE] transition-colors"
              >
                <span className="text-black font-['Open_Sans'] text-sm font-normal leading-5">
                  Cancel
                </span>
              </button>

              {/* Apply Custom Match Button */}
              <button
                onClick={handleApply}
                disabled={!selectedRole}
                className={`flex h-10 px-6 py-[10px] justify-center items-center gap-[10px] rounded-full transition-colors ${
                  selectedRole
                    ? "bg-[#1E49E2] hover:bg-[#1A3FCC]"
                    : "bg-[#9090A2] cursor-not-allowed"
                }`}
              >
                <span className="text-white font-['Open_Sans'] text-sm font-normal leading-5">
                  Apply Custom Match
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
