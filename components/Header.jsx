import React, { useState, useEffect } from 'react';
import { Menu2 } from '../components/Menu2'

export default function Header() {
    return (
        <div className="container mx-auto px-10 mb-8">
          <div className="border-b w-full inline-block border-primary-red py-1">
            <Menu2/>
          </div>
        </div>
      );
};
