---
type: method
interface: ISplitBodyFeatureData
member: IGetSplitBodies
returns: void
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of split bodies (see Remarks )
  -
    name: BodyArr
    type: Body2
    description: in-process, unmanaged C++: Pointer to an array of split bodies VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
  -
    name: PathArr
    type: System.String
    description: in-process, unmanaged C++: Pointer to an array of paths and file names of part documents to which to save BodyArr bodies VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
  -
    name: FlagArr
    type: System.Boolean
    description: in-process, unmanaged C++: Pointer to an array of booleans indicating whether corresponding BodyArr body is removed from the original part; true if removed, false if not VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IFeatureManager.PostSplitBody
  - IFeatureManager.PreSplitBody2
  - ISplitBodyFeatureData.GetSplitBodies
keywords:
  - igetsplitbodies
  - isplitbodyfeaturedata
  - split
  - body
  - feature
  - data
  - bodies
  - count
  - int32
  - arr
  - body2
  - path
  - string
  - flag
  - boolean
  - void
---

# ISplitBodyFeatureData.IGetSplitBodies

Gets the split bodies for this Split feature.

## Signature

```csharp
void IGetSplitBodies( 
   System.Int32
Count
,
   out Body2
BodyArr
,
   out System.String
PathArr
,
   out System.Boolean
FlagArr
)
```
## Parameters

- `Count` (System.Int32): Number of split bodies (see Remarks )
- `BodyArr` (Body2): in-process, unmanaged C++: Pointer to an array of split bodies VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
- `PathArr` (System.String): in-process, unmanaged C++: Pointer to an array of paths and file names of part documents to which to save BodyArr bodies VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
- `FlagArr` (System.Boolean): in-process, unmanaged C++: Pointer to an array of booleans indicating whether corresponding BodyArr body is removed from the original part; true if removed, false if not VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## Remarks

Before calling this method, call
ISplitBodyFeatureData::GetSplitBodiesCount
to determine the value for Count. Call this method before calling
ISplitBodyFeatureData::SetSplitBodies2
to change which split bodies to include in this Split feature.
See
Accessing Selections that Define Features
for additional details.

## See Also

- `IFeatureManager.PostSplitBody`
- `IFeatureManager.PreSplitBody2`
- `ISplitBodyFeatureData.GetSplitBodies`