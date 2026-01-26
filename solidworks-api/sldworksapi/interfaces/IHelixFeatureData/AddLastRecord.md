---
type: method
interface: IHelixFeatureData
member: AddLastRecord
returns: System.Boolean
parameters:
  -
    name: HelixPointValue
    type: System.Object
    description: Array of four doubles for the region to add to the end of the Region parameters table (see Remarks )
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
  - addlastrecord
  - ihelixfeaturedata
  - helix
  - feature
  - data
  - add
  - last
  - record
  - point
  - value
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

# IHelixFeatureData.AddLastRecord

Adds a region to the end of the Region parameters table of this variable-pitch helix.

## Signature

```csharp
System.Boolean AddLastRecord( 
   System.Object
HelixPointValue
)
```
## Parameters

- `HelixPointValue` (System.Object): Array of four doubles for the region to add to the end of the Region parameters table (see Remarks )

## Return Value

True if the region is added to the end of the Region parameters table, false if not

## Remarks

The values in the array specified for HelixPointValue depends on the type of variable-pitch helix:
Helix type
Array of doubles in this order
Pitch and revolution
Pitch, number of revolutions, 0, diameter
Height and revolution
Height, number of revolutions, 0, diameter
Height and pitch
Height, pitch, 0, diameter
NOTE:
You must specify 0 for any element that SOLIDWORKS calculates.
To insert a record at a specific index in the Region parameters table (i.e., between existing records) of this variable-pitch helix, use
IHelixFeatureData::InsertRecord
.

## Examples

- Create and Modify Variable-pitch Helix (C#) (Create_and_Modify_Variable-pitch_Helix_Example_CSharp.htm)
- Create and Modify Variable-pitch Helix (VB.NET) (Create_and_Modify_Variable-pitch_Helix_Example_VBNET.htm)
- Create and Modify Variable-pitch Helix (VBA) (Create_and_Modify_Variable-pitch_Helix_Example_VB.htm)

## See Also

- `IHelixFeatureData.DeleteRecord`
- `IHelixFeatureData.GetRegionParameterAtIndex`
- `IHelixFeatureData.PitchCount`
- `IHelixFeatureData.SetRegionParameterAtIndex`
- `IHelixFeatureData.VariablePitch`