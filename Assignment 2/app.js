
        // Question No 01: Write a function that creates a closure and returns a function that can add
        // a specific number to any number passed to it. For example, if the closure is
        // created with 5, the returned function should add 5 to any number passed
        // to it 

        // function addNumber(number){
        //     return function(num){
        //         return num + number;
        //     }
        // }
        // const addFive = addNumber (5);
        // const result = addFive(7);
        // const result = addFive(10);
        // console.log(result);

        // --------------------------------------------------------------

        // Question No 02: Write a recursive function that searches an array for a specific value. The
        // function should return true if the value is found, and false if it is not. You
        // can assume that the array is not nested.

        //  function serArray(arr, val){
        //     if(arr.length===0){
        //         return false;
        //     }
        //     if(arr[0]===val){
        //         return true;
        //     }
        //     return serArray (arr.slice(1), val);
        //  }
        //  console.log(serArray([1,2,3,4,5],3)); //true
        //  console.log(serArray([1,2,3,4,5],5)); //true
        //  console.log(serArray([1,2,3,4,5],6)); //false
        //  console.log(serArray([1,2,3,4,5],6)); //false

        // --------------------------------------------------------------

        // Question No 03: Write a function that adds a new paragraph element to the bottom of an
        // HTML document. The function should take a string argument that will be
        // used as the text content of the new paragraph element.

        // function addPara(text) {
        //     const newPara = document.createElement('p');
        //     newPara.textContent = text;
        //     const paraDiv = document.querySelector('#paragraph');
        //     paraDiv.appendChild(newPara);
        // }
        // const paraText = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse facere quae quas doloremque sapiente debitis iure iusto dolore officiis sed maxime, cupiditate laborum rerum eveniet quos obcaecati odio. Voluptas, consequatur.";
        // addPara(paraText);

        // --------------------------------------------------------------

        // Question No 04: Write a function that adds a new list item to an unordered list in an HTML
        // document. The function should take a string argument that will be used as
        // the text content of the new list item.

        // function addListItem(text) {
        //     const newListItem = document.createElement('li');
        //     newListItem.textContent = text;
        //     const uList = document.querySelector('#list');
        //     uList.appendChild(newListItem);
        // }
        // const listItem = "List Item Five";
        // addListItem(listItem);

        // --------------------------------------------------------------

        // Question No 05: Write a function that changes the background color of an HTML element.
        // The function should take two arguments: the first argument is a reference
        // to the HTML element, and the second argument is a string representing
        // the new background color.

        function bgChange (elementRef, color){
            elementRef.style.backgroundColor = color;
        }
        const list = document.querySelector('#list');
        bgChange(list, 'red');

        // --------------------------------------------------------------

        // Question No 06: Write a function that saves an object to localStorage. The function should
        // take two arguments: the first argument is a string representing the key to
        // use for storing the object, and the second argument is the object to store.

        // function saveObjToLocalSto(key, object){
        //     localStorage.setItem(key,JSON.stringify(object));
        // }
        // const myObj = {
        //     name : 'Riaz',
        //     age  : 22
        // };
        // saveObjToLocalSto('mykey', myObj);
        // const retreiveObj = JSON.parse(localStorage.getItem("mykey"));
        // console.log(retreiveObj);

        // --------------------------------------------------------------


        // Question No 07: Write a function that retrieves an object from localStorage. The function
        // should take one argument, which is a string representing the key used to
        // store the object. The function should return the object.
        // function getObjFromLocalSto(key) {
        //     var item = localStorage.getItem(key);
        //     return JSON.parse(item);
        // }
        // getObjFromLocalSto('mykey');
        // const retreiveObj = getObjFromLocalSto("mykey");
        // console.log(retreiveObj);

        // --------------------------------------------------------------

        // Question No 08: Write a function that takes an object and saves each property to
        // localStorage using the property name as the key and the property value as
        // the value. The function should also retrieve the object from localStorage
        // and return it as a new object.

        // function saveObjPropToLocalStorage(obj) {
        //     for (var prop in obj) {
        //         if (obj.hasOwnProperty(prop)) {
        //             localStorage.setItem(prop, obj[prop]);
        //         }
        //     }
        //     var keys = Object.keys(localStorage);
        //     var retrievedObj = {};
        //     keys.forEach(function (key) {
        //         if (obj.hasOwnProperty(key)) {
        //             retrievedObj[key] = localStorage.getItem(key);
        //         }
        //     });
        //     return retrievedObj;
        // }
        // const myObject = { name: "Riaz", age: 22 };
        // const retrievedObject = saveObjPropToLocalStorage(myObject);
        // console.log(retrievedObject);
