import 'package:flutter/material.dart';
import 'package:polympic/blocs/timeline/timeline_state.dart';
import 'package:polympic/theme/colors.dart';

class Line extends StatelessWidget {
  const Line({
    Key key,
    this.color = kColorTextIcon,
    this.status = Status.done,
  }) : super(key: key);

  final Color color;
  final Status status;

  static dynamic colors = <Status, Color>{
    Status.done: kColorPrimary,
    Status.waiting: kColorSecondary,
    Status.inProgress: kColorValidate,
  };

  @override
  Widget build(BuildContext context) {
    return Positioned(
      top: 0.0,
      bottom: 0.0,
      left: 45.0,
      child: Container(
        height: double.infinity,
        width: 2.0,
        color: colors[status],
      ),
    );
  }
}
