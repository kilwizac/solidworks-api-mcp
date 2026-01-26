---
type: property
interface: IHingeMateFeatureData
member: MaxVal
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - features
related:
  - IHingeMateFeatureData.Angle
  - IHingeMateFeatureData.MinVal
keywords:
  - maxval
  - ihingematefeaturedata
  - hinge
  - mate
  - feature
  - data
  - max
  - val
  - double
readonly: null
---

# IHingeMateFeatureData.MaxVal

Gets or sets the maximum angular rotation between the two components.

## Signature

```csharp
System.Double MaxVal {get; set;}
```
## Parameters

None.

## Return Value

Maximum angular rotation in radians

## Remarks

This property is valid only if
IHingeMateFeatureData::AngleSelection
is set to true.

## Examples

- IHingeMateFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IHingeMateFeatureData)

## See Also

- `IHingeMateFeatureData.Angle`
- `IHingeMateFeatureData.MinVal`