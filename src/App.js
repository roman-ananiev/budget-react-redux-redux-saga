import React, {useEffect, useState} from 'react';
import {Container} from 'semantic-ui-react'
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EntryLines from "./components/EntryLines";
import ModalEdit from "./components/ModalEdit";

let initialEntries = [
    {   id:1,
        description: "Work income",
        value: 1000.00,
        isExpense: false
    },
    {   id:2,
        description: "Watter bill",
        value: 20.00,
        isExpense: true
    },
    {   id:3,
        description: "Rent",
        value: 292.05,
        isExpense: true
    },
    {   id:4,
        description: "Power bill",
        value: 121.22,
        isExpense: true
    },
]
const App = () => {
    const [entries, setEntries] = useState(initialEntries)
    const [description, setDescription] = useState('')
    const [value, setValue] = useState('')
    const [isExpense, setIsExpense] = useState(false)
    const [isOpenModal, setIsOpenModal] = useState(false)
    const [entryId, setEntryId] = useState()
    const [totalIncomes, setTotalIncomes] = useState(0)
    const [totalExpenses, setTotalExpenses] = useState(0)
    const [total, setTotal] = useState(0)

    useEffect(()=>{
        if(!isOpenModal && entryId){
            const index = entries.findIndex(entry => entry.id === entryId)
            const newEntries = [...entries]
            newEntries[index].description = description
            newEntries[index].value = value
            newEntries[index].isExpense = isExpense
            setEntries(newEntries)
            resetEntry()
        }//eslint-disable-next-line react-hooks/exhaustive-deps
    },[isOpenModal])

    useEffect(()=>{
        let totalIncomes = 0
        let totalExpenses = 0
        entries.map((entry)=>{
            if(entry.isExpense){
                return totalExpenses += Number(entry.value)
            }
            return totalIncomes += Number(entry.value)
        })
        let total = totalIncomes - totalExpenses
        setTotalIncomes(totalIncomes)
        setTotalExpenses(totalExpenses)
        setTotal(total)
    },[entries])

    const resetEntry = () => {
        setIsExpense(false)
        setValue('')
        setDescription('')
    }
    const deleteEntry = (id) => {
        const result = entries.filter(entry=> entry.id !== id)
        setEntries(result)
    }
    const addEntry = () => {
        const result = entries.concat({id: entries.length+1, description, value, isExpense})
        setEntries(result)
        resetEntry()
    }

    const editEntry = (id) => {
        console.log(id)
        if(id){
            setEntryId(id)
            const index = entries.findIndex(entry => entry.id === id)
            const entry = entries[index]
            setDescription(entry.description)
            setValue(entry.value)
            setIsExpense(entry.isExpense)
            setIsOpenModal(true)
        }
    }
    return (
        <Container>
            <MainHeader title={'Budget'}/>
            <DisplayBalance title={'Your balance:'} value={total} size={'small'}/>
           <DisplayBalances totalExpenses={totalExpenses} totalIncomes={totalIncomes}/>
            <MainHeader title={'History'} type={'h3'}/>
            <EntryLines
                entries={entries}
                deleteEntry={deleteEntry}
                isOpenModal={isOpenModal}
                setIsOpenModal={setIsOpenModal}
                editEntry={editEntry} />
            <MainHeader title={'Add new transaction'} type={'h3'}/>
            <NewEntryForm
                addEntry={addEntry}
                description={description}
                value={value}
                isExpense={isExpense}
                setDescription={setDescription}
                setValue={setValue}
                setIsExpense={setIsExpense}
            />
            <ModalEdit
                isOpen={isOpenModal} setIsOpenModal={setIsOpenModal}
                addEntry={addEntry}
                description={description}
                value={value}
                isExpense={isExpense}
                setDescription={setDescription}
                setValue={setValue}
                setIsExpense={setIsExpense}
            />
        </Container>
    );
};

export default App;
