var data;
var softSkillsList;
var jobsList;

function eachCitySoftSkill() {
	let html = '';
	let cityCounter = 0;
	let indexCity = '<ol>';

	jobsList.forEach(jobCity => {
		cityCounter++;
		html += '<h1 id="city-'+cityCounter+'">'+jobCity.name+'</h1>';
		html += '<a class="back" href="#indexCity">Voltar</a>';

		indexCity += '<li><a href="#city-'+cityCounter+'">'+jobCity.name+'</a></li>';

		html += '<table>';
			if (jobCity.jobs.length) {
				html += '<tr><th>Nome da vaga</th><th>Descrição</th><th>Soft skills</th></tr>'
				jobCity.jobs.forEach(job => {
					html += '<tr>';
						html += '<td>'+job.title+'</td>'
						html += '<td>'+job.description+'</td>'
						html += '<td><table><tr><th>skill</th><th>qty</th></tr>';
							// let counter = 0;
							// softSkillsList.forEach(skill => {
							// 	html += '<tr>';
							// 		if (job.description.includes(skill.name)) {
							// 			counter++;
							// 			html += '<td>'+skill.name+'</td><td>'+counter+'</td>';
							// 		}
							// 	html += '</tr>';
							// });
						html += '<table></td>';
					html += '</tr>';
				})
			} else {
				html += '<tr><td>Não existe vaga para a cidade.</td></tr>'
			}
		html += '</table>';
	});

	indexCity += '</ol>';
	$('#indexCity').html(indexCity);

	$('#list').html(html);
}

function compare() {
    var table = '';
    table += '<table><tr><th>skill name</th><th>qty</th></tr>';
    softSkillsList.forEach(skill => {
        var counter = 0;
        jobsList.forEach(jobCity => {
            if (jobCity.jobs.length > 0) {
                jobCity.jobs.forEach(job => {
                    if (job.description.includes(skill.name)) {
                        counter++;
                    }
                })
            }
				})

        table += '<tr><td>'+skill.name+'</td><td>'+counter+'</td></tr>';

    });
    table += '</table>';
    $("#list").html(table);
}

function displayJobsCities(data) {
	var table = "<h1>Jobs</h1>";

	data.cities.forEach(item => {
		table += '<h2>'+ item.name +'</h2>'; // nome da cidade
		table += '<table border=1>';
			table += '<tr><th>Nome da vaga</th><th>Descrição</th></tr>';

			item.jobs.forEach(job => {
				if (job) {
					table += '<tr>';
					table += '<td>'+ job.title +'</td>';
					table += '<td>'+ job.description +'</td>';
					table += '</tr>';
				}
			})
		table += '</table>';
	});

	return table;
}

function displaySoftSkills(results) {
	var data = results.data;
	var table = "<h1>Soft skills</h1><table border=1 class='table'>";

		table+= "<tr>";
		table+= "<th>name</th>";
		table+= "</tr>";

	for(i=0;i<data.length;i++){
		table+= "<tr>";
		var cells = data[i];
		table+= "<td>";
		table+= cells['name'];
		table+= "</td>";
		table+= "</tr>";
	}
	table+= "</table>";
	return table
}


function handleJobs(evt) {
    var file_to_read = evt.target.files[0];
    var fileread = new FileReader();
    fileread.onload = function(e) {
        var content = e.target.result;
        // console.log(content);
        var intern = JSON.parse(content); // Array of Objects.
        var table = displayJobsCities(intern)
        $("#list").html(table);
        jobsList = intern.cities;
    };
    fileread.readAsText(file_to_read);
}


function handleSoftSkills(evt) {
	var file = evt.target.files[0];

	Papa.parse(file, {
	header: true,
	dynamicTyping: true,
	delimiter: "",
	complete: function(results) {
			data = results;
			var table = displaySoftSkills(data);
			$("#list").html(table);
			softSkillsList = data.data;
		}
	});
}

$(document).ready(function(){
	$("#csv-file").change(handleSoftSkills);
});

$(document).ready(function(){
	$("#json-file").change(handleJobs);
});

$(document).ready(function(){
	$("#compare-files").click(eachCitySoftSkill);
});