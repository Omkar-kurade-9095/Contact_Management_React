import axios from "axios";

export class ContactSercvices{
    static serverURl=`http://localhost:8000`;
    static getAllContacts(){
        let dataUrl= `${this.serverURl}/contacts`
        return axios.get(dataUrl)
    }

    static getContact(contactId){
        let dataUrl= `${this.serverURl}/contacts/${contactId}`
        return axios.get(dataUrl)
    }

    static addConatact(contact){
        let dataUrl= `${this.serverURl}/contacts`
        return axios.post(dataUrl,contact)
    }

    static updateContact(contact,contactId){
        let dataUrl= `${this.serverURl}/contacts/${contactId}`
        return axios.put(dataUrl,contact)
    }

    static deleteContact(contactId){
        let dataUrl= `${this.serverURl}/contacts/${contactId}`
        return axios.delete(dataUrl)
    }
}