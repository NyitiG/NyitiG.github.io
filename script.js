// const
const englishLang =document.getElementById("english");
const hunLang=document.getElementById('hun');
const h1TextTag= document.getElementById("H1");
const toDoListContainerBody = document.querySelector('#toDoListContainerBody');
const pCreat = document.createElement('p');
const pTextp = document.getElementById("textp");
const text1Div = document.getElementById('text1');
const inputText =document.getElementById('inputContainerInput');
const toDoListContainerHeaderPar=document.getElementById('toDoListContainerHeaderPar');
const addToDoList = document.getElementById('addToDoList');
const deleteAll = document.querySelector('#deleteAll');
const deletequestion =document.getElementById('deletequestion');
const deleteYesAllList= document.getElementById('yes');
const deleteNoAllList =document.getElementById('no');
const changeGenderStyleSelector = document.querySelectorAll('[data-gender]');
const manIconTag = document.querySelector('#man');
const femaleIconTag = document.querySelector('#female');

// let
const backgroundColor1Selector = document.querySelectorAll('.backgroundColor1')
const backgroundColor2Selector = document.querySelector('.backgroundColor2')
const backgroundColor1GSelector = document.querySelectorAll('.backgroundColor1G')
const backgroundColor2GSelector = document.querySelector('.backgroundColor2G')
const color1Selector = document.querySelectorAll('.color1')
let inputTextValue="";
let containerBodyTemplate="";

// addEventListener
englishLang.addEventListener("click", changeEnglish);
hunLang.addEventListener("click", changeHun);
manIconTag.addEventListener("click", changeGenderStyleValid);
femaleIconTag.addEventListener("click", changeGenderStyleValid)
inputText.addEventListener("keyup", inputTextLoad);
inputText.addEventListener("keypress", validEnt);
addToDoList.addEventListener("click", createContainerBody);
deleteAll.addEventListener("click", deleteAllToDoListContainerBody);

