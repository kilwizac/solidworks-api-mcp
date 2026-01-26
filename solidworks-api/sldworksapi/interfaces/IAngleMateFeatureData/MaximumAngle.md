---
type: property
interface: IAngleMateFeatureData
member: MaximumAngle
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
  - maximumangle
  - ianglematefeaturedata
  - angle
  - mate
  - feature
  - data
  - maximum
  - double
readonly: null
---

# IAngleMateFeatureData.MaximumAngle

Gets or sets the maximum angle of this limit angle mate.

## Signature

```csharp
System.Double MaximumAngle {get; set;}
```
## Parameters

None.

## Return Value

Maximum angle in radians

## Remarks

This property is valid only if
IAngleMateFeatureData::IsAdvancedMate
is set to true.

## Examples

- IAngleMateFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IAngleMateFeatureData)

## See Also

- `IAngleMateFeatureData.Angle`