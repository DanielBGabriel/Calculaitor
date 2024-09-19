        //deixa telinha invisivel
           document.getElementById("resp").style.visibility = "hidden";
        function calcular() {
            certo = true;
            // variaveis
            let x = document.getElementById("peso").value;
            let y = document.getElementById("altura").value;
            let z = +x/ y**2;

            // arredondamento
            let Nz = Math.round(z * Math.pow(10, 2)) / Math.pow(10, 2);
           
            // verf. se valor é valido, arredonda z & deixa caixa visivel
            if (x < 0||y < 0||y > 3) {document.getElementById("valor").innerHTML="valor inválido";
            }else {document.getElementById("valor").innerHTML= Nz; document.getElementById("resp").style.visibility = "visible"}
            // definição do valor, imagem & sfx
            if (x < 0||y < 0||y > 3) {document.getElementById("imc").innerHTML=" ";}    
            else if(z<16.9){document.getElementById("imc").innerHTML="Muito abaixo do peso";document.getElementById("result").src="./img/Mm.avif"; }
            else if(z>16.9 && z<18.4){document.getElementById("imc").innerHTML="Abaixo do peso";document.getElementById("result").src="./img/m.jpg";}
            else if(z>18.4 && z<24.9){document.getElementById("imc").innerHTML="Normal";document.getElementById("result").src="./img/n.webp";}
            else if(z>24.9 && z<29.9){document.getElementById("imc").innerHTML="Acima do peso";document.getElementById("result").src="./img/ap.webp";}
            else if(z>29.9 && z<34.9){document.getElementById("imc").innerHTML="Obesidade grau I";document.getElementById("result").src="./img/ob1.webp";}
            else if(z>34.9 && z<40){document.getElementById("imc").innerHTML="Obesidade grau II";document.getElementById("result").src="./img/ob2.jpg";}
            else if(z>8000){document.getElementById("imc").innerHTML="esse é o poder de um super sayajin!";document.getElementById("result").src="./img/8mil.jpg";}
            else if(z>=40){document.getElementById("imc").innerHTML="Obesidade grau III";document.getElementById("result").src="./img/ob3.avif";}
        }