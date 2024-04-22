import {create} from 'zustand';

const useIdStore = create((set) => ({
    number: null,
    status: null,
    activity_number:null,
    account_number:null,
    sys_id:null,
    

    setLeadId: (newId) => set({ number: newId }),
    setStatus: (newId) => set({ status: newId }),
    setActivityNumber:(newId)=>set({activity_number:newId}),
    setAccountNumber:(newId)=>set({account_number:newId}),
    setSysId:(newId)=>set({sys_id:newId})
}));


export default useIdStore;

export const useContactStore= create((set)=>({
    number:null,
    sys_id:null,
    setContactId:(newId)=>set({number:newId}),
    setCsysId:(newId)=>set({sys_id:newId})

}))


export const useOpportunityStore = create((set) => ({
    number:null,
    setOpportunityId: (newId) => set({ number: newId }),
}));


