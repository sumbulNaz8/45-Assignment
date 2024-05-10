//Exercise no 1
let installed: string ="Node.js,TypeScript and VSCode has been installed";
console.log( installed);

//Exercise no 2
let personsName1:string="ERIC";
console.log(`"Hellow ${personsName1}  would you like to learn some Python today?""`);

//Exercise no 3
//lower case
let personName: any ="eric";
console.log("lowercase:", personName.toLowerCase());
//uppercase
personName:"ERIC";
console.log("uppercase:",personName.toLocaleUpperCase());

//Title case
function toTitleCase(text: string): string {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}
const inputText2: string = "Eric";
const titleCaseText: string = toTitleCase(inputText2);
console.log(titleCaseText); // Output: Eric

//Exercise no 4
let author : string = "Albert Einstein";
let quote : string = "A person who never made a mistake never tried anything new.";
console.log(` ${author}  once said  "${quote} "`);

//Exercise no 5 
let famous_personsName : string = "Allama Iqbal";
let famous_quote : string = "The scientific observer of Nature is a kind of mystic seeker in the act of prayer.";
console.log(`${famous_personsName} once said "${famous_quote} "`);

//Exercise no 6
let strippingName : string=`\n\t Eric`;
console.log (strippingName);
let stripping:string = strippingName.trim();
console.log(stripping);

//Exercise no 7
let addition :number = 5 + 3;
let subtraction:number = 10 - 2;
let multiply:number = 2 * 4;
let division:number = 24 / 3;
console.log(`${addition} , ${subtraction} , ${multiply} , ${division}`);

//Exercise no 8
console.log(5+3);
console.log(10-2);
console.log(2*4);
console.log(24/3);

//Exercise no 9
let favoriteNumber:number = 1;
let favoriteNumbermessage: string="my favorite number is  ";
console.log(favoriteNumbermessage +  favoriteNumber);

//Exercise no 10
console.log("hellow Eric simple program");
//this programe will run simple code hellow Eric 

console.log(5+3);
//this program run  will addition 

//Exercise no 11
let names1 : string[] = ['Tooba' , 'samrah' ,  'Hammad' , 'sanfiya'];
console.log(names1);

//Exersise no 12
let names2:string[]=['Tooba: '  , 'samrah: ' ,  'Hammad: ' , 'sanfiya: '];
let message:string="kal governor house mein class hai:";
//foreach=>console.log(message  + names2)
for(let i=0; i<names2.length; i++){
    console.log( names2[i]  + message);
}
//Exercise no 13
let transportation:string[]=[' Honda motorcycle' , 'Train' ,  'Scooter' , 'Ship', 'Taxi'];
let favorite_transportion_message: string="I would like to own a ";
for(let i=0; i<transportation.length; i++){
console.log(favorite_transportion_message + transportation[i]);
}
//Exercise no 14
let guest_List:string[]=['Tahir:' ,  'Naeem: ' ,   'Hammad:' ];
let guest_List_message: string=" i invite to you dinner for thursday ";
for(let i=0; i<guest_List.length; i++){
console.log('Assalam o alikum\n'+ guest_List[i] + guest_List_message + '\nThanks\n');
}
//Exercise no15
let not_present:string='Hammad';
let new_guest:string='Shahid afridi';
let new_guest_list:string[]=['Tahir: ' ,  'Naeem: ' ,   'Shahid afridi:' ];
let new_guest_list_message:string="I invite to you dinner for tomorrow";
//let not_present_guest_list:string[]= ['2'];
for(let i=0; i<new_guest_list.length; i++){
console.log(' Assalam o alikum:\n'   +   new_guest_list[i]  +  new_guest_list_message + '\nThanks\n');
 }
console.log(`Mr ${not_present} will not coming to tomorrow dinner`);

