import { type FC } from "react";
import { type HeadingText } from "@/types/i18n-types";

/** Section title: plain lead, then the gradient accent. */
export const Heading: FC<HeadingText & { lineBreak?: boolean }> = ({
  lead,
  accent,
  lineBreak,
}) => (
  <>
    {lead}
    {lineBreak ? <br /> : " "}
    <span className="text-gradient">{accent}</span>
  </>
);
