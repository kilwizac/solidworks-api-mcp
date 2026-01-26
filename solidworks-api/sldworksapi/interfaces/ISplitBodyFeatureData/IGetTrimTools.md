---
type: method
interface: ISplitBodyFeatureData
member: IGetTrimTools
returns: System.Object
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of trimming surfaces used as trim tools in this Split feature
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - ISplitBodyFeatureData.ISetTrimTools
  - ISplitBodyFeatureData.TrimTools
keywords:
  - igettrimtools
  - isplitbodyfeaturedata
  - split
  - body
  - feature
  - data
  - trim
  - tools
  - count
  - int32
  - object
---

# ISplitBodyFeatureData.IGetTrimTools

Gets the trimming surfaces used as trim tools in this Split feature.

## Signature

```csharp
System.Object IGetTrimTools( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of trimming surfaces used as trim tools in this Split feature

## Return Value

in-process, unmanaged C++: Pointer to an array of trimming surfaces used as trim tools : Planar and non-planar faces Reference planes Reference surfaces Sketches VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Call
ISplitBodyFeatureData::GetTrimToolsCount
before calling this method to determine the size of the array.
See
Accessing Selections that Define Features
for additional details.

## See Also

- `ISplitBodyFeatureData.ISetTrimTools`
- `ISplitBodyFeatureData.TrimTools`