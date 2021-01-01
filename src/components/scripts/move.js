export function move(e){
    const blockInfo = document.querySelector('.info')
    const blockInfoX = blockInfo.getBoundingClientRect().left;
    const blockInfoCenterX = blockInfo.offsetWidth/2 
    const blockInfoCenterY = blockInfo.offsetHeight/2
    blockInfo.style.transition = '0s'
    if(blockInfo){
        blockInfo.style.MozTransform = `rotateY(${(e.clientX - blockInfoX - blockInfoCenterX)/40}deg) rotateX(${-(e.clientY- blockInfoCenterY)/20}deg)`
        blockInfo.style.transform = `rotateY(${(e.clientX - blockInfoX - blockInfoCenterX)/40}deg) rotateX(${-(e.clientY- blockInfoCenterY)/20}deg)`
    }
}
export function repeat(e){    
    const blockInfo = document.querySelector('.info')
    blockInfo.style.transition = '.5s'
    blockInfo.style.transform = ''
}