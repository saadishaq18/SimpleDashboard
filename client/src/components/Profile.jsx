// components/Profile.js
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import {Input, Button, Select} from 'components/GeneralComponents'

// Validation schema
const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  gender: Yup.string().required('Gender is required'),
});

const genderOption = [
  { label: 'Male', value: 'male' },
  { label: 'Female', value: 'female' },
  { label: 'Other', value: 'other' },
]

const Profile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    console.log('User Details:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-3">
      <h2>User Profile</h2>
      <Input label="Name" name="name" register={register} error={errors.name} />
      <Input label="Email" name="email" register={register} error={errors.email} type="email" />
      <Select
        label="Gender"
        name="gender"
        register={register}
        error={errors.gender}
        options={genderOption}
      />
      <Button label="Submit" type="submit" />
    </form>
  );
};

export default Profile;

