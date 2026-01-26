---
type: method
interface: IPartDoc
member: ReorderFeature
returns: System.Boolean
parameters:
  -
    name: FeatureToMove
    type: System.String
    description: Name of the feature to move
  -
    name: MoveAfterFeature
    type: System.String
    description: Name of the feature that now precedes the feature in the FeatureManager design tree
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - features
  - parts
  - ui
related:
  - IAssemblyDoc.ReorderComponents
  - IModelDocExtension.ReorderFeature
  - IPartDoc.FirstFeature
keywords:
  - reorder
  - features
  - parts
  - see
  - also
  - ipartdoc
  - feature
  - ifeature
  - reorderfeature
  - part
  - doc
  - move
  - string
  - after
  - boolean
---

# IPartDoc.ReorderFeature

Reorders features and their operations.

## Signature

```csharp
System.Boolean ReorderFeature( 
   System.String
FeatureToMove
,
   System.String
MoveAfterFeature
)
```
## Parameters

- `FeatureToMove` (System.String): Name of the feature to move
- `MoveAfterFeature` (System.String): Name of the feature that now precedes the feature in the FeatureManager design tree

## Return Value

True if successful, false if not

## See Also

- `IAssemblyDoc.ReorderComponents`
- `IModelDocExtension.ReorderFeature`
- `IPartDoc.FirstFeature`