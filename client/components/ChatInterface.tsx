import { useState } from "react";

interface Message {
  id: string;
  type: "bot" | "user";
  content: string;
}

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "bot",
      content:
        "Hello! I'm Mystro, I can help you analyze your workforce data, understand role matching results, and provide insights about AI adoption opportunities. What would you like to know?",
    },
    {
      id: "2",
      type: "user",
      content:
        "Please create a tree chart showing the opportunities for the Software Development department. Break down the data by sub-function.",
    },
  ]);

  const [inputValue, setInputValue] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSend = () => {
    if (inputValue.trim()) {
      const newMessage: Message = {
        id: Date.now().toString(),
        type: "user",
        content: inputValue,
      };
      setMessages([...messages, newMessage]);
      setInputValue("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div
      className={`flex flex-col justify-center items-center flex-shrink-0 rounded-xl bg-[#F5F5FE] shadow-[2px_2px_12px_0_rgba(0,0,0,0.15)] transition-all ${
        isExpanded ? "fixed inset-4 z-50" : "w-full h-[803px]"
      }`}
    >
      <div className="flex w-full h-full pt-5 flex-col justify-end items-center flex-shrink-0">
        {/* Messages Area */}
        <div className="flex h-[657px] px-[18px] pt-[10px] justify-end items-end gap-[10px] flex-shrink-0 self-stretch">
          <div className="flex h-[706px] justify-end items-end gap-[10px] flex-1 rounded-xl">
            <div className="flex h-[706px] px-[18px] py-[18px] flex-col justify-end items-end gap-6 flex-1 rounded-xl bg-[#E9EAFC] overflow-y-auto">
              {/* Bot Messages */}
              <div className="flex pr-10 flex-col justify-end items-end gap-[10px] self-stretch">
                {messages
                  .filter((msg) => msg.type === "bot")
                  .map((msg) => (
                    <div
                      key={msg.id}
                      className="flex px-1 py-3 items-start gap-3 self-stretch rounded-2xl rounded-tr-none"
                    >
                      <div className="flex flex-col items-start gap-3 flex-1">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <circle cx="12" cy="12" r="10" fill="url(#paint0_linear)" />
                          <defs>
                            <linearGradient
                              id="paint0_linear"
                              x1="12"
                              y1="2"
                              x2="12"
                              y2="22"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop offset="0.36" stopColor="#7213EA" />
                              <stop offset="0.73" stopColor="#1E49E2" />
                              <stop offset="0.9" stopColor="#00338D" />
                            </linearGradient>
                          </defs>
                        </svg>
                        <div className="self-stretch text-[#454554] font-['Open_Sans'] text-base font-normal leading-[22px]">
                          {msg.content}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>

              {/* User Messages */}
              <div className="flex pl-12 flex-col justify-end items-end gap-[10px] self-stretch">
                {messages
                  .filter((msg) => msg.type === "user")
                  .map((msg) => (
                    <div
                      key={msg.id}
                      className="flex flex-col justify-end items-end gap-[18px] self-stretch"
                    >
                      <div className="flex px-[18px] py-3 justify-end items-center gap-[10px] self-stretch rounded-2xl rounded-tr-none bg-[#D7D9FA]">
                        <div className="flex flex-col justify-center items-start gap-[10px] flex-1">
                          <div className="self-stretch text-[#454554] font-['Open_Sans'] text-base font-normal leading-[22px]">
                            {msg.content}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Input Bar */}
        <div className="flex px-6 py-6 flex-col justify-end items-start gap-[18px] self-stretch bg-[#F5F5FE]">
          <div className="flex items-start gap-3 self-stretch">
            <div className="flex flex-col justify-center items-start gap-1 flex-1">
              <div className="flex h-[52px] px-2 py-2 justify-between items-center self-stretch rounded-full bg-[#D7D9FA]">
                <div className="flex h-10 items-center gap-0 flex-1">
                  <div className="flex h-6 px-3 py-[10px] items-center gap-[10px] flex-1 rounded-none">
                    <input
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Chat with Mystro"
                      className="flex-1 bg-transparent border-none outline-none text-[#1A28C1] font-['Open_Sans'] text-base font-normal leading-[22px] placeholder:text-[#1A28C1]"
                    />
                  </div>
                </div>
                <button
                  onClick={handleSend}
                  className="flex h-10 px-2 py-[10px] justify-center items-center gap-[10px] rounded-full bg-[#E9EAFC] hover:bg-[#D7D9FA] transition-colors"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M4.20938 10.7327C3.92369 11.0326 3.93523 11.5074 4.23516 11.7931C4.53509 12.0788 5.00982 12.0672 5.29551 11.7673L11.25 5.516V20.25C11.25 20.6642 11.5858 21 12 21C12.4142 21 12.75 20.6642 12.75 20.25V5.51565L18.7048 11.7673C18.9905 12.0672 19.4652 12.0788 19.7652 11.7931C20.0651 11.5074 20.0766 11.0326 19.791 10.7327L12.7243 3.31379C12.5632 3.14474 12.3578 3.04477 12.1443 3.01386C12.0976 3.00477 12.0494 3 12 3C11.9503 3 11.9017 3.00483 11.8547 3.01406C11.6417 3.04518 11.4368 3.14509 11.2761 3.31379L4.20938 10.7327Z"
                      fill="#1A28C1"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex px-0 py-1 justify-center items-center gap-2 self-stretch">
                <div className="text-[#9090A2] font-['Open_Sans'] text-[11px] font-normal leading-[14px]">
                  Verified by KPMG Trusted AI
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex h-[52px] px-3 py-[18px] justify-center items-center gap-[10px] rounded-full bg-[#E9EAFC] hover:bg-[#D7D9FA] transition-colors"
            >
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                {isExpanded ? (
                  <path
                    d="M23.189 14.9426C22.7477 14.9426 22.384 15.3066 22.384 15.748V21.2486L15.9318 14.7935C15.7827 14.6443 15.58 14.5549 15.3653 14.5549C15.1506 14.5549 14.9479 14.6384 14.7988 14.7935C14.4827 15.1097 14.4827 15.6168 14.7988 15.933L21.251 22.3881H15.7529C15.3116 22.3881 14.9479 22.752 14.9479 23.1935C14.9479 23.635 15.3116 23.9989 15.7529 23.9989H23.195C23.6363 23.9989 24 23.635 24 23.1935V15.748C24 15.3066 23.6363 14.9426 23.195 14.9426H23.189Z"
                    fill="#1E49E2"
                  />
                ) : (
                  <>
                    <path
                      d="M4.81099 13.0574C5.25227 13.0574 5.61603 12.6934 5.61603 12.252V6.75139L12.0682 13.2065C12.2173 13.3557 12.42 13.4451 12.6347 13.4451C12.8494 13.4451 13.0521 13.3616 13.2012 13.2065C13.5173 12.8903 13.5173 12.3832 13.2012 12.067L6.74903 5.6119H12.2471C12.6884 5.6119 13.0521 5.24798 13.0521 4.8065C13.0521 4.36502 12.6884 4.0011 12.2471 4.0011H4.80503C4.36375 4.0011 4 4.36502 4 4.8065V12.252C4 12.6934 4.36375 13.0574 4.80503 13.0574H4.81099Z"
                      fill="#1E49E2"
                    />
                    <path
                      d="M21.2507 22.388H15.7527C15.3114 22.388 14.9476 22.752 14.9476 23.1934C14.9476 23.6349 15.3114 23.9988 15.7527 23.9988H23.1947C23.636 23.9988 23.9998 23.6349 23.9998 23.1934V15.748C23.9998 15.3065 23.636 14.9426 23.1947 14.9426C22.7535 14.9426 22.3897 15.3065 22.3897 15.748V21.2485L15.9375 14.7934C15.6215 14.4772 15.1146 14.4772 14.7986 14.7934C14.4825 15.1096 14.4825 15.6167 14.7986 15.9329L21.2507 22.388Z"
                      fill="#1E49E2"
                    />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
