import './labelBnt.css'

// eslint-disable-next-line react/prop-types
const bnt = ({ textLabel, onChange, textPlaceholder, typeInp, value, textId }) => {

    return (
        <section className='input-group'>
            <div className='input-div-label'>
            <label htmlFor={textId}> {textLabel} </label>
            </div>
            <input
                className="inp-class"
                id={textId}
                placeholder={textPlaceholder}
                type={typeInp}
                value={value}

                onChange={(e) => onChange(e.target.value)}
            />

        </section>

    );
};

export default bnt;