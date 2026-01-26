---
type: property
interface: IDomeFeatureData2
member: Elliptical
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - elliptical
  - idomefeaturedata2
  - dome
  - feature
  - data2
  - boolean
  - change
  - height
  - vba
  - create
  - modify
  - vb
  - net
readonly: null
---

# IDomeFeatureData2.Elliptical

Gets or sets whether this dome is a half ellipsoid, with a height equal to one of the ellipsoid radii.

## Signature

```csharp
System.Boolean Elliptical {get; set;}
```
## Parameters

None.

## Return Value

True if the dome is elliptical, false if it is not

## Remarks

This property does not affect geometry until you call
IFeature::ModifyDefinition
or
IFeature::IModifyDefintion2
.

## Examples

- Change Height of Dome (VBA) (Change_Height_of_Dome_Feature_Example_VB.htm)
- Create and Modify Dome Feature (C#) (Create_and_Modify_Dome_Feature_Example_CSharp.htm)
- Create and Modify Dome Feature (VB.NET) (Create_and_Modify_Dome_Feature_Example_VBNET.htm)
- Create and Modify Dome Feature (VBA) (Create_and_Modify_Dome_Feature_Example_VB.htm)