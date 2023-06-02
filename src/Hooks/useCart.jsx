import { useQuery } from "@tanstack/react-query"
import { useContext } from "react"
import { AuthContext } from "../Providers/AuthProvider"

const useCart = () =>{
    const {user} = useContext(AuthContext)
    const token = localStorage.getItem("access-token")
    const { isLoading, refetch, isError, data: cart = [], error } = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async ()=>{
            const res = await fetch(`https://bistro-boss-server-neon.vercel.app/carts?email=${user?.email}`,{
                headers: {
                    authorization: `bearer ${token}`
                }
            })
            return res.json()
        }
      })
      return [cart, refetch ]
}
export default useCart