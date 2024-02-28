import { authUser } from "@/services/personal/auth"
import { UserAddCookie } from "./form"


export default async function userData(identifier, password) {
    const data = await authUser(identifier, password)

    if(data == null) {
        UserAddCookie(null)
    }
    else {
        UserAddCookie(data.jwt)
    }
}