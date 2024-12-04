import { create } from "zustand";

interface ModalState {
  modalState: "open" | "close" | "hidden";
  openModal: () => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
  modalState: "hidden",
  openModal: () => set({ modalState: "open" }),

  closeModal: () => set({ modalState: "close" }),
}));
