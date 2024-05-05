"use client";
import React from "react";

type ErrorProps = {
  error: Error;
  reset: () => void; //this allow us to refresh the route
};
export default function Error({ error }: ErrorProps) {
  return <div>{error.message}</div>;
}
