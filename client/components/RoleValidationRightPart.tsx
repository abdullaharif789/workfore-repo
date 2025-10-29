import { useState } from "react";
import RoleValidationModalOnClickChooseDifferentJobMatch from "./RoleValidationModalOnClickChooseDifferentJobMatch";

interface RoleValidationRightPartProps {
  currentJobMatch: string;
  proposedMappedRole: string;
  onApprove?: () => void;
  onReject?: () => void;
}

const ROLE_MATCH_TASKS = [
  {
    title: "Build Talent Pools",
    description:
      "Proactively create and maintain a database of prospective candidates for current and future sales vacancies.",
  },
  {
    title: "Conduct Role Briefings",
    description:
      "Meet with hiring managers to understand job requirements, expectations, and candidate profiles for sales roles.",
  },
  {
    title: "Conduct Training Sessions",
    description:
      "Organize and conduct training for recruitment staff on compliance policies and enhancing candidate experience.",
  },
  {
    title: "Coordinate Team Projects",
    description:
      "Work with recruitment colleagues to plan and execute various recruitment initiatives and projects.",
  },
  {
    title: "Engage Passive Candidates",
    description:
      "Utilize direct sourcing techniques to reach out to passive candidates and gauge their interest in sales opportunities",
  },
];

export default function RoleValidationRightPart({
  currentJobMatch,
  proposedMappedRole,
  onApprove,
  onReject,
}: RoleValidationRightPartProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="flex w-full max-w-[724px] flex-col items-start gap-6">
        {/* Action Buttons */}
        <div className="flex items-start gap-2 self-stretch">
          {/* Approve Button */}
          <button
            onClick={onApprove}
            className="flex w-[200px] h-[54px] pr-3 justify-center items-center rounded border border-[#D5D5DC] bg-[#029A6C] shadow-[1px_1px_4px_0_rgba(0,0,0,0.15)] hover:bg-[#027D57] transition-colors"
          >
            <div className="flex w-10 h-10 px-2 py-[10px] justify-center items-center gap-[10px] rounded-full">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M10 0C4.45 0 0 4.45 0 10C0 15.55 4.45 20 10 20C15.55 20 20 15.55 20 10C20 4.45 15.55 0 10 0ZM15.875 7.15L8.15 14.65C7.9125 14.8875 7.6 15 7.275 15C6.95 15 6.6625 14.8875 6.425 14.6625L2.9 11.4C2.3875 10.925 2.3625 10.1375 2.8375 9.6375C3.3125 9.125 4.1 9.1 4.6 9.575L7.25 12.0375L14.125 5.3625C14.625 4.8875 15.4125 4.8875 15.8875 5.3875C16.3625 5.8875 16.3625 6.675 15.8625 7.15H15.875Z"
                  fill="white"
                />
              </svg>
            </div>
            <span className="text-white font-['Open_Sans'] text-sm font-normal leading-5">
              Approve
            </span>
          </button>

          {/* Reject Button */}
          <button
            onClick={onReject}
            className="flex w-[200px] h-[54px] justify-center items-center rounded border border-[#D5D5DC] bg-[#B60243] shadow-[1px_1px_4px_0_rgba(0,0,0,0.15)] hover:bg-[#9A0238] transition-colors"
          >
            <div className="flex w-10 h-10 px-2 py-[10px] justify-center items-center gap-[10px] rounded-full">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM14.6375 12.8625C15.125 13.35 15.125 14.1375 14.6375 14.625C14.3875 14.875 14.075 14.9875 13.75 14.9875C13.425 14.9875 13.1125 14.8625 12.8625 14.625L10 11.7625L7.1375 14.625C6.65 15.1125 5.8625 15.1125 5.375 14.625C4.8875 14.1375 4.8875 13.35 5.375 12.8625L8.2375 10L5.375 7.1375C4.8875 6.65 4.8875 5.8625 5.375 5.375C5.8625 4.8875 6.65 4.8875 7.1375 5.375L10 8.2375L12.8625 5.375C13.35 4.8875 14.1375 4.8875 14.625 5.375C15.1125 5.8625 15.1125 6.65 14.625 7.1375L11.7625 10L14.625 12.8625H14.6375Z"
                  fill="white"
                />
              </svg>
            </div>
            <span className="text-white font-['Open_Sans'] text-sm font-normal leading-5">
              Reject
            </span>
          </button>

          {/* Choose Different Job Match Button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex h-[54px] px-4 justify-center items-center flex-1 rounded border border-[#1A28C1] bg-white shadow-[1px_1px_4px_0_rgba(0,0,0,0.15)] hover:bg-[#F5F5FE] transition-colors"
          >
            <div className="flex w-10 h-10 px-2 py-[10px] justify-center items-center gap-[10px] rounded-full">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.104491 6.0554C1.98134 2.27411 5.91367 0 9.96272 0C13.0554 0 15.9516 1.31616 18.0002 3.5253V2.25C18.0002 1.69772 18.4479 1.25 19.0002 1.25C19.5525 1.25 20.0002 1.69772 20.0002 2.25V6.5C20.0002 7.05228 19.5525 7.5 19.0002 7.5H14.7502C14.1979 7.5 13.7502 7.05228 13.7502 6.5C13.7502 5.94772 14.1979 5.5 14.7502 5.5H17.0551C15.3671 3.32003 12.7578 2 9.96272 2C6.63677 2 3.41911 3.87589 1.89595 6.9446C1.65041 7.4393 1.05032 7.64127 0.555624 7.39573C0.0609253 7.15019 -0.141053 6.5501 0.104491 6.0554ZM19.4448 12.6043C19.9395 12.8498 20.1415 13.4499 19.896 13.9446C18.0215 17.721 14.1924 20 10.0377 20C6.94505 20 4.04883 18.6838 2.00022 16.4747V17.75C2.00022 18.3023 1.5525 18.75 1.00022 18.75C0.447935 18.75 0.000220619 18.3023 0.000220619 17.75V13.5C0.000220619 12.9477 0.447935 12.5 1.00022 12.5H5.25022C5.8025 12.5 6.25022 12.9477 6.25022 13.5C6.25022 14.0523 5.8025 14.5 5.25022 14.5H2.94534C4.63334 16.68 7.2426 18 10.0377 18C13.458 18 16.5789 16.129 18.1045 13.0554C18.35 12.5607 18.9501 12.3587 19.4448 12.6043Z"
                  fill="#1A28C1"
                />
              </svg>
            </div>
            <span className="text-[#1A28C1] font-['Open_Sans'] text-sm font-normal leading-5">
              Choose Different Job Match
            </span>
          </button>
        </div>

        {/* Job Match Details */}
        <div className="flex flex-col items-start gap-[-1px] self-stretch rounded-lg border border-[#9090A2] bg-[#E9EAFC]">
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

        {/* Role Match Tasks */}
        <div className="flex flex-col items-start gap-3 self-stretch">
          <h4 className="text-[#1A28C1] font-['Open_Sans'] text-base font-bold leading-[22px]">
            Role Match Tasks
          </h4>

          <div className="flex flex-col items-start self-stretch">
            {ROLE_MATCH_TASKS.map((task, index) => (
              <div
                key={index}
                className="flex flex-col items-start self-stretch"
              >
                <h5 className="self-stretch text-black font-['Open_Sans'] text-base font-bold leading-[30px]">
                  {index + 1}. {task.title}
                </h5>
                <div className="flex flex-col items-start gap-2 self-stretch">
                  <p className="self-stretch text-black font-['Open_Sans'] text-base font-normal leading-[130%]">
                    {task.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      <RoleValidationModalOnClickChooseDifferentJobMatch
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        currentJobMatch={currentJobMatch}
        proposedMappedRole={proposedMappedRole}
      />
    </>
  );
}
