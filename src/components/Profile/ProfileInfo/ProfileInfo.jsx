import React from "react";

import styles from "./ProfileInfo.module.css";
import noPhotoUser from "../../../assets/no-photo-user.png";
import noPhotoBg from "../../../assets/no-bg-photo.jpg";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import { CircleLoader } from "react-spinners";

const ProfileInfo = ({ profile, status, updateStatus }) => {
  if (!profile) {
    return (
      <CircleLoader
        color="#1a71f4"
        cssOverride={{
          display: "block",
          margin: "20% auto",
        }}
        size="100px"
      />
    );
  }
  return (
    <div className={styles.infoWrapper}>
      <img className={styles.image} src={noPhotoBg} />
      <div className={styles.info}>
        <div className={styles.avatar}>
          <img
            className={styles.avatarImg}
            src={profile.photos.small ? profile.photos.small : noPhotoUser}
            alt="avatar"
          />
        </div>
        <h1 className={styles.name}>{profile.fullName.toUpperCase()}</h1>
        <ProfileStatusWithHooks
          statusText={status}
          updateStatus={updateStatus}
        />
        <h3>About me</h3>
        <div className={styles.about}>
          <p className={styles.aboutText}>{profile.aboutMe}</p>
        </div>
        <h3>Contacts</h3>
        <ul className={styles.contacts}>
          <ul className={styles.column}>
            {profile.contacts.github ? (
              <li className={styles.contactsItem}>
                <a
                  className={styles.contactsLink}
                  href={profile.contacts.github}
                  target="_blank"
                >
                  {profile.contacts.github}
                </a>
              </li>
            ) : (
              <li className={styles.contactsItem}>Github</li>
            )}
            {profile.contacts.vk ? (
              <li className={styles.contactsItem}>
                <a
                  className={styles.contactsLink}
                  href={profile.contacts.vk}
                  target="_blank"
                >
                  {profile.contacts.vk}
                </a>
              </li>
            ) : (
              <li className={styles.contactsItem}>Vk</li>
            )}
            {profile.contacts.facebook ? (
              <li className={styles.contactsItem}>
                <a
                  className={styles.contactsLink}
                  href={profile.contacts.facebook}
                  target="_blank"
                >
                  >{profile.contacts.facebook}
                </a>
              </li>
            ) : (
              <li className={styles.contactsItem}>Facebook</li>
            )}
            {profile.contacts.instagram ? (
              <li className={styles.contactsItem}>
                <a
                  className={styles.contactsLink}
                  href={profile.contacts.instagram}
                  target="_blank"
                >
                  >{profile.contacts.instagram}
                </a>
              </li>
            ) : (
              <li className={styles.contactsItem}>Instagram</li>
            )}
          </ul>
          <ul className={styles.column}>
            {profile.contacts.twitter ? (
              <li className={styles.contactsItem}>
                <a
                  className={styles.contactsLink}
                  href={profile.contacts.twitter}
                  target="_blank"
                >
                  >{profile.contacts.twitter}
                </a>
              </li>
            ) : (
              <li className={styles.contactsItem}>Twitter</li>
            )}
            {profile.contacts.website ? (
              <li className={styles.contactsItem}>
                <a
                  className={styles.contactsLink}
                  href={profile.contacts.website}
                  target="_blank"
                >
                  >{profile.contacts.website}
                </a>
              </li>
            ) : (
              <li className={styles.contactsItem}>Website</li>
            )}
            {profile.contacts.youtube ? (
              <li className={styles.contactsItem}>
                <a
                  className={styles.contactsLink}
                  href={profile.contacts.youtube}
                  target="_blank"
                >
                  >{profile.contacts.youtube}
                </a>
              </li>
            ) : (
              <li className={styles.contactsItem}>Youtube</li>
            )}
            {profile.contacts.mainLink ? (
              <li className={styles.contactsItem}>
                <a
                  className={styles.contactsLink}
                  href={profile.contacts.mainLink}
                  target="_blank"
                >
                  >{profile.contacts.mainLink}
                </a>
              </li>
            ) : (
              <li className={styles.contactsItem}>MainLink</li>
            )}
          </ul>
        </ul>
      </div>
    </div>
  );
};

export default ProfileInfo;
