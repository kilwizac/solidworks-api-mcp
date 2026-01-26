---
type: method
interface: IFeatureManager
member: MoveToFolder
returns: System.Boolean
parameters:
  -
    name: MoveToFeat
    type: System.String
    description: Folder to which to move feature
  -
    name: MoveFromFeat
    type: System.String
    description: Folder from which to move feature
  -
    name: IsFolder
    type: System.Boolean
    description: True if feature is a folder, false if a feature
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - folders
  - move
  - solid
  - bodies
  - features
  - featuremanager
  - design
  - tree
  - see
  - also
  - ifeaturemanager
  - ifeatmgrview
  - interfaces
  - movetofolder
  - feature
  - manager
  - folder
  - feat
  - string
  - boolean
---

# IFeatureManager.MoveToFolder

Moves the selected feature or folder in the Solid Bodies Feature Manager design tree structure to the specified folder in the Solid Bodies Feature Manager design tree structure.

## Signature

```csharp
System.Boolean MoveToFolder( 
   System.String
MoveToFeat
,
   System.String
MoveFromFeat
,
   System.Boolean
IsFolder
)
```
## Parameters

- `MoveToFeat` (System.String): Folder to which to move feature
- `MoveFromFeat` (System.String): Folder from which to move feature
- `IsFolder` (System.Boolean): True if feature is a folder, false if a feature

## Return Value

True if feature is moved, false if not

## Remarks

This method is specific to the
Solid Bodies
folder only; it does not work for components.