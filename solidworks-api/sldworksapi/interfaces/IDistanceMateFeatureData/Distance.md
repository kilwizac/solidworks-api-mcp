---
type: property
interface: IDistanceMateFeatureData
member: Distance
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - features
related:
  - IDistanceMateFeatureData.MaximumDistance
  - IDistanceMateFeatureData.MinimumDistance
keywords:
  - distance
  - idistancematefeaturedata
  - mate
  - feature
  - data
  - double
readonly: null
---

# IDistanceMateFeatureData.Distance

Gets or sets the distance of this distance mate.

## Signature

```csharp
System.Double Distance {get; set;}
```
## Parameters

None.

## Return Value

Distance between mates

## Remarks

If
IDistanceMateFeatureData::IsAdvancedMate
is true, then this property specifies the starting distance of this mate.

## Examples

- IDistanceMateFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IDistanceMateFeatureData)

## See Also

- `IDistanceMateFeatureData.MaximumDistance`
- `IDistanceMateFeatureData.MinimumDistance`