"use client";
import { Contact, IBlog, useContactStore, useGlobalStore, useJobStore } from '@/store/zustand';
import { useRef } from 'react'

function StoreJobInitializer({ data }: any) {
  const initilized = useRef(false);

  if (!initilized.current) {
    useJobStore.setState(data);
    initilized.current = true;
  }

  return null;
}

export default StoreJobInitializer

function StoreGlobalInitializer({ data, blogs }: { data?: Record<string, any>, blogs?: IBlog[] }) {
  const initilized = useRef(false);

  if (!initilized.current) {
    if (data) {
      useGlobalStore.setState(prev => ({ ...prev, global: data }));
    }
    if (blogs) {
      useGlobalStore.setState(prev => ({ ...prev, blogs }));
    }
    initilized.current = true;
  }

  return null;
}

function StoreContactInitializer({ data }: { data: Contact[] | undefined }) {
  const initialized = useRef(false);

  if (!initialized.current) {
    useContactStore.setState({ contact: data });
    initialized.current = true;
  }

  return null;
}

export { StoreGlobalInitializer, StoreContactInitializer }