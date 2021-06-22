import { useEffect, useState } from "react";
import style from '../../styles/CreatePost.module.css'
import Link from 'next/link';
import {storage} from '../../firebase';
import firebase from 'firebase/app';

const CreatePost = () => {
      const [title,setTitle] = useState('');
      const [description,setDescription] = useState('');
      const [headLine,setHeadLine] = useState('');
      const [imageURL,setImageURL] = useState('');
      const [date,setDate] = useState('');
      const [url,setUrl] = useState('');
      const [chatgories,setChatgories] = useState('');

      const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(title,description,headLine,imageURL,date);
      }


    const imageHandleChange=(e)=>{
        if(e.target.files[0]){
            setImageURL(e.target.files[0])
            
        }
    }

      
      const uploadFile=()=>{  
        const storageRef = storage.ref(`images/${imageURL.name}`)
        .put(imageURL);
        storageRef.on('state-changed',
            // snapshot=>{},
            // error=>{
            //     console.log(error)
            // },
           ()=>{ storage.ref('images')
            .child(`${imageURL.name}`)
            .getDownloadURL()
            .then((url)=>{
                document.getElementById('msg').innerHTML = "image uploaded successfully and also go to console"
                setUrl(url)
                console.log(url)
            })
            .catch((e)=>{
                console.log(e);
            })
        })
      }

      const saveDataChange=()=>{
        const demo = firebase.database().ref('Posts');
        const demRef ={
            title,
            description,
            headLine,
            url,
            chatgories,
            date
        };
        demo.push(demRef)
        .then(()=>{
            console.log('data is saved in database')
        })
        .catch((e)=>{
            console.log('something getting err',err)
        })
      };

    return (
        <>

            <form className={style.formContainer} onSubmit={handleSubmit} >
                <div className='container'>
                    <div className="form-floating mb-3">
                        <input 
                        type="text" 
                        className="form-control" 
                        id="floatingInput" 
                        placeholder="Headline..."
                        value={headLine}
                        onChange={(e)=>setHeadLine(e.target.value)} />
                        <label for="floatingInput">Headlines</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input 
                        type="text" 
                        className="form-control" 
                        id="floatingPassword" 
                        placeholder="Title..."
                        value={title}
                        onChange={(e)=>setTitle(e.target.value)} />
                        <label for="floatingPassword">Titles</label>
                    </div>
                    <div class="form-floating mb-3">
                        <textarea 
                        class="form-control" 
                        placeholder="describe somethings here.." 
                        id="floatingTextarea"
                        value={description}
                        onChange={(e)=>setDescription(e.target.value)}></textarea>
                        <label for="floatingTextarea">Description</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input 
                        type="date" 
                        className="form-control" 
                        id="floatingPassword" 
                        placeholder="Password"
                        value={date}
                        onChange={(e)=>setDate(e.target.value)} />
                        <label for="floatingPassword">Date</label>
                    </div>
                    <div className="form-floating mb-3">
                        <select 
                        className="form-select" 
                        id="floatingSelect" 
                        aria-label="Floating label select example"
                        value={chatgories}
                        onChange={(e)=>setChatgories(e.target.value)}>
                            <option selected>Select</option>
                            <option >One</option>
                            <option >Two</option>
                            <option >Three</option>
                        </select>
                        <label for="floatingSelect">Chatgories</label>
                    </div>
                    <div className="form-label mb-3">
                        <input 
                        className="form-control form-control-lg" 
                        id="formFileLg" 
                        type="file"
                        onChange={imageHandleChange}
                       
                         />
                    </div>
                    <div className="form-label mb-3">
                        <input className="form-control form-control-lg" id="formFileLg" onClick={uploadFile} type="button" value="upload" />
                    </div>
                    <p id="msg"></p>
                    <div className="form-label mb-3">
                        <input className="form-control form-control-lg" id="formFileLg" onClick={saveDataChange} type="submit" />
                    </div>
                    
                    <Link href='/components/Dashbord'><a>Back</a></Link>
                    <Link href='/'><a className="m-2">Home</a></Link>
                </div>

            </form>

        </>
    )
}
export default CreatePost;