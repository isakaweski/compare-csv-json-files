var data;

var softSkillsList;
var jobsList;

function compare() {
    var table = '';

    // console.log('jobs', jobsList);
    console.log('softskills', softSkillsList);

    table += '<table><tr><th>skill name</th><th>qty</th></tr>';
    softSkillsList.forEach(skill => {
        var counter = 0;
        jobsList.forEach(jobCity => {
            if (jobCity.jobs.length > 0) {
                jobCity.jobs.forEach(job => {
                    if (job.description.includes(skill.nome)) {
                        counter++;
                    }
                })
            }
        })

        table += '<tr><td>'+skill.nome+'</td><td>'+counter+'</td></tr>';

    });
    table += '</table>';
    $("#compared").html(table);
}

function displayHTMLJobsTable(data) {
    var table = "<h1>Jobs</h1>";

    // console.log(data.cities);

    data.cities.forEach(item => {
        // console.log(item);
        table += '<h2>' + item.name + '</h2>'

        
        table += '<table>'
        table += '<tr><th>title</th><th>desc</th></tr>'

        item.jobs.forEach(job => {
            if (job) {
                table += '<tr>'
                table += '<td>'+ job.title +'</td>'
                table += '<td>'+ job.description +'</td>'
                table += '</tr>'
            }
        })
        table += '</table>'
    });

    return table
}

function displayHTMLTable(results) {
    var table = "<h1>Soft skills</h1><table class='table'>";
    var data = results.data;
        table+= "<tr>";
        table+= "<th>name</th>";
        table+= "<th>desc</th>";
        table+= "</tr>";

    for(i=0;i<data.length;i++){
        table+= "<tr>";
        var cells = data[i];
        if (cells['is']) {
            table+= "<td>";
            table+= cells['name'];
            table+= "</td>";
            table+= "<td>";
            table+= cells['desc'];
            table+= "</td>";
        }
        table+= "</tr>";
    }
    table+= "</table>";
    return table
}


function handleFileSelectJson(evt) {
    var file_to_read = evt.target.files[0];
    var fileread = new FileReader();
    fileread.onload = function(e) {
        var content = e.target.result;
        // console.log(content);
        var intern = JSON.parse(content); // Array of Objects.
        var table = displayHTMLJobsTable(intern)
        // $("#parsed_jobs").html(table);
        jobsList = intern.cities;
    };
    fileread.readAsText(file_to_read);
}


function handleFileSelect(evt) {
    var file = evt.target.files[0];

    Papa.parse(file, {
    header: true,
    dynamicTyping: true,
    delimiter: "",
    complete: function(results) {
            data = results;
            var table = displayHTMLTable(data);
            // $("#parsed_csv_list").html(table);
            softSkillsList = data.data;
        }
    });
}

$(document).ready(function(){
    $("#csv-file").change(handleFileSelect);
});

$(document).ready(function(){
    $("#json-file").change(handleFileSelectJson);
});

$(document).ready(function(){
    $("#compare-files").click(compare);
});