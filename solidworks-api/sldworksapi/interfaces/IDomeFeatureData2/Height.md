---
type: property
interface: IDomeFeatureData2
member: Height
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - height
  - idomefeaturedata2
  - dome
  - feature
  - data2
  - double
  - change
  - vba
  - create
  - modify
  - vb
  - net
readonly: null
---

# IDomeFeatureData2.Height

Gets or sets the height of the dome.

## Signature

```csharp
System.Double Height {get; set;}
```
## Parameters

None.

## Return Value

Height of the dome

## Remarks

This property does not affect geometry until you call
IFeature::ModifyDefinition
or
IFeature::IModifyDefintion2
.

## Examples

- Change Height of Dome Feature (VBA) (Change_Height_of_Dome_Feature_Example_VB.htm)
- Create and Modify Dome Feature (C#) (Create_and_Modify_Dome_Feature_Example_CSharp.htm)
- Create and Modify Dome Feature (VB.NET) (Create_and_Modify_Dome_Feature_Example_VBNET.htm)
- Create and Modify Dome Feature (VBA) (Create_and_Modify_Dome_Feature_Example_VB.htm)