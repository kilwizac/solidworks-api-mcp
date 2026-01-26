---
type: method
interface: ISplitBodyFeatureData
member: SetSplitBodies2
returns: void
parameters:
  -
    name: PathVar
    type: System.Object
    description: Array of paths and file names of the part documents to which to save the split bodies in this Split feature
  -
    name: FlagVar
    type: System.Object
    description: Array of booleans indicating whether to consume each corresponding PathVar body; true to remove it from the original part, false to not
  -
    name: BodyOrigin
    type: System.Object
    description: Array of sketch points, vertices, or reference points indicating the origins of each PathVar body; null elements are also permitted
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IFeatureManager.PostSplitBody
  - IFeatureManager.PreSplitBody2
keywords:
  - setsplitbodies2
  - isplitbodyfeaturedata
  - split
  - body
  - feature
  - data
  - bodies2
  - path
  - var
  - object
  - flag
  - origin
  - void
---

# ISplitBodyFeatureData.SetSplitBodies2

Edits the current split bodies in this Split feature.

## Signature

```csharp
void SetSplitBodies2( 
   System.Object
PathVar
,
   System.Object
FlagVar
,
   System.Object
BodyOrigin
)
```
## Parameters

- `PathVar` (System.Object): Array of paths and file names of the part documents to which to save the split bodies in this Split feature
- `FlagVar` (System.Object): Array of booleans indicating whether to consume each corresponding PathVar body; true to remove it from the original part, false to not
- `BodyOrigin` (System.Object): Array of sketch points, vertices, or reference points indicating the origins of each PathVar body; null elements are also permitted

## Return Value

Unknown.

## Remarks

Call this method after calling
ISplitBodyFeatureData::GetSplitBodies
or
ISplitBodyFeatureData::IGetSplitBodies
to change which split bodies to include in this Split feature.
See
Accessing Selections that Define Features
for additional details.

## See Also

- `IFeatureManager.PostSplitBody`
- `IFeatureManager.PreSplitBody2`