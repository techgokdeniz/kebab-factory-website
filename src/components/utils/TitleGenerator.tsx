import React from "react";
import { cn } from "@/lib/utils";
import StarIcon from "@/images/StarIcon";

const TitleGenerator = ({
  className,
  variant,
  children,
}: {
  className?: string;
  variant: "red" | "white";
  children: React.ReactNode;
}) => {
  return (
    <div className="flex">
      <h2 className={cn("pr-3", className)}>{children}</h2>
      <StarIcon
        height={24}
        width={24}
        color={variant === "white" ? "white" : "#DB312D"}
      />
    </div>
  );
};

export default TitleGenerator;