// function
function changeEnglish() {
    document.documentElement.setAttribute("lang", "en");
    h1TextTag.innerHTML="ToDoList";
    inputText.placeholder="Add your new todo";
    toDoListContainerHeaderPar.innerHTML="Task Name";
}
function changeHun() {
    document.documentElement.setAttribute("lang", "hu");
    h1TextTag.innerHTML="Teendők Listája";
    inputText.placeholder="Teendő neve";
    toDoListContainerHeaderPar.innerHTML="Teendők";
}
function changeGenderStyleValid(event) {
    let checkIdValid =this.dataset.gender;
    let bodyDataGender= changeGenderStyleSelector[0].dataset.gender;
    if (checkIdValid==bodyDataGender) {
        return;
    } else {
        changeGenderStyle(checkIdValid);
    }    
}
function changeGenderStyle(checkIdValid) {
    let checkId =checkIdValid;
    let selectorTag = changeGenderStyleSelector;
    const backgroundColor1Selector = document.querySelectorAll('.backgroundColor1');
    const backgroundColor2Selector = document.querySelector('.backgroundColor2');
    const backgroundColor1GSelector = document.querySelectorAll('.backgroundColor1G');
    const backgroundColor2GSelector = document.querySelector('.backgroundColor2G');
    const color1Selector = document.querySelector('.color1');
    const color1GSelector = document.querySelector('.color1G');
    const color3Selector = document.querySelectorAll('.color3');
    const color3GSelector = document.querySelectorAll('.color3G');
    const color4Selector = document.querySelectorAll('.color4');
    const color4GSelector = document.querySelectorAll('.color4G');
    const color5Selector = document.querySelectorAll('.color5');
    const color5GSelector = document.querySelectorAll('.color5G');
    const borderBottomSelector = document.querySelectorAll('.borderBottom');
    const borderBottomGSelector = document.querySelectorAll('.borderBottomG');
    const inputContainerInputBorderSelector = document.querySelector('.inputContainerInputBorder');
    const inputContainerInputBorderGSelector = document.querySelector('.inputContainerInputBorderG');
    const toDoListContainerHeaderBorderBottomSelector = document.querySelector('.toDoListContainerHeaderBorderBottom');
    const toDoListContainerHeaderBorderBottomGSelector = document.querySelector('.toDoListContainerHeaderBorderBottomG');
    if (checkId=="man") {
        let changeBackGround1G = backgroundColor1GSelector;
        for (let index = 0; index < changeBackGround1G.length; index++) {
            changeBackGround1G[index].classList.add("backgroundColor1");
            changeBackGround1G[index].classList.remove("backgroundColor1G");
        }
        let changeColor3G = color3GSelector;
        for (let index = 0; index < changeColor3G.length; index++) {
            changeColor3G[index].classList.add('color3');
            changeColor3G[index].classList.remove('color3G');
        }
        let changeColor4G = color4GSelector;
        for (let index = 0; index < changeColor4G.length; index++) {
            changeColor4G[index].classList.add('color4');
            changeColor4G[index].classList.remove('color4G');
        }
        let changeColor5G = color5GSelector;
        for (let index = 0; index < changeColor5G.length; index++) {
            changeColor5G[index].classList.add('color5');
            changeColor5G[index].classList.remove('color5G');
        }
        let changeBorderBottomG =borderBottomGSelector;
        for (let index = 0; index < changeBorderBottomG.length; index++) {
            changeBorderBottomG[index].classList.add('borderBottom');
            changeBorderBottomG[index].classList.remove('borderBottomG');
        }
        selectorTag[0].dataset.gender="man";
        backgroundColor2GSelector.classList.add("backgroundColor2");
        backgroundColor2GSelector.classList.remove("backgroundColor2G");
        color1GSelector.classList.add("color1");
        color1GSelector.classList.remove("color1G");
        inputContainerInputBorderGSelector.classList.add("inputContainerInputBorder");
        inputContainerInputBorderGSelector.classList.remove("inputContainerInputBorderG");
        toDoListContainerHeaderBorderBottomGSelector.classList.add("toDoListContainerHeaderBorderBottom");
        toDoListContainerHeaderBorderBottomGSelector.classList.remove("toDoListContainerHeaderBorderBottomG");
    } else {
        let changeBackGround1 = backgroundColor1Selector;
        for (let index = 0; index < changeBackGround1.length; index++) {
            changeBackGround1[index].classList.add("backgroundColor1G");
            changeBackGround1[index].classList.remove("backgroundColor1");
        }
        let changeColor3 = color3Selector;
        for (let index = 0; index < changeColor3.length; index++) {
            changeColor3[index].classList.add('color3G');
            changeColor3[index].classList.remove('color3');
        }
        let changeColor4 = color4Selector;
        for (let index = 0; index < changeColor4.length; index++) {
            changeColor4[index].classList.add('color4G');
            changeColor4[index].classList.remove('color4');
        }
        let changeColor5 = color5Selector;
        for (let index = 0; index < changeColor5.length; index++) {
            changeColor5[index].classList.add('color5G');
            changeColor5[index].classList.remove('color5');
        }
        let changeBorderBottom =borderBottomSelector;
        for (let index = 0; index < changeBorderBottom.length; index++) {
            changeBorderBottom[index].classList.add('borderBottomG');
            changeBorderBottom[index].classList.remove('borderBottom');
        }
        selectorTag[0].dataset.gender="female";
        backgroundColor2Selector.classList.add("backgroundColor2G");
        backgroundColor2Selector.classList.remove("backgroundColor2");
        color1Selector.classList.add("color1G");
        color1Selector.classList.remove("color1");
        inputContainerInputBorderSelector.classList.add("inputContainerInputBorderG");
        inputContainerInputBorderSelector.classList.remove("inputContainerInputBorder");
        toDoListContainerHeaderBorderBottomSelector.classList.add("toDoListContainerHeaderBorderBottomG");
        toDoListContainerHeaderBorderBottomSelector.classList.remove("toDoListContainerHeaderBorderBottom");
    }
}
function inputTextLoad() {
    inputTextValue= inputText.value;
}
function validEnt(event) {
    if (event.keyCode == 13) {
        createContainerBody();
    }
}
function createContainerBody() {
    inputText.value="";
    containerBodyTemplate=toDoListContainerBody.innerHTML;
    let inputValueTemp=inputTextValue;
    let containerTemp="";
    if (changeGenderStyleSelector[0].dataset.gender == "female") {
        let containerTempa= `
    <div id="" class="displayFlexRow jusConSpacBetw toDoListTextEventContainer deleteContainer borderBottomG " >
                    <p id="" class="fontLibreText fontSize1dot5 text"  contenteditable="false">${inputValueTemp}</p>
                    <div id="toDoListEventContainer">
                        <ion-icon class="fontSize1dot5 pencil" name="pencil-outline"></ion-icon>
                        <ion-icon class="fontSize1dot5 alertIcon" name="alert-outline"></ion-icon>
                        <ion-icon class="fontSize1dot5 checkIcon" name="checkmark-outline"></ion-icon>
                        <ion-icon class="fontSize1dot5 trashIcon" name="trash-outline"></ion-icon>
                    </div>
                </div>
    `;
    containerTemp=containerTempa;
    } else {
        let containerTempb= `
    <div id="" class="displayFlexRow jusConSpacBetw toDoListTextEventContainer deleteContainer borderBottom " >
                    <p id="" class="fontLibreText fontSize1dot5 text"  contenteditable="false">${inputValueTemp}</p>
                    <div id="toDoListEventContainer">
                        <ion-icon class="fontSize1dot5 pencil" name="pencil-outline"></ion-icon>
                        <ion-icon class="fontSize1dot5 alertIcon" name="alert-outline"></ion-icon>
                        <ion-icon class="fontSize1dot5 checkIcon" name="checkmark-outline"></ion-icon>
                        <ion-icon class="fontSize1dot5 trashIcon" name="trash-outline"></ion-icon>
                    </div>
                </div>
    `;
    containerTemp=containerTempb;
    }
    console.log(containerTemp)
    let containerBodyTemp = containerBodyTemplate+containerTemp;
    toDoListContainerBody.innerHTML=containerBodyTemp;
    textEditAllowed();
    alertAllowed();
    taskIsDone();
    deleteRole();
}
function deleteAllToDoListContainerBody() {
   toDoListContainerBody.innerHTML="";
}
function textEditAllowed() {
    const pTextTag = document.querySelectorAll('.text');
    const pencilTag = document.querySelectorAll('.pencil');
    for (let i = 0; i < pTextTag.length; i++) {
        pTextTag[i].addEventListener('mouseover', textEdit);
        pTextTag[i].addEventListener('mouseleave', textEditClose);
        pTextTag[i].addEventListener('keypress', validEnter);
        pencilTag[i].addEventListener('click', function() { 
            validEnter();
            let oldText= pTextTag[i].innerHTML;
            pTextTag[i].setAttribute("contenteditable","true");
        });
    }
}
function textEdit(event) {
    event.preventDefault();
 let oldText = this.innerHTML;
 this.setAttribute("contenteditable","true");
}
function textEditClose(event) {
    this.removeAttribute("contenteditable");
}
function validEnter(event) {
    if (event.keyCode == 13) {
        this.removeAttribute("contenteditable");
    }
}
function alertAllowed() {
    const alertTag = document.querySelectorAll('.alertIcon');
    const pTextTag = document.querySelectorAll('.text');
    for (let index = 0; index < alertTag.length; index++) {
        const pTextTagIndex = pTextTag[index]
        alertTag[index].addEventListener('click', function() {
            if (pTextTagIndex.classList.contains('alert') == false) {
                if (changeGenderStyleSelector[0].dataset.gender=="man") {
                     pTextTagIndex.classList.add("alert","color3");
                } else {
                    pTextTagIndex.classList.add("alert","color3G");
                }
            } else {
                if (pTextTagIndex.classList.contains('color3')) {
                    pTextTagIndex.classList.remove("alert","color3");
                } else {
                    pTextTagIndex.classList.remove("alert","color3G");
                }                
            }
        });
    }
}
function taskIsDone() {
    const checkTag = document.querySelectorAll('.checkIcon');
    const pTextTag = document.querySelectorAll('.text');
    for (let index = 0; index < checkTag.length; index++) {
        const pTextTagIndex = pTextTag[index];
        checkTag[index].addEventListener('click', function () {
            if (pTextTagIndex.classList.contains('textLineThrough') == false) {
               if (changeGenderStyleSelector[0].dataset.gender=="man") {
                    pTextTagIndex.classList.add("textLineThrough", "color4");
                } else {
                    pTextTagIndex.classList.add("textLineThrough", "color4G");
                }
            } else {
                if (pTextTagIndex.classList.contains('color4')) {
                    pTextTagIndex.classList.remove("textLineThrough", "color4");
                } else {
                    pTextTagIndex.classList.remove("textLineThrough", "color4G");
                    }
            }
        })
    }
}
function deleteRole() {
    const deleteContainer = document.querySelectorAll('.deleteContainer');
    const deleteTag = document.querySelectorAll('.trashIcon');
    for (let index = 0; index < deleteTag.length; index++) {
        const deleteContainerIndex=deleteContainer[index];
        deleteTag[index].addEventListener('click', function () {
            deleteContainerIndex.remove(deleteContainerIndex);
        })
    }
}
