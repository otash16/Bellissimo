import {Request, Response} from "express";
import {T} from '../libs/types/common'
import MemberService from "../models/member.service";
import { AdminRequest, LoginInput, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";

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

restaurantController.processSignup = async(req: AdminRequest, res: Response) => {
    try{
        console.log("processSignup");
        console.log("body: ",req.body); 

        const newMember: MemberInput = req.body;
        newMember.memberType = MemberType.RESTAURANT;

        const memberService = new MemberService();
        const result = await memberService.processSignup(newMember);
        //TODO: SESSIONS AUTHENTICATIONS
        
        req.session.member = result;
        req.session.save(function() {
            res.send(result);
        });
    }catch(err){
        console.log("ERROR, processSignup: ",err);
        res.send(err);
    }
}

restaurantController.processLogin = async (req: AdminRequest, res: Response) => {
    try{
        console.log("processLogin");
        console.log("BODY:", req.body);
        const input: LoginInput = req.body;

        const memberService = new MemberService();
        const result = await memberService.processLogin(input);

        req.session.member = result;
        req.session.save(function() {
            res.send(result);
        });

    } catch(err) {
        console.log('ERROR, processLogin: ',err);
        res.send(err);
    }
};
export default restaurantController;