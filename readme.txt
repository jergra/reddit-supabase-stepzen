June 5, 2022

C:\webdev\reddit-supabase-stepzen

This is a copy of the private code in C:\webdev\reddit-react-supabase-stepzen.

Reddit clone from tutorial:
    Let's build Reddit 2.0 with NEXT.JS! (React, SQL, Supabase, StepZen, GraphQL, TypeScript,Tailwind)
    https://www.youtube.com/watch?v=O0AhmAVzOo4

    by Sonny Sangha

deployed:
    https://reddit-react-supabase-stepzen.vercel.app/

Depending on whether we want local or deployed to work,
we need to change 'redirect uri' at https://www.reddit.com/prefs/apps
from https://reddit-react-supabase-stepzen.vercel.app/api/auth/callback/reddit
to http://localhost:3000/api/auth/callback/reddit.
Note the change from 'https' to 'http'.


.env.local looks like this:

REDDIT_CLIENT_ID=
REDDIT_CLIENT_SECRET=

NEXT_PUBLIC_STEPZEN_KEY=

NEXTAUTH_SECRET=
NEXTAUTH_URL=

STEPZEN_POSTGRES_URI=

