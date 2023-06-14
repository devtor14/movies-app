'use client';
import { useState } from 'react';
import { Button, Input } from '@components';
import { Register } from 'assets/figures';
import Link from 'next/link';

import styles from '@styles/containers/Register.module.css';

export function Container_Register() {
  const [blind, setBlind] = useState(false);

  const handleBlind = () => {
    setBlind(!blind);
  };
  const handleClick = (e: Event) => {
    e.preventDefault();
    alert('Register');
  };

  return (
    <main className={styles.Register}>
      <Register
        width={200}
        height={250}
      />
      <form action=''>
        <h1>Register</h1>
        <Input
          type='EMAIL'
          placeholder='Email'
        />
        <Input
          type='EMAIL'
          placeholder='Confirm Email'
        />
        <Input
          blindState={blind}
          blindHandler={handleBlind}
          type='PASSWORD'
          placeholder='Password'
        />
        <Input
          blindState={blind}
          blindHandler={handleBlind}
          type='PASSWORD'
          placeholder='Confirm Password'
        />
        <Button
          type='NORMAL'
          text='Register'
          handler={handleClick}
        />
        <span>
          Already have account? <Link href={'/account/login'}>Login</Link>
        </span>
      </form>
    </main>
  );
}
