import 'package:intl/intl.dart';

DateTime formatTimestamp(int timestamp) {
  return DateTime.fromMillisecondsSinceEpoch(timestamp * 1000);
}

String timestampToDateString(int timestamp) {
  final date = DateFormat.MMMMd('fr_FR').add_Hm();
  return date.format(DateTime.fromMillisecondsSinceEpoch(timestamp * 1000));
}
