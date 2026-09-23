# Network Animal website

Public marketing and event website for Network Animal, powered by One Purpose
Network.

The public, no-account Network Animal quiz is served at `/quiz/`. Quiz results
are calculated entirely in the visitor's browser. The optional follow-up Google
Form is loaded only after the visitor chooses to request more information.

## Local development

```powershell
pnpm install
pnpm exec vinext dev
```

## Production check

```powershell
pnpm exec vinext build
node --test tests/rendered-html.test.mjs
```

The Flutter application remains the authenticated product for quiz results,
Dot profiles, event participation, and relationship matching.
