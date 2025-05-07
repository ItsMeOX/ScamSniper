import {
  forwardRef,
  Ref,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import styles from './scene2.module.css';
import Image from 'next/image';
import Phone from '../phone/Phone';
import gsap from 'gsap';
import SceneReject from '../phone/SceneReject';
import SceneMatch from '../phone/SceneMatch';

export type Scene2Ref = {
  tlScene2: gsap.core.Timeline | null;
};
type Scene2Props = {
  callback: () => void;
};

function Scene2(props: Scene2Props, ref: Ref<Scene2Ref>) {
  const scene2Ref = useRef(null);
  const girl1Ref = useRef(null);
  const girl2Ref = useRef(null);
  const girl3Ref = useRef(null);
  const phoneRef = useRef(null);
  const girl1RejectRef = useRef(null);
  const girl2RejectRef = useRef(null);
  const Girl3MatchRef = useRef(null);
  const tlMain = useRef<gsap.core.Timeline | null>(null);
  const tlGirl1Reject = useRef<gsap.core.Timeline | null>(null);
  const tlGirl2 = useRef<gsap.core.Timeline | null>(null);
  const tlGirl2Reject = useRef<gsap.core.Timeline | null>(null);
  const tlGirl3 = useRef<gsap.core.Timeline | null>(null);
  const tlGirl3Match = useRef<gsap.core.Timeline | null>(null);

  const [showComponent, setShowComponent] = useState({
    girl1: true,
    girl1Reject: true,
    girl2: true,
    girl2Reject: true,
    girl3: true,
    girl3Match: true,
  });

  useImperativeHandle(ref, () => ({
    tlScene2: tlMain.current,
  }));

  useEffect(() => {
    tlMain.current = gsap.timeline();
    tlGirl1Reject.current = gsap.timeline({ paused: true });
    tlGirl2.current = gsap.timeline({ paused: true });
    tlGirl2Reject.current = gsap.timeline({ paused: true });
    tlGirl3.current = gsap.timeline({ paused: true });
    tlGirl3Match.current = gsap.timeline({ paused: true });

    tlMain.current
      .fromTo(scene2Ref.current, { opacity: 0 }, { opacity: 1, duration: 0.5 })
      .fromTo(phoneRef.current, { y: '100vh' }, { y: 0, duration: 1 })
      .addPause();

    tlGirl1Reject.current
      .to(girl1Ref.current, {
        opacity: 0,
        duration: 0.1,
        onComplete: () =>
          setShowComponent((prev) => ({ ...prev, girl1: false })),
      })
      .fromTo(
        girl1RejectRef.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.1,
        }
      );

    tlGirl2.current
      .to([girl1Ref.current, girl1RejectRef.current], {
        opacity: 0,
        duration: 0.1,
        onComplete: () =>
          setShowComponent((prev) => ({
            ...prev,
            girl1: false,
            girl1Reject: false,
          })),
      })
      .fromTo(girl2Ref.current, { opacity: 0 }, { opacity: 1, duration: 0.1 });

    tlGirl2Reject.current
      .to(girl2Ref.current, {
        opacity: 0,
        duration: 0.1,
        onComplete: () =>
          setShowComponent((prev) => ({ ...prev, girl2: false })),
      })
      .fromTo(
        girl2RejectRef.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.1,
        }
      );

    tlGirl3.current
      .to([girl2Ref.current, girl2RejectRef.current], {
        opacity: 0,
        duration: 0.1,
        onComplete: () =>
          setShowComponent((prev) => ({
            ...prev,
            girl2: false,
            girl2Reject: false,
          })),
      })
      .fromTo(girl3Ref.current, { opacity: 0 }, { opacity: 1, duration: 0.1 });

    tlGirl3Match.current
      .to(girl3Ref.current, {
        opacity: 0,
        duration: 0.1,
        onComplete: () =>
          setShowComponent((prev) => ({ ...prev, girl3: false })),
      })
      .fromTo(
        Girl3MatchRef.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.1,
        }
      );
  }, []);

  return (
    <div className={styles.scene2} ref={scene2Ref}>
      <div className={styles.phone_wrapper} ref={phoneRef}>
        <Phone>
          <div className={styles.app_box}>
            {showComponent.girl1 && (
              <div ref={girl1Ref} className={styles.girl_box}>
                <Image
                  className={`${styles.profile_picture} ${styles.profile_picture_girl1}`}
                  src="/simulation/lovescam/girl1.png"
                  alt="girl1"
                  width={500}
                  height={500}
                  quality={100}
                  unoptimized={true}
                />
                <span className={styles.profile_title}>Emily, 22</span>
                <p className={styles.profile_description}>
                  Creative soul with a love for laughter, late-night chats, and
                  weekend gateways.
                </p>
                <div className={styles.profile_button_box}>
                  <button
                    onClick={() => {
                      setShowComponent((prev) => ({
                        ...prev,
                        girl2: true,
                      }));
                      tlGirl2.current!.play();
                    }}
                    className={`${styles.skip_button} ${styles.button}`}></button>
                  <button
                    onClick={() => {
                      setShowComponent((prev) => ({
                        ...prev,
                        girl1Reject: true,
                      }));
                      tlGirl1Reject.current!.play();
                    }}
                    className={`${styles.button} ${styles.love_button}`}></button>
                  <button
                    className={`${styles.share_button} ${styles.button}`}></button>
                </div>
              </div>
            )}

            {showComponent.girl1Reject && (
              <SceneReject
                ref={girl1RejectRef}
                profileImgSrc="/simulation/lovescam/girl1.png"
                profileBgColor="#c4e297"
                buttonCallback={() => {
                  setShowComponent((prev) => ({ ...prev, girl2: true }));
                  tlGirl2.current?.play();
                  console.log(showComponent);
                }}
              />
            )}

            {showComponent.girl2 && (
              <div ref={girl2Ref} className={styles.girl_box}>
                <Image
                  className={`${styles.profile_picture} ${styles.profile_picture_girl2}`}
                  src="/simulation/lovescam/girl2.png"
                  alt="girl2"
                  width={500}
                  height={500}
                  quality={100}
                  unoptimized={true}
                />
                <span className={styles.profile_title}>Ada, 23</span>
                <p className={styles.profile_description}>
                  Techie by day, stargazer by night. Love deep talks, good
                  music, and spontaneous adventures.
                </p>
                <div className={styles.profile_button_box}>
                  <button
                    onClick={() => {
                      tlGirl3.current!.play();
                    }}
                    className={`${styles.skip_button} ${styles.button}`}></button>
                  <button
                    onClick={() => {
                      tlGirl2Reject.current!.play();
                    }}
                    className={`${styles.button} ${styles.love_button}`}></button>
                  <button
                    className={`${styles.share_button} ${styles.button}`}></button>
                </div>
              </div>
            )}

            {showComponent.girl2Reject && (
              <SceneReject
                ref={girl2RejectRef}
                profileImgSrc="/simulation/lovescam/girl2.png"
                profileBgColor="#ecd3eb"
                buttonCallback={() => {
                  setShowComponent((prev) => ({ ...prev, girl3: true }));
                  tlGirl3.current?.play();
                }}
              />
            )}

            {showComponent.girl3 && (
              <div ref={girl3Ref} className={styles.girl_box}>
                <Image
                  className={`${styles.profile_picture} ${styles.profile_picture_girl3}`}
                  src="/simulation/lovescam/girl3.png"
                  alt="girl3"
                  width={500}
                  height={500}
                  quality={100}
                  unoptimized={true}
                />
                <span className={styles.profile_title}>Yuki, 22</span>
                <p className={styles.profile_description}>
                  Designer with a passport always ready. I chase sunsets,
                  stories, and beautiful spaces.
                </p>
                <div className={styles.profile_button_box}>
                  <button
                    className={`${styles.skip_button} ${styles.button}`}
                    style={{ backgroundColor: '##cdc9bb' }}></button>
                  <button
                    onClick={() => {
                      tlGirl3Match.current!.play();
                    }}
                    className={`${styles.button} ${styles.love_button}`}></button>
                  <button
                    className={`${styles.share_button} ${styles.button}`}></button>
                </div>
              </div>
            )}

            {showComponent.girl3Match && (
              <SceneMatch
                ref={Girl3MatchRef}
                profileImgSrc="/simulation/lovescam/girl3.png"
                profileBgColor="#99c8ff"
                buttonCallback={() => {
                  props.callback();
                  setShowComponent((prev) => ({ ...prev, girl3Match: false }));
                }}
              />
            )}
          </div>
        </Phone>
      </div>
    </div>
  );
}

export default forwardRef(Scene2);
