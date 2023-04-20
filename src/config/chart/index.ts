export const priceChartOptions: ApexCharts.ApexOptions = {
  chart: {
    id: "price",
    offsetX: -10,
    toolbar: {
      show: true,
      offsetX: 0,
      offsetY: 4,
      tools: {
        download: true,
        selection: false,
        zoom: false,
        zoomin: false,
        zoomout: false,
        pan: false,
        reset: false,
        customIcons: [
          {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-question-circle" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
              <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
            </svg>`,
            index: 1,
            title: "I am a tooltip",
            class: "tooltipApexCharts ms-1",
            click: function (chart, options, e) {
              console.log("clicked custom-icon");
            },
          },
        ],
      },
    },
  },
  legend: {
    position: "left",
    offsetY: 50,
    offsetX: -20,
  },
  title: {
    text: "Price",
    align: "left",
    offsetX: 60,
    margin: 10,
    style: {
      fontSize: "18px",
      fontWeight: "bold",
      color: "#333",
    },
  },
  subtitle: {
    text: "Spot Price",
    align: "left",
    offsetX: 60,
    margin: -10,
    style: {
      fontSize: "14px",
      color: "#333",
    },
  },
  markers: {
    size: 5,
  },
  xaxis: {
    categories: [
      "0:00",
      "2:00",
      "3:00",
      "4:00",
      "5:00",
      "6:00",
      "7:00",
      "8:00",
      "9:00",
      "10:00",
      "11:00",
      "12:00",
      "13:00",
      "14:00",
      "15:00",
      "16:00",
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
      "23:00",
    ],
  },
  yaxis: [
    {
      show: false,
      seriesName: "VAR",
      min: 0,
      max: 100,
    },
    {
      show: false,
    },
    {
      show: false,
    },
    {
      show: false,
    },
    {
      show: false,
    },
  ],
  stroke: {
    width: 2,
    curve: "straight",
    dashArray: [0, 3, 0, 0, 0],
  },

  dataLabels: {
    enabled: true,
    enabledOnSeries: [0, 2, 3, 4],
    formatter: function (value, { seriesIndex, dataPointIndex, w }) {
      if (seriesIndex === 0) {
        return `${value}%`;
      } else {
        return w.config.series[seriesIndex].data[dataPointIndex];
      }
    },
    style: {
      colors: ["#a0a1a3"],
    },
    background: { enabled: false },
    offsetY: -3,
  },
  plotOptions: {
    bar: {
      horizontal: false,
      dataLabels: {
        position: "middle",
      },
    },
  },
};

export const temperatureChartOptions: ApexCharts.ApexOptions = {
  chart: {
    offsetX: -15,
    toolbar: {
      show: true,
      offsetX: 0,
      offsetY: 4,
      tools: {
        download: true,
        selection: false,
        zoom: false,
        zoomin: false,
        zoomout: false,
        pan: false,
        reset: false,
        customIcons: [
          {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-question-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
              </svg>`,
            index: 1,
            title: "I am a tooltip",
            class: "tooltipApexCharts ms-1",
            click: function (chart, options, e) {
              console.log("clicked custom-icon");
            },
          },
        ],
      },
    },
  },
  dataLabels: {
    enabled: true,
    formatter: function (value: number) {
      return value + "%";
    },
    style: {
      colors: ["#808080"],
    },
  },
  xaxis: {
    position: "top",
  },
  legend: {
    position: "left",
    offsetY: 30,
    offsetX: -20,
    formatter: function (seriesName, opts) {
      return (
        seriesName.split(" ")[0].toString() +
        "%" +
        " - " +
        seriesName.split(" ")[2].toString() +
        "%"
      );
    },
  },
  title: {
    //text: "Temperature",
    align: "left",
    offsetX: 60,
    margin: 10,
    style: {
      fontSize: "18px",
      fontWeight: "bold",
      color: "#333",
    },
  },
  subtitle: {
    //text: "Spot Price",
    align: "left",
    offsetX: 60,
    margin: -10,
    style: {
      fontSize: "14px",
      color: "#333",
    },
  },
  plotOptions: {
    heatmap: {
      enableShades: false,
      colorScale: {
        ranges: [
          {
            from: 0,
            to: 25,
            color: "#94b9f3",
          },
          {
            from: 26,
            to: 50,
            color: "#5e97ec",
          },
          {
            from: 51,
            to: 75,
            color: "#397be8",
          },
          {
            from: 76,
            to: 100,
            color: "#0254e2",
          },
        ],
      },
    },
  },
};

export const presenceChartOptions: ApexCharts.ApexOptions = {
  chart: {
    offsetX: -15,
    toolbar: {
      show: true,
      offsetX: 0,
      offsetY: 4,
      tools: {
        download: true,
        selection: false,
        zoom: false,
        zoomin: false,
        zoomout: false,
        pan: false,
        reset: false,
        customIcons: [
          {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-question-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
          </svg>`,
            index: 1,
            title: "Tooltip",
            class: "tooltipApexCharts ms-1",
            click: function (chart, options, e) {},
          },
        ],
      },
    },
  },
  xaxis: {
    categories: [],
  },
  yaxis: {
    min: 0,
    max: 100,
    labels: {
      formatter: (val) => {
        return val + "%";
      },
    },
  },
  dataLabels: {
    enabled: true,
    formatter: function (value: number) {
      return value + "%";
    },
    style: {
      colors: ["#808080"],
    },
    background: { enabled: false },
    offsetX: 20,
    offsetY: -20,
  },
  legend: {
    position: "left",
    offsetY: 30,
    offsetX: -20,
  },
  title: {
    text: "Presence",
    align: "left",
    offsetX: 60,
    margin: 10,
    style: {
      fontSize: "18px",
      fontWeight: "bold",
      color: "#333",
    },
  },
  subtitle: {
    text: "Spot Price",
    align: "left",
    offsetX: 60,
    margin: -10,
    style: {
      fontSize: "14px",
      color: "#333",
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      dataLabels: {
        position: "middle",
        orientation: "vertical",
      },
    },
  },
};
