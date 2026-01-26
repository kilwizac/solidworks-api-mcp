---
type: enum
name: swSketchCheckFeatureStatus_e
description: Statuses after checking to see if this sketch is valid for use in creating the specified feature
member_count: 25
docset: swconst
categories:
  - constants
used_by: []
---

# swSketchCheckFeatureStatus_e

Statuses after checking to see if this sketch is valid for use in creating the specified feature

## Values

| Member | Value | Description |
|---|---|---|
| `swSketchCheckFeatureStatus_ClosedWantOpen` | 15 | = The contour is closed |
| `swSketchCheckFeatureStatus_ContourIntersectsCenterLine` | 23 | = The revolution contour cannot cross the centerline or touch it in an isolated point |
| `swSketchCheckFeatureStatus_CturXCtur` | 12 | = The sketch has intersecting contours |
| `swSketchCheckFeatureStatus_DisjCturs` | 13 | = The sketch contains disjoint contours |
| `swSketchCheckFeatureStatus_DoubleContainment` | 16 | = The sketch contains a doubly nested contour |
| `swSketchCheckFeatureStatus_EmptySketch` | 5 |  |
| `swSketchCheckFeatureStatus_EntUnspecBad` | 3 | = The sketch contains a self-intersecting entity |
| `swSketchCheckFeatureStatus_EntXEnt` | 1 | = The sketch contains a self-intersecting contour |
| `swSketchCheckFeatureStatus_EntXSelf` | 2 | = The sketch contains a self-intersecting entity |
| `swSketchCheckFeatureStatus_ManyOpen` | 9 | = The sketch has more than one open contour |
| `swSketchCheckFeatureStatus_MixedContours` | 11 | = The sketch has both open and closed contours |
| `swSketchCheckFeatureStatus_MoreThanOneContour` | 17 | = The sketch contains more than one contour |
| `swSketchCheckFeatureStatus_NeedsAxis` | 21 | = The sketch should contain a centerline |
| `swSketchCheckFeatureStatus_NoOpen` | 10 | = The sketch has no more open contours |
| `swSketchCheckFeatureStatus_OK` | 0 | = No problems found, the sketch can be used to create the specified feature. |
| `swSketchCheckFeatureStatus_OneClosedContourExpected` | 19 | = The sketch should contain a single closed contour |
| `swSketchCheckFeatureStatus_OneOpenContourExpected` | 18 | = The sketch should contain a single open contour |
| `swSketchCheckFeatureStatus_OpenOrUnclear` | 22 | = Selected contours are open or ambiguous |
| `swSketchCheckFeatureStatus_OpenWantClosed` | 14 | = The contour is open |
| `swSketchCheckFeatureStatus_ThreeEnts` | 4 | = The sketch cannot be used for a feature because an endpoint is wrongly shared by multiple entities |
| `swSketchCheckFeatureStatus_UnknownError` | -1 | = Unknown error |
| `swSketchCheckFeatureStatus_WantSingleOpenOrMultiClosedDisjoint` | 20 | = The sketch should contain either one open contour or multiple closed disjoint contours |
| `swSketchCheckFeatureStatus_WrongManyContours` | 7 | = The sketch has more than one contour |
| `swSketchCheckFeatureStatus_WrongOpen` | 6 | = The sketch contains an open contour |
| `swSketchCheckFeatureStatus_ZeroLengthEnt` | 8 | = The sketch contains a zero-length entity |