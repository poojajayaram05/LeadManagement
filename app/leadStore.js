import {create} from 'zustand';

const useIdStore = create((set) => ({
    leadId: null,
    taskId: null,
    setLeadId: (newId) => set({ leadId: newId }),
    setTaskId: (newId) => set({ taskId: newId }),
}));


export default useIdStore;
