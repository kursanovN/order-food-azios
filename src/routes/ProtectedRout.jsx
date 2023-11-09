  import React from "react";
  import { Navigate } from "react-router-dom";

  export const ProtectedRout = ({
    component: Comment,
    fallBarPath,
    isAllowed,
  }) => {
    if (!isAllowed) {
      return <Navigate to={fallBarPath} />;
    }

    return <Comment />;
  };
