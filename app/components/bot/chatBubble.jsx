function ChatBubble({ message, sender }) {
  return (
    <div className={`my-0.5 ${sender !== "user" ? 'text-left pr-4' : 'text-right pl-4'}`}>
      <div
        className={`max-w-full h-full rounded-[10px] ${sender !== "user" ? 'rounded-tl-none' : 'rounded-br-none'}`}
        style={{
          display: "inline-block",
          padding: "8px",
          wordBreak: "break-word",
          backgroundColor: sender !== "user" ? "#0E8CB7" : "#56C6EC",
          color: sender !== "user" ? "white" : "white",
        }}
      >
        {sender === 'loading' ?
        <div className="flex gap-1 animate-pulse">
          <div className="h-2 w-2 bg-white rounded-full"></div>
          <div className="h-2 w-2 bg-white rounded-full"></div>
          <div className="h-2 w-2 bg-white rounded-full"></div>
        </div>
        : <p className="flex flex-wrap max-w-max sm:text-xs text-xl tracking-wide">
          {message}
        </p>}
      </div>
    </div>
  );
}

export default ChatBubble;
