import 'package:flutter/material.dart';

class Tile extends StatelessWidget {
  const Tile({
    Key key,
    @required this.childrens,
  }) : super(key: key);

  final List<Widget> childrens;

  @override
  Widget build(BuildContext context) {
    return Wrap(
      direction: Axis.vertical,
      spacing: 8.0,
      runSpacing: 4.0,
      children: this.childrens,
    );
  }
}
