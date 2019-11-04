function basicTeenager(age) {
<<<<<<< HEAD
  if (age >= 13 && age <= 19) {
    return "You are a teenager!"

=======
  if (age >= 13 || age <= 19) {
    return "You are a teenager!"
  // }else if (age < 13 || age > 19) {
  //   return "You are not a teenager"
>>>>>>> 47f3be2aa1c83c08012f0fa8c0afdc43269f0a4e
  }
}

function teenager(age) {
<<<<<<< HEAD
  if (age >= 13 && age <= 19) {
=======
  if (age >= 13 || age <= 19) {
>>>>>>> 47f3be2aa1c83c08012f0fa8c0afdc43269f0a4e
    return "You are a teenager!"
  }else {
    return "You are not a teenager"
  }

}

function ageChecker(age) {
<<<<<<< HEAD
  if (age >= 13 && age <= 19) {
=======
  if (age >= 13 || age <= 19) {
>>>>>>> 47f3be2aa1c83c08012f0fa8c0afdc43269f0a4e
    return "You are a teenager!"
  }else if (age <= 12) {
    return "You are a kid"
  }else {
    return "You are a grownup"
  }


}

function ternaryTeenager(age) {
<<<<<<< HEAD
  return (age >= 13 && age <= 19 ? 'You are a teenager' : 'You are not a teenager');
=======
  return (age ? 'You are a teenager' : 'You are not a teenager');
>>>>>>> 47f3be2aa1c83c08012f0fa8c0afdc43269f0a4e

}

function switchAge(age) {
<<<<<<< HEAD
  switch (age) {
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
    return "You are a teenager"
  default:
    return "You have an age"
=======
  switch(age) {
    case (age >= 13 || age <= 19):
    return "You are a teenager"
  default: "You have an age"
>>>>>>> 47f3be2aa1c83c08012f0fa8c0afdc43269f0a4e
  }

}
