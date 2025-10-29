import { Treemap, ResponsiveContainer } from "recharts";

interface TreemapDataItem {
  name: string;
  color: string;
  size: number;
  percentage: number;
}

const CHART_DATA: TreemapDataItem[] = [
  { name: "Data Engineer", color: "#460B8E", size: 163, percentage: 27.6 },
  { name: "Machine Engineer", color: "#7213EA", size: 85, percentage: 14.4 },
  { name: "Research Engineer", color: "#A461F9", size: 104, percentage: 17.6 },
  { name: "Logistics Engineer", color: "#131E90", size: 163, percentage: 27.6 },
  { name: "R&D", color: "#1E49E2", size: 184, percentage: 31.1 },
  { name: "Database Engineers", color: "#818AEE", size: 201, percentage: 34.0 },
  { name: "Software Engineers", color: "#119FBF", size: 51, percentage: 8.6 },
  { name: "Java Software Adm...", color: "#077189", size: 30, percentage: 5.1 },
  { name: "Infrastructure Man...", color: "#048BB7", size: 36, percentage: 6.1 },
  { name: "Database Ticklers", color: "#00B8F5", size: 13, percentage: 2.2 },
];

const CustomTreemapContent = (props: any) => {
  const { x, y, width, height, color } = props;
  
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        style={{
          fill: color,
          stroke: "#FFF",
          strokeWidth: 1,
        }}
      />
    </g>
  );
};

export default function TreemapChart() {
  const treemapData = CHART_DATA.map((item) => ({
    name: item.name,
    size: item.size,
    color: item.color,
  }));

  return (
    <div className="flex w-full h-[492px] px-6 py-6 flex-col items-end gap-[54px] flex-shrink-0 rounded-xl border border-[#818AEE] bg-white shadow-[1px_1px_4px_0_rgba(0,0,0,0.15)]">
      {/* Title */}
      <h2 className="self-stretch text-black font-['Open_Sans'] text-2xl font-bold leading-8">
        Opportunity by Sub-function
      </h2>

      {/* Chart and Legend Container */}
      <div className="flex w-full items-start gap-6 flex-1">
        {/* Legend */}
        <div className="flex flex-col items-start gap-1 pt-2">
          {CHART_DATA.map((item, index) => (
            <div key={index} className="flex items-center gap-1">
              <div
                className="w-[21px] h-[21px] rounded-full flex-shrink-0"
                style={{ backgroundColor: item.color }}
              />
              <div className="text-black font-['Open_Sans'] text-xs font-bold leading-4">
                {item.name}
              </div>
            </div>
          ))}
        </div>

        {/* Treemap Chart */}
        <div className="flex-1 h-full">
          <ResponsiveContainer width="100%" height="100%">
            <Treemap
              data={treemapData}
              dataKey="size"
              stroke="#FFF"
              fill="#8884d8"
              content={<CustomTreemapContent />}
            />
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export { CHART_DATA };
export type { TreemapDataItem };
