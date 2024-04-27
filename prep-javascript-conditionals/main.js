// isAdult function
function isAdult(age) {
  if (age < 18) return false;
  return true;
}

const isAdultResult = isAdult(50);
console.log(isAdultResult); //true

// didStudentPass function
const didStudentPass = (score) => (score >= 70 ? true : false);
const didStudentPassResult = didStudentPass(80); //true
console.log(didStudentPassResult);

// gradeCalculator function
const gradeCalculator = (score) => {
  if (score < 60) return 'F';
  if (score < 70) return 'D';
  if (score < 80) return 'C';
  if (score < 90) return 'B';
  if (score < 100) return 'A';
  if (score >= 100) return 'A++';
  return 'Unknown';
};

const gradeCalculatorResult = gradeCalculator(100);
console.log(gradeCalculatorResult);

// seasonMessenger function
const seasonMessenger = (season) => {
  if (season === 'summer') return 'it is hot today';
  if (season === 'spring') return 'the flowers are blooming';
  if (season === 'autumn') return 'the leaves are changing colors';
  if (season === 'winter') return 'it is cold today';
  return 'please enter a valid season';
};

const seasonMessengerResult = seasonMessenger('spring');
console.log(seasonMessengerResult);

// dayDetector function
const dayDetector = (dayOfTheWeek) => {
  if (dayOfTheWeek === 'saturday' || dayOfTheWeek === 'sunday')
    return 'have a good weekend';
  return 'It is a weekday!';
};

const dayDetectorResult = dayDetector('monday');
console.log(dayDetectorResult);
