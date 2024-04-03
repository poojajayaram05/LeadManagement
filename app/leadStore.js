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