//Exercise no 16
let more_guest:string[]=['Tahir: ' ,  'Naeem: ' ,   'Shahid afridi:']
more_guest.unshift('Moeen:');
more_guest.splice(more_guest.length/2,0, "Raza")
more_guest.push("Ahmed")
for(let i=0; i<more_guest.length; i++){
console.log(' Assalam o alikum:\n'   +  more_guest[i]  +',\ni found a bigger table thats why i invit to you\n Thanks\n');
}
//Exercise no 17
let shrinkGuest:string[]=['Tahir: ' ,  'Naeem: ' ,   'Shahid afridi:']
console.log(" Unfortunately , I can invite only two people for dinner.");
while (shrinkGuest.length > 2){
    let removed_guest = shrinkGuest.pop();
    console.log(`Sorry Sir.${removed_guest}, I can not invited for dinner .`);
}
for(let i=0; i<shrinkGuest.length; i++){
    console.log(' Assalam o alikum:\n'   +  shrinkGuest[i]  +',\n You are still invited on tomorrow dinner \n Thank you');
}
shrinkGuest.splice(0,shrinkGuest.length);
console.log(shrinkGuest)

//Exercise no 18
let places: string[]=['russia', 'london' , 'dubai','america','saudia' ,]
console.log('original:' +places);
console.log('copy' +[...places].sort());
console.log('original:' +places);
console.log('copy' +[...places].sort().reverse());
console.log('copy' +[...places].sort().reverse());
console.log('copy' +[...places].sort());
console.log('copy' +[...places].sort().reverse());

//Exercise no 19
let dinnerGuest:string[]=['Tahir' ,  'Naeem' ,   'Hammad' ];

console.log(`Assalam o alikum:\n i  am inviting ${dinnerGuest} finally , dinner for night\n Thanks`);

//Exercise no 20
let countries:string[]=['Chaina','Russia', 'America', 'UAE'];
console.log("I like to visit countries",countries );

    
//Exercise no 21
let book:{
    title : string ,author : string , yearPublished : number
}={
    title:"Hamaray Quaid-E-Azam",
    author:" Ijaz Ahmad",
    yearPublished:2002
};
console.log(`Book info ${book.title} by ${book.author} ,published in ${book.yearPublished}`);

//Exercise no 22
let array:(string |number) []=['Rehman','Rashid', 'Zeeshan' , 'Taimoor',];
console.log(array[5]);
console.log(array[3]);

//Exercise no 23
let car:string="subaru";
//Test 1: Equals to comparison  (True)
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');
//Test 2: Greater than or equal to comparison (True)
console.log("Is car >= 'subaru'? I predict True.");
console.log(car >= 'subaru');
//Test 3: Less than  or equal to comparison  (True)
console.log("Is car <= 'subaru'? I predict True.")
console.log(car <= 'subaru');
//Test 4: Equal value or equal type comparison (True)
console.log("Is car === 'subaru'? I predict True.");
console.log(car === 'subaru');
//Test 5: Checking truthiness . (True)
console.log("Is car ? I predict True. ");
console.log(car);
//Test 6:not Equal to Comparision   (False)
console.log("Is car != 'subaru'? I predict False.");
console.log(car != 'subaru');
//Test 7:Greater than comparison  (False)
console.log("Is car > 'subaru'? I predict False. ");
console.log(car  > 'subaru');
//Test 8:Less than comparison  (False)
console.log("Is car < 'subaru'? I predict False.");
console.log(car < 'subaru');
//Test 9:not equal value or not equal type  (False)
console.log("Is car !== 'subaru'? I predict False. .");
console.log(car !== 'subaru');
//Test 10: Checking Falsiness  (False)
console.log("Is !car ? 'subaru'? I predict False.");
console.log(!car  );

