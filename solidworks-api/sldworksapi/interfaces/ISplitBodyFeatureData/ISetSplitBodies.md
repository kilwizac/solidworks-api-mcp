---
type: method
interface: ISplitBodyFeatureData
member: ISetSplitBodies
returns: void
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of split bodies for this Split feature
  -
    name: PathArr
    type: System.String
    description: in-process, unmanaged C++: Pointer to an array of paths and file names of the split bodies VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
  -
    name: FlagArr
    type: System.Boolean
    description: in-process, unmanaged C++: Pointer to an array of booleans indicating whether corresponding PathArr bodies are consumed; true indicates the body is removed from the original part, false otherwise VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - features
  - geometry
related:
  - ISplitBodyFeatureData.GetSplitBodies
  - ISplitBodyFeatureData.GetSplitBodiesCount
  - ISplitBodyFeatureData.IGetSplitBodies
  - ISplitBodyFeatureData.SetSplitBodies
keywords:
  - isetsplitbodies
  - isplitbodyfeaturedata
  - split
  - body
  - feature
  - data
  - bodies
  - count
  - int32
  - path
  - arr
  - string
  - flag
  - boolean
  - void
---

# ISplitBodyFeatureData.ISetSplitBodies

Obsolete. Superseded by ISplitBodyFeatureData::SetSplitBodies2.

## Signature

```csharp
void ISetSplitBodies( 
   System.Int32
Count
,
   ref System.String
PathArr
,
   ref System.Boolean
FlagArr
)
```
## Parameters

- `Count` (System.Int32): Number of split bodies for this Split feature
- `PathArr` (System.String): in-process, unmanaged C++: Pointer to an array of paths and file names of the split bodies VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
- `FlagArr` (System.Boolean): in-process, unmanaged C++: Pointer to an array of booleans indicating whether corresponding PathArr bodies are consumed; true indicates the body is removed from the original part, false otherwise VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## See Also

- `ISplitBodyFeatureData.GetSplitBodies`
- `ISplitBodyFeatureData.GetSplitBodiesCount`
- `ISplitBodyFeatureData.IGetSplitBodies`
- `ISplitBodyFeatureData.SetSplitBodies`