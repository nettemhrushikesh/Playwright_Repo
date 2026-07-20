import dotenv from 'dotenv';

dotenv.config({})
export const sauceurl = process.env.SAUCEURL;
export const username =process.env.SAUCEUSERNAME;
export const password =process.env.SAUCEPASSWORD;

export const TrelloURL = process.env.TRELLOURL;
export const secret = process.env.TRELLO_KEY_A;
export const accountId = process.env.MAILACCOUNT_A;
export const accountpassword = process.env.MAILPASSWORD_A;
// export const TrelloAccount = process.env.TRELLOACCOUNTLOGIN;

export const workspace = 'Sataru Gojo'
export const workspace1 = 'Sukuna'
export const workspaceType = 'Education'
export const workspaceType1 = 'Engineering-IT'


export const DATA = {
     TrelloURL : process.env.TRELLOURL,
     secret : process.env.TRELLO_KEY_A,
     accountId : process.env.MAILACCOUNT_A,
     accountpassword : process.env.MAILPASSWORD_A,
     TrelloAccount : process.env.TRELLOACCOUNTLOGIN,
     workspace : 'jojo',
     workspaceType : 'Education',
     workspaceType1 : 'Engineering-IT'
}