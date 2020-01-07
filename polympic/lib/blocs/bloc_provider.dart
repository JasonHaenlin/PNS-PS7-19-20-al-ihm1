import 'package:flutter/material.dart';

class BlocProvider<T> extends InheritedWidget {
  final T bloc;

  BlocProvider({Key key, this.bloc, child}) : super(key: key, child: child);

  @override
  bool updateShouldNotify(InheritedWidget oldWidget) => true;

  static T of<T>(BuildContext context) =>
      (context.dependOnInheritedWidgetOfExactType<BlocProvider<T>>()).bloc;

  static Type _typeOf<T>() => T;
}
