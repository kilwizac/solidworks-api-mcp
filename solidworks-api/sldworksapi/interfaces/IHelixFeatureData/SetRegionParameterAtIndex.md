---
type: method
interface: IHelixFeatureData
member: SetRegionParameterAtIndex
returns: System.Int32
parameters:
  -
    name: Index
    type: System.Int32
    description: Index of the region
  -
    name: Parameter
    type: System.Int32
    description: Region parameter as defined in swVariablePitchHelixRegionParameter_e (see Remarks )
  -
    name: PitchValue
    type: System.Double
    description: Region parameter value
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IHelixFeatureData.AddLastRecord
  - IHelixFeatureData.DeleteRecord
  - IHelixFeatureData.GetRegionParameterAtIndex
  - IHelixFeatureData.InsertRecord
  - IHelixFeatureData.PitchCount
  - IHelixFeatureData.VariablePitch
keywords:
  - setregionparameteratindex
  - ihelixfeaturedata
  - helix
  - feature
  - data
  - region
  - parameter
  - index
  - int32
  - pitch
  - value
  - double
  - create
  - modify
  - variable
  - vb
  - net
  - vba
---

# IHelixFeatureData.SetRegionParameterAtIndex

Sets the specified parameter for the specified region in this variable-pitch helix.

## Signature

```csharp
System.Int32 SetRegionParameterAtIndex( 
   System.Int32
Index
,
   System.Int32
Parameter
,
   System.Double
PitchValue
)
```
## Parameters

- `Index` (System.Int32): Index of the region
- `Parameter` (System.Int32): Region parameter as defined in swVariablePitchHelixRegionParameter_e (see Remarks )
- `PitchValue` (System.Double): Region parameter value

## Return Value

Status of setting region parameters as defined in swSetHelixRegionParameterStatus_e

## Remarks

If the
helix is defined
as...
Then you cannot change...
swHelixDefinedBy_e.swHelixDefinedByHeightAndPitch
Revolution value
swHelixDefinedBy_e.swHelixDefinedByHeightAndRevolution
Pitch value
swHelixDefinedBy_e.swHelixDefinedByPitchAndRevolution
Height value
If setting a value for...
Then you...
Revolution
Must specify a value greater than the previous region's revolution value and less than the next region's revolution value
Pitch for the first region only
Cannot change diameter, height, or revolution

## Examples

- Create and Modify Variable-pitch Helix (C#) (Create_and_Modify_Variable-pitch_Helix_Example_CSharp.htm)
- Create and Modify Variable-pitch Helix (VB.NET) (Create_and_Modify_Variable-pitch_Helix_Example_VBNET.htm)
- Create and Modify Variable-pitch Helix (VBA) (Create_and_Modify_Variable-pitch_Helix_Example_VB.htm)

## See Also

- `IHelixFeatureData.AddLastRecord`
- `IHelixFeatureData.DeleteRecord`
- `IHelixFeatureData.GetRegionParameterAtIndex`
- `IHelixFeatureData.InsertRecord`
- `IHelixFeatureData.PitchCount`
- `IHelixFeatureData.VariablePitch`