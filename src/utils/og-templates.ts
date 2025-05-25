export interface OGTemplateData {
  title: string;
  description?: string;
  author?: string;
  site?: string;
  type?: 'article' | 'note' | 'page';
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
        backgroundColor: '#0f0f0f',
        backgroundImage: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%)',
        color: '#ffffff',
        padding: '80px',
        fontFamily: 'League Spartan',
        position: 'relative',
      },
      children: [
        // Main content area
        {
          type: 'div',
          props: {
            style: {
              display: 'flex',
              flexDirection: 'column',
              flex: 1,
              justifyContent: 'center',
            },
            children: [
              // Title
              {
                type: 'h1',
                props: {
                  style: {
                    fontSize: data.title.length > 50 ? '56px' : '72px',
                    fontWeight: '800',
                    lineHeight: '1.1',
                    marginBottom: '24px',
                    color: '#ffffff',
                    maxWidth: '100%',
                    wordWrap: 'break-word',
                  },
                  children: data.title,
                },
              },
              // Description
              data.description && {
                type: 'p',
                props: {
                  style: {
                    fontSize: '28px',
                    fontWeight: '400',
                    lineHeight: '1.4',
                    color: '#a0a0a0',
                    marginBottom: '40px',
                    maxWidth: '90%',
                  },
                  children: data.description,
                },
              },
            ].filter(Boolean),
          },
        },
        // Footer with site info
        {
          type: 'div',
          props: {
            style: {
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 'auto',
              paddingTop: '40px',
              borderTop: '2px solid #333',
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
              {
                type: 'div',
                props: {
                  style: {
                    fontSize: '20px',
                    color: '#666',
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                  },
                  children: 'Article',
                },
              },
            ],
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
