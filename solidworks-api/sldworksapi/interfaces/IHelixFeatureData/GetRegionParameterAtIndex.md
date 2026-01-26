---
type: method
interface: IHelixFeatureData
member: GetRegionParameterAtIndex
returns: System.Double
parameters:
  -
    name: Index
    type: System.Int32
    description: Index of the region
  -
    name: RegionParameter
    type: System.Int32
    description: Region parameter as defined in swVariablePitchHelixRegionParameter_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IHelixFeatureData.AddLastRecord
  - IHelixFeatureData.DeleteRecord
  - IHelixFeatureData.InsertRecord
  - IHelixFeatureData.PitchCount
  - IHelixFeatureData.SetRegionParameterAtIndex
  - IHelixFeatureData.VariablePitch
keywords:
  - getregionparameteratindex
  - ihelixfeaturedata
  - helix
  - feature
  - data
  - region
  - parameter
  - index
  - int32
  - double
  - create
  - modify
  - variable
  - pitch
  - vb
  - net
  - vba
---

# IHelixFeatureData.GetRegionParameterAtIndex

Gets the specified parameter value for the specified region in this variable-pitch helix.

## Signature

```csharp
System.Double GetRegionParameterAtIndex( 
   System.Int32
Index
,
   System.Int32
RegionParameter
)
```
## Parameters

- `Index` (System.Int32): Index of the region
- `RegionParameter` (System.Int32): Region parameter as defined in swVariablePitchHelixRegionParameter_e

## Return Value

Region parameter value

## Examples

- Create and Modify Variable-pitch Helix (C#) (Create_and_Modify_Variable-pitch_Helix_Example_CSharp.htm)
- Create and Modify Variable-pitch Helix (VB.NET) (Create_and_Modify_Variable-pitch_Helix_Example_VBNET.htm)
- Create and Modify Variable-pitch Helix (VBA) (Create_and_Modify_Variable-pitch_Helix_Example_VB.htm)

## See Also

- `IHelixFeatureData.AddLastRecord`
- `IHelixFeatureData.DeleteRecord`
- `IHelixFeatureData.InsertRecord`
- `IHelixFeatureData.PitchCount`
- `IHelixFeatureData.SetRegionParameterAtIndex`
- `IHelixFeatureData.VariablePitch`