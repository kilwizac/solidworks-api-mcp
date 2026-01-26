---
type: method
interface: IFeatureManager
member: CutListFolderLocation
returns: System.Object
parameters:
  -
    name: QueryObj
    type: System.Object
    description: Solid Body / cut list item / body folder / sub-weldment folder feature
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IModelDocExtension.ReorderFeature2
keywords:
  - cutlistfolderlocation
  - ifeaturemanager
  - feature
  - manager
  - cut
  - list
  - folder
  - location
  - query
  - obj
  - object
  - imodeldocextension
  - reorderfeature2
---

# IFeatureManager.CutListFolderLocation

Gets the parent folder of the specified solid body / cut list item / body folder.

## Signature

```csharp
System.Object CutListFolderLocation( 
   System.Object
QueryObj
)
```
## Parameters

- `QueryObj` (System.Object): Solid Body / cut list item / body folder / sub-weldment folder feature

## Return Value

Parent folder feature of QueryObj; null if QueryObj is not a Solid Body / cut list / body folder / sub-weldment folder

## Remarks

This method only works for:
Solid Bodies / cut list items
Feature / body folders
Sub-weldment folders
Use
IFeatureManager::FeatureFolderLocation
to locate other FeatureManager design tree objects.

## Examples

- IModelDocExtension::ReorderFeature2 (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IModelDocExtension~ReorderFeature2)

## See Also

- `IModelDocExtension.ReorderFeature2`