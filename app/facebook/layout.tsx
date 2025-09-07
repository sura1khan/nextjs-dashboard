import Nav from "./componants/nav";

export default function Layout({children}:{children:React.ReactNode}){
return (
    
  <div>
    <div>
        <Nav></Nav>
    </div>
      <div className="flex justify-between w-full h-screen p-10">
        
        
        <div>
           left 
        </div>
        <div>{children}</div>
        <div>right</div>
    </div>
  </div>
)
} 