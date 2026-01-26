---
type: property
interface: IHingeMateFeatureData
member: Angle
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - features
related:
  - IHingeMateFeatureData.MaxVal
  - IHingeMateFeatureData.MinVal
keywords:
  - angle
  - ihingematefeaturedata
  - hinge
  - mate
  - feature
  - data
  - double
readonly: null
---

# IHingeMateFeatureData.Angle

Gets or sets the nominal angle between two selected faces.

## Signature

```csharp
System.Double Angle {get; set;}
```
## Parameters

None.

## Return Value

Angle in radians

## Remarks

This property is valid only if
IHingeMateFeatureData::AngleSelection
is set to true.

## Examples

- IHingeMateFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IHingeMateFeatureData)

## See Also

- `IHingeMateFeatureData.MaxVal`
- `IHingeMateFeatureData.MinVal`