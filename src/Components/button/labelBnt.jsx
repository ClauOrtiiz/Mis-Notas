import './bnt.css'

// eslint-disable-next-line react/prop-types
const bnt = ({ textLabel, onChange, textPlaceholder, typeInp, value, textId }) => {

    return (
        <div className='container-bnt'>
            <label htmlFor="email"> {textLabel} </label>
            <input
                className="inp-class"
                id={textId}
                placeholder={textPlaceholder}
                type={typeInp}
                value={value}

                onChange={(e) => onChange(e.target.value)}
            />

        </div>

    );
};

export default bnt;