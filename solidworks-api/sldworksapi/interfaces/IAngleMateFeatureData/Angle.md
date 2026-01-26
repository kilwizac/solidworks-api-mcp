---
type: property
interface: IAngleMateFeatureData
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
  - IAngleMateFeatureData.MaximumAngle
  - IAngleMateFeatureData.MinimumAngle
keywords:
  - angle
  - ianglematefeaturedata
  - mate
  - feature
  - data
  - double
readonly: null
---

# IAngleMateFeatureData.Angle

Gets or sets the angle of this angle mate.

## Signature

```csharp
System.Double Angle {get; set;}
```
## Parameters

None.

## Return Value

Angle in radians

## Remarks

If
IAngleMateFeatureData::IsAdvancedMate
is true, then this property specifies the starting angle of this mate.

## Examples

- IAngleMateFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IAngleMateFeatureData)

## See Also

- `IAngleMateFeatureData.MaximumAngle`
- `IAngleMateFeatureData.MinimumAngle`