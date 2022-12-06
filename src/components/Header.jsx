function Header(){
  return(
    <>
      <p className="text-center font-bold text-gray-700 mb-5">Developed By {""}
      <a href="http://codewithyei.com/" target="_blank">Yeisson Osorno</a></p>
      <h1 className="font-black text-5xl text-center md:w-2/3 mx-auto uppercase">
        <span className="text-indigo-600">Veterinary</span>
        {" "} Patient Monitoring 
        
      </h1>
    </>
  );
}

export default Header;