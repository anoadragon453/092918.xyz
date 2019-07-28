---
image: /images/favicon.webp
description: Technical information about Inner Equestria.
---

# About us

## Social

[An article about us on WikiFur in Russian](https://ru.wikifur.com/wiki/Inner_Equestria).

## About our server

Currently our "infrastructure" consists of three servers (except [Vault #99](/how/peertube.md) which is hosted on the fourth server maintained by [Andrew](https://amorgan.xyz/)) with codenames: _Trixie_, _Derpy_, and _Glimmy_. The first two are VPS hosted on Hetzner and cost 12 euro monthly, the third one is a bare metal server hosted at [Coma's](/who/commagray.md) homeland.

- _Trixie_ is the main reverse proxying server which powers our [Caddy](https://caddyserver.com) and [Shadowsocks](/how/shadowsocks.md) instances. This is a secure middleman between _Glimmy_ and the Outer Internet.

- _Derpy_ is the mail server which powers our [Mailu email stack](/how/email.md) and [Shadowsocks](/how/shadowsocks.md) instances.

- _Glimmy_ is the main backend server which powers our [Traefik](https://traefik.io), [Matrix](/how/matrix.md), [Gitea](/how/gitea.md), [Pleroma](/how/pleroma.md), [Plume](/how/plume.md), [LynxChan](/how/lynxchan.md), [Shadowsocks](/how/shadowsocks.md), and [Tor exit node](https://www.torproject.org).

![This is Glimmy](/images/glimmy_naked.jpg)