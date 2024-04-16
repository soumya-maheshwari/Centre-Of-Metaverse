export const isValidStudentNumber = (studentNumber: string) => {
  const regex = /^(23)(00|10|11|12|15[34]|16[49]|31|40|21)([0-9]{3})$/;
  return regex.test(studentNumber);
};

export const isValidEmail = (email: string) => {
  const regex =
    /^[a-zA-Z]+(23)(00|1[0123]|15[34]|16[49]|31|40|21)([0-9]{3})(@akgec.ac.in)$/;
  return regex.test(email);
};
