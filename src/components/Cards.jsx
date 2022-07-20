import './Cards.css'
import bjj from '../img/bjj.jpg'
import data_analysis from '../img/data_analysis.png'
import web_dev from '../img/web_development.png'
import grad from '../img/grad.jpeg'


const Cards = () => {
    return (
        <div className={"cards"}>
                <div className="col-4">
                    <div className={'card'}>
                           <div className={'card-title'}>
                                <h1>Data Analysis</h1>
                           </div>
                         <img src={data_analysis}/>
                         <div className={'card-body'}>
                            Lorem upsum
                            Lorem upsum
                            Lorem upsum
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className={'card'}>
                           <div className={'card-title'}>
                               <h1>Web Development</h1>
                           </div>
                         <img src={web_dev}/>
                         <div className={'card-body'}>
                            Lorem upsum
                            Lorem upsum
                            Lorem upsum
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className={'card'}>
                        <div className={'card-title'}>
                            <h1>Brazilian Jiu Jitsu</h1>
                        </div>
                             <img src={bjj}/>
                        <div className={'card-body'}>
                            Lorem upsum
                            Lorem upsum
                            Lorem upsum
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className={'card'}>
                           <div className={'card-title'}>
                                <h1>Academics</h1>
                           </div>
                         <img src={grad}/>
                         <div className={'card-body'}>
                            Lorem upsum
                            Lorem upsum
                            Lorem upsum
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Cards
