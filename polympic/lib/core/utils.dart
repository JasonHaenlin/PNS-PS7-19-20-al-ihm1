import 'package:intl/intl.dart';

DateTime formatTimestamp(int timestamp) {
  return DateTime.fromMicrosecondsSinceEpoch(timestamp);
}

String timestampToDateString(int timestamp) {
  final date = DateFormat.Md().add_Hm();
  return date.format(DateTime.fromMicrosecondsSinceEpoch(timestamp));
}
