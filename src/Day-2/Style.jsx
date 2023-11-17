import React from "react";

const Style = () => {
  return (
    <div
      style={{
        backgroundColor: "lightBlue",
        padding: "10px",
        border: "1px solid blue",
        borderRadius: "5px",
      }}
    >
      <h1 style={{ color: "green" }}>
        <center>"Inline Style in JSX Example"</center>
      </h1>
      <p
        style={{
          color: "darkblue",
          fontsize: "16px",
        }}
      >
        The style attribute works in the same way as any other HTML attribute.
        We use style, followed by the equality sign (=), and then a quote where
        all of the style values will be stored using the standard CSS
        property-value pairs - "property: value;". We can have as many
        property-value pairs as we want as long as we separate them with a
        semicolon, It's worth noting that the style attribute is typically used
        in the opening HTML tag because that's the part of the HTML element that
        can contain text, data, an image, or nothing at all.
      </p>
    </div>
  );
};
export default Style;
