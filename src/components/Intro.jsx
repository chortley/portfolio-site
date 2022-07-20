import './Intro.css'

const Intro = () => {
    return (
         <div className={'i'}>
            <div className={'i-left'}>
                <div className={'i-left-wrapper'}>
                          <div className={'i-bg'}>
                          </div>
                    <h2 className={'i-intro'}>Hello, I'm</h2>
                    <h2 className={'i-name'}>Christopher Eglinton</h2>
                    <div className={'i-title'}>
                        <div className={'i-title-wrapper'}>
                            <div className={'i-title-item'}>Data Analyst</div>
                            <div className={'i-title-item'}>Web Developer</div>
                            <div className={'i-title-item'}>Athlete</div>
                            <div className={'i-title-item'}>Academic</div>
                            <div className={'i-title-item'}>Cool dude &#128526;</div>
                        </div>
                    </div>
                    <div className={'i-intro'}>
                        Everything from my analysis, web development, studies and even training - is dictated by data driven decision making. I believe in taking an extremely technical approach to each challenge I come across.
                    </div>
                </div>
             </div>
             <div className={'i-right'}>
                right
             </div>
        </div>
    )
}

export default Intro
