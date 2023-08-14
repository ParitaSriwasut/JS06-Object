const per1 = { canView: false, canDelete: false };
const per2 = { canUpdate: true, canCreate: true };
const per3 = { canCreate: false, canDelete: true };
const per4 = { canView: true };
let commonObj = {};

const mergeObject = Object.assign({}, per1, per2, per3, per4);
console.log(mergeObject);
