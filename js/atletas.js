const atleta = new Atletas(
    "Cesar Abascal",30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88]
);

class Atletas{
    constructor(nome, idade, peso, altura, notas ){
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    }
    //  para calcular a categoria do atleta;
    calculaCategoria(idade){
        if(idade >= 16 && idade <= 30 ){
            return 'Adulto';
        } else if(idade >= 14 ) {
            return 'Intermediário';
        } else if(idade >= 12 ) {
            return 'Juvenil';
        } else if(idade >= 9) {
            return 'Infantil';
        } else {
            return 'Sem categoria';
        }
    }
    /*para calcular o IMC do atleta;*/
    calculaIMC(){
        return this.peso / (this.altura * this.altura);
    }
    /* para calcular a média válida do atleta.*/
    calculaMediaValida(){
        let notas = this.notas.sort((a,b) => {
            return b - a
        })
        return notas.slice(1,4).reduce((soma,atual) => {
            soma += atual;
        })/notas.length;
    }
    /* que retorna o nome do atleta*/
    obtemNomeAtleta(){
        return this.nome;
    }
    /*que retorna a idade do atleta*/
    obtemIdadeAtleta(){
        return this.idade;
    }
    /* que retorna o peso do atleta*/
    obtemPesoAtleta(){
        return this.peso;
    }
    /* que retorna as notas do atleta*/
    obtemNotasAtleta(){
        return this.notas.join(', ');
    }
    /*que retorna a categoria do atleta*/
    obtemCategoria(){
        return this.calculaCategoria();
    }
    /*que retorna o IMC do atleta*/
    obtemIMC(){
        return this.calculaIMC();
    }
    /*que retorna a média válida do atleta*/
    obtemMediaValida(){
        return this.calculaIMC();
    }
}
