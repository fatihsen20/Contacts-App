import {useState} from 'react'

function List({contacts}) {
    const [filterText , setFilterText] = useState("");
    const filtered = contacts.filter((item) => {
        return Object.keys(item).some((key) => 
            item[key]
            .toString()
            .toLowerCase()
            .includes(filterText.toLowerCase())
        );
    });
    console.log("filtered" , filtered);
    return (
        <div>
            <input placeholder = "Filter Contact" 
            value = {filterText}
            onChange = {(e) => setFilterText(e.target.value)}
            />
            <ul class="list">
                {filtered.map((contact , key) => (
                    <li key = {key}>
                        <span>{contact.name}</span>
                        <span>{contact.phoneNumber}</span>
                    </li>
                    ))}
            </ul>
            <p> Toplam Kişi Sayısı: {filtered.length}</p>
        </div>
    )
}

export default List
