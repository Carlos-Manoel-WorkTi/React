import {  TiArrowRightOutline,TiArrowLeftOutline } from "react-icons/ti";
import { IoIosAddCircleOutline } from "react-icons/io";
import { GoChevronRight, GoChevronLeft } from "react-icons/go";
import { CiMenuKebab } from "react-icons/ci";
import styled from "styled-components";

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
   color: green;
   transform: scale(1.2);

}
`
export const ButtonMoreRespRight = styled(GoChevronRight)`
   font-size: 1.5em;
`
export const ButtonMoreRespLeft = styled(GoChevronLeft)`
   font-size: 1.5em;
`