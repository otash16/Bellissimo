import {Request, Response} from "express";
import {T} from '../libs/types/common'
import MemberService from "../models/member.service";

const restaurantController: T = {}; 

restaurantController.goHome = (req: Request, res: Response) => {
    try{
        console.log("goHome");
        res.send("Home Page");
    } catch(err) {
        console.log('ERROR, goHome: ',err);
    }
};

restaurantController.getLogin = (req: Request, res: Response) => {
    try{
        console.log("getlogin");
        res.send("Login Page");
    } catch(err) {
        console.log('ERROR, Login: ',err);
    }
};

restaurantController.getSignup = (req: Request, res: Response) => {
    try{
        console.log("getSignup");
        res.send("Signup Page");
    } catch(err) {
        console.log('ERROR, Signup: ',err);
    }
};

restaurantController.processLogin = (req: Request, res: Response) => {
    try{
        console.log("processLogin");
        res.send("DONE");
    } catch(err) {
        console.log('ERROR, processLogin: ',err);
    }
};

restaurantController.processSignup = (req: Request, res: Response) => {
    try{
        console.log("processSignup");
        res.send("DONE");
    }catch{
        console.log("ERROR, processLogin");
    }
}
export default restaurantController;