import 'package:flutter/material.dart';
import 'package:polympic/blocs/bloc_provider.dart';
import 'package:polympic/blocs/event/event_bloc.dart';
import 'package:polympic/blocs/event/event_state.dart';
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
    final _eventBloc = BlocProvider.of<EventBloc>(context).eventBloc;
    _eventBloc.dispatch(EventEvent.fetch);

    DateTime _starttime = formatTimestamp(this.widget.event.starttime);
    DateTime _endtime = formatTimestamp(this.widget.event.endtime);
    List <dynamic> competitors = this.widget.event.competitors;
    bool _favorited = this.widget.event.favorite;

    double cWidth = MediaQuery.of(context).size.width*0.6;

    void _toogleFavorited() {
      setState(() {
        _favorited = !_favorited;
        _eventBloc.dispatch(EventEvent.update, {
          'event': this.widget.event,
          'favorited': _favorited.toString(),
        });
      });
    }

    Widget _getTextWidgets(List<String> strings)
  {
    List<Widget> list = new List<Widget>();
    int i = 0;
    for( ; i < strings.length-1; i++){
        list.add(new Text(strings[i]+"-"));
    }
    list.add(new Text(strings[i],
    style: TextStyle(fontSize: 15) ,));
    return new Row(children: list);
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
        _getTextWidgets(competitors),
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
            IconButton(
              icon: (_favorited ? Icon(Icons.star) : Icon(Icons.star_border)),
              color: kColorSecondary,
              onPressed: _toogleFavorited,
            )
          ],
        ),
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: <Widget>[
            Text(
              "${_starttime.hour}:${_starttime.minute} - ${_endtime.hour}:${_endtime.minute}",
              style: TextStyle(
                fontWeight: FontWeight.bold,
                fontSize: 14,
                color: kColorSecondaryText,
              ),
            ),
            Text(
              "${widget.event.placename}",
              style: TextStyle(fontSize: 16),
            ),
          ],
        ),
      ],
    );
  }
}
