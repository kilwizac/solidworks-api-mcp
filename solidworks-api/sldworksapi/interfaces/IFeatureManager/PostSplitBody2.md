---
type: method
interface: IFeatureManager
member: PostSplitBody2
returns: System.Object
parameters:
  -
    name: BodiesToMark
    type: System.Object
    description: Array of bodies to mark for the split operation
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
    description: Array of paths and filenames of the part documents to which to save BodiesToMark
  -
    name: OverrideTemplateName
    type: System.String
    description: Path and filename of the part or assembly template that overrides the default (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - ISplitBodyFeatureData.GetSplitBodies
  - ISplitBodyFeatureData.SetSplitBodies2
keywords:
  - feature
  - see
  - also
  - ifeature
  - split
  - isplitbodyfeaturedata
  - postsplitbody2
  - ifeaturemanager
  - manager
  - post
  - body2
  - bodies
  - mark
  - object
  - consume
  - cut
  - boolean
  - origins
  - save
  - paths
  - override
  - template
  - name
  - string
  - create
  - vba
  - vb
  - net
---

# IFeatureManager.PostSplitBody2

Creates a Split feature.

## Signature

```csharp
System.Object PostSplitBody2( 
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
,
   System.String
OverrideTemplateName
)
```
## Parameters

- `BodiesToMark` (System.Object): Array of bodies to mark for the split operation
- `ConsumeCut` (System.Boolean): True to remove the bodies from the part, false to not
- `Origins` (System.Object): Array of origins of the bodies to save
- `SavePaths` (System.Object): Array of paths and filenames of the part documents to which to save BodiesToMark
- `OverrideTemplateName` (System.String): Path and filename of the part or assembly template that overrides the default (see Remarks )

## Return Value

Split feature

## Remarks

To create a Split feature:
Select the entities to use to split the part into multiple bodies.
Call
IFeatureManager::PreSplitBody
to get all of the bodies created by splitting the part.
Call this method to create the Split feature.
The size of the BodiesToMark, Origins, and SavePaths arrays must be equal and greater than 0. If you pass an empty path and filename for a body, then that body is only marked, is not saved to a separate part document, and remains with the original part.
OverrideTemplateName overrides the default part or assembly template that is specified in
Tools > Options > System Options > File Locations
. The template is applied to all new part or assembly files created during the split operation.
To find out whether the bodies in a Split feature are consumed, use
ISplitBodyFeatureData::Consume
.
IFeature::GetTypeName2
and
IFeature::GetTypeName
return:
Split
for a feature that was created by splitting a part into multiple parts by using either this method or the
Split
feature in the user interface. You can access a split-body feature's data using
ISplitBodyFeatureData
.
SplitBody
for a body created by splitting a part and saving the body to a part. You cannot access the data of a split body saved to a part.

## Examples

- Create Split Feature (VBA) (Create_Split-body_Feature_Example_VB.htm)
- Create Split Feature (VB.NET) (Create_Split-body_Feature_Example_VBNET.htm)
- Create Split Feature (C#) (Create_Split-body_Feature_Example_CSharp.htm)

## See Also

- `ISplitBodyFeatureData.GetSplitBodies`
- `ISplitBodyFeatureData.SetSplitBodies2`