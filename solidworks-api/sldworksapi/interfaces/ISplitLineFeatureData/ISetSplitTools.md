---
type: method
interface: ISplitLineFeatureData
member: ISetSplitTools
returns: void
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of tools used to make the split
  -
    name: DispArr
    type: System.Object
    description: in-process, unmanaged C++: Pointer to an array of tools used to make the split (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISplitLineFeatureData.GetSplitToolsCount
  - ISplitLineFeatureData.IGetSplitTools
  - ISplitLineFeatureData.SplitTools
keywords:
  - isetsplittools
  - isplitlinefeaturedata
  - split
  - line
  - feature
  - data
  - tools
  - count
  - int32
  - disp
  - arr
  - object
  - void
---

# ISplitLineFeatureData.ISetSplitTools

Sets the tools used to make the split.

## Signature

```csharp
void ISetSplitTools( 
   System.Int32
Count
,
   ref System.Object
DispArr
)
```
## Parameters

- `Count` (System.Int32): Number of tools used to make the split
- `DispArr` (System.Object): in-process, unmanaged C++: Pointer to an array of tools used to make the split (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## Remarks

Reference planes
,
planar model faces
, and
bodies
are valid tools for a split.
See
Accessing Selections that Define Features
for additional details.

## See Also

- `ISplitLineFeatureData.GetSplitToolsCount`
- `ISplitLineFeatureData.IGetSplitTools`
- `ISplitLineFeatureData.SplitTools`