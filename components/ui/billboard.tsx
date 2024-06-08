import { Billboard as BillboardType } from "@/types";
import React from 'react';

interface BillboardProps {
  data: BillboardType | null; // Explicitly allow data to be null
}

const Billboard: React.FC<BillboardProps> = ({ data }) => {

  if (!data || !data.imageUrl) {
    return (
      <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
        <div className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover bg-gray-200">
          <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
            <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
              Default Label
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div style={{ backgroundImage: `url(${data.imageUrl})` }} className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover">
        <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
          <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
            {data.label || 'Default Label'} {/* Provide a default value */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
  