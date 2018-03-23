let DnaTranscriber = function() {}

DnaTranscriber.prototype.toRna = function(strand) {
    let rna = ''

    for (let i = 0; i < strand.length; i++) {
        if (strand.charAt(i) != 'A' && strand.charAt(i) != 'C' && strand.charAt(i) != 'G' 
        && strand.charAt(i) != 'T') {
            throw Error('Invalid input')
        }
        else {
            if (strand.charAt(i) === 'A') {
                rna += 'U'
            }
            else if (strand.charAt(i) === 'C') {
                rna += 'G'
            }
            else if (strand.charAt(i) === 'G') {
                rna += 'C'
            }
            else {
                rna += 'A'
            }
        }
    }
    return rna
}

module.exports = DnaTranscriber