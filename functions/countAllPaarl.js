function countAllPaarl(regNumbers) {
    return regNumbers.split(',').filter(reg => reg.trim().startsWith('CJ')).length;
}