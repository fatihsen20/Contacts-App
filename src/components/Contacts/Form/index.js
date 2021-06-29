import {useState , useEffect} from 'react';

const initialFormValues = {name : "" , phoneNumber: "" };
function Form({addContact , contacts}) {
    const[form, setForm] = useState(initialFormValues);

    useEffect(() => {
        setForm(initialFormValues);
    },[contacts]
    );

    const onChangeInput = (e) => {
       
        setForm({...form , [e.target.name] : e.target.value })
    }
    const onSubmit = (e) =>{

        e.preventDefault();

        if(form.name === "" || form.phoneNumber === ""){
            return false;
        }

        addContact([ ...contacts , form ]);
    };

    return (
        <form onSubmit = {onSubmit}>
            <div>
                <input 
                name ="name" 
                placeholder = "Full Name"
                onChange = {onChangeInput}
                value = {form.name}
                />
            </div>         
            <div>
                <input 
                name = "phoneNumber"
                placeholder = "Phone Number" 
                onChange = {onChangeInput}
                value = {form.phoneNumber}
                />
            </div>
            <div className = "btn">
                <button>Add</button>
            </div>
        </form>
    )
}

export default Form
