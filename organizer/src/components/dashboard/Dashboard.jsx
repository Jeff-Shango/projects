import React from 'react';
import Homemaintenance from '../homemaintenance/Homemaintenance';
import Carmaintenance from '../carmaintenance/Carmaintenance';
import Financialbudget from '../financialbudget/Financialbudget';

const Dashboard = () => {
  return (
    <>
    <Homemaintenance/>
    <Carmaintenance/>
    <Financialbudget/>
    </>
  )
}

export default Dashboard