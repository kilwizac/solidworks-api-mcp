---
type: property
interface: IDistanceMateFeatureData
member: MaximumDistance
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - features
related:
  - IDistanceMateFeatureData.Distance
keywords:
  - maximumdistance
  - idistancematefeaturedata
  - distance
  - mate
  - feature
  - data
  - maximum
  - double
readonly: null
---

# IDistanceMateFeatureData.MaximumDistance

Gets or sets the maximum distance of this limit distance mate.

## Signature

```csharp
System.Double MaximumDistance {get; set;}
```
## Parameters

None.

## Return Value

Maximum distance

## Remarks

This property is valid only if
IDistanceMateFeatureData::IsAdvancedMate
is set to true.

## Examples

- IDistanceMateFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IDistanceMateFeatureData)

## See Also

- `IDistanceMateFeatureData.Distance`