# CLI journal

## 0. Application, module, and root component.

```
ng new angular-intro --routing true --style css

npm install @picocss/pico

```

## 1. Templates

## 2. Modules

```bash
# demo
ng g m core
ng g c core/header --export
ng g c core/title
ng g c core/footer --export

ng g m home
ng g c home --export

ng g m shared
ng g c shared/reloading --export
```

## 3. Router

```bash
ng g m about --route=about --module=app
ng g m auth/register --route=auth/register --module=app
ng g m agencies --route=agencies --module=app
ng g c shared/agencies --export --type=list

ng g m contact --route=contact --module=app
ng g m auth/login --route=auth/login --module=app
ng g m trips --route=trips --module=app
ng g c shared/trips --export --type=list
```
