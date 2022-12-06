import {useState,useEffect} from 'react';

function Formulario({setPatients, patients}){
  const [petName,setPetName] = useState('');
  const [owner,setOwner] = useState('');
  const [email,setEmail] = useState('');
  const [dateOut,setDateOut] = useState('');
  const [symptoms,setSymptoms] = useState('');

  const [error,setError] = useState(false);
  
  const handleSubmit = (e)=>{
    e.preventDefault()
    if([petName,owner,email,dateOut,symptoms].includes("")){
      console.log("Hay almenos un campo vacio")
      setError(true);
      return;
    }

    setError(false)

    // Patient Object
    const patientObject = {petName,owner,email,dateOut,symptoms}
    setPatients([...patients,patientObject])

    // Re-iniciar
    setPetName("")
    setOwner("")
    setEmail("")
    setDateOut("")
    setSymptoms("")
  }

  return(
    <div className="md:w-1/2 lg:w2/5">
      <h2 className="font-black text-3xl text-center">Patient Follow-up</h2>
      <p className="text-lg mt-5 text-center mb-10">Add and Manage {""} <span className="text-indigo-600 font-bold text-lg">Patients</span> </p>

      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 m-2">
        {error && (
          <div className='bg-red-800 text-white text-center p-3 uppercase font-bold mb-3 rounded-md '>
            <p>All fields are mandatory</p>
          </div>
        )}
        <div className="mb-5">
          <label htmlFor="petName" className="block text-gray-700 uppercase font-bold">Pet Name</label>
          <input id="petName" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="text" placeholder="Pet Name" 
          onChange={(e)=>setPetName(e.target.value)} value={petName}/>
        </div>
        <div className="mb-5">
          <label htmlFor="petOwner" className="block text-gray-700 uppercase font-bold">Name Pet Owner</label>
          <input id="petOwner" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="text" placeholder="Owner Name"
          onChange={(e)=>setOwner(e.target.value)} value={owner}/>
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email</label>
          <input id="email" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="email" placeholder="Owner Email"
          onChange={(e)=>setEmail(e.target.value)} value={email}/>
        </div>
        <div className="mb-5">
          <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">Alta</label>
          <input id="alta" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="date" 
          onChange={(e)=>setDateOut(e.target.value)} value={dateOut}/>
        </div>
        <div className="mb-5">
          <label htmlFor="symptoms" className="block text-gray-700 uppercase font-bold">Symptoms</label>
          <textarea id="symptoms" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" placeholder="Describe the symptoms" 
          onChange={(e)=>setSymptoms(e.target.value)} value={symptoms}/>
        </div>
        <input type="submit" className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all rounded-md"  
        value="Add Patient"/>
      </form>
    </div>
  );
}

export default Formulario;