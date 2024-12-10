
import React,{useState} from 'react';
import Chart from 'react-apexcharts';

function ReportCharts() {
    const [data,setData]=useState({

        series:[{
            name:'Sales',data:[31,40,28,51,42,82,56] } ,
            {name:'Revenue',data:[11,40,45,34,42,52,95]}  ,
           {name:'Customers',data:[31,15,18,51,34,82,78] } ,
              

        ],
        options:{
            chart:{
                height:350,
                type:'area',
                toolbar:{
                    show:false,
                },
            },
            makers:{
                size:4,
            },
            colors:['#4154f1','#2eca6a','#ff771d'],
            fill:{type:'gradient',
                gradient:{
                    shadeIntensity:1,
                    opacityFrom:0.3,
                    opacityTo:0.4,
                    stops:[0,90,100]
                },
                dataLabels:{
                    enabled:false,
                },
                stroke:{
                    curve:'smooth',
                    width:2
                },
                xaxis:{
                    type:'datetime',
                    categories:[
                        '2018-09-1900:00:00:000z',
                        '2018-09-1900:00:00:000z',
                        '2018-09-1900:00:00:000z',
                        '2018-09-1900:00:00:000z',
                        '2018-09-1900:00:00:000z',
                        '2018-09-1900:00:00:000z',
                        '2018-09-1900:00:00:000z',
                        '2018-09-1900:00:00:000z',
                    ],
                },

            },
            tooltip:{
                x:{
                    format:'dd/MM/yy HH:mm',
                },
            },


        }
    },



    );
  return (
    <div>
        <Chart options={data.options} series={data.series} type={data.options.chart.type} height={data.options.chart.height}/>
    </div>
  )
}

export default ReportCharts;