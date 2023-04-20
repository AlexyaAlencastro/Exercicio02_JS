let estudantes = [
  { nome: "João", 
  nota1: 8.5, 
  nota2: 6.5 },
  { nome: "Hanna",
   nota1: 7.0, 
   nota2: 9.0 },
  { nome: "Gabriel", 
  nota1: 5.5,
   nota2: 6.5 },
  { nome: "Ana",
   nota1: 9.0, 
   nota2: 8.0 },
  { nome: "Lucas", 
  nota1: 6.0, 
  nota2: 7.5 },
];

function calcularMedia(nota1, nota2) {
  return (nota1 + nota2) / 2;
}

let mediaConcurso = 7.0; 

for (let i = 0; i < estudantes.length; i++) {
  let estudante = estudantes[i];
  let nome = estudante.nome;
  let nota1 = estudante.nota1;
  let nota2 = estudante.nota2;
  let media = calcularMedia(nota1, nota2);

  if (media >= mediaConcurso) {
    alert(
      
      ` A média do aluno(a) ${nome} é de: \n` + 
        media.toFixed(2)  +
        " e foi aprovado no concurso!"
    );
  } else {
    alert(
        ` A média do aluno(a) ${nome} é de: \n` +  
        media.toFixed(2) + 
        " e não foi aprovado no concurso."
    );
  }
}
