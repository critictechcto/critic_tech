import { Clerk } from '@clerk/clerk-js';

const clerk = new Clerk({ frontendApi: 'pk_test_bWVycnktaGVycmluZy03NC5jbGVyay5hY2NvdW50cy5kZXYk' });
clerk.load();

function openSignInWidget() {
  clerk.openSignIn();
}
