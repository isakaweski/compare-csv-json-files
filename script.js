var data;
var softSkillsList;
var jobsList;

const REGEX = new RegExp(/\d+(,\d{3})*(\.\d*)/);

var softSkills = [
    { counter: 0, name: "ativo" },
    { counter: 0, name: "profissional" },
    { counter: 0, name: "lógico" },
    { counter: 0, name: "completo" },
    { counter: 0, name: "responsável" },
    { counter: 0, name: "inovação" },
    { counter: 0, name: "construção" },
    { counter: 0, name: "autonomia" },
    { counter: 0, name: "responsabilidade" },
    { counter: 0, name: "flexível" },
    { counter: 0, name: "colaborativo" },
    { counter: 0, name: "tato" },
    { counter: 0, name: "afiado" },
    { counter: 0, name: "disciplina" },
    { counter: 0, name: "desafiador" },
    { counter: 0, name: "disponibilidade" },
    { counter: 0, name: "inteligente" },
    { counter: 0, name: "eficiente" },
    { counter: 0, name: "líder" },
    { counter: 0, name: "positivo" },
    { counter: 0, name: "criatividade" },
    { counter: 0, name: "independente" },
    { counter: 0, name: "treinamento" },
    { counter: 0, name: "criativo" },
    { counter: 0, name: "proativo" },
    { counter: 0, name: "maneira" },
    { counter: 0, name: "trabalho em equipe" },
    { counter: 0, name: "comprometido" },
    { counter: 0, name: "escrever" },
    { counter: 0, name: "organizado" },
    { counter: 0, name: "empreendedor" },
    { counter: 0, name: "paixão" },
    { counter: 0, name: "ação orientada" },
    { counter: 0, name: "vontade de aprender" },
    { counter: 0, name: "motivado" },
    { counter: 0, name: "comprometimento" },
    { counter: 0, name: "energia" },
    { counter: 0, name: "iniciativa" },
    { counter: 0, name: "curioso" },
    { counter: 0, name: "analítico" },
    { counter: 0, name: "atento" },
    { counter: 0, name: "critério" },
    { counter: 0, name: "preciso" },
    { counter: 0, name: "compreensão" },
    { counter: 0, name: "comunicativo" },
    { counter: 0, name: "flexibilidade" },
    { counter: 0, name: "produtivo" },
    { counter: 0, name: "consistente" },
    { counter: 0, name: "empatia" },
    { counter: 0, name: "Liderança" },
    { counter: 0, name: "pronto" },
    { counter: 0, name: "articular" },
    { counter: 0, name: "fidelidade" },
    { counter: 0, name: "prático" },
    { counter: 0, name: "tomar decisões" },
    { counter: 0, name: "agradável" },
    { counter: 0, name: "apresentação" },
    { counter: 0, name: "talentoso" },
    { counter: 0, name: "verbal e escrita" },
    { counter: 0, name: "inspirado" },
    { counter: 0, name: "paciente" },
    { counter: 0, name: "habilidades de comunicação" },
    { counter: 0, name: "atenção aos detalhes" },
    { counter: 0, name: "atenção aos detalhes" },
    { counter: 0, name: "competitivo" },
    { counter: 0, name: "ético" },
    { counter: 0, name: "integridade" },
    { counter: 0, name: "pontual" },
    { counter: 0, name: "maturidade" },
    { counter: 0, name: "motivação" },
    { counter: 0, name: "animado" },
    { counter: 0, name: "capacidade de comunicação" },
    { counter: 0, name: "cronograma" },
    { counter: 0, name: "humor" },
    { counter: 0, name: "dedicação" },
    { counter: 0, name: "legais" },
    { counter: 0, name: "organizacional" },
    { counter: 0, name: "bem organizado" },
    { counter: 0, name: "entusiasmo" },
    { counter: 0, name: "habilidades analíticas" },
    { counter: 0, name: "mente aberta" },
    { counter: 0, name: "capaz de se comunicar" },
    { counter: 0, name: "Espírito de equipe" },
    { counter: 0, name: "versatilidade" },
    { counter: 0, name: "confiante" },
    { counter: 0, name: "confiável" },
    { counter: 0, name: "Disponibilidade para viagens" },
    { counter: 0, name: "eficácia" },
    { counter: 0, name: "habilidades de programação" },
    { counter: 0, name: "pensamento crítico" },
    { counter: 0, name: "respeitoso" },
    { counter: 0, name: "seja criativo" },
    { counter: 0, name: "visão estratégica" },
    { counter: 0, name: "atento aos detalhes" },
    { counter: 0, name: "bom senso" },
    { counter: 0, name: "capacidade de aprender" },
    { counter: 0, name: "capacidade de vender" },
    { counter: 0, name: "dedicada" },
    { counter: 0, name: "entusiasmado" },
    { counter: 0, name: "habilidades de liderança" },
    { counter: 0, name: "habilidades organizacionais" },
    { counter: 0, name: "honestidade" },
    { counter: 0, name: "Inovativa" },
    { counter: 0, name: "pessoa responsável" },
    { counter: 0, name: "planejamento estratégico" },
    { counter: 0, name: "tolerante" },
    { counter: 0, name: "ambicioso" },
    { counter: 0, name: "assertividade" },
    { counter: 0, name: "atitude positiva" },
    { counter: 0, name: "calma" },
    { counter: 0, name: "capacidade de adaptação" },
    { counter: 0, name: "cortesia" },
    { counter: 0, name: "detalhado" },
    { counter: 0, name: "gerenciamento de equipe" },
    { counter: 0, name: "habilidades interpessoais" },
    { counter: 0, name: "habilidades para resolver problemas" },
    { counter: 0, name: "paciência" },
    { counter: 0, name: "pontualidade" },
    { counter: 0, name: "precisão" },
    { counter: 0, name: "simpatia" },
    { counter: 0, name: "Solução de problemas" },
    { counter: 0, name: "solucionador de problema" },
    { counter: 0, name: "aconselhamento" },
    { counter: 0, name: "alcançar seus objetivos" },
    { counter: 0, name: "capacidade de analisar" },
    { counter: 0, name: "capacidade de interagir" },
    { counter: 0, name: "capacidade de priorizar" },
    { counter: 0, name: "conceituação" },
    { counter: 0, name: "disciplinado" },
    { counter: 0, name: "educado" },
    { counter: 0, name: "Gerenciamento de Projetos" },
    { counter: 0, name: "gerenciamento de tempo" },
    { counter: 0, name: "habilidades de análise" },
    { counter: 0, name: "habilidades de comunicação interpessoal" },
    { counter: 0, name: "Habilidades de gestão de tempo" },
    { counter: 0, name: "maduro" },
    { counter: 0, name: "membro da equipe" },
    { counter: 0, name: "negociador" },
    { counter: 0, name: "pensamento criativo" },
    { counter: 0, name: "pensamento inovador" },
    { counter: 0, name: "pessoa dinâmica" },
    { counter: 0, name: "profissionalismo" },
    { counter: 0, name: "relações humanas" },
    { counter: 0, name: "sensibilidade" },
    { counter: 0, name: "senso de responsabilidade" },
    { counter: 0, name: "tolerância" },
    { counter: 0, name: "tomar iniciativa" },
    { counter: 0, name: "trabalhador" },
    { counter: 0, name: "trabalhar bem em equipe" },
    { counter: 0, name: "trabalhar de forma colaborativa" },
    { counter: 0, name: "visão de futuro" }
];

