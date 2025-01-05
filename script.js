// Entry collection 
const firstValue = document.getElementById("firstValue");
const secondValue = document.getElementById("secondValue");
const answer = document.getElementById("answer");

const copyAnsBtn = document.getElementById("copy");
const modal = document.getElementById("copyModal");
const modalMessage = document.getElementById("modalMessage");
const closeModal = document.getElementById("closeModal");

// Buttons
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const divideBtn = document.getElementById("divide");
const multiplyBtn = document.getElementById("multiply");
const deleteBtn = document.getElementById("delete");
const copyAns = document.getElementById("copyAns");

// Operations 
const addition = () => {
    const num1 = parseFloat(firstValue.value);
    const num2 = parseFloat(secondValue.value);
    if (isNaN(num1) || isNaN(num2)) {
        answer.value = "Invalid input";
        return;
    }
    answer.value = num1 + num2;
};

const subtraction = () => {
    const num1 = parseFloat(firstValue.value);
    const num2 = parseFloat(secondValue.value);
    if (isNaN(num1) || isNaN(num2)) {
        answer.value = "Invalid input";
        return;
    }
    answer.value = num1 - num2;
};

const division = () => {
    const num1 = parseFloat(firstValue.value);
    const num2 = parseFloat(secondValue.value);
    if (isNaN(num1) || isNaN(num2)) {
        answer.value = "Invalid input";
        return;
    }
    if (num2 === 0) {
        alert("Cannot divide by zero");
        return;
    }
    answer.value = num1 / num2;
};

const multiplication = () => {
    const num1 = parseFloat(firstValue.value);
    const num2 = parseFloat(secondValue.value);
    if (isNaN(num1) || isNaN(num2)) {
        answer.value = "Invalid input";
        return;
    }
    answer.value = num1 * num2;
};

const reset = () => {
    firstValue.value = "";
    secondValue.value = "";
    answer.value = "";
};

// Function to copy answer
const copyAnswer = () => {
    const result = answer.value;
    if (result) {
        navigator.clipboard.writeText(result).then(() => {
            modalMessage.innerText = "Answer copied!";
            modal.style.display = "block"; // Show modal
        }).catch((err) => {
            modalMessage.innerText = "Error copying text.";
            modal.style.display = "block"; // Show modal
            console.error("Error copying text: ", err);
        });
    } else {
        modalMessage.innerText = "No answer to copy!";
        modal.style.display = "block"; // Show modal
    }
};

// Close modal when "Close" button is clicked
closeModal.addEventListener("click", () => {
    modal.style.display = "none"; // Hide modal
});

// Close modal if user clicks outside the modal content
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none"; // Hide modal
    }
});

// Add event listeners
plusBtn.addEventListener("click", addition);
minusBtn.addEventListener("click", subtraction);
divideBtn.addEventListener("click", division);
multiplyBtn.addEventListener("click", multiplication);
deleteBtn.addEventListener("click", reset);
copyAns.addEventListener("click", copyAnswer)
