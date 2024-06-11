const mongoose = require('mongoose');

const cipFileTrackerSchema = new mongoose.Schema({
  submitterId: String,
  clientFileName: String,
  client2B2bStatus: String,
  b2bFileName: String,
  b2BOutBoundStatus: String,
  isB2BCompleted: Boolean,
  b2bCompletedTimeStamp: Date,
  mui: String,
  sourceDirectory: String,
  destinationDir: String,
  ecg2CipConfigId: String,
  cipEcgFileName: String,
  cipEcgStatus: String,
  cipFileReceivedTimestamp: Date,
  cipFileId: String,
  cipFileName: String,
  cipInboundLob: String,
  lob: [String],
  cipProcessingStatus: String,
  cipOutboundFileName: String,
  cipCompletionStatus: String,
  isCIPCompleted: Boolean,
  cipCompletedTimeStamp: Date,
  isFileDelivered: Boolean,
  fileDeliveredTimeStamp: Date,
  _class: String
});

const CipFileTracker = mongoose.model('CipFileTracker', cipFileTrackerSchema);

module.exports = CipFileTracker;
