/**
 * Opens when you click on the ShowCard, and closes when you click outside of it.
 * This will hold the name, image, and description of the anime or movie and at the same time make it ratable-
 *
 */

import React, { useState, useEffect } from "react";

function HoverCard() {
  return (
    <div className="hover-card">
      <div className="hover-card-content">
        <h3>Title</h3>
        <p>Description</p>
      </div>
    </div>
  );
}
