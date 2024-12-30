let arrow = document.querySelectorAll(".arrow");
for (var i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener("click", (e)=>{
 let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
 arrowParent.classList.toggle("showMenu");
  });
}

let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bx-menu");
console.log(sidebarBtn);
sidebarBtn.addEventListener("click", ()=>{
  sidebar.classList.toggle("close");
});


function mouseDown() {
    document.getElementById("myP").style.color = "black";
  }
  function mouseUp() {
    document.getElementById("myP").style.color = "blue";
  }
  




// $(document).ready(function() {
//   $(document).on('scroll', function() {
//     var head = $(this).scrollTop()
//     if (head > 2) {
//       $('header').addClass('sticky');
//     } else {
//       $('header').removeClass('sticky');
//     }

//   });
// });

// const progressContainer = document.querySelector('.progress-container');

// // initial call
// setPercentage();

// function setPercentage() {
//   const percentage = progressContainer.getAttribute('data-percentage') + '%';
  
//   const progressEl = progressContainer.querySelector('.progress');
//   const percentageEl = progressContainer.querySelector('.percentage');
  
//   progressEl.style.width = percentage;
//   percentageEl.innerText = percentage;
//   percentageEl.style.left = percentage;
// }


const ctu = document.getElementById('myChart');


new Chart(ctu, {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange', 'Orange', 'Yellow', 'Green', , 'Orange', 'Orange', 'Orange', 'Orange', 'Red', 'Blue',],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});


const ctu2 = document.getElementById('second_chart');

const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
        label: 'Looping tension',
        data: [65, 59, 80, 81, 26, 55, 40],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
    }]
};

const config = {
    type: 'line',
    data: data,
    options: {
        animations: {
            tension: {
                duration: 1000,
                easing: 'linear',
                from: 1,
                to: 0,
                loop: true
            }
        },
        scales: {
            y: { // defining min and max so hiding the dataset does not change scale range
                min: 0,
                max: 100
            }
        }
    }
};


new Chart(ctu2, config);

const data2 = {
    labels: [
        'Red',
        'Blue',
        'Yellow'
    ],
    datasets: [{
        label: 'My First Dataset',
        data: [300, 50, 100],
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
    }]
};



// bebgin line chart display
var lineChart = document.getElementById("line-chart").getContext('2d')

// line chart options
var options = {
    borderWidth: 2,
    cubicInterpolationMode: 'monotone', // make the line curvy over zigzag
    pointRadius: 2,
    pointHoverRadius: 5,
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderWidth: 4
}

// create linear gradients for line chart
var gradientOne = lineChart.createLinearGradient(0,0,0,lineChart.canvas.clientHeight)
gradientOne.addColorStop(0, 'rgba(51, 169, 247, 0.3)')
gradientOne.addColorStop(1, 'rgba(0, 0, 0, 0)')

var gradientTwo = lineChart.createLinearGradient(0,0,0,lineChart.canvas.clientHeight)
gradientTwo.addColorStop(0, 'rgba(195, 113, 239, 0.15)')
gradientTwo.addColorStop(1, 'rgba(0, 0, 0, 0)')


new Chart(
    lineChart,
    {
        type: 'line',
        data: {
            labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [
                {
                    label: 'Spending',
                    data: [310,300,370,295,350,300,230,290],
                    ...options,
                    borderColor: '#c371ef',
                    fill: 'start',
                    backgroundColor: gradientTwo
                },
                {
                    label: 'Emergency',
                    data: [150,230,195,260,220,300,320,490],
                    ...options,
                    borderColor: '#33a9f7',
                    fill: 'start',
                    backgroundColor: gradientOne
                }
            ]
        },
        options: {
            plugins: {
                legend: {
                    display: false, // hide display data about the dataset
                },
                tooltip: { // modify graph tooltip
                    backgroundColor: 'rgba(53, 27, 92, 0.8)',
                    caretPadding: 5,
                    boxWidth: 5,
                    usePointStyle: 'triangle',
                    boxPadding: 3
                }
            },
            scales: {
                x: {
                    grid: {
                        display: false // set display to false to hide the x-axis grid
                    },
                    beginAtZero: true
                },
                y: {
                    ticks: {
                        callback: function(value, index, values) {
                            return '$ ' + value // prefix '$' to the dataset values
                        },
                        stepSize: 100
                    }
                }
            }
        }
    }
)



