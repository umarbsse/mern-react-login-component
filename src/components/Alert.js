import React from "react";

export default function Alert(props) {
  const capitilize = (word) => {
    if(word==="danger"){
      word="error"
    }
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    <div style={{ height: "100px" }}>
      {props.alert && (
        <div className={`alert alert-${props.alert.type} alert-dismissible fade show my-3`} role="alert"
>
          <strong>{capitilize(props.alert.type)}</strong>: {props.alert.msg}
        </div>
      )}
    </div>
  );
}