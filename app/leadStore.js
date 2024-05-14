import {create} from 'zustand';

const useIdStore = create((set) => ({
    number: null,
    status: null,
    account_number:null,
    sys_id:null,
    flag:null,
    account_type:null,
    flagCreate:null,
    

    setLeadId: (newId) => set({ number: newId }),
    setStatus: (newId) => set({ status: newId }),
    setFlag:(newId)=>set({flag:newId}),
    setAccountNumber:(newId)=>set({account_number:newId}),
    setSysId:(newId)=>set({sys_id:newId}),
    setAccountType:(newId)=>set({account_type:newId}),
    setFlagCreate:(newId)=>set({flagCreate:newId}),
    
}));


export default useIdStore;

export const useContactStore= create((set)=>({
    number:null,
    sys_id:null,
    setContactId:(newId)=>set({number:newId}),
    setCsysId:(newId)=>set({sys_id:newId})

}))

export const useActivityStore= create((set)=>({
    number:null,
    sys_id:null,
    activity_name: null,
    setActivityNumber:(newId)=>set({number:newId}),
    setAsysId:(newId)=>set({sys_id:newId}),
    setSubject:(newId)=>set({subject:newId})

}))

export const useOpportunityStore = create((set) => ({
    number:null,
    setOpportunityId: (newId) => set({ number: newId }),
}));


