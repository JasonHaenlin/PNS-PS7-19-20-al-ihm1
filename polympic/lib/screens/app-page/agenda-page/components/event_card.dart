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

    bool _favorited = this.widget.event.favorite;

    void _toogleFavorited() {
      setState(() {
        _favorited = !_favorited;
        _eventBloc.dispatch(EventEvent.update, {
          'event': this.widget.event,
          'favorited': _favorited.toString(),
        });
      });
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
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: <Widget>[
            Text(
              widget.event.description,
              style: TextStyle(color: kColorAccent, fontSize: 20),
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
              "${timestampToDateString(widget.event.starthour)} - ${timestampToDateString(widget.event.endhour)}",
              style: TextStyle(
                fontWeight: FontWeight.bold,
                fontSize: 14,
                color: kColorSecondaryText,
              ),
            ),
            Text(
              "${widget.event.place}",
              style: TextStyle(fontSize: 16),
            ),
          ],
        ),
      ],
    );
  }
}
