'use server'

import { auth } from "../../../auth";

export async function isLoggedIn(){
    const session = await auth();

    return !session?.user;   
}