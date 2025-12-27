import { Send } from "lucide-react";
import MessageBox from "./InputMessage";
import { useState } from "react";

export default function Message() {
  const [content, setContent] = useState("");
  return (
    <div className="bg-[#1c1e21] h-full p-4 rounded-xl flex flex-col">
      <h1 className="text-white">Message Component</h1>
      <div className="flex-1">
        <h1 className="text-white">Message Content</h1>
      </div>
      <MessageBox
        icon={Send}
        onChangeValue={setContent}
        value={content}
        widthIcon={32}
        heightIcon={32}
        className="h-12 py-2"
      />
    </div>
  );
}