//Exercise no 24
//Equility and inequility with string
console.log("apple"=="apple");//True
console.log("'apple'=='Apple'");//False
//Lower case function
console.log("Apple".toLocaleLowerCase()=="apple")//True
//Numerical tests
console.log(10>5)//True
console.log(2<1)//False
//Tests using "and" and "or" operators
console.log(true&&false)//False
console.log(true||false)//False
//Test whether an item is in a array 
let fruits=["apple", "banana" , "cherry"];
console.log("is 'apple' in fruit?");
console.log(fruits.includes("apple"))//True
//Test whwhether an item is not in a array 
console.log("Is 'mango' not in fruits?");
console.log(fruits.includes("mango"))//True

//Exercise no 25
let alienColor:string="green";
if(alienColor=="green"){
    console.log("The player just earned 5 points.");
}
alienColor="red";
if(alienColor=="green"){
    console.log("The player just earned 5 points.");
}

//Exercise no 26
let alienColor2="green";
if(alienColor2=="green"){
    console.log("The player just earned 5 points for shooting the alien.");
}
else{
    console.log("The player just earned 10 points")
}
alienColor2="yellow";
if( alienColor2=="green"){
    console.log("The player just earned 5 points for shooting the alien.");
}
else{
    console.log("The player just earned 10 points")
}

//Exercise no 27
//version 1
let alienColor3:string="green";
if(alienColor3=="green"){
    console.log("The player just earned 5 points.");
}
else if(alienColor3=="yellow"){
    console.log("The player just earned 10 points.");
}
else if(alienColor3=="red"){
    console.log("The player just earned 15 points.");
}
else{
    console.log("Please select right color");
}
//version 2
alienColor3="yellow";
if(alienColor3=="green"){
    console.log("The player just earned 5 points.");
}
else if(alienColor3=="yellow"){
    console.log("The player just earned 10 points.");
}
else if(alienColor3=="red"){
    console.log("The player just earned 15 points.");
}
else{
    console.log("Please select right color.")
}
//version 3
alienColor3="red";
if(alienColor3=="green"){
    console.log("The player just earned 5 points.");
}
else if(alienColor3=="yellow"){
    console.log("The player just earned 10 points.");
}
else if(alienColor3=="red"){
    console.log("The player just earned 15 points.");
}
else{
    console.log("Please select right color.")
}

//Exercise no 28
let age: number=24;
if(age<2){
console.log("The person is a baby.")
}
else if(age>2 && age<4){
    console.log("the person is a toddler")
}
else if(age>4 && age<13){
    console.log("the person is a kid")
}
else if(age>13 && age<20){
    console.log("the person is a teenager")
}
else if(age>20 && age<65){
    console.log("the person is a adult")
}
else{
    console.log("the person is a elder")
}

//Exercise no 29
let favorite_fruits:String[]=['mango','apple','bananas!']
if(favorite_fruits.includes('mango')){
    console.log('I really like mango')
}
if(favorite_fruits.includes('apple')){
    console.log('I really like apple')
}
if(favorite_fruits.includes('grapes')){
    console.log('I really like grapes')
}
if(favorite_fruits.includes('orange')){
    console.log('I really like orange')
}
if(favorite_fruits.includes('bananas!')){
    console.log('I really like bananas!')
}

//Exercise no 30
let users: string[]=['admin', 'tooba', 'samrah', 'hammad', 'sunfiya']
for(let user of users){
    if(user=='admin'){
        console.log('Hello admin, would you like to see a status report?')
    }
    else{
        console.log(`Hello ${user}, thank you for logging in again`)
    }
}

//Exercise no 31
let usersnames:string[]=[]
if (usersnames.length === 0 ){
    console.log("We need to find some users!")
}else{
}

//Exercise no 32
let current_users:string []=["user1" , "admin" , "user3" , "user4" , "user5"  ]
let new_users:string[]=["user1" , "admin" , "user6" , "user7" , "user8"]
new_users.forEach(new_users => {
    if (current_users.some(current_users => current_users.toLocaleLowerCase()===new_users.toLocaleLowerCase())){
        console.log(`${new_users} will need to enter a new username.`);
    }else{
        console.log(`${new_users} is available.`);
    }
    });

