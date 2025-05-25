export interface OGTemplateData {
  title: string;
  description?: string;
  author?: string;
  site?: string;
  type?: 'article' | 'note' | 'page';
  profileImage: string;
  authorName: string;
  url: string;
}

export const templates = {
  article: (data: OGTemplateData) => ({
    type: 'div',
    props: {
      style: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        boxShadow: '0 4px 32px 0 rgba(0,0,0,0.18)',
        overflow: 'hidden',
        position: 'relative',
        background: '#191919',
      },
      children: [
        // Accent color bar on the left
        {
          type: 'div',
          props: {
            style: {
              position: 'absolute',
              top: 0,
              left: 0,
              width: '20px',
              height: '100%',
              background: '#ff7369',
              zIndex: 10,
            },
          },
        },
        // Top bar (profile image + name)
        {
          type: 'div',
          props: {
            style: {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              padding: '40px 56px 0 56px',
              zIndex: 2,
              position: 'relative',
            },
            children: [
              // Profile image + name
              {
                type: 'div',
                props: {
                  style: {
                    display: 'flex',
                    alignItems: 'center',
                  },
                  children: [
                    {
                      type: 'img',
                      props: {
                        src: data.profileImage,
                        width: 72,
                        height: 72,
                        style: {
                          borderRadius: '50%',
                          border: '4px solid #fff',
                          marginRight: '20px',
                        },
                      },
                    },
                    {
                      type: 'span',
                      props: {
                        style: {
                          fontFamily: 'League Spartan',
                          fontWeight: 700,
                          fontSize: '36px',
                          color: '#ff7369',
                          letterSpacing: '2px',
                        },
                        children: data.authorName.toUpperCase(),
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
        // Main title area (centered block)
        {
          type: 'div',
          props: {
            style: {
              display: 'flex',
              flex: 1,
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 2,
              position: 'relative',
              padding: '0 56px',
            },
            children: [
              {
                type: 'h1',
                props: {
                  style: {
                    fontFamily: 'League Spartan',
                    fontWeight: 800,
                    fontSize: '84px',
                    color: '#fff',
                    lineHeight: '1.1',
                    textAlign: 'center',
                    textShadow: '0 2px 16px rgba(0,0,0,0.32)',
                    margin: 0,
                    maxWidth: 900,
                  },
                  children: data.title,
                },
              },
            ],
          },
        },
        // URL at the bottom left
        {
          type: 'div',
          props: {
            style: {
              position: 'absolute',
              left: '36px',
              bottom: '32px',
              fontFamily: 'League Spartan',
              fontWeight: 400,
              fontSize: '24px',
              color: '#b0b0b0',
              letterSpacing: '0.5px',
              maxWidth: 700,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            },
            children: data.url,
          },
        },
      ],
    },
  }),

  note: (data: OGTemplateData) => ({
    type: 'div',
    props: {
      style: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        backgroundColor: '#1a1a2e',
        backgroundImage: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
        color: '#ffffff',
        padding: '80px',
        fontFamily: 'League Spartan',
        position: 'relative',
      },
      children: [
        // Note indicator
        {
          type: 'div',
          props: {
            style: {
              fontSize: '18px',
              fontWeight: '500',
              color: '#64b5f6',
              textTransform: 'uppercase',
              letterSpacing: '3px',
              marginBottom: '40px',
            },
            children: '📝 Note',
          },
        },
        // Title
        {
          type: 'h1',
          props: {
            style: {
              fontSize: data.title.length > 60 ? '48px' : '64px',
              fontWeight: '700',
              lineHeight: '1.2',
              color: '#ffffff',
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              wordWrap: 'break-word',
            },
            children: data.title,
          },
        },
        // Footer
        {
          type: 'div',
          props: {
            style: {
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 'auto',
              paddingTop: '40px',
              borderTop: '2px solid #64b5f6',
            },
            children: [
              {
                type: 'div',
                props: {
                  style: {
                    fontSize: '24px',
                    fontWeight: '600',
                    color: '#ffffff',
                  },
                  children: data.site || 'danny.is',
                },
              },
            ],
          },
        },
      ],
    },
  }),

  default: (data: OGTemplateData) => ({
    type: 'div',
    props: {
      style: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        backgroundColor: '#2d3748',
        backgroundImage: 'linear-gradient(135deg, #2d3748 0%, #4a5568 100%)',
        color: '#ffffff',
        padding: '80px',
        fontFamily: 'League Spartan',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      },
      children: [
        {
          type: 'h1',
          props: {
            style: {
              fontSize: '72px',
              fontWeight: '800',
              lineHeight: '1.1',
              marginBottom: '40px',
              color: '#ffffff',
            },
            children: data.title || 'danny.is',
          },
        },
        data.description && {
          type: 'p',
          props: {
            style: {
              fontSize: '32px',
              fontWeight: '400',
              color: '#cbd5e0',
              maxWidth: '80%',
            },
            children: data.description,
          },
        },
      ].filter(Boolean),
    },
  }),
};
