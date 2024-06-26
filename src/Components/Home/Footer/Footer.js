import './styleFooter.css';

function Footer() {
    const theYaer = new Date().getFullYear();
    //console.log(theYaer);

    return(
        <>
        <footer>
            <div className='footer'>
                <div className='left'>
                    <h5>Made With Love By Kareem Sayed &copy; {theYaer}</h5>
                </div>
                <div className='right'>
                    <a href='https://www.linkedin.com/in/kareem-sayed-a562b01b4/' target='_blank'>Linkedin</a>
                    <a href='https://github.com/kareemSayed428' target='_blank'>GitHub</a>
                </div>
            </div>
        </footer>
        </>
    );
};


export default Footer;