import { useState } from 'react';
import styles from './TranslateButton.module.css';

export function TranslateButton(props: any){
    const [buttons, setButtons] = useState(['selected', 'unselected'])

    const select = (option:number) =>{
        if(option === 0){
            setButtons(['selected', 'inselected']);
            props.setLanguage('en');
        }
        else{
            setButtons(['unselected', 'selected']);
            props.setLanguage('pt');

        }
        console.log('button selected');
    }
    return(
        <div className={styles.buttonContainer}>
            <button name='button' className={styles[buttons[0]+'Button']} onClick={()=>select(0)}>
                EN
            </button>
            <button name='button' className={styles[[buttons[1]]+'Button']} onClick={()=>select(1)} >
                PT
            </button>
        </div>
    )
}

