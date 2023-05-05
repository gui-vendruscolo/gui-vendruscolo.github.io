
import {useState, useEffect} from 'react';
import styles from './LandingPage.module.css';
import aboutMe from '../../resources/page-text/landingPageContent.json';
import englishResume from '../../resources/resume-en/guilhermev-resume-en.pdf';
import portugueseResume from '../../resources/resume-pt/resume-guilhermev-pt.pdf'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { BsFilePerson } from 'react-icons/bs'
import { TranslateButton } from '../TranslateButton/TranslateButton';

export function LandingPage(){

    const [currentLanguage, setCurrentLanguage] = useState('en');
    const [resume, setResume] = useState(englishResume);
    const [pageContent, setPageContent] = useState(aboutMe.englishPageContent);

    useEffect(()=>{
        if(currentLanguage === 'en'){
            setResume(englishResume);
            setPageContent(aboutMe.englishPageContent);
        }
        else{
            setResume(portugueseResume);
            setPageContent(aboutMe.portuguesePageContent);
        }
    }, [currentLanguage])

    return(
        <>
            <div className={styles.translateButtonContainer}>
                <TranslateButton setLanguage={setCurrentLanguage}/>
            </div>

            <div className={styles.pageContent}>
                <div className={styles.presentationTxtContainer}>
                    <h1 className={styles.headline}>{currentLanguage === 'en'? 'Hello,' : 'Olá,'}</h1>
                    <h2 className={styles.subHeadline}>{currentLanguage==='en'? 'I\'m Guilherme Vendruscolo' : 'Eu sou Guilherme Vendruscolo'}</h2>
                    <p className={styles.mainText} dangerouslySetInnerHTML={{__html:pageContent}}></p>
                    <div className={styles.linksContainer}>
                        <a target="_blank" rel="noreferrer" className={styles.iconMarkup} href="https://github.com/gui-vendruscolo">
                            <FaGithub className={styles.icon}/>
                        </a>
                        <a target="_blank" rel="noreferrer" className={styles.iconMarkup} id="linkedin-link" href="https://www.linkedin.com/in/guilherme-vendruscolo-cangemi-silva-b7b2031bb/">
                            <FaLinkedin className={styles.icon}/>
                        </a>
                        <a target="_blank" rel="noreferrer" className={styles.iconMarkup} id="cv-link" href={resume}>
                            <BsFilePerson className={styles.icon}/>
                        </a>
                    </div>
                </div>
                <div className={styles.pictureWrapper}>
                    <img className={styles.picture} src={require('../../resources/pictures/guilherme.png')} alt='Myself'/>
                </div>


            </div>
        </>

    )
}