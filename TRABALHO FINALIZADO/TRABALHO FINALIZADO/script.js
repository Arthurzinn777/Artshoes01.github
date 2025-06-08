
document.addEventListener("DOMContentLoaded", () => {
   
    const form = document.getElementById("formulario-contato");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            const nome = document.getElementById("nome").value.trim();
            const email = document.getElementById("email").value.trim();
            const mensagem = document.getElementById("mensagem").value.trim();

            if (!nome || !email || !mensagem) {
                alert("Por favor, preencha todos os campos.");
                return;
            }

            alert("Mensagem enviada com sucesso!\nEntraremos em contato em breve.");
            form.reset();
        });
    }

   
    const botoes = document.querySelectorAll(".add-carrinho");

    botoes.forEach((botao) => {
        botao.addEventListener("click", () => {
            const card = botao.parentElement;
            const nomePreco = card.querySelector("p strong").innerHTML.split("<br>");
            const nome = nomePreco[0].trim();
            const precoTexto = nomePreco[1].replace("R$", "").trim().replace(",", ".");
            const imagem = card.querySelector("img").src;

            const item = {
                nome: nome,
                preco: parseFloat(precoTexto),
                imagem: imagem
            };

            let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
            carrinho.push(item);
            localStorage.setItem("carrinho", JSON.stringify(carrinho));

            alert(`${nome} foi adicionado ao carrinho!`);
        });
    });

    
    const container = document.getElementById("lista-carrinho");
    const total = document.getElementById("total");
    const btnEsvaziar = document.getElementById("btn-esvaziar");

    function atualizarCarrinho() {
        if (!container || !total) return;

        container.innerHTML = "";
        total.textContent = "";

        const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

        if (carrinho.length > 0) {
            let valorTotal = 0;

            carrinho.forEach((item) => {
                const card = document.createElement("div");
                card.style.border = "1px solid #ccc";
                card.style.padding = "10px";
                card.style.margin = "10px";
                card.style.borderRadius = "10px";
                card.style.display = "flex";
                card.style.alignItems = "center";
                card.style.gap = "15px";
                card.style.backgroundColor = "#000000";

                const img = document.createElement("img");
                img.src = item.imagem;
                img.alt = item.nome;
                img.style.width = "80px";

                const info = document.createElement("div");
                info.innerHTML = `<strong>${item.nome}</strong><br>R$ ${item.preco.toFixed(2)}`;

                card.appendChild(img);
                card.appendChild(info);
                container.appendChild(card);

                valorTotal += parseFloat(item.preco);
            });

            total.textContent = `Total: R$ ${valorTotal.toFixed(2)}`;
        } else {
            const msg = document.createElement("p");
            msg.textContent = "🛒 Seu carrinho está vazio.";
            msg.style.color = "#555";
            msg.style.fontStyle = "italic";
            msg.style.padding = "10px";
            container.appendChild(msg);
        }
    }

    if (btnEsvaziar) {
        btnEsvaziar.addEventListener("click", () => {
            localStorage.removeItem("carrinho");
            atualizarCarrinho();
        });
    }

    atualizarCarrinho();
});


document.addEventListener("DOMContentLoaded", () => {
    const botaoEntrar = document.getElementById("btn-entrar");

    if (botaoEntrar) {
        botaoEntrar.addEventListener("click", (e) => {
            e.preventDefault(); 
            window.location.href = "index.html"; 
        });
    }
});

const botaoCadastrar = document.getElementById("btn-cadastrar");

if (botaoCadastrar) {
    botaoCadastrar.addEventListener("click", (e) => {
        e.preventDefault(); // evita o reset do formulário
        window.open("cadastro.html", "_blank"); // abre a página cadastro.html em nova aba
    });
}

document.getElementById("btn-pagamento").addEventListener("click", () => {
  window.location.href = "pag.html";
});

