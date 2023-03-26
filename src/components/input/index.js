import React, { useState } from "react";
import cn from "classnames";
export function Input({
  label = "Label",
  icon: Icon,
  formExtra,
  error,
  ...rest
}) {
  const [isFocused, setISFocused] = useState(false);

  return (
    <div className="flex-1 relative">
      <div
        className={cn(
          "bg-[#F6F6F6] p-3 rounded-lg border mb-3 flex-1 flex items-center justify-between",
          {
            "border-primary": isFocused,
          }
        )}
      >
        <div>
          <div>
            <label className="text-[#7A8080] text-xs">{label}</label>
          </div>
          <input
            {...formExtra}
            onFocus={() => setISFocused(true)}
            onBlur={() => setISFocused(false)}
            {...rest}
            className="p-2 bg-[#F6F6F6] w-full outline-none"
          />
        </div>
        {Icon && <Icon />}
      </div>
      {error && (
        <div className="">
          <small className=" text-xs text-red-400">{error}</small>
        </div>
      )}
    </div>
  );
}
