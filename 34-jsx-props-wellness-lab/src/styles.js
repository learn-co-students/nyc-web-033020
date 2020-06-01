import styled from 'styled-components';

export const Pie = styled.div`
    position: relative;
    height: calc(${props => props.size} * 1px);
    width: calc(${props => props.size} * 1px);
    left: calc(50vw - ${props => props.size / 2}px);
    background: #639;
    border-radius: 50%;
`

export const PieSlice = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-top: 100px solid ${props => props.color};
    border-radius: 50%;
    transform: rotate(calc(${props => props.id * 45} * 1deg));
`

export const PieCSSDeck = styled.div`
    transition: all 1s;
    position: absolute;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    clip: rect(0px, 150px, 300px, 0px);
    transform: rotate(45deg);
    background-color: ${props => props.color}
`

export const HoldCSSDeck = styled.div`
    position: absolute;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    clip: rect(0px, 300px, 300px, 150px);
    transform: rotate(${props => props.rotate}deg);
`
// `height: 100%;
// width: 100%;
// overflow: hidden;
// position: absolute;
// transform: translate(0, -50%) rotate(90deg) rotate(calc(${props => props.offset} * 1deg));
// transform-origin: 50% 100%;
// border-radius: 50%;

// &:before {
//     background: #f00;
//     content: '';
//     height: 100%;
//     position: absolute;
//     transform: translate(0, 100%) rotate(calc(${props => props.offset} * 45deg));
//     transform-origin: 50% 0;
//     width: 100%
// }`




// background: #f00;
//         content: '';
//         height: 100%;
//         position: absolute;
//         transform: translate(0, 100%) rotate(calc(${props => props.value} * 1deg));
//         transform-origin: 50% 0;
//         width: 100%;