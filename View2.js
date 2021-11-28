function FuncView2(){
	
  var snlevel;
  if (document.getElementById('frame1').checked) {
		snlevel = document.getElementById('frame1').value;
	}
	else if (document.getElementById('frame2').checked) {
		snlevel = document.getElementById('frame2').value;
	}
	else if (document.getElementById('frame3').checked) {
		snlevel = document.getElementById('frame3').value;
	}
	else if (document.getElementById('frame4').checked) {
		snlevel = document.getElementById('frame4').value;
	}
	else if (document.getElementById('frame5').checked) {
		snlevel = document.getElementById('frame5').value;
	}
  console.log(snlevel)
	//Read the data
	d3.csv("Glassdoor Gender Pay Gap_v2.csv", function(data) {
		//ShowGender(data);
		ShowEducation(data,snlevel);
	})
	
}
function ShowEducation(data,slevel) {
	
    anychart.onDocumentReady(function () {
     // create radar chart
     var chart = anychart.radar();
	 
      // our data
	 var avg_sal=[];
	 var pay_type;	
	 if (document.getElementById('basicpay').checked) {
		pay_type = document.getElementById('basicpay').value;
     // set chart yScale settings
     chart.yScale()
       .minimum(80000)
       .maximum(138000)
       .ticks({'interval':7});
	 }
	 else if (document.getElementById('bonuspay').checked) {
		pay_type = document.getElementById('bonuspay').value;
     // set chart yScale settings
     chart.yScale()
       .minimum(2500)
       .maximum(8500)
       .ticks({'interval':2});
	 }
	 else if (document.getElementById('totalpay').checked) {
		pay_type = document.getElementById('totalpay').value;
     // set chart yScale settings
     chart.yScale()
       .minimum(30000)
       .maximum(138000)
       .ticks({'interval':2});
	 }
	 
	 var education_sel = "(";
	 if (document.getElementById('cg_button').checked) {
		 if (education_sel == "("){
			education_sel = education_sel + "e.Education =='College'" 
		 }
		 else{
			education_sel = education_sel + " || e.Education =='College'" 
		 }
	 }
	 if (document.getElementById('hs_button').checked) {
		 if (education_sel == "("){
			education_sel = education_sel + "e.Education =='High School'" 
		 }
		 else{
			education_sel = education_sel + " || e.Education =='High School'" 
		 }
	 }
	 if (document.getElementById('ms_button').checked) {
		 if (education_sel == "("){
			education_sel = education_sel + "e.Education =='Masters'" 
		 }
		 else{
			education_sel = education_sel + " || e.Education =='Masters'" 
		 }
	 }
	 if (document.getElementById('pd_button').checked) {
		 if (education_sel == "("){	
			education_sel = education_sel + "e.Education =='PhD'" 
		 }
		 else{
			education_sel = education_sel + " || e.Education =='PhD'" 
		 }
	 }
	 education_sel = education_sel + ")";
	 //console.log(education_sel);
	 
	 avg_sal[0] = d3.mean(data.filter(function(e){ return e.Gender == 'Male' && e.JobTitle == 'Graphic Designer' && e.Seniority == slevel && eval(education_sel);}), function(d) { return eval('d.' + pay_type); });
	 avg_sal[1] = d3.mean(data.filter(function(e){ return e.Gender == "Male" && e.JobTitle == "Software Engineer" && e.Seniority == slevel && eval(education_sel);}), function(d) { return eval('d.' + pay_type); });
	 avg_sal[2] = d3.mean(data.filter(function(e){ return e.Gender == "Male" && e.JobTitle == "Warehouse Associate" && e.Seniority == slevel && eval(education_sel);}), function(d) { return eval('d.' + pay_type); });
	 avg_sal[3] = d3.mean(data.filter(function(e){ return e.Gender == "Male" && e.JobTitle == "IT" && e.Seniority == slevel && eval(education_sel);}), function(d) { return eval('d.' + pay_type); });
	 avg_sal[4] = d3.mean(data.filter(function(e){ return e.Gender == "Male" && e.JobTitle == "Sales Associate" && e.Seniority == slevel && eval(education_sel);}), function(d) { return eval('d.' + pay_type); });
	 avg_sal[5] = d3.mean(data.filter(function(e){ return e.Gender == "Male" && e.JobTitle == "Driver" && e.Seniority == slevel && eval(education_sel);}), function(d) { return eval('d.' + pay_type); });
	 avg_sal[6] = d3.mean(data.filter(function(e){ return e.Gender == "Male" && e.JobTitle == "Financial Analyst" && e.Seniority == slevel && eval(education_sel);}), function(d) { return eval('d.' + pay_type); });
	 avg_sal[7] = d3.mean(data.filter(function(e){ return e.Gender == "Male" && e.JobTitle == "Marketing Associate" && e.Seniority == slevel && eval(education_sel);}), function(d) { return eval('d.' + pay_type); });
	 avg_sal[8] = d3.mean(data.filter(function(e){ return e.Gender == "Male" && e.JobTitle == "Data Scientist" && e.Seniority == slevel && eval(education_sel);}), function(d) { return eval('d.' + pay_type); });
	 avg_sal[9] = d3.mean(data.filter(function(e){ return e.Gender == "Male" && e.JobTitle == "Manager" && e.Seniority == slevel && eval(education_sel);}), function(d) { return eval('d.' + pay_type); });
	 avg_sal[10] = d3.mean(data.filter(function(e){ return e.Gender == "Female" && e.JobTitle == "Graphic Designer" && e.Seniority == slevel && eval(education_sel);}), function(d) { return eval('d.' + pay_type); });
	 avg_sal[11] = d3.mean(data.filter(function(e){ return e.Gender == "Female" && e.JobTitle == "Software Engineer" && e.Seniority == slevel && eval(education_sel);}), function(d) { return eval('d.' + pay_type); });
	 avg_sal[12] = d3.mean(data.filter(function(e){ return e.Gender == "Female" && e.JobTitle == "Warehouse Associate" && e.Seniority == slevel && eval(education_sel);}), function(d) { return eval('d.' + pay_type); });
	 avg_sal[13] = d3.mean(data.filter(function(e){ return e.Gender == "Female" && e.JobTitle == "IT" && e.Seniority == slevel && eval(education_sel);}), function(d) { return eval('d.' + pay_type); });
	 avg_sal[14] = d3.mean(data.filter(function(e){ return e.Gender == "Female" && e.JobTitle == "Sales Associate" && e.Seniority == slevel && eval(education_sel);}), function(d) { return eval('d.' + pay_type); });
	 avg_sal[15] = d3.mean(data.filter(function(e){ return e.Gender == "Female" && e.JobTitle == "Driver" && e.Seniority == slevel && eval(education_sel);}), function(d) { return eval('d.' + pay_type); });
	 avg_sal[16] = d3.mean(data.filter(function(e){ return e.Gender == "Female" && e.JobTitle == "Financial Analyst" && e.Seniority == slevel && eval(education_sel);}), function(d) { return eval('d.' + pay_type); });
	 avg_sal[17] = d3.mean(data.filter(function(e){ return e.Gender == "Female" && e.JobTitle == "Marketing Associate" && e.Seniority == slevel && eval(education_sel);}), function(d) { return eval('d.' + pay_type); });
	 avg_sal[18] = d3.mean(data.filter(function(e){ return e.Gender == "Female" && e.JobTitle == "Data Scientist" && e.Seniority == slevel && eval(education_sel);}), function(d) { return eval('d.' + pay_type); });
	 avg_sal[19] = d3.mean(data.filter(function(e){ return e.Gender == "Female" && e.JobTitle == "Manager" && e.Seniority == slevel && eval(education_sel);}), function(d) { return eval('d.' + pay_type); });
	 //console.log(avg_sal);
	 //console.log(Math.floor(Math.min(...avg_sal)));
	 //console.log(Math.floor(Math.max(...avg_sal)));
     var data1 = [
       {x: "Graphic Designer", value: avg_sal[0]},
       {x: "Software Engineer", value: avg_sal[1]},
       {x: "Warehouse Associate", value: avg_sal[2]},
       {x: "IT", value: avg_sal[3]},
       {x: "Sales Associate", value: avg_sal[4]},
       {x: "Driver", value: avg_sal[5]},
       {x: "Financial Analyst", value: avg_sal[6]},
       {x: "Marketing Associate", value: avg_sal[7]},
       {x: "Data Scientist", value: avg_sal[8]},
       {x: "Manager", value: avg_sal[9]}
     ];

     var data2 = [
       {x: "Graphic Designer", value: avg_sal[10]},
       {x: "Software Engineer", value: avg_sal[11]},
       {x: "Warehouse Associate", value: avg_sal[12]},
       {x: "IT", value: avg_sal[13]},
       {x: "Sales Associate", value: avg_sal[14]},
       {x: "Driver", value: avg_sal[15]},
       {x: "Financial Analyst", value: avg_sal[16]},
       {x: "Marketing Associate", value: avg_sal[17]},
       {x: "Data Scientist", value: avg_sal[18]},
       {x: "Manager", value: avg_sal[19]}
     ];  

      // color alternating cells
      chart.yGrid().palette(["gray 0.05", "gray 0.08"]);

      // create first series
      chart.area(data1).name('Men').markers(true).fill("#3358FF", 0.1).stroke("#3358FF")
      // create second series
      chart.area(data2).name('Women').markers(true).fill("#FF33F6", 0.1).stroke("#FF33F6")

      // set chart title
      chart.title("Average Salary - Men Vs Women")
        // set legend
        .legend(true);

      // set container id for the chart
	  document.getElementById('container1').innerHTML = "";
      chart.container('container1');
      // initiate chart drawing
      chart.draw();

    });
}
/*
function ShowGender(data){
	
	var pay_type;
	var avg_sal=[];
	
	if (document.getElementById('basicpay').checked) {
		pay_type = document.getElementById('basicpay').value;
	}
	else if (document.getElementById('bonuspay').checked) {
		pay_type = document.getElementById('bonuspay').value;
	}
	else if (document.getElementById('totalpay').checked) {
		pay_type = document.getElementById('totalpay').value;
	}
	var male = d3.mean(data.filter(function(e){ return e.Gender == "Male" }), function(d) { return eval('d.' + pay_type); })
	var female = d3.mean(data.filter(function(e){ return e.Gender == "Female" }), function(d) { return eval('d.' + pay_type); })
	avg_sal [0] = male;
	avg_sal [1] = female;
	
	var education_type=[];
	if (document.getElementById('cg_button').checked) {
		education_type[0] = document.getElementById('cg_button').value;
		avg_sal [2] = d3.mean(data.filter(function(e){ return e.Education =='College'}), function(d) { return eval('d.' + pay_type); });
	}
	if (document.getElementById('hs_button').checked) {
		education_type[1] = document.getElementById('hs_button').value;
		avg_sal [3] = d3.mean(data.filter(function(e){ return e.Education =='High School'}), function(d) { return eval('d.' + pay_type); });
	}
	if (document.getElementById('ms_button').checked) {
		education_type[2] = document.getElementById('ms_button').value;
		avg_sal [4] = d3.mean(data.filter(function(e){ return e.Education =='Masters'}), function(d) { return eval('d.' + pay_type); });
	}
	if (document.getElementById('pd_button').checked) {
		education_type[3] = document.getElementById('pd_button').value;
		avg_sal [5] = d3.mean(data.filter(function(e){ return e.Education =='PhD'}), function(d) { return eval('d.' + pay_type); });
	}
	console.log(avg_sal);
	console.log(Math.min(...avg_sal));
	console.log(Math.max(...avg_sal));
	console.log(avg_sal.length);
	
	var m_colg = d3.mean(data.filter(function(e){ return e.Gender == "Male" && e.Education =='College'}), function(d) { return eval('d.' + pay_type); })
	var f_colg = d3.mean(data.filter(function(e){ return e.Gender == "FeMale" && e.Education =='College'}), function(d) { return eval('d.' + pay_type); })
  var dataset1 = [
    { count: 10 }, 
    { count: 20 },
    { count: 30 },
    { count: 40 }
  ];
  
  var ds_malefemale	 = [
    { count: male },
    { count: female }
  ];
  
  var dataset3 = [
    { count: 10 }
  ];

  var width = 160;
  var height = 160;
  var donutWidth = Math.min(width, height) / 5;
  var radius1 = Math.min(width, height) / 2;
  var radius2 = radius1 - donutWidth;
  
  var color_mf = ['darkred','darkblue','green','yellow','orange','purple'];
  //var color1 = d3.scaleOrdinal(d3.schemeCategory20);
  //var color2 = d3.scaleOrdinal(d3.schemeCategory10);

for (var j = 0;j<2;j++){
  
  if (j == 0) {
	  var width = (male/Math.max(...avg_sal))*160;
	  var height = (male/Math.max(...avg_sal))*160;
	  var donutWidth = Math.min(width, height) / 5;
	  var radius1 = Math.min(width, height) / 2;
	  var radius2 = radius1 - donutWidth;
  }
  else{
	  var width = (female/Math.max(...avg_sal))*160;
	  var height = (female/Math.max(...avg_sal))*160;
	  var donutWidth = Math.min(width, height) / 5;
	  var radius1 = Math.min(width, height) / 2;
	  var radius2 = radius1 - donutWidth;
  }
  
  var svg_view2 = d3.select('#chart1')
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .style('margin', '0 15% 0 15%');
  var svg_view2_1 = svg_view2.append('g')
    .attr('transform', 'translate(' + (width / 2) + 
      ',' + (height / 2) + ')');
  var svg_view2_2 = svg_view2.append('g')
    .attr('transform', 'translate(' + (width / 2) + 
      ',' + (height / 2) + ')');

  var arc1 = d3.arc()
    .innerRadius(radius1 - donutWidth)  
    .outerRadius(radius1);
    
  var pie = d3.pie()
    .value(function(d) { return d.count; })
    .sort(null);

  var path1 = svg_view2_1.selectAll('path')
    .data(pie(dataset3))
    .enter()
    .append('path')
    .attr('d', arc1)
    .attr('fill', color_mf[j]);
}


for (var j = 0;j<4;j++){
	
  if (j == 0) {
	  var width = (avg_sal [2]/Math.max(...avg_sal))*160;
	  var height = (avg_sal [2]/Math.max(...avg_sal))*160;
	  var donutWidth = Math.min(width, height) / 5;
	  var radius1 = Math.min(width, height) / 2;
	  var radius2 = radius1 - donutWidth;
  }
  else if (j == 1){
	  var width = (avg_sal [3]/Math.max(...avg_sal))*160;
	  var height = (avg_sal [3]/Math.max(...avg_sal))*160;
	  var donutWidth = Math.min(width, height) / 5;
	  var radius1 = Math.min(width, height) / 2;
	  var radius2 = radius1 - donutWidth;
  }
  else if (j == 2){
	  var width = (avg_sal [4]/Math.max(...avg_sal))*160;
	  var height = (avg_sal [4]/Math.max(...avg_sal))*160;
	  var donutWidth = Math.min(width, height) / 5;
	  var radius1 = Math.min(width, height) / 2;
	  var radius2 = radius1 - donutWidth;
  }
  else {
	  var width = (avg_sal [5]/Math.max(...avg_sal))*160;
	  var height = (avg_sal [5]/Math.max(...avg_sal))*160;
	  var donutWidth = Math.min(width, height) / 5;
	  var radius1 = Math.min(width, height) / 2;
	  var radius2 = radius1 - donutWidth;
  }
  var svg_view2 = d3.select('#chart2')
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .style('margin', '0 4.5% 0 4.5%');
  var svg_view2_1 = svg_view2.append('g')
    .attr('transform', 'translate(' + (width / 2) + 
      ',' + (height / 2) + ')');
  var svg_view2_2 = svg_view2.append('g')
    .attr('transform', 'translate(' + (width / 2) + 
      ',' + (height / 2) + ')');

  var arc1 = d3.arc()
    .innerRadius(radius1 - donutWidth)  
    .outerRadius(radius1);
  var arc2 = d3.arc()
    .innerRadius(radius2 - donutWidth)  
    .outerRadius(radius2);
    
  var pie = d3.pie()
    .value(function(d) { return d.count; })
    .sort(null);

  var path1 = svg_view2_1.selectAll('path')
    .data(pie(ds_malefemale))
    .enter()
    .append('path')
    .attr('d', arc1)
    .attr('fill', function(d, i) { 
      return color_mf[i%2];
    });
  var path2 = svg_view2_2.selectAll('path')
    .data(pie(dataset3))
    .enter()
    .append('path')
    .attr('d', arc2)
    .attr('fill', function(d, i) { 
      return color_mf[j+2];
    });
}

for (var j = 0;j<5;j++){
	
  var svg_view2 = d3.select('#chart3')
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .style('margin', '0 2% 0 2%');
  var svg_view2_1 = svg_view2.append('g')
    .attr('transform', 'translate(' + (width / 2) + 
      ',' + (height / 2) + ')');
  var svg_view2_2 = svg_view2.append('g')
    .attr('transform', 'translate(' + (width / 2) + 
      ',' + (height / 2) + ')');

  var arc1 = d3.arc()
    .innerRadius(radius1 - donutWidth)  
    .outerRadius(radius1);
  var arc2 = d3.arc()
    .innerRadius(radius2 - donutWidth)  
    .outerRadius(radius2);
    
  var pie = d3.pie()
    .value(function(d) { return d.count; })
    .sort(null);

  var path1 = svg_view2_1.selectAll('path')
    .data(pie(ds_malefemale))
    .enter()
    .append('path')
    .attr('d', arc1)
    .attr('fill', function(d, i) { 
      return color_mf[i];
    });
  var path2 = svg_view2_2.selectAll('path')
    .data(pie(dataset1))
    .enter()
    .append('path')
    .attr('d', arc2)
    .attr('fill', function(d, i) { 
      return color_mf[i+2];
    });
}

}*/