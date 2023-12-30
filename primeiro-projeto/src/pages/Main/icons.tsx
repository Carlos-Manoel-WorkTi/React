import {  TiArrowRightOutline,TiArrowLeftOutline } from "react-icons/ti";
import { IoIosAddCircleOutline } from "react-icons/io";
import { GoChevronRight, GoChevronLeft } from "react-icons/go";
import { CiMenuKebab } from "react-icons/ci";
import styled from "styled-components";
import { MdCancel } from "react-icons/md";
import { GiConfirmed } from "react-icons/gi";



export const Save = styled(GiConfirmed)`
    font-size: 1.5em;
    background-color: #09900b;
    border-radius: 50%;
`
export const Cancel = styled(MdCancel)`
    font-size: 1.5em;
    background-color: red;
    border-radius: 50%;
    /* color: white; */
`
export  const SetaLeft = styled(TiArrowLeftOutline)`
 color: #ffffff;
 font-size: 3em;

 &:hover{
    color: #75bcf2;
 font-size: 3.3em;
 }
`

export const ConfigIcon = styled(CiMenuKebab)`
   display: flex;
   text-align: end;
   justify-content: end;
   align-items: end;
`
export  const SetaRight = styled(TiArrowRightOutline)`
 color: #ffffff;
 font-size: 3em;
 
 &:hover{
    color: #75bcf2;
 font-size: 3.3em;
 }
`
export const AddRep = styled(IoIosAddCircleOutline)`

&:hover{
   color: #4f0080;
   transform: scale(1.2);

}
`
export const ButtonMoreRespRight = styled(GoChevronRight)`
   font-size: 1.5em;
`
export const ButtonMoreRespLeft = styled(GoChevronLeft)`
   font-size: 1.5em;
`