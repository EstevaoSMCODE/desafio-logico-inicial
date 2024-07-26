let WinBalance = GetWinBalance(99, 9)
let classPerson = Status()
MessageHero()

function GetWinBalance(NumVictories, NumDefeats) {
        return NumVictories - NumDefeats
}
function Status() {
        if (WinBalance < 11) {
                return ("Ferro")
        } else if (WinBalance < 21) {
                return ("Bronze")
        } else if (WinBalance < 51) {
                return ("Prata")
        } else if (WinBalance < 81) {
                return ("Ouro")
        } else if (WinBalance < 91) {
                return ("Diamante")
        } else if (WinBalance < 101) {
                return ("Lendário")
        } else {
                return ("Imortal")
        }    
}
function MessageHero(){
        console.log("O Herói tem de saldo de " + WinBalance + " e está no nível de " + classPerson)
}
        