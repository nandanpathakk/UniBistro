import { supabase } from "./supabaseClient"
const [email, setEmail] = useState(''); // email of the user
const [password, setPassword] = useState(''); // password of the user
const [username, setUsername] = useState(''); // username of the user
const [Rmsg, setRMsg] = useState(''); // Registration message
const [Lmsg, setLMsg] = useState(''); // Login message
const [user, setUser] = useState(''); // User object after registration / login
const [session, setSession] = useState(''); // session object after registration / login

const Register = async()=>{
    const {data, error} = await supabase.auth.signUp({
        email,
        password
    },
    {
        data: {
            username
        }
    })
    if(error) {
        setRMsg(error.message)
    }else{
        setRMsg("User created successfully")
        setUser(data.user)
    }
}

const Login = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    if(error){
      setLMsg(error.message)
    }else{
      setLMsg('Login successfully')
      setUser(data.user)
      setSession(data.session)
      console.log(data.session)
    }
}

module.exports = {
    supabase,
}