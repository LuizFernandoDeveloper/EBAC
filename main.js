class Aluno{
    #name = '';
    #nota = '';
    constructor(name, nota){
        this.#name = name;
        this.#nota = nota;
    }
    setNota(nota){
        this.#nota = nota;
    }

    getNota(){
        return this.#nota;
    }

    setName(name){
        this.#name = name;
    }

    getName(){
        return this.#name;
    }
}

const arrayDeObjetos = [new Aluno('Luiz', 3), new Aluno('Carlos', 23), new Aluno('Daniel', 20), new Aluno('Marcos', 45)];
const arrayFiltro = []


function maiorNotaAluno(array){
    // array.forEach(element => {
    //     if(element.getNota()>= 6){
    //         arrayFiltro.push(element)
    //     }
    // });
    return array.filter(alunos => alunos.getNota() >= 6);
}


console.log(maiorNotaAluno(arrayDeObjetos));
