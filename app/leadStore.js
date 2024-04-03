import {create} from 'zustand';

const useIdStore = create((set) => ({
    number: null,
    status: null,

    setLeadId: (newId) => set({ number: newId }),
    setStatus: (newId) => set({ status: newId }),
}));


export default useIdStore;
