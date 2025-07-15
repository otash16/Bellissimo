// import {Request, Response} from "express";
// import {T} from '../libs/types/common'
// import { MemberType } from "../libs/enums/member.enum";
// import { Member, MemberInput } from "../libs/types/member";
// import MemberService from "../models/member.service";
// import { LoginInput } from "../libs/types/member";
// import Errors from "../libs/Errors";
// //REACT
// const memberService = new MemberService();
// const memberController: T = {}; 



// memberController.signup = async(req: Request, res: Response) =>{
//     try{
//         console.log("signup");
//         const input: MemberInput = req.body;
//         const result: Member = await memberService.signup(input);
//         res.send(result)
//     }catch(err){
//         console.log("ERROR, signup: ",err);
//         if (err instanceof Errors) res.status(err.code).json(err);
//         else res.status(Errors.standard.code).json(Errors.standard);
//     }
// }

// memberController.login = async (req: Request, res: Response) => {
//     try{
//         console.log("processLogin");
//         console.log("BODY:", req.body);
//         const input: LoginInput = req.body;

//         const memberService = new MemberService();
//         const result = await memberService.processLogin(input);
        

//         res.send(result);
//     } catch(err) {
//         console.log('ERROR, processLogin: ',err);
//         res.send(err);
//     }
// };

// export default memberController;

import {NextFunction, Request, Response} from "express";
import { T } from "../libs/types/common";
// import MemberService from "../models/Member.service";
import { LoginInput, Member, MemberInput} from "../libs/types/member";
import Errors, { HttpCode, Message } from "../libs/Errors";
import MemberService from "../models/member.service";
// React Project

const memberService = new MemberService();

const memberController: T = {};
memberController.signup = async (req: Request, res: Response) => {
    try{
        console.log("Signup");
        const input: MemberInput = req.body,
          result: Member = await memberService.signup(input);              
          res.send(result);
       } catch (err) {
        if(err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standard.code).json(Errors.standard);
        console.log("Error, signup:", err);
    }
};

    memberController.login = async (req: Request, res: Response) => {
        try{
            console.log("login");
            const input: LoginInput = req.body,
              result = await memberService.login(input)
              res.send(result);
        } catch (err) {
            console.log("Error, login:", err);
            if(err instanceof Errors) res.status(err.code).json(err);
            else res.status(Errors.standard.code).json(Errors.standard);
        }
    };
export default memberController;