---
type: method
interface: ISplitLineFeatureData
member: IGetSplitTools
returns: System.Object
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of tools used to make the split
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISplitLineFeatureData.ISetSplitTools
  - ISplitLineFeatureData.SplitTools
keywords:
  - igetsplittools
  - isplitlinefeaturedata
  - split
  - line
  - feature
  - data
  - tools
  - count
  - int32
  - object
---

# ISplitLineFeatureData.IGetSplitTools

Gets the tools to use to make the split.

## Signature

```csharp
System.Object IGetSplitTools( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of tools used to make the split

## Return Value

in-process, unmanaged C++: Pointer to an array of tools used to make the split (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Reference planes
,
planar model faces
, and
bodies
are valid tools to make a split.
Call
ISplitLineFeatureData::GetSplitToolsCount
before calling this method to determine the size of the array for this method.
See
Accessing Selections that Define Features
for additional details.

## See Also

- `ISplitLineFeatureData.ISetSplitTools`
- `ISplitLineFeatureData.SplitTools`