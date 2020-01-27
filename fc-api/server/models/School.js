import mongoose from 'mongoose'
const Schema = mongoose.Schema

//TODO: Create a schoolSchema with the following types
/*
    name = string
    programs = array of programs
    universityName = string
    departments = array of strings
    campusLocations = string
    schoolType = string
    accreditation = string
    schoolLogo = string
    schoolDescription = string
    totalEnrollment = number
    backgroundColor = string
    gradientColor = array of string
    engineeringDevisionDescription = string
    costPerUnit = array of numbers
*/


export const schoolSchema = new Schema({
    name: String,
    programs: [{type: Schema.Types.ObjectId, ref: "Program"}],
    universityName: String,
    departments: [String],
    campusLocation: String,	
    schoolType: String,
    accreditation: String,
    schoolLogo:	String,
    schoolDescription: String,	
    totalEnrollment: Number,	
    backgroundColor: String,	
    gradientColor: [String],
    engineeringDevisionDescription: String,		
    costPerUnit: [Number]
})

const School = mongoose.model('School', schoolSchema)

export default School