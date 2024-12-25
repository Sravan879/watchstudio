import COLORS from "@/utils/colors";
import React from "react";

// Reusable Base Component for Text
const BaseText = ({
  children,
  fontSize = "17px",
  lineHeight = "25px",
  letterSpacing = "0px",
  isBold = false,
  textColor = COLORS.ALMOST_BLACK,
  additionalClass = "",
  fontFamily,
}) => {
  const styles = {
    fontFamily,
    fontSize,
    lineHeight,
    fontWeight: isBold ? 600 : 400,
    color: textColor,
    letterSpacing,
  };

  return (
    <p style={styles} className={additionalClass}>
      {children}
    </p>
  );
};

// Text Component for "SF Pro Text"
const SFProText = (props) => (
  <BaseText fontFamily='"SF Pro Text", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif' {...props} />
);

// Text Component for "SF Pro Display"
const SFProDisplay = (props) => (
  <BaseText fontFamily='"SF Pro Display", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif' {...props} />
);

// SF Pro Text Variants
export const SmallLabel = (props) => (
  <SFProText fontSize="10px" lineHeight="14.7px" {...props} />
);

export const Caption = (props) => (
  <SFProText fontSize="12px" lineHeight="16px" {...props} />
);

export const ProductDescription = (props) => (
  <SFProText fontSize="14px" lineHeight="20px" {...props} />
);

export const PreviousButton = (props) => (
  <SFProText fontSize="17px" lineHeight="17px" {...props} />
);

export const NavigationItem = (props) => (
  <SFProText fontSize="17px" lineHeight="21px" {...props} />
);

export const GeneralText = (props) => (
  <SFProText fontSize="17px" lineHeight="25px" {...props} />
);

// SF Pro Display Variants
export const ProductName = (props) => (
  <SFProDisplay fontSize="12px" lineHeight="16px" {...props} />
);

export const SaveButtonText = (props) => (
  <SFProDisplay fontSize="14px" lineHeight="18px" {...props} />
);

export const BrandName = (props) => (
  <SFProDisplay fontSize="19px" lineHeight="23px" {...props} />
);

export const Subheading = (props) => (
  <SFProDisplay fontSize="21px" lineHeight="29px" {...props} />
);

export const ProminentHeading = (props) => (
  <SFProDisplay fontSize="28px" lineHeight="32px" {...props} />
);

export const LargeHeading = (props) => (
  <SFProDisplay fontSize="64px" lineHeight="68px" {...props} />
);

