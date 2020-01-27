import mongoose from 'mongoose'
const Schema = mongoose.Schema


//TODO: Create a programSchema with the following types
/*
    name = string,
    school = should refrence a school
    collegeOrDeptName = string,
    degreeType = string,
    degreeLevel = string,
    schoolName = string,
    deliveryMode = string,
    requiredCredits = number,
    timeToComplete = string,
    schoolLogo = string,
    costPerCredit = number,
    costPerDegree = number,
    programUrl = string,
    programDescription = string,
    programAudience = string,
    tags: = array of string
    applicationDeadline = string
*/

export const programSchema = new Schema({
    name: String,
    school: {type: Schema.Types.ObjectId, ref: "School"},
    collegeOrDeptName: String,
    degreeType: String,
    degreeLevel: String,
    schoolName: String,
    deliveryMode: String,
    requiredCredits: Number,
    timeToComplete: String,
    schoolLogo: String,
    costPerCredit: Number,
    costPerDegree: Number,
    programUrl: String,
    programDescription: String,
    programAudience: String,
    tags: [String],
    applicationDeadline: String
})

const Program = mongoose.model('Program', programSchema)

export default Program