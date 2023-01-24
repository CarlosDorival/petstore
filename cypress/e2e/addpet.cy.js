const endPointadd = 'https://petstore.swagger.io/v2/pet';
const endPointconsult = 'https://petstore.swagger.io/#/pet/getPetById';
const endPointupdate = 'https://petstore.swagger.io/#/pet/updatePet';


const addpetObject ={
    
        "id": 15,
        "category": {
          "id": 10,
          "name": "perro"
        },
        "name": "bambino",
        "photoUrls": [
          "https://petstore.swagger.io/v2/pet/15/uploadImage"
        ],
        "tags": [
          {
            "id": 11,
            "name": "prueba"
          }
        ],
        "status": "available"   
}

const updatepetObject ={
    
        "id": 15,
        "category": {
          "id": 10,
          "name": "perro"
        },
        "name": "bambinoactualizado",
        "photoUrls": [
          "https://petstore.swagger.io/v2/pet/15/uploadImage"
        ],
        "tags": [
          {
            "id": 11,
            "name": "pruebactualizada"
          }
        ],
        "status": "available"
      
}


const addDog = addpetObject =>{
    cy.request('POST',endPointadd,addpetObject)
}

const updateDog = updatepetObject =>{
    //cy.request('PUT','${endPointadd}/${addpetObject.id}',addpetObject)
}

describe('API TESTING PETSTORE',()=>{

    it('add a pet',()=>{
        addDog(addpetObject);

        cy.request('GET','https://petstore.swagger.io/v2/pet/15');
        cy.request('https://petstore.swagger.io/v2/pet/15').then((response)=>{
            expect(response.status).to.eq(200);
        })
    });

    it('update a pet',()=>{
        addDog(addpetObject);
        updateDog(updatepetObject);
        cy.request('GET','https://petstore.swagger.io/v2/pet/15');
        cy.request('https://petstore.swagger.io/v2/pet/15').then((response)=>{
            expect(response.status).to.eq(200);
        })
    });
})