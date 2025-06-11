import React from "react";

export function PositionOfResponsibility() {
  return (
    <div className="relative flex flex-col w-full overflow-hidden rounded-lg bg-black p-2">
      <div className="relative w-full h-full">
        <div className="space-y-2">
          <div className="w-full rounded-lg border border-zinc-800 p-2">
            <div>
              <div className="flex justify-between items-center">
                <h3 className="text-xl text-white font-normal">Rookus.in</h3>
                <p className="text-lg text-zinc-500 font-normal">May 2025 - present</p>
              </div>
              <p className="text-base text-zinc-600 font-normal mt-1">Backend Developer</p>
            </div>
          </div>
          <div className="w-full rounded-lg border border-zinc-800 p-2">
            <div>
              <div className="flex justify-between items-center">
                <h3 className="text-xl text-white font-normal">Sociecty of Data Science</h3>
                <p className="text-lg text-zinc-500 font-normal">Feb 2025 - present</p>
              </div>
              <p className="text-base text-zinc-600 font-normal mt-1">Technical Team Lead</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 