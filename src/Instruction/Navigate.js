/*
1. to navigate any page : import Navigate and useNavigate hook
    then //const navigate = useNavigate()
    then use navigate variable to navigate any direction ==> navigate('/') or as component <Navigate to='/home'></Navigate>

2. to navigate any where to go (after clicking any private route the login and go to the path)--
    a) in private route file 
    ==> declare 'const navigate = useNavigate()' and 'const location = useLocation()'
    ==> use 'return <Navigate to = '/signin' state={{from:location}} replace></Navigate>' in private route function 
    b) in login or signin page/file 
    ==> declare 'const location = useLocation()'; 'const navigate = useNavigate()'; 'const from = location.state?.from?.pathname || '/'' inside the login/signin function
    ==> use 'navigate(from, {replace: true}) //navigate to the path where to go' inside curly brace of .then() method of everty login method after 
    example ==> 
                    '  const handleGoogleSignIn = () =>{
                        googleSignIn()
                        .then(result=>{
                        console.log(result.user)
                        navigate(from, {replace: true}) //navigate to the path where to go
                        })
                        .catch(error=>console.error(error))
                    }
                    '







*/