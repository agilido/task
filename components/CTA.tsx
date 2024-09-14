import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  outlined?: boolean;
};

export const CTA = ({ children, outlined }: Props) => {
  return (
    <button
      className={`${
        outlined ? "bg-white !text-accent border-accent border" : "bg-accent"
      }  text-white font-semibold py-3 px-6 rounded-lg`}
    >
      {children}
    </button>
  );
};
/* Buttons */

// /* Auto layout */
// display: flex;
// flex-direction: row;
// justify-content: center;
// align-items: center;
// padding: 12px 24px;
// gap: 8px;

// width: 158px;
// height: 47px;

// /* EasyGo/bright-color */
// background: #0147FF;
// border-radius: 8px;

// /* Inside auto layout */
// flex: none;
// order: 0;
// flex-grow: 0;

/* Buttons OUTLINED */

// box-sizing: border-box;

// /* Auto layout */
// display: flex;
// flex-direction: row;
// justify-content: center;
// align-items: center;
// padding: 12px 24px;
// gap: 8px;

// width: 158px;
// height: 47px;

// /* EasyGo/bright-color */
// border: 1px solid #0147FF;
// border-radius: 8px;

// /* Inside auto layout */
// flex: none;
// order: 1;
// flex-grow: 0;
