# polympic

## Getting Started

This project is a starting point for a Flutter application.

A few resources to get you started if this is your first Flutter project:

- [Lab: Write your first Flutter app](https://flutter.dev/docs/get-started/codelab)
- [Cookbook: Useful Flutter samples](https://flutter.dev/docs/cookbook)

For help getting started with Flutter, view our
[online documentation](https://flutter.dev/docs), which offers tutorials,
samples, guidance on mobile development, and a full API reference.

## Enable web

```sh
flutter config --enable-web
flutter channel dev
flutter create .
flutter run -d web
```

## Run flutter in different flavorss

### production

`flutter run -t lib/main_prod.dart`

>vscode launch.json

```json
{
    "name": "Flutter prod",
    "request": "launch",
    "type": "dart",
    "program": "run",
    "args": [
        "-t",
        "lib/main_prod.dart"
    ]
},
```

### dev

`flutter run -t lib/main_dev.dart`

>vscode launch.json

```json
{
    "name": "Flutter dev",
    "request": "launch",
    "type": "dart",
    "program": "run",
    "args": [
        "-t",
        "lib/main_dev.dart"
    ]
},
```
