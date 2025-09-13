function Verify() {
    const IsaOuRay = document.getElementById("nome")
    const botao = document.getElementById("button")
    const msg= document.getElementById("msg")


    botao.addEventListener("click", function() {

        const result = IsaOuRay.value;

        if (result === "Isabelly") {
            msg.textContent = "Esposa do Veiga";
        }
        else if (result === "Rayssa") {
            msg.textContent = "Esposa do Evans";
        }
        else {
            alert("Você não é esposa nem do veiga nem do evans")
        }
  
})}

Verify();