

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const precioBarbijo = 50;
let totalVentasTandil = 0;
let totalVentasMarDelPlata = 0;
let totalVentasOlavarria = 0;

function promptInput(prompt) {
  return new Promise((resolve) => {
    rl.question(prompt, (answer) => {
      resolve(answer);
    });
  });
}

async function main() {
  let planta = 0;
  let respuesta = 'no';

  while (respuesta.toLowerCase() !== 'si') {
    console.log('                            BIENVENIDO');
    console.log('---------------------------------------------------------');
    console.log('Para ver el total del día, seleccione la planta que desee (ingresar número con cero adelante):');
    console.log('1 - Tandil');
    console.log('2 - Mar del Plata');
    console.log('3 - Olavarria');

    planta = parseInt(await promptInput('Ingrese el número de planta: '));

    while (planta < 1 || planta > 3) {
      console.log('Opción incorrecta, ingrese un número del 1 al 3 por favor');
      planta = parseInt(await promptInput('Ingrese el número de planta: '));
    }

    switch (planta) {
      case 1:
        console.log('PLANTA TANDIL');
        console.log('--------------------------------------------------------------------------------');
        let cantProdTandil = parseInt(await promptInput('Ingrese la cantidad de productos fabricados durante la última semana (Lun a Dom): '));
        let cantDefectTandil = parseInt(await promptInput('Ingrese cantidad de productos defectuosos: '));

        console.log('PLANTA TANDIL');
        console.log('La cantidad de unidades producidas durante la última semana es:', cantProdTandil, 'unidades');
        console.log('La cantidad de productos defectuosos es:', cantDefectTandil);
        console.log('El monto total de ventas es: $', cantProdTandil * precioBarbijo, '(Monto aprox. sujeto a precio del producto)');

        totalVentasTandil += cantProdTandil;

        break;

      case 2:
        console.log('PLANTA MAR DEL PLATA');
        console.log('--------------------------------------------------------------------------------');
        let cantProdMarDelPlata = parseInt(await promptInput('Ingrese la cantidad de productos fabricados durante la última semana (Lun a Dom): '));
        let cantDefectMarDelPlata = parseInt(await promptInput('Ingrese cantidad de productos defectuosos: '));

        console.log('PLANTA MAR DEL PLATA');
        console.log('La cantidad de unidades producidas durante la última semana es:', cantProdMarDelPlata, 'unidades');
        console.log('La cantidad de productos defectuosos es:', cantDefectMarDelPlata);
        console.log('El monto total de ventas es: $', cantProdMarDelPlata * precioBarbijo, '(Monto aprox. sujeto a precio del producto)');

        totalVentasMarDelPlata += cantProdMarDelPlata;

        break;

      case 3:
        console.log('PLANTA OLAVARRIA');
        console.log('--------------------------------------------------------------------------------');
        let cantProdOlavarria = parseInt(await promptInput('Ingrese la cantidad de productos fabricados durante la última semana (Lun a Dom): '));
        let cantDefectOlavarria = parseInt(await promptInput('Ingrese cantidad de productos defectuosos: '));

        console.log('PLANTA OLAVARRIA');
        console.log('La cantidad de unidades producidas durante la última semana es:', cantProdOlavarria, 'unidades');
        console.log('La cantidad de productos defectuosos es:', cantDefectOlavarria);
        console.log('El monto total de ventas es: $', cantProdOlavarria * precioBarbijo, '(Monto aprox. sujeto a precio del producto)');

        totalVentasOlavarria += cantProdOlavarria;

        break;

      default:
        break;
    }

    console.log('--------------------------------------------------------------');
    respuesta = await promptInput('Desea salir? (si/no): ');
  }

  console.log('----------------------------------------------------------------------');
  console.log('PLANTA TANDIL - Total de unidades producidas:', totalVentasTandil);
  console.log('----------------------------------------------------------------------');
  console.log('PLANTA MAR DEL PLATA  - Total de unidades producidas:', totalVentasMarDelPlata);
  console.log('----------------------------------------------------------------------');
  console.log('PLANTA OLAVARRIA - Total de unidades producidas:', totalVentasOlavarria);
  console.log('----------------------------------------------------------------------');

  rl.close();
}

main();

/*Please note that in the above code, we are using the readline module in Node.js to handle user input from the console. 
If you are running this code in a different environment (e.g., a browser), 
you'll need to use a different method to get user input */
