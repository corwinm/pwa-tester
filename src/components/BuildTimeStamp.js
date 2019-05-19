import React from 'react';
import preval from "preval.macro";

const dateTimeStamp = preval`module.exports = new Date().toLocaleString();`;

export default function BuildTimeStamp() {
  return (
    <p>
      Built: {dateTimeStamp}
    </p>
  )
}
