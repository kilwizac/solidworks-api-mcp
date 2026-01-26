---
type: method
interface: IModelDocExtension
member: ReorderFeature2
returns: System.Boolean
parameters:
  -
    name: FeatToMove
    type: System.String
    description: Name of feature to move (see Remarks )
  -
    name: TargetFeat
    type: System.String
    description: Name of feature before or after which to move FeatureToMove - or - Name of folder; valid only if MoveLocation is swMoveLocation_e.swMoveToFolder and FeatToMove is not a Cut list/Solid Bodies folder (see Remarks )
  -
    name: MoveLocation
    type: System.Int32
    description: Move type as defined by swMoveLocation_e (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - features
  - ui
related:
  - IAssemblyDoc.ReorderComponents
  - IPartDoc.ReorderFeature
keywords:
  - feature
  - see
  - also
  - ifeature
  - reorder
  - reorderfeature2
  - imodeldocextension
  - model
  - doc
  - extension
  - feature2
  - feat
  - move
  - string
  - target
  - location
  - int32
  - boolean
---

# IModelDocExtension.ReorderFeature2

Moves the specified feature to another location in the FeatureManager design tree of this part or assembly.

## Signature

```csharp
System.Boolean ReorderFeature2( 
   System.String
FeatToMove
,
   System.String
TargetFeat
,
   System.Int32
MoveLocation
)
```
## Parameters

- `FeatToMove` (System.String): Name of feature to move (see Remarks )
- `TargetFeat` (System.String): Name of feature before or after which to move FeatureToMove - or - Name of folder; valid only if MoveLocation is swMoveLocation_e.swMoveToFolder and FeatToMove is not a Cut list/Solid Bodies folder (see Remarks )
- `MoveLocation` (System.Int32): Move type as defined by swMoveLocation_e (see Remarks )

## Return Value

True if feature moved successfully, false if not

## Remarks

This method functions just like the now obsolete IModelDocExtension::ReorderFeature, but also supports reordering of cut list folders and cut list sub-weldment folders.
When reordering cut list folders and sub-weldment folders, the following restrictions apply:
FeatToMove is a folder feature: cut list / solid body / sub-weldment folder; FeatToMove is not a cut list item/solid body.
This method:
reorders solid folders in parts and assembly components.
is called after assigning a ModelDoc variable to the part or assembly component whose cut list folders you want to reorder.
only affects cut lists in the active configuration. To reorder a cut list folder in another configuration, you must make it active before calling this method.
returns false if you try to move of a cut list/solid body folder to the top using either MoveLocation = swMoveLocation_e.swMoveToTop or MoveLocation = swMoveLocation_e.swMoveBefore. For example, if TargetFeat is the top folder, then you cannot set MoveLocation to swMoveLocation_e.swMoveBefore.
Use
IBodyFolder::GetTopLevelFeatureCount
and
IBodyFolder::GetTopLevelFeatures
to obtain top level folders in a body folder.

## See Also

- `IAssemblyDoc.ReorderComponents`
- `IPartDoc.ReorderFeature`