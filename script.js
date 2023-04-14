const imageData = [
    {
      title: 'Cats',
      imageUrl: 'https://www.example.com/cat.jpg',
      question: 'Which animal is in the picture?',
      options: ['Cats', 'Dogs', 'Birds', 'Fish'],
      answer: 'Cats'
    },
    {
      title: 'Dogs',
      imageUrl: 'https://www.example.com/dog.jpg',
      question: 'What type of animal is in the picture?',
      options: ['Cats', 'Dogs', 'Birds', 'Fish'],
      answer: 'Dogs'
    },
    // Add more image objects as needed
  ];

 function displayRandomImage() {
    // Get a random image object from the imageData array
    const randomIndex = Math.floor(Math.random() * imageData.length);
    const randomImage = imageData[randomIndex];
  
    // Update the image container with the random image
    const imageContainer = document.getElementById('image-container');
    imageContainer.src = randomImage.imageUrl;
    imageContainer.alt = randomImage.title;
  
    // Update the question container with the random question
    const questionContainer = document.getElementById('question-container');
    questionContainer.textContent = randomImage.question;
  
    // Update the option labels with the random options
    const options = randomImage.options;
    const optionLabels = document.querySelectorAll('label');
    optionLabels.forEach((label, index) => {
      label.textContent = options[index];
    });
  
    // Set the value of the radio inputs to the corresponding option
    const optionInputs = document.querySelectorAll('input[type="radio"]');
    optionInputs.forEach((input, index) => {
      input.value = options[index];
    });
  
    // Clear the answer message
    const answerMessage = document.getElementById('answer-message');
    answerMessage.textContent = '';
  }

  function handleSubmit(event) {
    event.preventDefault();
  
    // Get the selected answer value
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    const selectedValue = selectedOption ? selectedOption.value : null;
  
    // Get the correct answer value
    const correctValue = imageData.find(image => image.title === document.getElementById('image-container').alt).answer;
  
    // Check if the selected answer is correct and display a message
    const answerMessage = document.getElementById('answer-message');
    if (selectedValue === correctValue) {
      answerMessage.textContent = 'Correct!';
    } else {
      answerMessage.textContent = 'Incorrect. Try again.';
    }
  }
  