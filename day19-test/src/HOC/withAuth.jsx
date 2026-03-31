const withAuth=(WrappedComponent)=>(props)=>{
    const isAuthenticated=true;
    if(!isAuthenticated){
        return <h2>Please login to access this page.</h2>
    }
    return <WrappedComponent {...props}/>
}
export default withAuth