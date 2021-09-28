import logo from './logo.svg';
import './App.css';
import hqw from './imjes/rasm2.png';
import rasm from './imjes/rasm1.png';
import rasmb from './imjes/rasm3.png';
import rasmba from './imjes/rasm4.png';
import notbuk1 from './imjes/rasm5.png';
import notbuk2 from './imjes/rasm6.png';
import notbuk3 from './imjes/rasm7.png';
import notbuk4 from './imjes/rasm8.png';
import notbuk5 from './imjes/rasm9.png';
import notbuk6 from './imjes/rasm10.png';
import notbuk7 from './imjes/rasm11.png';
import notbuk8 from './imjes/rasm12.png';
import notbuk9 from './imjes/logo1.png';
import ikon from './imjes/fes.png';


function App() {
  return (
    <>
     <div className="containar">
            {/* start header */}
         <header>
             <a href="#" className='bond'>WD</a>
                <div className="menu-btn"></div>
                   <div className='navigatsion'>
                      <a href="#ГЛАВНАЯ">ГЛАВНАЯ</a>
                      <a href="#ОБ АВТОРЕ">ОБ АВТОРЕ</a>
                      <a href="#РАБОТЫ">РАБОТЫ</a>
                     <a href="#ПРОЦЕСС">ПРОЦЕСС</a>
                     <a href="#КОНТАКТЫ">КОНТАКТЫ</a>
                  </div>
        </header>
         {/* end header */}
           {/* <section> start 1*/}
          <section className="main">
            <div className="content">
                  <img className='w1' src={hqw}/> 
                  <div className='haraktriska'>
                    <h1 className='q1'>Дизайн и верстка</h1><br />
                    <h5 className='q2'>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. </h5><br />
                    <a href="#" className='btn'>НАПИСАТЬ МНЕ</a>
                  </div><br />
                   
             </div>
             <div className='men_haqimda'>
                      <h1 className='men2'>Обо мне</h1><br />
                      <p className='men3'>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.</p>
             </div>
        

    </section>
    {/* </section 1 end> */}
     </div>
     {/* <section  2 start>  */}
     <section className='bilimlarim'>
       <div className='main2'>
           <div className="proekt">
              <img className='w2' src={rasm} />
              <img className='w2' src={rasmb} />
              <img className='w2' src={rasm} />
              <img className='w2' src={rasmb} />
              <img className='w2' src={rasm} />
              <img className='w2' src={rasmb} />
              <img className='w2' src={rasm} />
              <img className='w2' src={rasmb} />
              <img className='w2' src={rasm} />
              <img className='w2' src={rasmb} />
              <img className='w2' src={rasm} />
              <img className='w2' src={rasmb} />
              
           </div>
           <div className="skils">
             <p>Мои навыки</p>
             <div className="bar">
               <div className="info">
                 <span className='span'>Adobe Photoshop</span>
               </div>
               <div className='line Photoshop'></div>
             </div>
             <div className="bar">
               <div className="info">
                 <span>Adobe Photoshop</span>
               </div>
               <div className='line Photoshop'></div>
             </div>
             <div className="bar">
               <div className="info">
                 <span>Adobe Photoshop</span>
               </div>
               <div className='line Photoshop'></div>
             </div>
             <img className='men' src={rasmba} />
           </div>
           
       </div>

     </section>
     {/* </section end 2> */}

     {/* <section star 3> */}
     <section className='vidio'>
       <div className="consten">
       <div className='meni_vidio'>
                <h1 className='men2'>Как я работаю</h1><br />
                <p className='men3'>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.</p><br />
                <br />
                <br />
                <iframe className='video' width="420" height="315" src="https://www.youtube.com/embed/KXkkKm4AwBg" frameBorder="0" allowFullScreen/>
        </div>
{/*         
        <video width="320" height="240" controls>
            <source src="https://youtu.be/qWeWdJrf39w"/>
        </video> */}
       </div> 
     </section>
     {/* </section 3 end> */}

     {/* <section start 4> */}
     <section className='work'>
        <div className='containar5'>
            <div className="images-crd">
              <div className="crd-images">
                <img className="r1" src={notbuk1} />
              </div>
            </div>
            <div className="images-crd">
              <div className="crd-images">
                <img className="r1" src={notbuk2} />
              </div>
            </div >
            <div className="images-crd">
              <div className="crd-images">
                <img className="r1" src={notbuk3} />
              </div>
            </div>
            <div className="images-crd">
              <div className="crd-images">
                <img className="r1" src={notbuk4} />
              </div>
            </div>
            <div className="images-crd">
              <div className="crd-images">
                <img className="r1" src={notbuk5} />
              </div>
            </div>
            <div className="images-crd">
              <div className="crd-images">
                <img className="r1" src={notbuk6} />
              </div>
            </div>
            <div className="images-crd">
              <div className="crd-images">
                <img className="r1" src={notbuk7} />
              </div>
            </div>
            <div className="images-crd">
              <div className="crd-images">
                  <img className="r1" src={notbuk8} />
              </div>
            </div> 
            
        </div>
        <div className="logolar">
          <img className="logo" src={notbuk9} />
          <img className="logo" src={notbuk9} />
          <img className="logo" src={notbuk9} />
          <img className="logo" src={notbuk9} />
        </div>

     </section>
     {/* </section end 4> */}

     {/* <section start 5> */}

     <section className='contact-card'>
       <div className="contact">
          <div className='web'>
               <h3>Хотите веб-сайт?</h3>
               <p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и <br /> вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов <br /> на латинице с начала XVI века.</p>
          </div>
          <div className="inputlar">
            <div className="zor">
              <input className='zor2' type="text"placeholder= "Ваше имя"/>
              <input className='zor2' type="text" placeholder= "Ваш e-mail"/>
            </div>
            <div>
            <textarea rows="8" cols="80" placeholder="Message"></textarea>
            </div>
            

          </div>
       </div>
          <div className="bot">
              <button className="bot2">ОТПРАВИТЬ</button>
            </div>

     </section>
     <footer className="fot">
         <div className="container_footer">
         <div className="footer_content">
         <div>
           <p>Иванов Иван</p>
           <h5>(с) 2018. Все права защищены.</h5>
           </div>
           <div className="ikon">
               <img src={ikon} />
                <img src={ikon} />
                <img src={ikon} />
           </div>
         </div>
         </div>
     </footer>
    </>
  );
}

export default App;
