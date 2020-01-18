import 'package:flutter/material.dart';
import 'package:polympic/theme/colors.dart';

class PrefCardButton extends StatelessWidget {
  const PrefCardButton({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      child: Card(color: kColorSecondary, child: Text("button")),
    );
  }
}
