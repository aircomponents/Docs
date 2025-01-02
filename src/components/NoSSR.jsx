import React from "react";

export default function NoSSR({ children }) {
    if (typeof window === "undefined") {
        return null;
    }
    return <>{children}</>
}