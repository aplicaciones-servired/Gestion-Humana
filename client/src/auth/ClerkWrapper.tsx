// src/components/ClerkWrapper.tsx
import React from 'react';
import { ClerkProvider } from '@clerk/clerk-react';
import { useInactivityLogout } from './InactivityLogout';

interface ClerkWrapperProps {
  children: React.ReactNode;
}

function InactivityHandler({ children }: { children: React.ReactNode }) {
  useInactivityLogout();
  return <>{children}</>
}


const clerkPubKey = import.meta.env.PUBLIC_CLERK_PUBLISHABLE_KEY;

const ClerkWrapper: React.FC<ClerkWrapperProps> = ({ children }) => {
  if (!clerkPubKey) {
    throw new Error("Missing PUBLIC_CLERK_PUBLISHABLE_KEY");
  }

  return (
    <ClerkProvider
      publishableKey={clerkPubKey}
    >
      <InactivityHandler>{children}</InactivityHandler>
    </ClerkProvider>
  );
};

export default ClerkWrapper;