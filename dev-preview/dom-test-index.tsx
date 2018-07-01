import { dom } from "../src/dom";
var parentDom = <div></div> as HTMLElement;

function runTest(){
    let el1 = getDivDom();
    parentDom.appendChild(el1);

    let el2 = getDivDomWithClass();
    parentDom.appendChild(el2);

    let el3 = getAnchorElement();
    parentDom.appendChild(el3);

    let el4 = getDivElementWithVariable();
    parentDom.appendChild(el4);

    let el5 = workWithIterator();
    parentDom.appendChild(el5);

    let el6 = htmlElementAsInnerContent();
    parentDom.appendChild(el6);

    let el7 = nullAsInnerContent();
    parentDom.appendChild(el7);

    let el8 = getDisabledButton();
    parentDom.appendChild(el8);

    let el9 = getDisabledButtonAndEnableIt();
    parentDom.appendChild(el9);

    document.body.appendChild(parentDom);
}


function getDivDom(){
    return <div>get div dom</div>  as HTMLElement;
}

function getDivDomWithClass(){
    return  <div class="test-div-class-name">get div dom with class</div> as HTMLElement;

}

function getAnchorElement(){
    return  <a href="." class="test-anchor">get anchor element</a> as HTMLElement;

}

function getDivElementWithVariable(){
    let className = "test-div-class-name";
    let theContent = "this is the content";
    return <div class={className}>get div element with variable <span style="color: red"> {theContent}</span></div> as HTMLElement;
}

function htmlElementAsInnerContent(){
    let theInnerContent = <span style="color: red; border: 1px solid red">the inner content</span> as HTMLSpanElement;
    return <div style="border: 1px solid black">The div element{theInnerContent}</div> as HTMLElement;
}

function nullAsInnerContent(){
    return <div>{null}</div>
}

function getDisabledButton(){
    return <button disabled>The disabled button</button> as HTMLElement
}

function getDisabledButtonAndEnableIt(){
    let button = <button disabled>The enabled button</button> as HTMLButtonElement;

    button.disabled = false;

    return button;

}



function workWithIterator(){
    let contents = ["test1", "test2", "test3"];
    let ulElement = <ul></ul>;

    contents.forEach((e) => {
        ulElement.appendChild(<li> work with iterator {e}</li>);
    });

    return ulElement;
}

runTest();