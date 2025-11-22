export function generateChartURL(data) {
  return `https://quickchart.io/chart?c=${JSON.stringify({
    type: "line",
    data: {
      labels: data.labels,
      datasets: [{ data: data.values }]
    }
  })}`;
}