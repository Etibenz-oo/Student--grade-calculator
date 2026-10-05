let rows = document.querySelectorAll("table tr");

rows.forEach(function(row) {
    let inputs = row.querySelectorAll("input");

    inputs.forEach(function(input) {
        input.addEventListener("input", function() {

            let scores = row.querySelectorAll("input");

            let ca1 = Number(scores[0].value);
            let ca2 = Number(scores[1].value);
            let ca3 = Number(scores[2].value);
            let exam = Number(scores[3].value);

            if (ca1 > 100) scores[0].value = 100;
            if (ca2 > 100) scores[1].value = 100;
            if (ca3 > 100) scores[2].value = 100;
            if (exam > 100) scores[3].value = 100;

            let total = ca1 + ca2 + ca3 + exam;
            let grade;

            if (total >= 70) {
                grade = "A";
            } else if (total >= 60) {
                grade = "B";
            } else if (total >= 50) {
                grade = "C";
            } else if (total >= 45) {
                grade = "D";
            } else if (total >= 40) {
                grade = "E";
            } else {
                grade = "F";
            }

            row.cells[5].textContent = total;
            row.cells[6].textContent = grade;
        });
    });
});
