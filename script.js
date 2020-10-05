var data;
var softSkillsList;
var jobsList;

const REGEX = new RegExp(/\d+(,\d{3})*(\.\d*)/);

var softSkills = [
    { name: "ativo" },
    { name: "profissional" },
    { name: "lógico" },
    { name: "completo" },
    { name: "responsável" },
    { name: "inovação" },
    { name: "construção" },
    { name: "autonomia" },
    { name: "responsabilidade" },
    { name: "flexível" },
    { name: "colaborativo" },
    { name: "tato" },
    { name: "afiado" },
    { name: "disciplina" },
    { name: "desafiador" },
    { name: "disponibilidade" },
    { name: "inteligente" },
    { name: "eficiente" },
    { name: "líder" },
    { name: "positivo" },
    { name: "criatividade" },
    { name: "independente" },
    { name: "treinamento" },
    { name: "criativo" },
    { name: "proativo" },
    { name: "maneira" },
    { name: "trabalho em equipe" },
    { name: "comprometido" },
    { name: "escrever" },
    { name: "organizado" },
    { name: "empreendedor" },
    { name: "paixão" },
    { name: "ação orientada" },
    { name: "vontade de aprender" },
    { name: "motivado" },
    { name: "comprometimento" },
    { name: "energia" },
    { name: "iniciativa" },
    { name: "curioso" },
    { name: "analítico" },
    { name: "atento" },
    { name: "critério" },
    { name: "preciso" },
    { name: "compreensão" },
    { name: "comunicativo" },
    { name: "flexibilidade" },
    { name: "produtivo" },
    { name: "consistente" },
    { name: "empatia" },
    { name: "Liderança" },
    { name: "pronto" },
    { name: "articular" },
    { name: "fidelidade" },
    { name: "prático" },
    { name: "tomar decisões" },
    { name: "agradável" },
    { name: "apresentação" },
    { name: "talentoso" },
    { name: "verbal e escrita" },
    { name: "inspirado" },
    { name: "paciente" },
    { name: "habilidades de comunicação" },
    { name: "atenção aos detalhes" },
    { name: "atenção aos detalhes" },
    { name: "competitivo" },
    { name: "ético" },
    { name: "integridade" },
    { name: "pontual" },
    { name: "maturidade" },
    { name: "motivação" },
    { name: "animado" },
    { name: "capacidade de comunicação" },
    { name: "cronograma" },
    { name: "humor" },
    { name: "dedicação" },
    { name: "legais" },
    { name: "organizacional" },
    { name: "bem organizado" },
    { name: "entusiasmo" },
    { name: "habilidades analíticas" },
    { name: "mente aberta" },
    { name: "capaz de se comunicar" },
    { name: "Espírito de equipe" },
    { name: "versatilidade" },
    { name: "confiante" },
    { name: "confiável" },
    { name: "Disponibilidade para viagens" },
    { name: "eficácia" },
    { name: "habilidades de programação" },
    { name: "pensamento crítico" },
    { name: "respeitoso" },
    { name: "seja criativo" },
    { name: "visão estratégica" },
    { name: "atento aos detalhes" },
    { name: "bom senso" },
    { name: "capacidade de aprender" },
    { name: "capacidade de vender" },
    { name: "dedicada" },
    { name: "entusiasmado" },
    { name: "habilidades de liderança" },
    { name: "habilidades organizacionais" },
    { name: "honestidade" },
    { name: "Inovativa" },
    { name: "pessoa responsável" },
    { name: "planejamento estratégico" },
    { name: "tolerante" },
    { name: "ambicioso" },
    { name: "assertividade" },
    { name: "atitude positiva" },
    { name: "calma" },
    { name: "capacidade de adaptação" },
    { name: "cortesia" },
    { name: "detalhado" },
    { name: "gerenciamento de equipe" },
    { name: "habilidades interpessoais" },
    { name: "habilidades para resolver problemas" },
    { name: "paciência" },
    { name: "pontualidade" },
    { name: "precisão" },
    { name: "simpatia" },
    { name: "Solução de problemas" },
    { name: "solucionador de problema" },
    { name: "aconselhamento" },
    { name: "alcançar seus objetivos" },
    { name: "capacidade de analisar" },
    { name: "capacidade de interagir" },
    { name: "capacidade de priorizar" },
    { name: "conceituação" },
    { name: "disciplinado" },
    { name: "educado" },
    { name: "Gerenciamento de Projetos" },
    { name: "gerenciamento de tempo" },
    { name: "habilidades de análise" },
    { name: "habilidades de comunicação interpessoal" },
    { name: "Habilidades de gestão de tempo" },
    { name: "maduro" },
    { name: "membro da equipe" },
    { name: "negociador" },
    { name: "pensamento criativo" },
    { name: "pensamento inovador" },
    { name: "pessoa dinâmica" },
    { name: "profissionalismo" },
    { name: "relações humanas" },
    { name: "sensibilidade" },
    { name: "senso de responsabilidade" },
    { name: "tolerância" },
    { name: "tomar iniciativa" },
    { name: "trabalhador" },
    { name: "trabalhar bem em equipe" },
    { name: "trabalhar de forma colaborativa" },
    { name: "visão de futuro" }
];

