---
type: method
interface: ISplitBodyFeatureData
member: SetSplitBodies
returns: void
parameters:
  -
    name: PathVar
    type: System.Object
    description: Array of full paths and file names of the split bodies
  -
    name: FlagVar
    type: System.Object
    description: Array of Booleans indicating whether to include a body in this split-body feature
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
  - ISplitBodyFeatureData.ISetSplitBodies
keywords:
  - setsplitbodies
  - isplitbodyfeaturedata
  - split
  - body
  - feature
  - data
  - bodies
  - path
  - var
  - object
  - flag
  - void
---

# ISplitBodyFeatureData.SetSplitBodies

Obsolete. Superseded by ISplitBodyFeatureData::SetSplitBodies2.

## Signature

```csharp
void SetSplitBodies( 
   System.Object
PathVar
,
   System.Object
FlagVar
)
```
## Parameters

- `PathVar` (System.Object): Array of full paths and file names of the split bodies
- `FlagVar` (System.Object): Array of Booleans indicating whether to include a body in this split-body feature

## Return Value

Unknown.

## See Also

- `ISplitBodyFeatureData.GetSplitBodies`
- `ISplitBodyFeatureData.GetSplitBodiesCount`
- `ISplitBodyFeatureData.IGetSplitBodies`
- `ISplitBodyFeatureData.ISetSplitBodies`