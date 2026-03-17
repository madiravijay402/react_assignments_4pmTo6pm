import React from 'react';
import Counter from '../componentws/Counter';
import TextInput from '../componentws/TextInput';
import Login from '../componentws/Login';
import UpdateName from '../componentws/UpdateName';
import DarkLight from '../componentws/DarkLight';
import FormExample from '../componentws/FormExample';
import OddEven from '../componentws/OddEven';
import Productobj from '../componentws/Productobj';
import ProfilCard from '../componentws/ProfilCard';
import RemoveLastItem from '../componentws/RemoveLastItem';
import Skills from '../componentws/Skills';
import UpdateCity from '../componentws/UpdateCity';
import NumberList from '../componentws/addNumber';

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-12 tracking-tight">
          React Components Showcase
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Counter />
          <TextInput />
          <Login />
          <DarkLight />
          <UpdateName />
          <FormExample />
          <OddEven />
          <Productobj />
          <ProfilCard />
          <RemoveLastItem />
          <Skills />
          <UpdateCity />
          <NumberList />
        </div>
      </div>
    </div>
  )
}

export default Page;