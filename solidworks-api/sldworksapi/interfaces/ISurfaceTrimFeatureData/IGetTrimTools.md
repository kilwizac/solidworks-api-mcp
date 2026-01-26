---
type: method
interface: ISurfaceTrimFeatureData
member: IGetTrimTools
returns: System.Object
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of trim tools
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISurfaceTrimFeatureData.ISetTrimTools
  - ISurfaceTrimFeatureData.TrimTools
keywords:
  - igettrimtools
  - isurfacetrimfeaturedata
  - surface
  - trim
  - feature
  - data
  - tools
  - count
  - int32
  - object
---

# ISurfaceTrimFeatureData.IGetTrimTools

Gets the trim tools for this surface trim feature.

## Signature

```csharp
System.Object IGetTrimTools( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of trim tools

## Return Value

in-process, unmanaged C++: Pointer to an array of trim tools of size Count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Call
ISurfaceTrimFeatureData::GetTrimToolsCount
before calling this method to get the value for Count.
See
Accessing Selections that Define Features
for additional details.

## See Also

- `ISurfaceTrimFeatureData.ISetTrimTools`
- `ISurfaceTrimFeatureData.TrimTools`