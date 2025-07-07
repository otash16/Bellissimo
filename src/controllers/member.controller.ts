// import {Request, Response} from "express";
// import {T} from '../libs/types/common'
// import { MemberType } from "../libs/enums/member.enum";
// import { Member, MemberInput } from "../libs/types/member";
// import MemberService from "../models/member.service";
// import { LoginInput } from "../libs/types/member";
// import Errors from "../libs/Errors";
// //REACT
// const memberController: T = {}; 



// memberController.signup = async(req: Request, res: Response) => {
//     try{
//         console.log("signup");
//         const input: MemberInput = req.body,
//           result: Member = await MemberService.signup(input);
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