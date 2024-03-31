import { useState } from 'react';
import ContactHeader from './ContactHeader';
import ImageTitleComponent from './ImageTitleComponent';
import Navbar from './Navbar';

export default function App() {

  return (
    <>
    <ContactHeader></ContactHeader>
    <Navbar></Navbar>
    <ImageTitleComponent></ImageTitleComponent>
    </>
  );
}


