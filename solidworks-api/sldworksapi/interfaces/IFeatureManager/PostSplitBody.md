---
type: method
interface: IFeatureManager
member: PostSplitBody
returns: Feature
parameters:
  -
    name: BodiesToMark
    type: System.Object
    description: Bodies to mark for the split operation
  -
    name: ConsumeCut
    type: System.Boolean
    description: True to remove the bodies from the part, false to not
  -
    name: Origins
    type: System.Object
    description: Array of origins of the bodies to save
  -
    name: SavePaths
    type: System.Object
    description: Array of paths and filenames of part documents to which to save BodiesToMark
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - features
  - geometry
related:
  - ISplitBodyFeatureData.GetSplitBodies
  - ISplitBodyFeatureData.SetSplitBodies2
keywords:
  - postsplitbody
  - ifeaturemanager
  - feature
  - manager
  - post
  - split
  - body
  - bodies
  - mark
  - object
  - consume
  - cut
  - boolean
  - origins
  - save
  - paths
---

# IFeatureManager.PostSplitBody

Obsolete. Superseded by IFeatureManager::PostSplitBody2.

## Signature

```csharp
Feature PostSplitBody( 
   System.Object
BodiesToMark
,
   System.Boolean
ConsumeCut
,
   System.Object
Origins
,
   System.Object
SavePaths
)
```
## Parameters

- `BodiesToMark` (System.Object): Bodies to mark for the split operation
- `ConsumeCut` (System.Boolean): True to remove the bodies from the part, false to not
- `Origins` (System.Object): Array of origins of the bodies to save
- `SavePaths` (System.Object): Array of paths and filenames of part documents to which to save BodiesToMark

## Return Value

Pointer to the split-body feature

## Remarks

To create a split-body feature:
Select the entities to use to split the part into multiple bodies.
Call
IFeatureManager::PreSplitBody
to get all of the bodies created by splitting the part.
Call this method to create the split-body feature.
The size of the BodiesToMark, Origins, and SavePaths arrays must be equal and greater than 0. If you pass an empty path and filename for a body, then that body is only marked and not saved. It remains with the original part.
To find out if the bodies in a split-body feature were consumed, use
ISplitBodyFeatureData::Consume
.
IFeature::GetTypeName2
and
IFeature::GetTypeName
return:
Split
for a feature that was created by splitting a part into multiple parts by using either this method or the
Split
feature in the user interface. You can access a split-body feature's data using the
ISplitBodyFeatureData
interface.
SplitBody
for a body created by splitting a part and saving the body to a part. You cannot access the data of a split body saved to a part.

## See Also

- `ISplitBodyFeatureData.GetSplitBodies`
- `ISplitBodyFeatureData.SetSplitBodies2`