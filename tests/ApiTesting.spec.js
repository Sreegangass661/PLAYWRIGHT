import{test,expect}from'@playwright/test';
test('get request fectch user',async({request})=>{
const response=await request.get('https://jsonplaceholder.typicode.com/users')//send request to the API endpoint and get the response
expect(response.ok()).toBeTruthy()//response store in response variable and check the status code is 200 or not
const data=await response.json()//response convert into json format and store in data variable.key value pair
console.log(data)
expect(data.length).toBeGreaterThan(0)//check the length of the data is greater than 0 or not
    
})

test('post request create user',async({request})=>{
        const response=await request.post('https://jsonplaceholder.typicode.com/users',{//send post request to the API endpoint with payload and get the response
    data:{
        name:"John Doe",
        email:"john.doe@example.com",
        phone:"123-456-7890"
    }
})
expect(response.status()).toBe(201)//response store in response variable and check the status code is 200 or not
const data=await response.json()//response convert into json format and store in data variable.key value pair
console.log(data)
expect(response.body.name).toBe("John Doe")//check the name in the response body is "John Doe" or not
})


test('patch request update user',async({request})=>{
        const response=await request.patch('https://jsonplaceholder.typicode.com/users/11',{ //send patch request to the API endpoint with payload and get the response
    data:{
        
        email:"jane.qqqdoe@example.com",
    }
})
expect(response.status()).toBe(200)//response store in response variable and check the status code is 200 or not
const data=await response.json()//response convert into json format and store in data variable.key value pair
console.log(data)
})


test('put request update user', async ({ request }) => {
  const response = await request.put(
    'https://jsonplaceholder.typicode.com/users/10', // keep id consistent
    {
      data: {
        id: 9,
        name: "Clementina DuBuqueefwef",
        username: "Moriah.Stantonwefwef",
        email: "Rey.Padberg@karina.bizewqe",
        address: {
          street: "Kattie Turnpike",
          suite: "Suite 198",
          city: "Lebsackbury",
          zipcode: "31428-2261",
          geo: {
            lat: "-38.2386",
            lng: "57.2232"
          }
        },
        phone: "024-648-3804",
        website: "ambrose.net",
        company: {
          name: "Hoeger LLC",
          catchPhrase: "Centralized empowering task-force",
          bs: "target end-to-end models"
        }
      }
    })

  expect(response.status()).toBe(200) // PUT usually returns 200

  const data = await response.json()
  console.log(data);
})

test.only('DELETE request update user', async ({ request }) => {
  const response = await request.delete('https://jsonplaceholder.typicode.com/users/10', // keep id consistent
    {
      
    })

  expect(response.status()).toBe(200) // PUT usually returns 200

  const data = await response.json()
  console.log(data);
})