
describe("Tickets", ()=> {    beforeEach(() => cy.visit("https://ticket-box.s3.eu-central-1.amazonaws.com/index.html"));


    it("Preenchendo campos", () => {
        const firstName = "Dionisio";
        const lastName = "Soares";

        cy.get("#first-name").type(firstName);
        cy.get("#last-name").type(lastName);
        cy.get("#email").type("dio.soares@gmail1.com");
        cy.get("#ticket-quantity").select("2");
        cy.get("#vip").check();
        cy.get("#requests").type("Yoga-mudra");
        cy.get("#signature").type(`${firstName} ${lastName}`);

    });

    it("Selecionando checkboxs", () => {
        cy.get("#friend").check();
        cy.get("#publication").check();
        cy.get("#social-media").check();
        cy.get("#friend").uncheck();
    });

    it('has "TICKETBOX" headers heading', () => {
        cy.get("header h1").should("contain", "TICKETBOX");
        cy.get("label").should("contain", "First Name");
    
    });
    it("Preenchendo relatório e limpando", () => {
        const nome = "Dionísio"
        const sobrenome = "Soares"
        const email = "dionisio.soares@gmail.com"
        const nomeCompleto = `${nome} ${sobrenome}`;

        /*Preenchendo Campo First Name*/
        cy.get("#first-name").type(nome);
        /*Preenchendo campo Last name*/
        cy.get("#last-name").type(sobrenome);
        /*Preenchendo campo email*/
        cy.get("#email").type(email);
        /*Preechendo campo Ticket Quantity com 2*/
        cy.get("#ticket-quantity").select("2");
        /*Preenchendo campo Ticket Type */
        cy.get("#vip").check();
        /*Preenchendo conchecimento do evento por amigo e midia*/
        cy.get("#friend").check();
        cy.get("#social-media").check();
        /*Preenchendo campo Requisições Especiais com Python*/
        cy.get("#requests").type(nomeCompleto);
        /*Validando campo Purchase Agreement com a frase "I, Dionísio Soares, wish to buy 2 VIP tickets.*/
        cy.get(".agreement p").should(
            "contain",
            `I, ${nomeCompleto}, wish to buy 2 VIP tickets.`);
        /*Marcando check I Agree.*/
        cy.get("#agree").check();
        /*Inserindo assinatura.*/
        cy.get("#signature").type(nomeCompleto);
        /*Verificando se o botão de confirmação esta habilitado.*/
        cy.get("button[type='submit']")
            .as("submitButton")
            .should("not.be.disabled");
        /*Removendo o check de I Agree.*/
        cy.get("#agree").click();
        /*Validando se o butão esta desabilitado.*/
        cy.get("@submitButton").should("be.disabled");
        /*Limpando informação do formulário atraves do botão Reset.*/
        cy.get("button[type='reset']").click();
    
    });

    it.only("Validando formulário com campos obrigatórios", ()=> {
        const customer = {
            firstName: "João",
            lastName: "Silva",
            email: "joaosilva@exemplo.com" 
        };
        cy.preenchendocamposobrigatorios(customer);

        /*Verificando se o botão de confirmação esta habilitado.*/
        cy.get("button[type='submit']")
            .as("submitButton")
            .should("not.be.disabled");

        /*Removendo o check de I Agree.*/
        cy.get("#agree").click();  

        /*Validando se o butão esta desabilitado.*/
        cy.get("@submitButton").should("be.disabled");

        
    });

});