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
          backgroundColor: sender === "bot" ? "#843680" : "#209c42",
          color: sender === "bot" ? "black" : "white",
        }}
      >
        <p className="flex flex-wrap max-w-max text-lg tracking-wide">
          {message}
        </p>
      </div>
    </div>
  );
}

export default ChatBubble;
