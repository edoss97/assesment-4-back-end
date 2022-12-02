let fortuneList = ['A faithful friend is a strong defense.','A dubious friend may be an enemy in camouflage','A fresh start will put you on your way','A friend asks only for your time not your money','A golden egg of opportunity falls into your lap this month']



module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortuneList: (req,res) => {
        res.status(200).send(fortuneList)
    },
    deleteFortune: (req,res) => {
        let { index } = req.params
        fortuneList.splice(index,1)
        res.status(200).send(fortuneList)
    },
    addFortune: (req,res) => {
        console.log(req.body)
        let { fortune } = req.body
        fortuneList.push(fortune)
        res.status(200).send(fortuneList)
    },

}