// bebgin line chart display
var lineChart = document.getElementById("line-chart-2").getContext('2d')

// line chart options
var options = {
    borderWidth: 2,
    cubicInterpolationMode: 'monotone', // make the line curvy over zigzag
    pointRadius: 2,
    pointHoverRadius: 5,
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderWidth: 4
}

// create linear gradients for line chart
var gradientOne = lineChart.createLinearGradient(0,0,0,lineChart.canvas.clientHeight)
gradientOne.addColorStop(0, 'rgba(51, 169, 247, 0.3)')
gradientOne.addColorStop(1, 'rgba(0, 0, 0, 0)')

var gradientTwo = lineChart.createLinearGradient(0,0,0,lineChart.canvas.clientHeight)
gradientTwo.addColorStop(0, 'rgba(195, 113, 239, 0.15)')
gradientTwo.addColorStop(1, 'rgba(0, 0, 0, 0)')


new Chart(
    lineChart,
    {
        type: 'line',
        data: {
            labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [
                {
                    label: 'Spending',
                    data: [310,300,370,295,350,300,230,290],
                    ...options,
                    borderColor: '#c371ef',
                    fill: 'start',
                    backgroundColor: gradientTwo
                },
                {
                    label: 'Emergency',
                    data: [150,230,195,260,220,300,320,490],
                    ...options,
                    borderColor: '#33a9f7',
                    fill: 'start',
                    backgroundColor: gradientOne
                }
            ]
        },
        options: {
            plugins: {
                legend: {
                    display: false, // hide display data about the dataset
                },
                tooltip: { // modify graph tooltip
                    backgroundColor: 'rgba(53, 27, 92, 0.8)',
                    caretPadding: 5,
                    boxWidth: 5,
                    usePointStyle: 'triangle',
                    boxPadding: 3
                }
            },
            scales: {
                x: {
                    grid: {
                        display: false // set display to false to hide the x-axis grid
                    },
                    beginAtZero: true
                },
                y: {
                    ticks: {
                        callback: function(value, index, values) {
                            return '$ ' + value // prefix '$' to the dataset values
                        },
                        stepSize: 100
                    }
                }
            }
        }
    }
)


// bebgin line chart display
var lineChart = document.getElementById("line-chart-3").getContext('2d')

// line chart options
var options = {
    borderWidth: 2,
    cubicInterpolationMode: 'monotone', // make the line curvy over zigzag
    pointRadius: 2,
    pointHoverRadius: 5,
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderWidth: 4
}

// create linear gradients for line chart
var gradientOne = lineChart.createLinearGradient(0,0,0,lineChart.canvas.clientHeight)
gradientOne.addColorStop(0, 'rgba(51, 169, 247, 0.3)')
gradientOne.addColorStop(1, 'rgba(0, 0, 0, 0)')

var gradientTwo = lineChart.createLinearGradient(0,0,0,lineChart.canvas.clientHeight)
gradientTwo.addColorStop(0, 'rgba(195, 113, 239, 0.15)')
gradientTwo.addColorStop(1, 'rgba(0, 0, 0, 0)')


new Chart(
    lineChart,
    {
        type: 'line',
        data: {
            labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [
                {
                    label: 'Spending',
                    data: [310,300,370,295,350,300,230,290],
                    ...options,
                    borderColor: '#c371ef',
                    fill: 'start',
                    backgroundColor: gradientTwo
                },
                {
                    label: 'Emergency',
                    data: [150,230,195,260,220,300,320,490],
                    ...options,
                    borderColor: '#33a9f7',
                    fill: 'start',
                    backgroundColor: gradientOne
                }
            ]
        },
        options: {
            plugins: {
                legend: {
                    display: false, // hide display data about the dataset
                },
                tooltip: { // modify graph tooltip
                    backgroundColor: 'rgba(53, 27, 92, 0.8)',
                    caretPadding: 5,
                    boxWidth: 5,
                    usePointStyle: 'triangle',
                    boxPadding: 3
                }
            },
            scales: {
                x: {
                    grid: {
                        display: false // set display to false to hide the x-axis grid
                    },
                    beginAtZero: true
                },
                y: {
                    ticks: {
                        callback: function(value, index, values) {
                            return '$ ' + value // prefix '$' to the dataset values
                        },
                        stepSize: 100
                    }
                }
            }
        }
    }
)



