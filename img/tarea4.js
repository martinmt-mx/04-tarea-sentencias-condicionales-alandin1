// Ejercicio 1
var ejer1Num1 = document.querySelector('#ejer1Num1')
var btnEj1 = document.querySelector('#btnEj1')
btnEj1.addEventListener('click', () =>{
    let num1 = Number(ejer1Num1.value)
    let residuo = num1%2
    if (residuo===0)
    {
        alert(num1 + " Es par")
    }
    else
    {
        alert(num1 + " Es impar")
    }
})

// Ejercicio 2
var ejer2Num1 = document.querySelector('#ejer2Num1')
var ejer2Num2 = document.querySelector('#ejer2Num2')
var ejer2Num3 = document.querySelector('#ejer2Num3')
var btnEj2 = document.querySelector('#btnEj2')
btnEj2.addEventListener('click', () =>{
    let num1 = Number(ejer2Num1.value)
    let num2 = Number(ejer2Num2.value)
    let num3 = Number(ejer2Num3.value)
    if (num1>num2 && num1>num3)
    {
        alert(num1 + " Es mayor")
    }
    else if (num2>num1 && num2>num3)
    {
        alert(num2 + " Es mayor")
    }
    else if (num3>num1 && num3>num2)
    {
        alert(num3 + " Es mayor")
    }

    if (num1<num2 && num1<num3)
    {
        alert(num1 + " Es menor")
    }
    else if (num2<num1 && num2<num3)
    {
        alert(num2 + " Es menor")
    }
    else if (num3<num1 && num3<num2)
    {
        alert(num3 + " Es menor")
    }
})

// Ejercicio 3
var ejer3Num1 = document.querySelector('#ejer3Num1')
var ejer3Num2 = document.querySelector('#ejer3Num2')
var btnEj3 = document.querySelector('#btnEj3')
btnEj3.addEventListener('click', () => {
    let saldo = Number(ejer3Num1.value)
    let retiro = Number(ejer3Num2.value)
    if (saldo<retiro)
    {
        alert("No tienes suficiente saldo")
    }
    else
    {
        saldo = saldo - retiro
        alert("Retiro exitoso!, su nuevo saldo es: " + saldo + "$")
    }
})

// Ejercicio 4
var ejer4Num1 = document.querySelector('#ejer4Precio')
var ejer4Cantidad = document.querySelector('#ejer4Cantidad')
var btnPrecio = document.querySelector('#btnPrecio')
var ejer4Result = document.querySelector('#ejer4Result')
btnPrecio.addEventListener('click', () => {
    let precio = Number(ejer4Precio.value)
    let cantidad = Number(ejer4Cantidad.value)
    if (cantidad<=9)
    {
        precio = (cantidad*precio)* .95
        ejer4Result.value = precio
    }
    if (cantidad>=10 && cantidad<=20)
    {
        precio = (cantidad*precio)* .90
        ejer4Result.value = precio
    }
    if (cantidad>=21)
    {
        precio = (cantidad*precio)* .85
        ejer4Result.value = precio
    }
})
