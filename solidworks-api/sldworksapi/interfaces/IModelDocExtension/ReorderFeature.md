---
type: method
interface: IModelDocExtension
member: ReorderFeature
returns: System.Boolean
parameters:
  -
    name: FeatureToMove
    type: System.String
    description: Name of feature to move
  -
    name: TargetFeature
    type: System.String
    description: Name of feature before or after which to move FeatureToMove; valid only if MoveLocation is swMoveLocation_e .swMoveAfter - or - Name of folder; valid only if MoveLocation is swMoveLocation_e.swMoveToFolder
  -
    name: MoveLocation
    type: System.Int32
    description: Move type as defined by swMoveLocation_e
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - features
  - ui
related:
  - IAssemblyDoc.ReorderComponents
  - IPartDoc.ReorderFeature
keywords:
  - reorderfeature
  - imodeldocextension
  - model
  - doc
  - extension
  - reorder
  - feature
  - move
  - string
  - target
  - location
  - int32
  - boolean
---

# IModelDocExtension.ReorderFeature

Obsolete. Superseded by IModelDocExtension::ReorderFeature2.

## Signature

```csharp
System.Boolean ReorderFeature( 
   System.String
FeatureToMove
,
   System.String
TargetFeature
,
   System.Int32
MoveLocation
)
```
## Parameters

- `FeatureToMove` (System.String): Name of feature to move
- `TargetFeature` (System.String): Name of feature before or after which to move FeatureToMove; valid only if MoveLocation is swMoveLocation_e .swMoveAfter - or - Name of folder; valid only if MoveLocation is swMoveLocation_e.swMoveToFolder
- `MoveLocation` (System.Int32): Move type as defined by swMoveLocation_e

## Return Value

True if feature moved successfully, false if not

## See Also

- `IAssemblyDoc.ReorderComponents`
- `IPartDoc.ReorderFeature`