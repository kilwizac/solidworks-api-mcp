---
type: method
interface: IHelixFeatureData
member: DeleteRecord
returns: System.Boolean
parameters:
  -
    name: Indices
    type: System.Object
    description: Array of the indices of the records to delete (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IHelixFeatureData.AddLastRecord
  - IHelixFeatureData.GetRegionParameterAtIndex
  - IHelixFeatureData.InsertRecord
  - IHelixFeatureData.PitchCount
  - IHelixFeatureData.SetRegionParameterAtIndex
  - IHelixFeatureData.VariablePitch
keywords:
  - deleterecord
  - ihelixfeaturedata
  - helix
  - feature
  - data
  - delete
  - record
  - indices
  - object
  - boolean
  - create
  - modify
  - variable
  - pitch
  - vb
  - net
  - vba
---

# IHelixFeatureData.DeleteRecord

Deletes the specified records in the Region parameters table of this variable-pitch helix.

## Signature

```csharp
System.Boolean DeleteRecord( 
   System.Object
Indices
)
```
## Parameters

- `Indices` (System.Object): Array of the indices of the records to delete (see Remarks )

## Return Value

True if the records are deleted, false if not

## Remarks

You cannot delete the first record in the Regions parameters table.

## Examples

- Create and Modify Variable-pitch Helix (C#) (Create_and_Modify_Variable-pitch_Helix_Example_CSharp.htm)
- Create and Modify Variable-pitch Helix (VB.NET) (Create_and_Modify_Variable-pitch_Helix_Example_VBNET.htm)
- Create and Modify Variable-pitch Helix (VBA) (Create_and_Modify_Variable-pitch_Helix_Example_VB.htm)

## See Also

- `IHelixFeatureData.AddLastRecord`
- `IHelixFeatureData.GetRegionParameterAtIndex`
- `IHelixFeatureData.InsertRecord`
- `IHelixFeatureData.PitchCount`
- `IHelixFeatureData.SetRegionParameterAtIndex`
- `IHelixFeatureData.VariablePitch`