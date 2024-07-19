// Self-invoked function
(function () {
    document.addEventListener("DOMContentLoaded", (event) => {
        let questions = document.querySelectorAll('.question');
        let answers = document.querySelectorAll('.answer');

        questions.forEach((question) => {
            question.addEventListener('click', (e) => {
                const clickedAns = e.currentTarget.nextElementSibling;
                answers.forEach((answer) => {
                    if (answer !== clickedAns && answer.classList.contains("show")) {
                        answer.classList.remove("show");
                    }
                });
                clickedAns.classList.toggle("show");
            });
        });
    });
})();