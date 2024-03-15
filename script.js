


var tl=gsap.timeline()

tl.from(".main a,.logo",{
    y:-20,
    // stagger:1,
    opacity:0,
    duration:1,
})
tl.from(".page1 h1",{
    y:50,
    stagger:1,
    opacity:0,
    duration:0.2,
})
tl.from(".page1 .box1",{
    x:-50,
    stagger:1,
    opacity:0,
    duration:0.2,
})
tl.from(".page1 .page1box2",{
    y:50,
    // rotate:50,
    stagger:1,
    opacity:0,
    duration:0.2,
})
tl.from(" .page1 .page1box3",{
    x:50,
    stagger:1,
    opacity:0,
    duration:0.2,
})