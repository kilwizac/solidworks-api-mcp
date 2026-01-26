---
type: method
interface: ISplitBodyFeatureData
member: GetSplitBodies
returns: void
parameters:
  -
    name: BodyVar
    type: System.Object
    description: Array of split bodies
  -
    name: PathVar
    type: System.Object
    description: Array of paths and file names of the part documents to which BodyVar bodies are saved; empty string if not saved
  -
    name: FlagVar
    type: System.Object
    description: Array of booleans indicating whether corresponding BodyVar bodies are consumed; true if removed from the original part, false if not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IFeatureManager.PostSplitBody
  - IFeatureManager.PreSplitBody
  - ISplitBodyFeatureData.GetSplitBodiesCount
  - ISplitBodyFeatureData.IGetSplitBodies
keywords:
  - getsplitbodies
  - isplitbodyfeaturedata
  - split
  - body
  - feature
  - data
  - bodies
  - var
  - object
  - path
  - flag
  - void
---

# ISplitBodyFeatureData.GetSplitBodies

Gets the split bodies in this Split feature.

## Signature

```csharp
void GetSplitBodies( 
   out System.Object
BodyVar
,
   out System.Object
PathVar
,
   out System.Object
FlagVar
)
```
## Parameters

- `BodyVar` (System.Object): Array of split bodies
- `PathVar` (System.Object): Array of paths and file names of the part documents to which BodyVar bodies are saved; empty string if not saved
- `FlagVar` (System.Object): Array of booleans indicating whether corresponding BodyVar bodies are consumed; true if removed from the original part, false if not

## Return Value

Unknown.

## Remarks

Call this method before calling
ISplitBodyFeatureData::SetSplitBodies2
to change which split bodies to include in this Split feature.
See
Accessing Selections that Define Features
for additional details.

## See Also

- `IFeatureManager.PostSplitBody`
- `IFeatureManager.PreSplitBody`
- `ISplitBodyFeatureData.GetSplitBodiesCount`
- `ISplitBodyFeatureData.IGetSplitBodies`