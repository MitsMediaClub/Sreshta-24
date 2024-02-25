function ChatBubble({ message, sender }) {
  return (
    <div className={`my-0.5 ${sender === "bot" ? 'text-left pr-4' : 'text-right pl-4'}`}>
      <div
        className={`max-w-full h-full rounded-[10px] ${sender === "bot" ? 'rounded-tl-none' : 'rounded-br-none'}`}
        style={{
          display: "inline-block",
          padding: "8px",
          wordBreak: "break-word",
          backgroundColor: sender === "bot" ? "#0E8CB7" : "#56C6EC",
          color: sender === "bot" ? "white" : "white",
        }}
      >
        <p className="flex flex-wrap max-w-max sm:text-xs text-xl tracking-wide">
          {message}
        </p>
      </div>
    </div>
  );
}

export default ChatBubble;
