"use client";

import { useEffect } from "react";

export default function LocationTracker() {

  useEffect(() => {

    if (!navigator.geolocation) {
      alert("Location not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {

        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        console.log("Latitude:", latitude);
        console.log("Longitude:", longitude);

      },

      () => {
        alert(
          "Location permission required. Please enable your location to continue."
        );
      }

    );

  }, []);


  return null;
}
