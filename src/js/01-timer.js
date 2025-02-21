import flatpickr from "flatpickr";

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
    },
};

const timer = document.querySelector('#datetime-picker');
flatpickr(timer, options);

