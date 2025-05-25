import {Request, Response} from "express";
import {T} from '../libs/types/common'
import MemberService from "../models/member.service";

const restaurantController: T = {}; 

restaurantController.goHome = (req: Request, res: Response) => {
    try{
        res.send("Home Page");
    } catch(err) {
        console.log('ERROR, goHome: ',err);
    }
}

restaurantController.getLogin = (req: Request, res: Response) => {
    try{
        res.send("Login Page");
    } catch(err) {
        console.log('ERROR, Login: ',err);
    }
}

restaurantController.getSignup = (req: Request, res: Response) => {
    try{
        res.send("Signup Page");
    } catch(err) {
        console.log('ERROR, Signup: ',err);
    }
}

export default restaurantController;