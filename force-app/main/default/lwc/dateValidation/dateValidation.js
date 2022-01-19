import { LightningElement } from 'lwc';

export default class DateValidation extends LightningElement {
startDate
endDate
error
    dateHandler(event){
        // we did it like below not to create 2 handlers so this below can work for both startDate and endDate
        const {name, value} =event.target
        this[name] =value // this.startDate =value or this.endDate

    }
    
    submitHandler(){
        if(this.validateDate(this.startDate, this.endDate)){
            console.log("Data is valid")
        } else{
            this.error = "Start Date cannot be greater than end Date"
        }
    }
    validateDate(startDate, endDate){
        return new Date(startDate).getTime() < new Date(endDate).getTime() 
    }

}