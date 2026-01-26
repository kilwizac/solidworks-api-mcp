---
type: method
interface: IFeatureManager
member: InsertSubWeldFolder
returns: Feature
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IFeatureManager.InsertSubWeldFolder2
keywords:
  - folders
  - weldments
  - insertsubweldfolder
  - ifeaturemanager
  - feature
  - manager
  - insert
  - sub
  - weld
  - folder
---

# IFeatureManager.InsertSubWeldFolder

Creates a sub weld folder feature containing solid bodies that are pre-selected in the user interface.

## Signature

```csharp
Feature InsertSubWeldFolder()
```
## Parameters

None.

## Return Value

IFeature

## Remarks

The part must contain a weldment folder (Solid Bodies or Cut List) to create a sub-weldment folder. See
IFeatureManager::InsertWeldmentFeature
.

## See Also

- `IFeatureManager.InsertSubWeldFolder2`