const ctu3 = document.getElementById('customCanvasBackgroundColor');

const plugin = {
    id: 'customCanvasBackgroundColor',
    beforeDraw: (chart, args, options) => {
        const { ctx } = chart;
        ctx.save();
        ctx.globalCompositeOperation = 'destination-over';
        ctx.fillStyle = options.color || '#99ffff';
        ctx.fillRect(0, 0, chart.width, chart.height);
        ctx.restore();
    }
};

const config2 = {
    type: 'doughnut',
    data: data2,
    options: {
        plugins: {
            customCanvasBackgroundColor: {
                color: 'lightGreen',
            }
        }
    },
    plugins: [plugin],
};

new Chart(ctu3, config2);





function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }










 var dataSet = [
    ['Tiger Nixon', 'System Architect', 'Edinburgh', '5421', '2011/04/25', '$320,800'],
    ['Garrett Winters', 'Accountant', 'Tokyo', '8422', '2011/07/25', '$170,750'],
    ['Ashton Cox', 'Junior Technical Author', 'San Francisco', '1562', '2009/01/12', '$86,000'],
    ['Cedric Kelly', 'Senior Javascript Developer', 'Edinburgh', '6224', '2012/03/29', '$433,060'],
    ['Airi Satou', 'Accountant', 'Tokyo', '5407', '2008/11/28', '$162,700'],
    ['Brielle Williamson', 'Integration Specialist', 'New York', '4804', '2012/12/02', '$372,000'],
    ['Herrod Chandler', 'Sales Assistant', 'San Francisco', '9608', '2012/08/06', '$137,500'],
    ['Rhona Davidson', 'Integration Specialist', 'Tokyo', '6200', '2010/10/14', '$327,900'],
    ['Colleen Hurst', 'Javascript Developer', 'San Francisco', '2360', '2009/09/15', '$205,500'],
    ['Sonya Frost', 'Software Engineer', 'Edinburgh', '1667', '2008/12/13', '$103,600'],
    ['Jena Gaines', 'Office Manager', 'London', '3814', '2008/12/19', '$90,560'],
    ['Quinn Flynn', 'Support Lead', 'Edinburgh', '9497', '2013/03/03', '$342,000'],
    ['Charde Marshall', 'Regional Director', 'San Francisco', '6741', '2008/10/16', '$470,600'],
    ['Haley Kennedy', 'Senior Marketing Designer', 'London', '3597', '2012/12/18', '$313,500'],
    ['Tatyana Fitzpatrick', 'Regional Director', 'London', '1965', '2010/03/17', '$385,750'],
    ['Michael Silva', 'Marketing Designer', 'London', '1581', '2012/11/27', '$198,500'],
    ['Paul Byrd', 'Chief Financial Officer (CFO)', 'New York', '3059', '2010/06/09', '$725,000'],
    ['Gloria Little', 'Systems Administrator', 'New York', '1721', '2009/04/10', '$237,500'],
    ['Bradley Greer', 'Software Engineer', 'London', '2558', '2012/10/13', '$132,000'],
    ['Dai Rios', 'Personnel Lead', 'Edinburgh', '2290', '2012/09/26', '$217,500'],
    ['Jenette Caldwell', 'Development Lead', 'New York', '1937', '2011/09/03', '$345,000'],
    ['Yuri Berry', 'Chief Marketing Officer (CMO)', 'New York', '6154', '2009/06/25', '$675,000'],
    ['Caesar Vance', 'Pre-Sales Support', 'New York', '8330', '2011/12/12', '$106,450'],
    ['Doris Wilder', 'Sales Assistant', 'Sydney', '3023', '2010/09/20', '$85,600'],
   
];
 
new DataTable('#example', {
    columns: [
        { title: 'Name' },
        { title: 'Position' },
        { title: 'Office' },
        { title: 'Extn.' },
        { title: 'Start date' },
        { title: 'Salary' }
    ],
    data: dataSet
});














 






 