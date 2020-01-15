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
    @required this.dropChildrens,
    @required this.versus,
  }) : super(key: key);

  final String title;
  final DateTime beginDate;
  final DateTime endDate;
  final List<Widget> dropChildrens;
  final List<dynamic> versus;

  Widget _getTextWidgets(List<dynamic> strings) {
    List<Widget> list = List<Widget>();
    int i = 0;
    for (; i < strings.length - 1; i++) {
      list.add(Text(strings[i] + "-"));
    }
    list.add(Text(
      strings[i],
      style: TextStyle(fontSize: 15),
    ));
    return Row(children: list);
  }

  @override
  Widget build(BuildContext context) {
    final date = DateFormat.Hm();
    return ExpansionTile(
      title: Tile(
        childrens: <Widget>[
          Text(
            this.title,
            style: TextStyle(
              fontWeight: FontWeight.bold,
              color: kColorPrimaryText,
              fontSize: 15,
            ),
          ),
          _getTextWidgets(this.versus),
          Text(
            date.format(this.beginDate) + " - " + date.format(this.endDate),
            style: TextStyle(fontWeight: FontWeight.w400),
          ),
        ],
      ),
      children: this.dropChildrens,
    );
  }
}
