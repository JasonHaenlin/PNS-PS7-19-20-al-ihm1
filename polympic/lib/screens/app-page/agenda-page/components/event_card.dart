import 'package:flutter/material.dart';
import 'package:polympic/components/timeline/tile.dart';
import 'package:polympic/core/utils.dart';
import 'package:polympic/models/event_model.dart';
import 'package:polympic/theme/colors.dart';

class EventCard extends StatelessWidget {
  const EventCard({
    Key key,
    @required this.event,
  }) : super(key: key);

  final EventModel event;

  String get _starttime => timestampToDateString(event.starttime);
  String get _endtime => timestampToDateString(event.endtime);

  Widget get _getTextCompetitors {
    String text = '';
    int i = 0;
    for (; i < event.competitors.length - 1; i++) {
      text += event.competitors[i] + ' - ';
    }
    text += event.competitors[i];
    return Text(text);
  }

  @override
  Widget build(BuildContext context) {
    double width = MediaQuery.of(context).size.width * 0.6;

    return Card(
      clipBehavior: Clip.antiAliasWithSaveLayer,
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(10.0),
      ),
      child: Flex(
        crossAxisAlignment: CrossAxisAlignment.start,
        direction: Axis.horizontal,
        children: <Widget>[
          Stack(
            children: <Widget>[
              Image.network(
                'https://otakedev.com/share/preferences/others/hamburger.jpg',
                fit: BoxFit.cover,
                width: 100,
                height: 180,
              ),
              Container(
                decoration: BoxDecoration(
                  color: kColorPrimary,
                  borderRadius: BorderRadius.only(
                    bottomRight: Radius.circular(8),
                  ),
                ),
                child: Padding(
                  padding: const EdgeInsets.all(4.0),
                  child: Text(
                    '500m',
                    style: TextStyle(
                      color: Colors.white,
                      fontSize: 16,
                    ),
                  ),
                ),
              ),
            ],
          ),
          Expanded(
            child: Stack(
              alignment: Alignment.topRight,
              children: <Widget>[
                StatusCard(status: event.status),
                Container(
                  alignment: Alignment.centerLeft,
                  child: Padding(
                    padding: const EdgeInsets.all(10.0),
                    child: Tile(
                      children: <Widget>[
                        SizedBox(height: 18),
                        Text(event.name,
                            style: TextStyle(
                              fontWeight: FontWeight.bold,
                              fontSize: 16,
                              color: kColorPrimary,
                            )),
                        _getTextCompetitors,
                        Container(
                          width: width,
                          child: Text(
                            event.description,
                            style: TextStyle(
                              fontWeight: FontWeight.w400,
                              color: kColorSecondaryText,
                            ),
                          ),
                        ),
                        Text(
                          _starttime + " - " + _endtime,
                          style: TextStyle(
                            fontWeight: FontWeight.w400,
                            color: kColorAccent,
                          ),
                        ),
                        Text(
                          event.placename,
                          style: TextStyle(
                            fontWeight: FontWeight.w400,
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}

class StatusCard extends StatelessWidget {
  const StatusCard({
    Key key,
    this.status = 'none',
  }) : super(key: key);

  final String status;

  static dynamic statusText = {
    'none': const Text('', style: TextStyle(color: Colors.white)),
    'important': const Text('Important', style: TextStyle(color: Colors.white)),
    'recommanded':
        const Text('Recommandé', style: TextStyle(color: Colors.white)),
  };

  static dynamic statusIcon = {
    'none': Icon(Icons.bubble_chart),
    'important': Icon(Icons.warning),
    'recommanded': Icon(Icons.star),
  };

  static dynamic statusColor = {
    'none': kColorIconSelected,
    'important': kColorValidate,
    'recommanded': kColorSecondary,
  };

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        color: statusColor[status],
        borderRadius: BorderRadius.only(
          bottomLeft: Radius.circular(8),
        ),
      ),
      child: Padding(
        padding: const EdgeInsets.all(4.0),
        child: Wrap(
          crossAxisAlignment: WrapCrossAlignment.center,
          children: <Widget>[
            statusIcon[status] ?? Icon(Icons.bubble_chart),
            statusText[status] ?? Text(''),
          ],
        ),
      ),
    );
  }
}
