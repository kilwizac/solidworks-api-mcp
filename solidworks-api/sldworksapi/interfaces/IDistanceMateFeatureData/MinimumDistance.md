---
type: property
interface: IDistanceMateFeatureData
member: MinimumDistance
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
  - minimumdistance
  - idistancematefeaturedata
  - distance
  - mate
  - feature
  - data
  - minimum
  - double
readonly: null
---

# IDistanceMateFeatureData.MinimumDistance

Gets or sets the minimum distance of this limit distance mate.

## Signature

```csharp
System.Double MinimumDistance {get; set;}
```
## Parameters

None.

## Return Value

Minimum distance

## Remarks

This property is valid only if
IDistanceMateFeatureData::IsAdvancedMate
is set to true.

## Examples

- IDistanceMateFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IDistanceMateFeatureData)

## See Also

- `IDistanceMateFeatureData.Distance`