//Exercise no 33
let numbers:number[]=[1, 2 , 3 , 4 , 5 , 6  , 7 , 8 ,  9 ]
numbers.forEach(number => {
let suffix = "th";
if (number === 1 ){
suffix = "st";
}else if (number === 2 ){
suffix = "nd"
}else if(number === 3 ){
suffix = "rd"
}
console.log(`${number} ${suffix}`);
});

//Exercise  no 34
let pizzas : string [] =["pepproni" , "chicken bbq" , "bbq tikqa"]
pizzas.forEach(pizza=>{
console.log(`I like ${pizza} pizza.`);
})
console.log("I really love pizza!");

//Exercise no 35
let  animals : String [] = ["dog", "cat","rabbit"];
animals .forEach(animal=>{
console.log(`A ${animal} would make a great pet .`)
});
console.log("tail is common in these animals")
console.log("rabbit is a  great pet!");

//Exercise no 36
function make_shirt(size:string , message:string){
console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
}
make_shirt("medium", "Code is Life");

// Exercise no 37
function make_shirt2 (size:string = "large", text :string = "I Love type script"):void{
console.log(`\n  you  have order a ${size} shirt that says ${text}`)
}
make_shirt2('medium', "I need a big shirt");

// Exercise no 38
function describe_city(city:string , country: string = "pakistan"){
console.log(`${city} , is in ${country} .`)
}
describe_city("karachi")
describe_city("lahore")
describe_city("Tokyo" , "Japan")

//Exercise no 39
function city_country (city:string , country:string): string{
    return `${city} , ${country}`;
}
console.log(city_country("Lahore" , "Pakistan "));
console.log(city_country("Tokyo"  ,   "Japan" ));
console.log(city_country("Paris"  , " France" ));

 /*//Exercise no 40
function make_Album (artist :string ,title:string,tracks ? : number)
 {
    let album = {artist , title};
    if (tracks){
        album ['tracks'] = tracks ;
    }
    return album;
 }
 console.log(make_Album("Atif Aslam", "Doorie"));
 console.log(make_Album("Rahat fateh ali  " , "Tera mera sath"));
 console.log(make_Album("Ali Zafar" , "Jhoom"));


 //Exercise no 41
 let magicians : string[]= [ "Alice " , "David ", "Chris"];
 function show_magicians(magicians:string[]){
    magicians.forEach(magicians =>
        {
            console.log(magicians);
            
        }
    );
 }
 show_magicians(magicians);


 //Exercise no 42 
 function make_great(magicians:string[]){
    for (let i = 0; i < magicians.length; i++){
        magicians[i] = 
        magicians[i] + "the Great";
    }
 }
 make_great(magicians);
 show_magicians(magicians);

 //Exercise no 43
 let magicians2: string[]= [ "Alice " , "David ", "Chris"];
 function make_great1(magicians:string[]):string[]{
    let greatMagicians:string[]= [];
    magicians.forEach(magicians =>
    {
        greatMagicians.push(`${magicians} the Great`);
    });
    return greatMagicians;
 }
 let greatMagicians = make_great(magicians2.slice());
 console.log("Original magicians:");
 show_magicians(magicians2);
 console.log("Great magicians:");
 show_magicians(greatMagicians);

 //Exercide no 44
 function make_sandwich(...items: string[]):void{
    console.log(`Making a sandwish with: ${items.join(',')}.`)
 }
 
make_sandwich('capsicum','tomato', 'chicken')
make_sandwich('beef','cheese',)
make_sandwich('garlic chicken', 'mayo sauce')

 //Exercise no 45
 function make_car(manufacturer:string , model:string, ...option:[string,any][]){
    let car = {
        manufacturer , model
    };
    option.forEach(([key,value])=> (car[key] =value))
    return car
 }
 console.log(make_car("Toyota", "Corolla", ["colour","red"],["year", 2020]));
 console.log(make_car("Ford", "Fiesta", ["colour","blue"],["sunroof", true]));*/

 
 









 

 
