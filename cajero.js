var caja = [];
var entregado = [];

caja.push (new Billete(50, 10) );
caja.push (new Billete(20, 10) );
caja.push (new Billete(10, 10) );

estadoInicial ();

function estadoInicial ()
{
  saldo = 0;
  for (var dt of caja)
  {
    saldo = saldo + dt.cantidad * dt.valor;
  }
  console.log("actualmente quedan $" + saldo);
}

if (saldo == 0)
{
document.write("Lo sentimos, el cajero no tiene dinero en estos momentos, vuelva en otro momento.");
}
else
{
  function entregarDinero()
  {
    resultado.innerHTML = "";
    var dineroSolicitado = document.getElementById("dinero");
    dinero = parseInt(dineroSolicitado.value);
    if (dinero % 10 == 0)
    {
      //console.log("El valor es multiplo de 10");
      if(dinero <= saldo)
      {
        //console.log("Si se puede entregar esa cantidad de dinero");
        console.log("se retiraron $" + dinero);
        for (var bi of caja)
        {
          if(dinero > 0)
          {
            div = Math.floor(dinero / bi.valor);
            if(div > bi.cantidad)
            {
              papeles = bi.cantidad;
            }
            else
            {
              papeles = div;
            }
            entregado.push(new Billete(bi.valor, papeles) );
            dinero = dinero - (bi.valor * papeles);
            //console.log(papeles);
            bi.cantidad = bi.cantidad - papeles;
          }
        }
        estadoInicial ();
        if (dinero == 0)
        {
          for(var e of entregado)
          {
            if(e.cantidad != 0)
            {
              resultado.innerHTML +=  e.cantidad + " billetes de $" + e.valor + "<br />";
            }
          }
        }
      }
      else
      {
        resultado.innerHTML = "Lo sentimos, en estos momentos el cajero no posee fondos suficientes para ese monto.";
      }
    }
    else
    {
      resultado.innerHTML = "Por favor ingrese un valor que sea multiplo de 10 ejemplo: 10, 20, 30, etc...";
    }
  }
}

var div = 0;
var papeles = 0;

var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);
var resultado = document.getElementById("resultado");