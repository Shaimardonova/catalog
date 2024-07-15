

export default function SearchInput({ searchTerm, handleSearch }) {
    return (
        <header className={"input-group mb-3"}>
            <input 
                type="text" 
                className='form-control w-30px' 
                placeholder="Поиск"  
                value={searchTerm}
                onChange={handleSearch}
            /> 
        </header>
    )
}





