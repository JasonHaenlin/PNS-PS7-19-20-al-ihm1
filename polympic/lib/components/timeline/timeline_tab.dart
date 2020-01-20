import 'package:flutter/material.dart';
import 'package:intl/intl.dart';
import 'package:polympic/components/timeline/tile.dart';
import 'package:polympic/theme/colors.dart';

class TimelineTab extends StatelessWidget {
  const TimelineTab({
    Key key,
    @required this.title,
    @required this.beginDate,
    @required this.endDate,
    @required this.descriptions,
    @required this.versus,
  }) : super(key: key);

  final String title;
  final DateTime beginDate;
  final DateTime endDate;
  final String descriptions;
  final List<dynamic> versus;

  Widget get _getTextCompetitors {
    String text = '';
    int i = 0;
    for (; i < versus.length - 1; i++) {
      text += versus[i] + ' - ';
    }
    text += versus[i];
    return Text(text);
  }

  @override
  Widget build(BuildContext context) {
    final date = DateFormat.Hm();
    final _width = MediaQuery.of(context).size.width * 0.6;
    return Padding(
      padding: const EdgeInsets.fromLTRB(20, 5, 5, 5),
      child: Container(
        width: _width,
        child: Tile(
          children: <Widget>[
            Text(
              this.title,
              style: TextStyle(
                fontWeight: FontWeight.bold,
                color: kColorPrimary,
                fontSize: 15,
              ),
            ),
            _getTextCompetitors,
            Text(
              date.format(this.beginDate) + " - " + date.format(this.endDate),
              style:
                  TextStyle(fontWeight: FontWeight.w400, color: kColorAccent),
            ),
            Text(
              descriptions,
              style: TextStyle(
                fontWeight: FontWeight.w400,
                color: kColorSecondaryText,
              ),
            ),
          ],
        ),
      ),
    );
  }
}
