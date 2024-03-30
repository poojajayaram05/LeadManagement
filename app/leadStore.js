import {create} from 'zustand';

const useIdStore = create((set) => ({
    number: null,
    activityId: null,

    setLeadId: (newId) => set({ number: newId }),
    activityId: (newId) => set({ activityId: newId }),
}));


export default useIdStore;
