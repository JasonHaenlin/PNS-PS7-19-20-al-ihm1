import 'package:flutter/material.dart';
import 'package:polympic/core/utils.dart';
import 'package:polympic/models/event_model.dart';
import 'package:polympic/theme/colors.dart';

class EventCard extends StatefulWidget {
  final EventModel event;
  const EventCard({Key key, @required this.event}) : super(key: key);

  @override
  _EventCardState createState() => _EventCardState();
}

class _EventCardState extends State<EventCard> {
  @override
  Widget build(BuildContext context) {
    String _starttime = timestampToDateString(this.widget.event.starttime);
    String _endtime = timestampToDateString(this.widget.event.endtime);
    // bool _favorite = this.widget.event.favorite;

    double cWidth = MediaQuery.of(context).size.width * 0.6;

    // void _tooglefavorite() {
    //   setState(() {
    //     _favorite = !_favorite;
    //     _eventBloc.dispatch(EventEvent.update, {
    //       'event': this.widget.event,
    //       'favorite': _favorite.toString(),
    //     });
    //   });
    // }

    Widget _getTextWidgets(dynamic strings) {
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

    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: <Widget>[
        Text(
          widget.event.name,
          style: TextStyle(
            color: kColorPrimary,
            fontWeight: FontWeight.bold,
            fontSize: 20,
          ),
        ),
        _getTextWidgets(this.widget.event.competitors),
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: <Widget>[
            Container(
              width: cWidth,
              child: Text(
                widget.event.description,
                style: TextStyle(color: kColorAccent, fontSize: 15),
              ),
            ),
            // IconButton(
            //   icon: (_favorite ? Icon(Icons.star) : Icon(Icons.star_border)),
            //   color: kColorSecondary,
            //   onPressed: _tooglefavorite,
            // )
          ],
        ),
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: <Widget>[
            Text(
              _starttime + " - " + _endtime + "\n" + widget.event.placename,
              style: TextStyle(
                fontWeight: FontWeight.bold,
                fontSize: 14,
                color: kColorSecondaryText,
              ),
            ),
          ],
        ),
        Text(
          "Se trouve à ${widget.event.distance}m",
          style: TextStyle(
            fontSize: 14,
            color: kColorAccent,
          ),
        ),
      ],
    );
  }
}
