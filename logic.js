function Verify() {
    const IsaOuRay = document.getElementById("nome")
    const botao = document.getElementById("button")
    const password = document.getElementById("senha")


    botao.addEventListener("click", function() {

        const result = IsaOuRay.value;
        const rightpass = password.value;

        if (result === "Isa_Veiga" && rightpass === "isa_ama_veiga") {
            window.location.href = "home.html";
        }
        else if (result === "Ray_Evans" && rightpass === "ray_ama_evansinho") {
            window.location.href = "home.html";
        }
        else {
            alert("Você não tem acesso a esse site")
        }
  
})}

Verify();