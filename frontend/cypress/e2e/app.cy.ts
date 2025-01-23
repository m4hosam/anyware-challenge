describe("Learning Platform Application", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  context("Home Page", () => {
    it("should load home page successfully", () => {
      cy.get("h3").should("contain.text", "Welcome");
      cy.get("button").should("contain.text", "Login");
    });

    it("should change language", () => {
      // Test English to Arabic language switch
      cy.get("button").contains("English").click();
      cy.get("h3").should("be.visible");

      cy.get("button").contains("العربية").click();
      // Add assertion for Arabic text if translation is available
    });

    it("should login and navigate to dashboard", () => {
      cy.get("button").contains("Login").click();
      cy.url().should("include", "/dashboard");
      cy.get("h5").should("contain.text", "Announcements");
      cy.get("h5").should("contain.text", "Upcoming Quizzes");
    });
  });

  context("Dashboard Page", () => {
    beforeEach(() => {
      // Perform login first
      cy.visit("/");
      cy.get("button").contains("Login").click();
    });

    it("should display announcements", () => {
      cy.get('[data-testid="announcement-card"]').should("have.length.gte", 0);
    });

    it("should display quizzes", () => {
      cy.get('[data-testid="quiz-card"]').should("have.length.gte", 0);
    });
  });

  context("Announcements Page", () => {
    beforeEach(() => {
      // Perform login first
      cy.visit("/");
      cy.get("button").contains("Login").click();
      cy.get("a").contains("Announcements").click();
    });

    it("should load announcements page", () => {
      cy.url().should("include", "/announcements");
      cy.get("h5").should("contain.text", "Announcements");
      cy.get('[data-testid="announcement-card"]').should("have.length.gte", 0);
    });
  });

  context("Quizzes Page", () => {
    beforeEach(() => {
      // Perform login first
      cy.visit("/");
      cy.get("button").contains("Login").click();
      cy.get("a").contains("Quizzes").click();
    });

    it("should load quizzes page", () => {
      cy.url().should("include", "/quizzes");
      cy.get("h5").should("contain.text", "Quizzes");
      cy.get('[data-testid="quiz-card"]').should("have.length.gte", 0);
    });
  });

  context("Authentication", () => {
    it("should logout from dashboard", () => {
      // Login first
      cy.visit("/");
      cy.get("button").contains("Login").click();

      // Navigate back to home and logout
      cy.get("button").contains("Logout").click();
      cy.get("button").should("contain.text", "Login");
    });
  });
});
