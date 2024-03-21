import {create} from 'zustand';

const useMeetingStore = create((set) => ({
    meetingId: null,
    setMeetingId: (newId) => set((state) => ({ meetingId: newId })),
}));


export default useMeetingStore;