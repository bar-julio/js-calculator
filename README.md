# Calculadora en HTML, JavaScript y Bootstrap

Este proyecto es una aplicación de calculadora simple construida utilizando HTML, JavaScript y Bootstrap. La calculadora permite realizar operaciones básicas como suma, resta, multiplicación, división y cálculo de porcentajes. La interfaz es amigable y responsiva, adaptándose a diferentes tamaños de pantalla.

## Funcionalidades

- Entrada de números y punto decimal.
- Operaciones básicas: suma, resta, multiplicación, división y porcentaje.
- Muestra el resultado de la última operación (`Ans`).
- Maneja la repetición de la última operación con el resultado (`Ans`).

## Estructura de Archivos

- `index.html`: Contiene la estructura HTML y la carga de Bootstrap.
- `script.js`: Contiene la lógica de la calculadora en JavaScript.

## Requisitos

- Navegador web.

## Cómo Ejecutar

1. Clona o descarga este repositorio.
2. Abre el archivo `index.html` en tu navegador web preferido.

## Instrucciones para Agregar una Nueva Operación

Si deseas agregar una nueva operación a la calculadora, sigue estos pasos:

1. **Modificar el archivo HTML**:

   - Agrega un nuevo botón en el HTML para la operación deseada dentro de la estructura de botones. Por ejemplo, si deseas agregar una operación de exponente (`^`):

   ```html
   <div class="row">
     <!-- Otros botones -->
     <div class="col-3">
       <button class="btn btn-warning" onclick="operate('^')">^</button>
     </div>
   </div>
   ```

2. **Modificar el archivo JavaScript**:

   - Abre `script.js` y localiza la función `calculate()`.
   - Dentro del switch-case de la función `calculate()`, agrega un nuevo caso para la operación. Por ejemplo, para la operación de exponente:

   ```javascript
   function calculate() {
     if (currentInput === "" && operator !== "") {
       currentInput = ans.toString();
     }

     let result;
     switch (operator) {
       case "+":
         result = ans + parseFloat(currentInput);
         break;
       case "/":
         result = ans / parseFloat(currentInput);
         break;
       case "^":
         result = Math.pow(ans, parseFloat(currentInput));
         break;
       default:
         result = parseFloat(currentInput);
         break;
     }

     ans = result;
     currentInput = "";
     operator = "";
     display.innerText = ans;
   }
   ```

3. **Guardar los cambios**: - Guarda los cambios en ambos archivos y vuelve a cargar `index.html` en tu navegador para ver la nueva operación en funcionamiento.
