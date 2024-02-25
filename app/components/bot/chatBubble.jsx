function ChatBubble({ message, sender }) {
  return (
    <div
      className="my-0.5"
      style={{ textAlign: sender === "bot" ? "left" : "right" }}
    >
      <div
        className="max-w-full h-full"
        style={{
          display: "inline-block",
          padding: "8px",
          wordBreak: "break-word",
          borderRadius: "5px",
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
