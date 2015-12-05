module.exports.tokens = function () {
    return {
        '01_txnthr' : { en:'r ', enr:/r[\s\.\?\!]/g, zb:'rh ', zbr:/(rh)[\s\.\?\!]/g }, // `r` at the end of word ∆ `rh`,
        '02_txWrdr' : { en:'r', enr:/[Rr](?!\s|\.|\?|\!|h)/g, zb:'RR', zbr:/(RR)/g }, // lone `r` (not at end of word or paired with `h`) ∆ `RR`
        '03_txBcE'  : { en:'e', enr:/[Ee]/g, zb:'rr', zbr:/(rr)/g }, // standard letter substution until noted otherwise
        '04_txBcI'  : { en:'i', enr:/[Ii]/g, zb:'rrRr', zbr:/(rrRr)/g },
        '05_txBcO'  : { en:'o', enr:/[Oo]/g, zb:'rrrRr', zbr:/(rrrRr)/g },
        '06_txBcU'  : { en:'u', enr:/[Uu]/g, zb:'rrrrRr', zbr:/(rrrrRr)/g },
        '07_txBcA'  : { en:'a', enr:/[Aa]/g, zb:'hra', zbr:/([Hh]ra)/g },
        '08_txBcY'  : { en:'y', enr:/[Yy]/g, zb:'yz', zbr:/(yz)/g },
        '09_txBcZ'  : { en:'z', enr:/[Zz]/g, zb:'zh', zbr:/(zh)/g },
        // 10th rule for sentence case is the function this.sentenceCase
    };
};
