import React, {useState} from 'react'

const Footer = () => {
 const [time, setTime] = useState('time');
 let now = new Date().toLocaleTimeString();
  setTimeout(()=>{
     setTime(now)
  }, 1000)
 return (
   <footer class='page-footer indigo darken-4'>
     <div class='container'>
       <div class='row'>
         <div class='col l6 s12'>
           <h5 class='white-text'>About Me</h5>
           <p class='grey-text text-lighten-4'>
             I'm a Developer. I create all sorts of web applications.
           </p>
         </div>
         <div class='col l4 offset-l2 s12'>
           <h5 class='white-text'>Connect</h5>
           <ul>
             <li>
               <a
                 class='grey-text text-lighten-3'
                 href='https://web.facebook.com/oladoyinayodeji/'
               >
                 Facebook
               </a>
              
             </li>

             <li>
               <a
                 class='grey-text text-lighten-3'
                 href='https://twitter.com/home'
               >
                 Twitter
               </a>
             </li>
             <li>
               <a class='grey-text text-lighten-3' href='github.com/felixfrz'>
                 Github
               </a>
             </li>
             <li>
               <a
                 class='grey-text text-lighten-3'
                 href='kedin.com/in/ayodeji-oladoyin-9a5189b0/'
               >
                 Linkedin
               </a>
             </li>
           </ul>
         </div>
       </div>
     </div>
     <div class='footer-copyright'>
       <div class='container center-align'>© 2020 Todo Felixfrz {time}</div>
     </div>
   </footer>
 )
}
export default Footer
