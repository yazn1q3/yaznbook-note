import Header from "@/components/header";


const PublicLayout = ({
    children
  }: {
    children: React.ReactNode;
  }) => {
  
    return ( 
      <div className="h-full dark:bg-[#1F1F1F]">
      <Header />
        {children}
      </div>
     );
  }
   
  export default PublicLayout;