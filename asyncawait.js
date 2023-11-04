console.log('person1: shows ticket');
console.log('person2: shows ticket');

// const promiseWifeBringingTickets = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('ticket');
//     }, 3000);  
// })

// const getPopcorn = promiseWifeBringingTickets.then((t)=>{
//     // console.log(`person3: shows ${t}`);
//     console.log('wife: i have the tickets');
//     console.log('husband: we should go in');
//     console.log('wife: no i am hungry');
//     return new Promise((resolve, reject) => {
//         resolve(`${t} Popcorn`)
//     })
// })

// const getbutter = getPopcorn.then((t)=>{
//     console.log('husband: i got some popcorn');
//     console.log('husband: we should go in');
//     console.log('wife: i need butter for the popcorn');
//     return new Promise((resolve, reject) => {
//         resolve(`${t} butter`)
//     })
// })

// getbutter.then((t)=>console.log(t));
const preMovie = async () => {
    const promiseWifeBringingTickets = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('ticket');
        }, 3000);  
    })
    // const getPopcorn = new Promise((resolve, reject) => resolve(`Popcorn`));
    // const getbutter = new Promise((resolve, reject) => resolve(`butter`));
    // const getcandy = new Promise((resolve, reject) => resolve(`candy`));
    // const getcolddrinks = new Promise((resolve, reject) => resolve(`colddrinks`));

    let ticket;
    try {
        ticket = await promiseWifeBringingTickets;
        
    } catch (error) {
        ticket ='cannot see the movie';
    }

    // let [popcorn, butter, candy, colddrinks] = await Promise.all([getPopcorn,getbutter,getcandy,getcolddrinks])
    // console.log(`${popcorn}, ${butter}, ${candy}, ${colddrinks}`);
    // console.log(`wife: i have the ${ticket}`);
    // console.log('husband: we should go in');
    // console.log('wife: no i am hungry'); 

    // let popcorn = await getPopcorn;

    // console.log(`husband: i got some ${popcorn}`);
    // console.log('husband: we should go in');
    // console.log('wife: i need butter for the popcorn');
    
    // let butter = await getbutter;

    // console.log(`husband: i got some ${butter} on popcorn`);
    // console.log('husband: anything else darling');
    // console.log('wife: lets go we are getting late');
    // console.log('husband: thankyou for the reminder')

    // let colddrinks = await getcolddrinks;

    // console.log(`wife: ooh i need some ${colddrinks} to drink`);
    // console.log('husband: ok i will get it just a minute *rushs* ');
    // console.log('wife: it is already to late lets go ');
    // console.log('husband: ok come');
   

    return ticket;
}
preMovie().then((m) =>{
    console.log(`person3: shows ${m}`)
})

console.log('person4: shows ticket');
console.log('person5: shows ticket');

