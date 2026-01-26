---
type: method
interface: ISplitLineFeatureData
member: IGetSplitTargets
returns: System.Object
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of faces or bodies to split
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISplitLineFeatureData.ISetSplitTargets
  - ISplitLineFeatureData.SplitAll
  - ISplitLineFeatureData.SplitTargets
keywords:
  - igetsplittargets
  - isplitlinefeaturedata
  - split
  - line
  - feature
  - data
  - targets
  - count
  - int32
  - object
---

# ISplitLineFeatureData.IGetSplitTargets

Gets the faces or bodies to split.

## Signature

```csharp
System.Object IGetSplitTargets( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of faces or bodies to split

## Return Value

in-process, unmanaged C++: Pointer to an array of faces or bodies to split VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Call
ISplitLineFeatureData::GetSplitTargetsCount
before calling this method to determine the size of the array for this method.
See
Accessing Selections that Define Features
for additional details.

## See Also

- `ISplitLineFeatureData.ISetSplitTargets`
- `ISplitLineFeatureData.SplitAll`
- `ISplitLineFeatureData.SplitTargets`