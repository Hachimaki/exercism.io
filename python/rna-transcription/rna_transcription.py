def to_rna(dna_strand):
    rna = ""

    for character in dna_strand:
        if character.upper() == "A":
            rna += "U"
        elif character.upper() == "T":
            rna += "A"
        elif character.upper() == "C":
            rna += "G"
        elif character.upper() == "G":
            rna += "C" 
        else:
            raise ValueError("{character} is not a valid DNA input")

    return rna