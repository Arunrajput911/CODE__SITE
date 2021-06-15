const Jobs = require("../../models/carrers");

const careers = (req,res) => {

    const {title,department,workType,remote,duration,stipend,applyBy,startedBy,appliedBy,appliedOn,skills,jobDiscription,whoCanApply,totalOpening,perks} = req.body;

    try {
        
        const newJob = new Jobs({title,department,workType,remote,duration,
            stipend,applyBy,startedBy,appliedBy,
            appliedOn,skills,jobDiscription,whoCanApply,
            totalOpening,perks});
        newJob.save()
        res.status(200).send({msg:'success'});
    

    } catch (error) {
        console.log(error)
        res.status(500).send({errorMsg:"Status-Code:500,Internal Servr Error!"})
    }
}


module.exports = careers;