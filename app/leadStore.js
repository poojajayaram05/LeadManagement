import {create} from 'zustand';

const useIdStore = create((set) => ({
    number: null,
    activityId: null,
    account_number:null,

    setLeadId: (newId) => set({ number: newId }),
    activityId: (newId) => set({ activityId: newId }),
    setAccountNumber:(newId)=>set({account_number:newId}),
}));


export default useIdStore;
