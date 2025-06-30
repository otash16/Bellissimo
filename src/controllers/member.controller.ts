import {Request, Response} from "express";
import {T} from '../libs/types/common'
import { MemberType } from "../libs/enums/member.enum";
import { MemberInput } from "../libs/types/member";
import MemberService from "../models/member.service";
import { LoginInput } from "../libs/types/member";
//REACT
const memberController: T = {}; 



memberController.signup = async(req: Request, res: Response) => {
    try{
        console.log("processSignup");
        console.log("body: ",req.body); 

        const newMember: MemberInput = req.body;
        newMember.memberType = MemberType.USER;

        const memberService = new MemberService();
        const result = await memberService.signup(newMember);
        res.send(result);
    }catch(err){
        console.log("ERROR, processSignup: ",err);
        res.send(err);
    }
}

memberController.login = async (req: Request, res: Response) => {
    try{
        console.log("processLogin");
        console.log("BODY:", req.body);
        const input: LoginInput = req.body;

        const memberService = new MemberService();
        const result = await memberService.processLogin(input);
        

        res.send(result);
    } catch(err) {
        console.log('ERROR, processLogin: ',err);
        res.send(err);
    }
};

export default memberController;