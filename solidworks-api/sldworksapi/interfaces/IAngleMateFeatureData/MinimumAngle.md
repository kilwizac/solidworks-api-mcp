---
type: property
interface: IAngleMateFeatureData
member: MinimumAngle
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - features
related:
  - IAngleMateFeatureData.Angle
keywords:
  - minimumangle
  - ianglematefeaturedata
  - angle
  - mate
  - feature
  - data
  - minimum
  - double
readonly: null
---

# IAngleMateFeatureData.MinimumAngle

Gets or sets the minimum angle of this limit angle mate.

## Signature

```csharp
System.Double MinimumAngle {get; set;}
```
## Parameters

None.

## Return Value

Minimum angle in radians

## Remarks

This property is valid only if
IAngleMateFeatureData::IsAdvancedMate
is set to true.

## Examples

- IAngleMateFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IAngleMateFeatureData)

## See Also

- `IAngleMateFeatureData.Angle`