function softSkillsPorVaga() {
	var html = '<table>';
	let softSkillsCounter = [];
	html += '<thead><tr><th>Título da vaga</th><th>Senioridade</th><th>Salário</th><th>Descrição</th><th>Localização</th><th>Soft skills</th></tr></thead>';

	jobsList.forEach(item => {
        html += '<tr>';
            html += '<td>'+item.title+'</td>';
            html += '<td>'+item.senioridade+'</td>';
            html += '<td>';
                if (REGEX.test(item.description)) {
                    html += item.description.match(REGEX);
                } else {
                    html += 'Não tem salário';
                }
            html += '</td>';
            html += '<td>'+item.description+'</td>';
            html += '<td width=100>'+item.location+'</td>';
            html += '<td>';
                softSkills.forEach(skill => {
                    if (item.description.includes(skill.name)) {
                        html += skill.name+', ';
                        softSkillsCounter.push({
                            name: skill.name,
                            location: item.location,
                        })
                    }
                })
            html += '</td>';
        html += '</tr>';
	});

	html += '</table>';
    $("#list").html(html);
}

function softSkillsPorLocalização() {
    const softSkillsCounterList = [];
    jobsList.forEach(job => {
        const desc = job.description.toLowerCase();
        softSkills.forEach(skill => {
            console.log(desc, skill);

            // if (desc.includes(skill.name)) {
            //     softSkillsCounterList.push({
            //         ...skill,
            //         counter: skill.counter++
            //     });
            // }
        });
    });
    console.log(softSkillsCounterList);
}

function handleJobs(evt) {
    var file_to_read = evt.target.files[0];
    var fileread = new FileReader();
    fileread.onload = function(e) {
        jobsList = JSON.parse(e.target.result);
    };
    fileread.readAsText(file_to_read);
}

$(document).ready(function(){
	$("#json-file").change(handleJobs);
});
