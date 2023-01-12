// Code your solution here()
// console.log(drivers)

    //}     
function findMatching(array, srch){
    return array.filter((driver) => driver.toUpperCase() == srch.toUpperCase());
}
// const findMatching = drivers.filter(driver=> driver == 'Bobby');
function fuzzyMatch(array, srch){
    return array.filter((driver) => driver[0] == srch[0]);
}
function matchName(index, srch){
    return index.filter((driver) => driver.name == srch );
}