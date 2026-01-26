---
type: property
interface: IHingeMateFeatureData
member: MinVal
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
  - IHingeMateFeatureData.MaxVal
keywords:
  - minval
  - ihingematefeaturedata
  - hinge
  - mate
  - feature
  - data
  - min
  - val
  - double
readonly: null
---

# IHingeMateFeatureData.MinVal

Gets or sets the minimum angular rotation between the two components.

## Signature

```csharp
System.Double MinVal {get; set;}
```
## Parameters

None.

## Return Value

Minimum angular rotation in radians

## Remarks

This property is valid only if
IHingeMateFeatureData::AngleSelection
is set to true.

## Examples

- IHingeMateFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IHingeMateFeatureData)

## See Also

- `IHingeMateFeatureData.Angle`
- `IHingeMateFeatureData.MaxVal`