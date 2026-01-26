---
type: method
interface: IMateLoadReference
member: Delete
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related: []
keywords:
  - delete
  - imateloadreference
  - mate
  - load
  - reference
  - boolean
---

# IMateLoadReference.Delete

Deletes this mate load reference.

## Signature

```csharp
System.Boolean Delete()
```
## Parameters

None.

## Return Value

True if the mate load reference is deleted, false if not

## Remarks

This method rebuilds the FeatureManager design tree, which can be a time-consuming operation if it is large. If using this method to delete many load references at once, use
IFeatureManager::EnableFeatureTree
before and after using IAssemblyDoc::InsertLoadReference to disable and then re-enable rebuilding the FeatureManager design tree.