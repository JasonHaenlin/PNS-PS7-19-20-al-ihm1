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
                event.img,
                fit: BoxFit.cover,
                width: 100,
                height: 180,
              ),
              DistanceCard(distance: event.distance),
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

class DistanceCard extends StatelessWidget {
  const DistanceCard({
    Key key,
    @required this.distance,
  }) : super(key: key);

  final int distance;

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        color: kColorPrimary,
        borderRadius: BorderRadius.only(
          bottomRight: Radius.circular(8),
        ),
      ),
      child: Padding(
        padding: const EdgeInsets.all(4.0),
        child: Text(
          this.distance.toString() + 'm',
          style: TextStyle(
            color: Colors.white,
            fontSize: 16,
          ),
        ),
      ),
    );
  }
}

class StatusCard extends StatelessWidget {
  const StatusCard({
    Key key,
    this.status = 'none',
    this.displayText = true,
    this.bottomLeft = 8,
    this.bottomRight = 0,
    this.topLeft = 0,
    this.topRight = 0,
  }) : super(key: key);

  final String status;
  final bool displayText;
  final double bottomLeft;
  final double bottomRight;
  final double topLeft;
  final double topRight;

  static dynamic statusText = {
    'none': const Text('', style: TextStyle(color: Colors.white)),
    'important': const Text('Important', style: TextStyle(color: Colors.white)),
    'recommended':
        const Text('Recommandé', style: TextStyle(color: Colors.white)),
  };

  static dynamic statusIcon = {
    'none': Icon(Icons.bubble_chart),
    'important': Icon(Icons.warning),
    'recommended': Icon(Icons.star),
  };

  static dynamic statusColor = {
    'none': kColorFade,
    'important': kColorValidate,
    'recommended': kColorSecondary,
  };

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        color: statusColor[status],
        borderRadius: BorderRadius.only(
          bottomLeft: Radius.circular(bottomLeft),
          bottomRight: Radius.circular(bottomRight),
          topLeft: Radius.circular(topLeft),
          topRight: Radius.circular(topRight),
        ),
      ),
      child: Padding(
        padding: const EdgeInsets.all(4.0),
        child: Wrap(
          crossAxisAlignment: WrapCrossAlignment.center,
          children: <Widget>[
            statusIcon[status] ?? Icon(Icons.bubble_chart),
            displayText ? statusText[status] ?? Text('') : Text(''),
          ],
        ),
      ),
    );
  }
}
