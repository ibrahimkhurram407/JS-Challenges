function toggleStyle(style) {
    const textElement = document.getElementById("q25_text");
  
    switch (style) {
      case "bold":
        if (textElement.style.fontWeight === "bold") {
          textElement.style.fontWeight = "normal";
        } else {
          textElement.style.fontWeight = "bold";
        }
        break;
      case "italic":
        if (textElement.style.fontStyle === "italic") {
          textElement.style.fontStyle = "normal";
        } else {
          textElement.style.fontStyle = "italic";
        }
        break;
      case "underline":
        if (textElement.style.textDecoration === "underline") {
          textElement.style.textDecoration = "none";
        } else {
          textElement.style.textDecoration = "underline";
        }
        break;
      default:
        break;
    }
  }
  