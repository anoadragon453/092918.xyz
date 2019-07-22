---
image: /images/favicon.webp
description: Technical information about Inner Equestria.
---

# About us

## Social

[An article about us on WikiFur in Russian](https://ru.wikifur.com/wiki/Inner_Equestria).

## About our server

Currently our "infrastructure" consists of two servers (except of [Vault #99](/how/peertube.md) which is hosted on the third server maintained by [Andrew](https://amorgan.xyz/)) with codenames: _Trixie_ and _Derpy_. Both are VPS hosted on Hetzner and cost 10+ euro monthly with pretty low specs.

- _Trixie_ is the main server which powers our [Matrix](/how/matrix.md), [Gitea](/how/gitea.md), [Pleroma](/how/pleroma.md), [Plume](/how/plume.md), [LynxChan](/how/lynxchan.md), and [Shadowsocks](/how/shadowsocks.md) instances. It struggles, so a half of services need to be moved to another server.

- _Derpy_ is the mail server which powers our [Mailu email stack](/how/email.md) and [Shadowsocks](/how/shadowsocks.md) instances.

To be honest, VPS is a bad option for self-hosting: it's expensive in the long run and gives you zero control over your data. Well, we would say it's even not zero — it's negative value, because you agree to follow provider's ToS and laws of their country.

## Future infrastructure

We have some plans [about moving to real hardware](/donate/#crowdfunding). After that the services layout could be changed to:

- _Trixie_ is the main reverse proxying server which will power our [Caddy](https://caddyserver.com), [Gitea](/how/gitea.md), and [Shadowsocks](/how/shadowsocks.md) instances. This is a secure middleman between _Glimmy_ and the Outer Internet.

- _Derpy_ is the mail server which will power our [Mailu email stack](/how/email.md) and [Shadowsocks](/how/shadowsocks.md) instances.

- _Glimmy_ is the main backend server which will power our [Traefik](https://traefik.io), [Matrix](/how/matrix.md), [Pleroma](/how/pleroma.md), [Plume](/how/plume.md), [LynxChan](/how/lynxchan.md), and [Tor](https://www.torproject.org) instances sensitive to freedom and free speech. It should be hosted at [Coma's](/who/commagray.md) homeland.
