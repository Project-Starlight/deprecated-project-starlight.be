"use strict";

function classHelper(query, className, remove = false) {
    if (remove) {
        document.querySelector(query).classList.remove(className);
    } else {
        document.querySelector(query).classList.add(className);
    }
}

function addAnimationClasses(entry) {
    const target = entry.target;
    const informatieClassList = target.querySelector(".informatie").classList;
    const figureClassList = target.querySelector("figure").classList;

    const leftToRightClassName = "left-to-right-animation";
    const rightToLeftClassName = "right-to-left-animation"

    if (target.querySelector(".links")){
        informatieClassList.add(leftToRightClassName);
        figureClassList.add(rightToLeftClassName);
    } else if (target.querySelector(".rechts")){
        informatieClassList.add(rightToLeftClassName);
        figureClassList.add(leftToRightClassName);
    }
}

function removeAnimationClasses(entry) {
    const target = entry.target;
    const informatieClassList = target.querySelector(".informatie").classList;
    const figureClassList = target.querySelector("figure").classList;

    const leftToRightClassName = "left-to-right-animation";
    const rightToLeftClassName = "right-to-left-animation"

    if (informatieClassList.contains(leftToRightClassName)){
        informatieClassList.remove(leftToRightClassName);
        figureClassList.remove(rightToLeftClassName);
    } else if (informatieClassList.contains(rightToLeftClassName)){
        informatieClassList.remove(rightToLeftClassName);
        figureClassList.remove(leftToRightClassName);
    }
}

function buildCallback(){
    return (entries)=>{
        entries.forEach((entry)=>{
            if (entry.isIntersecting){
                addAnimationClasses(entry);
            } else {
                removeAnimationClasses(entry);
            }
        });
    }
}

function animateSectionWhenInViewport(){
    const callback = buildCallback();
    let observer = new IntersectionObserver(callback);
    const animationSections = document.querySelectorAll(".animate-in-viewport");
    animationSections.forEach(section=>{
        observer.observe(section);
    })

}