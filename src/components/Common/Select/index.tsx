import './styles.scss'
import React from 'react';
import Select, { StylesConfig } from 'react-select';

export interface Option {
    readonly value: string;
    readonly label: string;
    readonly id: number;
}

export type IsMulti = false;

interface CSlectProps {
    option : readonly Option[],
    styles? : StylesConfig<Option, IsMulti>
}

const CSelect : React.FC<CSlectProps> = ({option, styles}) => {
    return (
        <Select
            styles={styles}
            defaultValue={option[0]}
            options={option}
            theme={(theme) => ({
                ...theme,
                colors: {
                    ...theme.colors,
                    primary25: 'hotpink',
                    primary: 'black',
                },
            })}
        />
    )
}

export default CSelect