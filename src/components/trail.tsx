import { a, useTrail } from "@react-spring/web";
import React, { ComponentPropsWithoutRef } from "react";

const Trail = ({
  open,
  fontSizePx,
  children,
}: ComponentPropsWithoutRef<"div"> & { open: boolean; fontSizePx: number }) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? fontSizePx : 0,
    from: { opacity: 0, x: fontSizePx / 5, height: 0 },
  });
  return (
    <div>
      {trail.map(({ height, ...style }, index) => (
        <a.div
          key={index}
          className="trailsText"
          style={{
            ...style,
            height: fontSizePx * 0.9 + "px",
            lineHeight: fontSizePx * 0.8 + "px",
          }}
        >
          <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  );
};

export default Trail;
