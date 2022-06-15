import React, {useState, useEffect, useRef} from 'react'; 
import { MessageType } from '../types/types';
import {token} from "../constants/constants";
import { useNavigate } from 'react-router-dom';

export const useIsAuth = () => {
    const router = useNavigate(); 
    const tokenAuth = token(); 

    const isAuth = async () => {
        if(tokenAuth === null || tokenAuth === undefined || tokenAuth?.length === 0) {
            router("/login"); 
        }
    };

    
    return { isAuth };

  };