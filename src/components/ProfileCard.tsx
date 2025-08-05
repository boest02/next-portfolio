import React from 'react';
import styles from './styles/profileCard.module.css';
import { ResumeBasics } from '@/types/ResumeData';

// Props interface for our new React component.
// It directly maps to the Svelte component's `export let` variables.
interface ProfileCardProps {
  basics: ResumeBasics;
  type?: 'photo' | ''; // Enforcing specific string values
}

/**
 * ProfileCard Component
 *
 * This component displays basic profile information based on the provided data.
 * It's a conversion of the Svelte component you provided, rewritten for React
 * and TypeScript. It uses a CSS Module for styling, which is a common pattern
 * in Next.js projects for scoped CSS.
 */

const ProfileCard: React.FC<ProfileCardProps> = ({ basics, type }) => {
  return (
    <article className={styles.outlineWrapper}>
      {type === 'photo' && (
        <div
          className={styles.myPhoto}
          style={{ ['--profile-pic' as string]: `url("${basics.image}")` } as React.CSSProperties}
        ></div>
      )}
      <section>
        <div className={styles.headingWrapper}>
          <h1>{basics.name}</h1>
          <div className={styles.locationWrapper}>
            {basics.location.city}, {basics.location.region} {basics.location.postalCode}
          </div>
          <div>{basics.phone}</div>
        </div>        
      </section>
    </article>
  );
};

export default ProfileCard;