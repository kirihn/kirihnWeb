import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

export function Switch() {
    const { t, i18n } = useTranslation();
    const [isChecked, setIsChecked] = useState(false);

    function changeLanguage() {
        setIsChecked(!isChecked); // Устанавливаем новое состояние
        
        if(isChecked){
            i18n.changeLanguage('ru')
        }else{
            i18n.changeLanguage('en')
        }
    }


    return (
        <StyledWrapper>
            <label className="label">
                <div className="toggle">
                    <input
                        className="toggle-state"
                        type="checkbox"
                        name="check"
                        value="check"
                        onChange={changeLanguage()}
                    />
                    <div className="indicator">
                        <span className="label-text">EN</span>
                        <span className="label-text">RU</span>
                    </div>
                </div>
            </label>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
    .label {
        display: inline-flex;
        align-items: center;
        cursor: pointer;
        color: #8dc1d2;
    }

    .toggle {
        isolation: isolate;
        position: relative;
        height: 30px;
        width: 60px;
        border-radius: 15px;
        overflow: hidden;
        box-shadow: -8px -4px 8px 0px #9bd6e9, 8px 4px 12px 0px #7ca3b0,
            4px 4px 4px 0px #7ca3b0 inset, -4px -4px 4px 0px #9bd6e9 inset;
    }

    .toggle-state {
        display: none;
    }

    .indicator {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 100%;
        width: 200%;
        background: #8dc1d2;
        border-radius: 15px;
        transform: translate3d(-75%, 0, 0);
        transition: transform 0.4s cubic-bezier(0.85, 0.05, 0.18, 1.35);
        box-shadow: -8px -4px 8px 0px #9bd6e9, 8px 4px 12px 0px #7ca3b0;
        padding: 0 10px; /* Добавлено для размещения текста внутри */
    }

    .toggle-state:checked ~ .indicator {
        transform: translate3d(18%, 0, 0);
    }

    .label-text {
        font-size: 12px; /* Размер текста для меток */
        color: #394a56;
        user-select: none;
    }
`;

export default Switch;
