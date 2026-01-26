---
type: enum
name: swCreateFeatureError_e
description: Error codes that may occur when creating a feature.
member_count: 9
docset: swconst
categories:
  - constants
used_by: []
---

# swCreateFeatureError_e

Error codes that may occur when creating a feature.

## Values

| Member | Value | Description |
|---|---|---|
| `swCreateFeatureError_GenricError_GeometricError` | 0 | = Inputs provided resulted in a geometric error |
| `swCreateFeatureError_GenricError_UnknownError` | 1 | = Failure reason unknown |
| `swCreateFeatureError_MateController_DimensionValueOutOfLimit` | 5 | = Value for dimension provided is out of range |
| `swCreateFeatureError_MateController_FailedToSolveMates` | 4 | = Inputs provided failed to solve mates |
| `swCreateFeatureError_MateController_MateNotSet` | 2 | = Mate not set when creating mate controller |
| `swCreateFeatureError_MateController_MateSelectionsPositionDataMismatch` | 6 | = Number of mate selections do not match number of values in position data array |
| `swCreateFeatureError_MateController_MateTypeNotSupported` | 3 | = Supported mate types are Distance and Limit Distance, Angle and Limit Angle, Width, and Slot |
| `swCreateFeatureError_SolidToSheetMetal_FixedFaceOrEdgeIsMissing` | 8 |  |
| `swCreateFeatureError_SolidToSheetMetal_Success` | 7 |  |