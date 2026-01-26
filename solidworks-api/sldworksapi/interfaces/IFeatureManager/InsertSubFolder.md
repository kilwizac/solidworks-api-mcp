---
type: method
interface: IFeatureManager
member: InsertSubFolder
returns: Feature
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - folders
  - solid
  - bodies
  - add
  - featuremanager
  - design
  - tree
  - see
  - also
  - ifeaturemanager
  - ifeatmgrview
  - interfaces
  - insertsubfolder
  - feature
  - manager
  - insert
  - sub
  - folder
---

# IFeatureManager.InsertSubFolder

Creates a subfolder in the Solid Bodies folder in the FeatureManager design tree and moves the selected solid bodies or subfolders in the Solid Bodies folder to the new subfolder.

## Signature

```csharp
Feature InsertSubFolder()
```
## Parameters

None.

## Return Value

Pointer to the IFeature object, the new subfolder

## Remarks

This method requires that the features (solid bodies or subfolders or both) be selected interactively or programmatically. To select the features programmatically, you can use
IModelDocExtension::SelectByID2
and pass the feature names and the appropriate object types and the selection coordinates 0,0,0. To determine the feature names and object types, use the
IFeature::Name
and
IFeature::GetTypeName
methods, respectively.