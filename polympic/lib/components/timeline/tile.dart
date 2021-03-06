import 'package:flutter/material.dart';

class Tile extends StatelessWidget {
  const Tile({
    Key key,
    @required this.children,
  }) : super(key: key);

  final List<Widget> children;

  @override
  Widget build(BuildContext context) {
    return Wrap(
      direction: Axis.vertical,
      spacing: 5.0,
      runSpacing: 4.0,
      children: this.children,
    );
  }
}
