---
image: /images/favicon.webp
description: Техническая информация Внутренней Эквестрии.
---

# О нас

## Социальщина

[Статья о нас на WikiFur](https://ru.wikifur.com/wiki/Inner_Equestria).

## О нашем сервере

На данный момент наша «инфраструктура» состоит из трёх серверов (не считая четвёртого — [Vault #99](/how/peertube.md), что администрируется [Эндрю](https://amorgan.xyz/)) под кодовыми именами _Trixie_, _Derpy_ и _Glimmy_. Первые два — это VPS на Hetzner стоимостью 12 евро ежемесячно, а третий — реальный железный сервер у [Комы](/who/commagray.md) дома.

- _Trixie_ — это главный сервер для реверс-проксирования, на котором запущены наши копии серверов [Caddy](https://caddyserver.com) и [Shadowsocks](/ru/how/shadowsocks.md). Это безопасный посредник между Glimmy и Внешним Интернетом.

- _Derpy_ — это почтовый сервер, на котором запущены наши копии [стека электронной почты Mailu](/ru/how/email.md) и [Shadowsocks](/ru/how/shadowsocks.md).

- _Glimmy_ — это главный внутренний сервер, на котором запущены наши копии серверов [Traefik](https://traefik.io), [Matrix](/ru/how/matrix.md), [Gitea](/ru/how/gitea.md), [Pleroma](/ru/how/pleroma.md), [Plume](/ru/how/plume.md), [LynxChan](/ru/how/lynxchan.md), [Shadowsocks](/ru/how/shadowsocks.md) и [выходной узел Tor](https://www.torproject.org).

![This is Glimmy](/images/glimmy_naked.jpg)