function contabilizaSoftSkillsPorLocalizacao(lista) {
	var newList = [];
	let location = '';
	lista.forEach(listaItem => {
		if (location != listaItem.location) {
			location = listaItem.location;

			softSkills.forEach(item => {
				newList.push({ name: item.name, counter: 0 })
			});

			lista.forEach(item => {
				newList.forEach(skill => {
					if (skill.name === item.name) {
						return {
							...skill,
							counter: skill.counter++,
						}
					}
				});
			});
		}
	});
}

function counterSoftSkillsTotal(lista) {
	softSkills.forEach(item => {
		newList.push({ name: item.name, counter: 0 })
	});
	console.log(newList)
	lista.forEach(item => {
		newList.forEach(skill => {
			if (skill.name === item.name) {
				return {
					...skill,
					counter: skill.counter++,
				}
			}
		})
	});
}

function compareSoftSkillsPerLocation() {

	var html = '';
	let softSkillsCounter = [];

	jobsList.forEach(jobCity => {
		if (jobCity.jobs.length) {
			jobCity.jobs.forEach(job => {
				softSkills.forEach(skill => {
					if (job.description.includes(skill.name)) {
						softSkillsCounter.push({
							name: skill.name,
							location: job.location,
						});
					}
				});
			});
		}
	});

	html += contabilizaSoftSkillsPorLocalizacao(softSkillsCounter);

    $("#list").html(html);
}

function compareAndListByLocation() {
	var html = '<table>';
	let softSkillsCounter = [];
	html += '<thead><tr><th>Título da vaga</th><th>Senioridade</th><th>Salário</th><th>Descrição</th><th>Localização</th><th>Soft skills</th></tr></thead>';

	jobsList.forEach(jobCity => {
		if (jobCity.jobs.length) {
			jobCity.jobs.forEach(job => {
				html += '<tr>';
					html += '<td>'+job.title+'</td>';
                    html += '<td>';
                        const jobTitle = job.title.toLowerCase();
                        if (jobTitle.includes('jr') || jobTitle.includes('júnior') || jobTitle.includes('junior')) {
                            html += 'Junior';
                        } else if (jobTitle.includes('pl') || jobTitle.includes('plêno') || jobTitle.includes('pleno')) {
                            html += 'Pleno';
                        } else if (jobTitle.includes('sr') || jobTitle.includes('sênior') || jobTitle.includes('senior')) {
                            html += 'Sênior';
                        } else {
                            html += 'Não especificado';
                        }
                    html += '</td>';
                    html += '<td>';
                        if (REGEX.test(job.description)) {
                            html += job.description.match(REGEX);
                        } else {
                            html += 'Não tem salário';
                        }
                    html += '</td>';
					html += '<td>'+job.description+'</td>';
					html += '<td width=100>'+job.location+'</td>';
					html += '<td>';
						softSkills.forEach(skill => {
							if (job.description.includes(skill.name)) {
								html += skill.name+', ';
								softSkillsCounter.push({
									name: skill.name,
									location: job.location,
								})
							}
						})
					html += '</td>';
				html += '</tr>';
			});
		}
	});

	console.log(softSkillsCounter);

	html += '</table>';
    $("#list").html(html);
}

function counterSoftSkills() {

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
        // $("#list").html(table);
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
			// $("#list").html(table);
			softSkillsList = data.data;
		}
	});
}

// $(document).ready(function(){
// 	$("#csv-file").change(handleSoftSkills);
// });

$(document).ready(function(){
	$("#json-file").change(handleJobs);
});

// $(document).ready(function(){
// 	$("#compare-files").click(compareAndListByLocation);
// });