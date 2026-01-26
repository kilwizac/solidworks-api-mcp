---
type: property
interface: ITableAnnotation
member: StopAutoSplitting
returns: System.Boolean
parameters: []
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
  - stopautosplitting
  - itableannotation
  - annotation
  - stop
  - auto
  - splitting
  - boolean
readonly: null
---

# ITableAnnotation.StopAutoSplitting

Stops the automatic horizontal splitting of this table.

## Signature

```csharp
System.Boolean StopAutoSplitting {get; set;}
```
## Parameters

None.

## Return Value

True to stop the automatic horizontal splitting of this table, false to not

## Remarks

This property works with
ITableAnnotation::HorizontalAutoSplit
to control the automatic horizontal splitting of:
Hole tables
Bill of Materials tables
General tables

## See Also

- `ITableAnnotation.GetSplitInformation`
- `ITableAnnotation.Split`