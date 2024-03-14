import {create} from 'zustand';

const useIdStore = create((set) => ({
    leadId: null,
    setLeadId: (newId) => set((state) => ({ leadId: newId })),
}));


export default useIdStore;
