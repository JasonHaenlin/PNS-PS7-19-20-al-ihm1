import 'package:flutter/material.dart';
import 'package:polympic/screens/app-page/preference-page/components/pref_card_button.dart';
import 'package:polympic/screens/app-page/preference-page/components/pref_card_gauge.dart';

enum PrefType { button, gauge }

class PrefContainer extends StatelessWidget {
  const PrefContainer({
    Key key,
    @required this.childType,
    @required this.tag,
  }) : super(key: key);

  final PrefType childType;
  final String tag;

  Widget _buildCorrectCard() {
    switch (childType) {
      case PrefType.button:
        return PrefCardButton();
      case PrefType.gauge:
        return PrefCardGauge();
      default:
        return Container();
    }
  }

  @override
  Widget build(BuildContext context) {
    return _buildCorrectCard();
  }
}
