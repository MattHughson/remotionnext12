import React, { useCallback } from "react";

const textarea: React.CSSProperties = {
  resize: "none",
  lineHeight: 1.7,
  display: "block",
  width: "100%",
  borderRadius: "var(--geist-border-radius)",
  backgroundColor: "white",
  padding: "var(--geist-half-pad)",
};

export const Input: React.FC<{
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
}> = ({ text, setText }) => {
  const onChange: React.ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      setText(e.currentTarget.value);
    },
    [setText]
  );

  return (
    <input name="props" style={textarea} value={text} onChange={onChange} />
  );
};
