import type { ReactNode, CSSProperties } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  screenStyle?: CSSProperties;
  width?: number;
};

export default function IPhoneMockup({
  children,
  className = "",
  style,
  screenStyle,
  width = 280,
}: Props) {
  return (
    <div
      className={`iphone-frame ${className}`}
      style={{ width, ...style }}
    >
      <div className="iphone-side-btn" />
      <div className="iphone-side-btn vol" />
      <div className="iphone-side-btn vol2" />
      <div className="iphone-side-btn power" />
      <div className="iphone-notch">
        <div className="iphone-camera" />
      </div>
      <div className="iphone-screen" style={screenStyle}>
        {children}
      </div>
      <div className="iphone-home">
        <div className="iphone-home-bar" />
      </div>
    </div>
  );
}
