import users from './users.js';

// task 1
const getUserNames = users => {
  return users.map(({ name }) => name);
};

console.log(getUserNames(users));

// task 2
// const getUsersWithEyeColor = (users, color) => {
//   return users.filter(({ eyeColor }) => eyeColor === color);
// };

// console.log(getUsersWithEyeColor(users, 'blue'));

// task 3
// const getUsersWithGender = (users, genderValue) => {
//   return users
//     .filter(({ gender }) => gender === genderValue)
//     .map(({ name }) => name);
// };

// console.log(getUsersWithGender(users, 'male'));

// task 4
// const getInactiveUsers = users => {
//   return users.filter(({ isActive }) => !isActive);
// };

// console.log(getInactiveUsers(users));

// task 5
// const getUserWithEmail = (users, emailValue) => {
//   return users.find(({ email }) => email === emailValue);
// };

// console.log(getUserWithEmail(users, 'shereeanthony@kog.com'));

// task 6
// const getUsersWithAge = (users, min, max) => {
//   return users.filter(({ age }) => age >= min && age <= max);
// };

// console.log(getUsersWithAge(users, 20, 30));

// task 7
// const calculateTotalBalance = users => {
//   return users.reduce((total, { balance }) => total + balance, 0);
// };

// console.log(calculateTotalBalance(users));

// task 8
// const getUsersWithFriend = (users, friendName) => {
//   return users
//     .filter(({ friends }) => friends.find(item => item === friendName))
//     .map(({ name }) => name);
// };

// console.log(getUsersWithFriend(users, 'Briana Decker'));

// task 9
// const getNamesSortedByFriendsCount = users => {
//   return users
//     .sort((a, b) => a.friends.length - b.friends.length)
//     .map(({ name }) => name);
// };

// console.log(getNamesSortedByFriendsCount(users));

// task 10
// const getSortedUniqueSkills = users => {
//   return users
//     .reduce((acc, { skills }) => [...acc, ...skills], [])
//     .filter((skill, index, skills) => index === skills.indexOf(skill))
//     .sort();
// };

// console.log(getSortedUniqueSkills(users));
