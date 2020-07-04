function renderChart(data, labels) {
			var ctx = document.getElementById("my2Chart").getContext('2d');
			var myChart = new Chart(ctx, {
			type: 'line',
			data: {
					labels: labels,
					datasets: [{
					label: 'Prenstly Working on dummy data',
					data: data,
					}]
				},
			});
		}
	
	
$("#Andra_Pradesh").click(
			function () {
				//alert("Hello");
				//var data = [1800,1900,8298]
				data = [ 10000, 14000, 12000, 14000, 18000, 1000, 29000 ];
				labels =  ["December", "January", "February", "March", "April", "May", "June"];
				renderChart(data, labels);
			}
		);

$("#Tamil_Nadu").click(
			function () {
				//alert("Hello");
				data = [20700, 14000, 22000, 15000, 16000, 19000, 22000];
				labels =  ["December", "January", "February", "March", "April", "May", "June"];
				renderChart(data, labels);
			}
		);
$("#Madhya_Pradesh").click(
			function () {
				//alert("Hello");
				data = [10000, 14760, 11000, 10500, 18000, 19000, 20000];
				labels =  ["December", "January", "February", "March", "April", "May", "June"];
				renderChart(data, labels);
			}
		);
$("#Rajasthan").click(
			function () {
				//alert("Hello");
				data = [26000, 13400, 12880, 15000, 11540, 17800, 27700];
				labels =  ["December", "January", "February", "March", "April", "May", "June"];
				renderChart(data, labels);
			}
		);
$("#Karnataka").click(
			function () {
				//alert("Hello");
				data = [21000, 18000, 22000, 35000, 18000, 19000, 22000];
				labels =  ["December", "January", "February", "March", "April", "May", "June"];
				renderChart(data, labels);
			}
		);
$("#Gujarat").click(
			function () {
				//alert("Hello");
				data = [20000, 14000, 12000, 15000, 18000, 15000, 23000];
				labels =  ["December", "January", "February", "March", "April", "May", "June"];
				renderChart(data, labels);
			}
		);
$("#Orissa").click(
			function () {
				//alert("Hello");
				data = [19000, 15000, 16700, 35000, 11000, 11000, 21000];
				labels =  ["December", "January", "February", "March", "April", "May", "June"];
				renderChart(data, labels);
			}
		);
$("#Kerala").click(
			function () {
				//alert("Hello");
				data = [20000, 14000, 12000, 15000, 18000, 19000, 22000];
				labels =  ["December", "January", "February", "March", "April", "May", "June"];
				renderChart(data, labels);
			}
		);
$("#Jharkhand").click(
			function () {
				//alert("Hello");
				data = [10000, 24000, 12000, 25000, 10000, 12000, 26700];
				labels =  ["December", "January", "February", "March", "April", "May", "June"];
				renderChart(data, labels);
			}
		);
$("#Assam").click(
			function () {
				//alert("Hello");
				data = [11000, 18000, 10000, 11000, 21000, 18000, 11000];
				labels =  ["December", "January", "February", "March", "April", "May", "June"];
				renderChart(data, labels);
			}
		);
$("#Punjab").click(
			function () {
				//alert("Hello");
				data = [20450, 12100, 32100, 17800, 28000, 15600, 12000];
				labels =  ["December", "January", "February", "March", "April", "May", "June"];
				renderChart(data, labels);
			}
		);
$("#Haryana").click(
			function () {
				//alert("Hello");
				data = [21000, 11000, 12300, 10000, 12000, 11000, 28000];
				labels =  ["December", "January", "February", "March", "April", "May", "June"];
				renderChart(data, labels);
			}
		);
$("#Chhattisgarh").click(
			function () {
				//alert("Hello");
				data = [23400, 14200, 16000, 19000, 12300, 21000, 11000];
				labels =  ["December", "January", "February", "March", "April", "May", "June"];
				renderChart(data, labels);
			}
		);
$("#Jammu_and_Kashmir").click(
			function () {
				//alert("Hello");
				data = [21000, 14000, 11000, 18000, 11000, 19000, 11000];
				labels =  ["December", "January", "February", "March", "April", "May", "June"];
				renderChart(data, labels);
			}
		);
$("#Uttarakhand").click(
			function () {
				//alert("Hello");
				data = [20000, 14000, 12000, 15000, 18000, 19000, 22000];
				labels =  ["December", "January", "February", "March", "April", "May", "June"];
			}
		);
$("#Himachal_Pradesh").click(
			function () {
				//alert("Hello");
				data = [21000, 14300, 16700, 2100, 18000,11000, 21000];
				labels =  ["December", "January", "February", "March", "April", "May", "June"];
				renderChart(data, labels);
			}
		);
$("#Tripura").click(
			function () {
				//alert("Hello");
				data = [20400, 11100, 12000, 15000, 11000, 19000, 24000];
				labels =  ["December", "January", "February", "March", "April", "May", "June"];
				renderChart(data, labels);
			}
		);
$("#Meghalaya").click(
			function () {
				//alert("Hello");
				data = [20000, 12000, 12000, 15000, 11000, 19000, 13000];
				labels =  ["December", "January", "February", "March", "April", "May", "June"];
				renderChart(data, labels);
			}
		);
$("#Manipur").click(
			function () {
				//alert("Hello");
				data = [20000, 14000, 12000, 15000, 18000, 19000, 22000];
				labels =  ["December", "January", "February", "March", "April", "May", "June"];
				renderChart(data, labels);
			}
		);
$("#Nagaland").click(
			function () {
				//alert("Hello");
				data = [12000, 14500, 14000, 15000, 28000, 19000, 11000];
				labels =  ["December", "January", "February", "March", "April", "May", "June"];
				renderChart(data, labels);
			}
		);
$("#Goa").click(
			function () {
				//alert("Hello");
				data = [21000, 13400, 12000, 15000, 11000, 19000, 21000];
				labels =  ["December", "January", "February", "March", "April", "May", "June"];
				renderChart(data, labels);
			}
		);
$("#Arunachal_Pradesh").click(
			function () {
				//alert("Hello");
				data = [12000, 14000, 12000, 15000, 18000, 17800, 22000];
				labels =  ["December", "January", "February", "March", "April", "May", "June"];
				renderChart(data, labels);
			}
		);
$("#Mizoram").click(
			function () {
				//alert("Hello");
				data = [11000, 1200, 12000, 14500, 18000, 19000, 23000];
				labels =  ["December", "January", "February", "March", "April", "May", "June"];
				renderChart(data, labels);
			}
		);
$("#Sikkim").click(
			function () {
				//alert("Hello");
				data = [10000, 12100, 14500, 15000, 18000, 13300, 11000];
				labels =  ["December", "January", "February", "March", "April", "May", "June"];
				renderChart(data, labels);
			}
		);
