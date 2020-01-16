import 'package:flutter/material.dart';
import 'package:polympic/components/timeline/timeline.dart';
import 'package:polympic/theme/colors.dart';

class Indicator extends StatelessWidget {
  const Indicator({
    Key key,
    this.status = Status.waiting,
    this.colorBefore = kColorAccent,
    this.colorAfter = kColorSecondary,
  })  : assert(status != null),
        super(key: key);

  final Status status;
  final Color colorBefore;
  final Color colorAfter;

  static dynamic icons = <Status, IconData>{
    Status.done: Icons.check_circle_outline,
    Status.waiting: Icons.radio_button_unchecked,
    Status.inProgress: Icons.hourglass_empty,
  };

  static dynamic colors = <Status, Color>{
    Status.done: kColorPrimary,
    Status.waiting: kColorPrimary,
    Status.inProgress: kColorSecondary,
  };

  @override
  Widget build(BuildContext context) {
    return Positioned(
      top: 30,
      left: 15.0,
      child: Container(
        decoration: BoxDecoration(
          shape: BoxShape.circle,
          color: Colors.white,
        ),
        child: Container(
          margin: EdgeInsets.all(5.0),
          height: 30.0,
          width: 30.0,
          decoration: BoxDecoration(
            shape: BoxShape.circle,
            color: colors[status],
          ),
          child: Icon(
            icons[status],
            color: Colors.white,
          ),
        ),
      ),
    );
  }
}
