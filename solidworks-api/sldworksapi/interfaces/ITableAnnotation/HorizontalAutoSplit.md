---
type: method
interface: ITableAnnotation
member: HorizontalAutoSplit
returns: System.Object
parameters:
  -
    name: MaxNumberOfRows
    type: System.Int32
    description: Maximum number of rows in the split portions
  -
    name: Apply
    type: System.Int32
    description: How often to horizontally split the table as defined in swHorizontalAutoSplitApply_e
  -
    name: PlacementOfNewSplitTables
    type: System.Int32
    description: Where to place the horizontally split table as defined in swHorizontalAutoSplitPlacementOfSplitTable_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - ITableAnnotation.GetSplitInformation
  - ITableAnnotation.Split
keywords:
  - split
  - table
  - horizontalautosplit
  - itableannotation
  - annotation
  - horizontal
  - auto
  - max
  - number
  - rows
  - int32
  - apply
  - placement
  - new
  - tables
  - object
---

# ITableAnnotation.HorizontalAutoSplit

Starts the automatic horizontal splitting of this table using the specified options.

## Signature

```csharp
System.Object HorizontalAutoSplit( 
   System.Int32
MaxNumberOfRows
,
   System.Int32
Apply
,
   System.Int32
PlacementOfNewSplitTables
)
```
## Parameters

- `MaxNumberOfRows` (System.Int32): Maximum number of rows in the split portions
- `Apply` (System.Int32): How often to horizontally split the table as defined in swHorizontalAutoSplitApply_e
- `PlacementOfNewSplitTables` (System.Int32): Where to place the horizontally split table as defined in swHorizontalAutoSplitPlacementOfSplitTable_e

## Return Value

Array of split ITableAnnotation s

## Remarks

This method horizontally splits:
Hole tables
Bill of Materials tables
General tables
If Apply is set to
swHorizontalAutoSplitApply_e
.Continuously, in order to stop the automatic splitting of tables, you must set
ITableAnnotation::StopAutoSplitting
to true.

## See Also

- `ITableAnnotation.GetSplitInformation`
- `ITableAnnotation.Split`