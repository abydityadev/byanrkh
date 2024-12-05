import React from "react";

export default function Title({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <>
      <h1 className="text-white text-base font-semibold">{title}</h1>
      <p className="text-xs">{description}</p>
    </>
  );
}
