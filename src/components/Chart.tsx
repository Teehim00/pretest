"use client";
import { ResponsiveBar } from "@nivo/bar";

type Props = {
  data: { name: string; up: number; down: number }[];
};

export default function Chart({ data }: Props) {
  return (
    <div style={{ height: 800 }}>
      <ResponsiveBar
        data={data}
        keys={["up", "down"]}
        colors={["#3b82f6", "#dc2626"]}
        indexBy="name"
        margin={{ top: 20, right: 30, bottom: 400, left: 60 }}
        padding={0.3}
        groupMode="grouped"
        layout="vertical"
        axisBottom={{
          tickRotation: 60,
          legendOffset: 40,
        }}
        axisLeft={{
          legend: "Votes",
          legendPosition: "middle",
          legendOffset: -40,
        }}
        theme={{
          axis: {
            ticks: {
              text: {
                fontSize: 11,
                fill: "#374151",
              },
            },
          },
        }}
      />
    </div>
  );
}
