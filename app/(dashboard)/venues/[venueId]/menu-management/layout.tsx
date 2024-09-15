import React from 'react';

export default function MenuManagementLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="menu-management-layout">
      {/* Add any shared layout elements like navigation, header, etc. and different pages or  tabs just like a complete dashboard */}
      {children}
    </div>
  );
}
