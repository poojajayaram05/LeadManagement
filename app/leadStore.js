import {create} from 'zustand';

const useIdStore = create((set) => ({
    number: null,
    status: null,
    activity_number:null,

    setLeadId: (newId) => set({ number: newId }),
    setStatus: (newId) => set({ status: newId }),
    setActivityNumber:(newId)=>set({activity_number:newId})
}));


export default useIdStore;

export const useContactStore= create((set)=>({
    number:null,
    setContactId:(newId)=>set({number:newId})

}))


export const useOpportunityStore = create((set) => ({
    number:null,
    setOpportunityId: (newId) => set({ number: newId }),
}));
