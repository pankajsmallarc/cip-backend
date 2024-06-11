const CipFileTracker = require("../model/cipFileTrackerModal");

exports.getCipFiles = async (req, res) => {
  try {
    const {
      b2BOutBoundStatus,
      isB2BCompleted,
      b2bCompletedTimeStamp,
      cipEcgStatus,
      cipFileReceivedTimestamp,
      cipProcessingStatus,
      cipCompletionStatus,
      cipCompletedTimeStamp,
 
    } = req.body;

    const perPage = Number(req.body.perPage) || 10;
    const page = Number(req.bodypage) || 1;
    // Define the timestamp range
const startDate = new Date('2024-05-30T00:00:00.000Z');
const endDate = new Date('2024-05-31T00:00:00.000Z');

// Define the query using the $gte (greater than or equal) and $lt (less than) operators
const query = {
  b2bCompletedTimeStamp: {
    $gte: startDate,
    $lt: endDate
  }
};

    const cipFiles = await CipFileTracker.find(query);
    const totalRecords = await CipFileTracker.countDocuments(query);
    res.json({
      status: "Success",
      messageId: 200,
      data: cipFiles,
      totalRecords,
    });
  } catch (error) {
    return res.json({
      status: "Failure",
    });
  }
};
