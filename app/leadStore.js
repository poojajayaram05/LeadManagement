import {create} from 'zustand';

const useIdStore = create((set) => ({
    number: null,
    taskId: null,
    setLeadId: (newId) => set({ number: newId }),
    setTaskId: (newId) => set({ taskId: newId }),
}));


export default useIdStore;
