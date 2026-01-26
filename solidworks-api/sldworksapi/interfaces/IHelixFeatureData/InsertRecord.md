---
type: method
interface: IHelixFeatureData
member: InsertRecord
returns: System.Boolean
parameters:
  -
    name: Index
    type: System.Int32
    description: Index after which to insert a new record
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IHelixFeatureData.DeleteRecord
  - IHelixFeatureData.GetRegionParameterAtIndex
  - IHelixFeatureData.PitchCount
  - IHelixFeatureData.SetRegionParameterAtIndex
  - IHelixFeatureData.VariablePitch
keywords:
  - insertrecord
  - ihelixfeaturedata
  - helix
  - feature
  - data
  - insert
  - record
  - index
  - int32
  - boolean
---

# IHelixFeatureData.InsertRecord

Inserts a record before the specified index in the Region parameters table of this variable-pitch helix.

## Signature

```csharp
System.Boolean InsertRecord( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Index after which to insert a new record

## Return Value

True if the record is inserted, false if not

## Remarks

When inserting a record, the SOLIDWORKS Design software calculates the new region's parameters. You cannot add a record to the beginning of the Region parameters table. To add a record to the end of the Region parameters table, use
IHelixFeatureData::AddLastRecord
.

## See Also

- `IHelixFeatureData.DeleteRecord`
- `IHelixFeatureData.GetRegionParameterAtIndex`
- `IHelixFeatureData.PitchCount`
- `IHelixFeatureData.SetRegionParameterAtIndex`
- `IHelixFeatureData.VariablePitch`