import type { CSSProperties } from "react";

const colours = {
  ink: "#1d1524",
  muted: "#62586a",
  violet: "#7657ff",
  lilac: "#c9baff",
  paper: "#fffdf8",
  warm: "#f5f0e6",
};

const body: CSSProperties = {
  margin: 0,
  padding: "32px 16px",
  backgroundColor: colours.warm,
  color: colours.ink,
  fontFamily: "Arial, Helvetica, sans-serif",
};

const card: CSSProperties = {
  width: "100%",
  maxWidth: "620px",
  margin: "0 auto",
  border: `1px solid ${colours.ink}`,
  backgroundColor: colours.paper,
};

export function WaitlistConfirmationEmail({
  companySize,
}: {
  companySize: string;
}) {
  return (
    <html lang="en">
      <body style={body}>
        <table
          role="presentation"
          width="100%"
          cellPadding="0"
          cellSpacing="0"
          style={card}
        >
          <tbody>
            <tr>
              <td
                style={{
                  padding: "22px 28px",
                  backgroundColor: colours.ink,
                  color: "#ffffff",
                  fontSize: "12px",
                  fontWeight: 800,
                  letterSpacing: "2px",
                }}
              >
                ASK VERITY
              </td>
            </tr>
            <tr>
              <td style={{ height: "8px", backgroundColor: colours.violet }} />
            </tr>
            <tr>
              <td style={{ padding: "46px 38px 28px" }}>
                <p
                  style={{
                    margin: "0 0 22px",
                    color: colours.violet,
                    fontSize: "11px",
                    fontWeight: 800,
                    letterSpacing: "1.5px",
                  }}
                >
                  AUSTRALIAN EARLY ACCESS
                </p>
                <h1
                  style={{
                    margin: "0 0 24px",
                    fontSize: "48px",
                    lineHeight: 0.98,
                    letterSpacing: "-2.4px",
                  }}
                >
                  You’re in.
                  <br />
                  Verity’s in your corner.
                </h1>
                <p
                  style={{
                    margin: "0 0 20px",
                    color: colours.muted,
                    fontSize: "17px",
                    lineHeight: 1.65,
                  }}
                >
                  You’re now on the Ask Verity Australian early-access list.
                  We’ll keep you close to product progress and let you know when
                  the first places open.
                </p>
                <p
                  style={{
                    margin: 0,
                    color: colours.muted,
                    fontSize: "17px",
                    lineHeight: 1.65,
                  }}
                >
                  Verity is being built to help you decide what to do, what to
                  say and what to document when a difficult people problem
                  lands.
                </p>
              </td>
            </tr>
            <tr>
              <td style={{ padding: "8px 38px 40px" }}>
                <table
                  role="presentation"
                  width="100%"
                  cellPadding="0"
                  cellSpacing="0"
                  style={{
                    borderTop: `1px solid ${colours.ink}`,
                    borderBottom: `1px solid ${colours.ink}`,
                  }}
                >
                  <tbody>
                    <tr>
                      <td
                        style={{
                          padding: "20px 0",
                          color: colours.muted,
                          fontSize: "12px",
                          lineHeight: 1.5,
                        }}
                      >
                        TEAM SIZE
                      </td>
                      <td
                        align="right"
                        style={{
                          padding: "20px 0",
                          fontSize: "14px",
                          fontWeight: 700,
                        }}
                      >
                        {companySize} people
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  padding: "28px 38px",
                  backgroundColor: colours.lilac,
                  fontSize: "12px",
                  lineHeight: 1.6,
                }}
              >
                <strong>Ask Verity</strong>
                <br />
                Your AI HR manager for Australian businesses
                <br />
                <span style={{ color: colours.muted }}>
                  Future updates will always include an unsubscribe option.
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </body>
    </html>
  );
}

