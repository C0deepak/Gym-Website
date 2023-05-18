import React from 'react'
import './footer.css'

const footer = () => {
  return (
    <>
        <div className="footer">
            <div className="footer-wrap">
                <div className="about">
                    <h2>about us</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab et nisi, placeat, a deleniti ducimus eos, nam enim at cumque corporis quae expedita maiores voluptatum vitae quisquam modi? Assumenda, fuga!</p>
                </div>
                <div className="query">
                    <h2>queries</h2>
                    <ul>
                        <li><a href="#">Proper air conditiong ?</a></li>
                        <li><a href="#">Availibity of equipment ?</a></li>
                        <li><a href="#">Experinced gym trainers ?</a></li>
                        <li><a href="#">Proper Hygiene ?</a></li>
                        <li><a href="#">Changing rooms avialable ?</a></li>
                        <li><a href="#">any extra suppliments ?</a></li>
                    </ul>
                </div>
                <div className="message">
                    <form>
                        <input type="email" placeholder='Your Email'/>
                        <textarea cols="15" rows="5" placeholder='Your Message'></textarea>
                        <input type="submit" value="Send"/>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default footer